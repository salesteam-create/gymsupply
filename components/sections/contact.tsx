"use client";

import { useState, type FormEvent } from "react";

import { usePlanner } from "@/components/planner-provider";
import { GhostWord } from "@/components/ui/ghost-word";
import { SkewCta } from "@/components/ui/skew-cta";
import { getRoomSize } from "@/lib/planner";

/**
 * Where enquiries are posted. Set NEXT_PUBLIC_FORM_ENDPOINT to a URL that
 * accepts a JSON POST (a form service or your own CRM endpoint). Until it is
 * set the form does not claim to have sent anything — see README.
 */
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "submitting" | "sent" | "error" | "unconfigured";

const fieldClasses =
  "border-0 border-b-2 border-line bg-ink px-4 py-[14px] text-[15px] text-paper min-h-12 box-border focus:border-brand-light";

const projectTypes = [
  "Bedriftsgym",
  "Treningssenter",
  "Offentlig sektor",
  "Hjemmegym",
  "Serviceavtale",
];

/** Planner segments use short labels; the form uses the fuller wording. */
const segmentToProjectType: Record<string, string> = {
  bedrift: "Bedriftsgym",
  offentlig: "Offentlig sektor",
  hjem: "Hjemmegym",
};

export function Contact() {
  const { segment, size } = usePlanner();
  const [status, setStatus] = useState<Status>("idle");

  // Whatever the visitor picked in the planner is carried over, so they do
  // not answer the same questions twice.
  const segmentLabel = segmentToProjectType[segment] ?? projectTypes[0];
  const roomLabel = `${getRoomSize(size).label} (${getRoomSize(size).range})`;

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
    <section id="kontakt" className="relative overflow-hidden bg-ink">
      <GhostWord className="-right-4 bottom-0 text-[clamp(90px,11vw,170px)]">
        KONTAKT
      </GhostWord>

      <div className="above-ghost mx-auto flex max-w-shell flex-wrap gap-10 px-gutter py-section lg:gap-14">
        <div className="flex min-w-0 flex-1 basis-[420px] flex-col gap-6">
          <div className="section-seam pt-7">
            <p className="m-0 text-eyebrow font-bold uppercase tracking-[0.18em] text-brand-light">
              Kontakt
            </p>
            <h2 className="mt-4 text-h2 font-black italic uppercase">
              Har du et rom som skal bli et <span className="text-brand-bright">treningsrom?</span>
            </h2>
          </div>
          <p className="m-0 max-w-[46ch] text-lead text-muted">
            Fortell oss om plassen, behovene og planene dine, så tar vi kontakt for å
            avtale en befaring.
          </p>
          <div className="flex flex-col gap-1 font-semibold">
            <a
              href="#kontakt"
              className="inline-flex min-h-11 items-center text-paper hover:text-brand-light"
            >
              [TELEFON]
            </a>
            <a
              href="#kontakt"
              className="inline-flex min-h-11 items-center text-paper hover:text-brand-light"
            >
              [E-POST]
            </a>
            <p className="m-0 mt-3 text-[13px] font-normal leading-[1.6] text-dim">
              Forusparken 32, c/o CrossFit Centrum, 4031 Stavanger
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1 basis-[520px] border border-line/70 bg-ink-raised p-5 sm:p-9">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[14px]">
              <label className="flex flex-col gap-2 text-[13px] font-semibold">
                Navn <span className="text-brand-light">*</span>
                <input
                  type="text"
                  name="navn"
                  required
                  autoComplete="name"
                  placeholder="Ola Nordmann"
                  className={fieldClasses}
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-semibold">
                Telefon eller e-post <span className="text-brand-light">*</span>
                <input
                  type="text"
                  name="kontakt"
                  required
                  autoComplete="email"
                  placeholder="900 00 000"
                  className={fieldClasses}
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-[13px] font-semibold">
              Virksomhet
              <input
                type="text"
                name="virksomhet"
                autoComplete="organization"
                placeholder="Valgfritt for hjemmegym"
                className={fieldClasses}
              />
            </label>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[14px]">
              <label className="flex flex-col gap-2 text-[13px] font-semibold">
                Type prosjekt
                <select
                  name="type"
                  defaultValue={segmentLabel}
                  key={segmentLabel}
                  className={fieldClasses}
                >
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-semibold">
                Omtrentlig størrelse
                <input
                  type="text"
                  name="storrelse"
                  defaultValue={roomLabel}
                  key={roomLabel}
                  className={fieldClasses}
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-[13px] font-semibold">
              Fortell oss om rommet
              <textarea
                name="melding"
                rows={4}
                placeholder="Antall brukere, takhøyde, gulv, ønsker…"
                className={`${fieldClasses} resize-y`}
              />
            </label>

            <SkewCta
              type="submit"
              withArrow={false}
              disabled={status === "submitting"}
              className="min-h-[52px] self-start px-[30px] py-4 text-[15px] disabled:opacity-60"
            >
              {status === "submitting" ? "Sender…" : "Send forespørsel"}
            </SkewCta>

            {/* Honest states. Nothing here claims an enquiry was delivered
                unless the endpoint actually accepted it. */}
            <p aria-live="polite" className="m-0 text-sm leading-[1.6]">
              {status === "sent" ? (
                <span className="text-brand-light">
                  Takk, vi har mottatt forespørselen din og tar kontakt.
                </span>
              ) : null}
              {status === "error" ? (
                <span className="text-brand-pale">
                  Noe gikk galt under sendingen. Prøv igjen, eller ta kontakt på telefon
                  eller e-post.
                </span>
              ) : null}
              {status === "unconfigured" ? (
                <span className="text-brand-pale">
                  Skjemaet er ikke koblet til et mottakssystem ennå, så meldingen er ikke
                  sendt. Ta kontakt på telefon eller e-post i mellomtiden.
                </span>
              ) : null}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
