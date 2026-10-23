"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getRoomSize, roomSizes, segments, type SegmentId, type SizeId } from "@/lib/planner";

/**
 * Where enquiries are posted. Set NEXT_PUBLIC_FORM_ENDPOINT to a URL that
 * accepts a JSON POST. Until it is set the form does not claim to have sent
 * anything — see README.
 */
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "submitting" | "sent" | "error" | "unconfigured";

const field =
  "w-full border border-paper-line bg-white px-4 py-3 text-[0.9375rem] text-charcoal min-h-12 box-border transition-colors focus:border-charcoal";

const projectTypes = [
  "Bedriftsgym",
  "Treningssenter",
  "Offentlig sektor",
  "Hjemmegym",
  "Serviceavtale",
];

const segmentToProjectType: Record<string, string> = {
  bedrift: "Bedriftsgym",
  offentlig: "Offentlig sektor",
  hjem: "Hjemmegym",
};

export function EnquiryForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");

  // Carried over from the planner, so the same question is not asked twice.
  const rawSegment = params.get("segment");
  const rawSize = params.get("storrelse");
  const segment = segments.some((s) => s.id === rawSegment)
    ? (rawSegment as SegmentId)
    : null;
  const size = roomSizes.some((s) => s.id === rawSize) ? (rawSize as SizeId) : null;

  const projectType = segment ? segmentToProjectType[segment] : projectTypes[0];
  const roomLabel = size
    ? `${getRoomSize(size).label} (${getRoomSize(size).range})`
    : "";

  // A private buyer has no organisation, so that field is not shown to them.
  const isOrganisation = segment !== "hjem";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(response.ok ? "sent" : "error");
      if (response.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <p className="m-0 text-[0.8125rem] text-stone">
        Felt merket <span className="font-semibold text-charcoal">*</span> må fylles ut.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-[0.8125rem] font-semibold">
          Navn *
          <input type="text" name="navn" required autoComplete="name" className={field} />
        </label>
        <label className="flex flex-col gap-2 text-[0.8125rem] font-semibold">
          Telefon eller e-post *
          <input type="text" name="kontakt" required autoComplete="tel" className={field} />
        </label>
      </div>

      {isOrganisation ? (
        <label className="flex flex-col gap-2 text-[0.8125rem] font-semibold">
          Virksomhet *
          <input
            type="text"
            name="virksomhet"
            required
            autoComplete="organization"
            placeholder="Bedrift, skole eller kommune"
            className={field}
          />
        </label>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-[0.8125rem] font-semibold">
          Type prosjekt
          <select name="type" defaultValue={projectType} className={field}>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-[0.8125rem] font-semibold">
          Omtrentlig størrelse
          <input
            type="text"
            name="storrelse"
            defaultValue={roomLabel}
            placeholder="F.eks. 40 m²"
            className={field}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-[0.8125rem] font-semibold">
        Hvor er prosjektet nå?
        <select name="fase" className={field}>
          <option>Nytt treningsrom</option>
          <option>Oppgradering av eksisterende rom</option>
          <option>Vi undersøker mulighetene</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-[0.8125rem] font-semibold">
        Fortell oss om rommet
        <textarea
          name="melding"
          rows={5}
          placeholder="Antall brukere, takhøyde, gulv, ønsker…"
          className={`${field} resize-y`}
        />
      </label>

      <Button type="submit" arrow={false} disabled={status === "submitting"} className="self-start disabled:opacity-60">
        {status === "submitting" ? "Sender…" : "Send forespørsel"}
      </Button>

      {/* Nothing here claims an enquiry was delivered unless the endpoint
          actually accepted it. */}
      <p aria-live="polite" className="m-0 text-sm leading-[1.6]">
        {status === "sent" ? (
          <span className="font-semibold text-charcoal">
            Takk, vi har mottatt forespørselen din og tar kontakt.
          </span>
        ) : null}
        {status === "error" ? (
          <span className="text-stone">
            Noe gikk galt under sendingen. Prøv igjen litt senere.
          </span>
        ) : null}
        {status === "unconfigured" ? (
          <span className="text-stone">
            Skjemaet er ikke koblet til et mottakssystem ennå, så meldingen er ikke
            sendt.
          </span>
        ) : null}
      </p>
    </form>
  );
}
