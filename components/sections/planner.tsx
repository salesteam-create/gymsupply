"use client";

import { usePlanner } from "@/components/planner-provider";
import { Button } from "@/components/ui/button";
import { getPlanTitle, getPlanZones, roomSizes, segments } from "@/lib/planner";

const included = ["Befaring", "Levering", "Montering", "Serviceavtale"];

export function Planner() {
  const { segment, size, setSegment, setSize } = usePlanner();
  const zones = getPlanZones(segment, size);

  return (
    <section id="planlegger" className="bg-paper py-section text-charcoal">
      <div className="mx-auto grid max-w-shell gap-12 px-gutter lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow m-0 text-stone">Planlegger</p>
          <h2 className="mt-5 max-w-[14ch] text-h2 font-extrabold">
            Planlegg treningsrommet
          </h2>
          <p className="mt-5 max-w-[46ch] text-[0.9375rem] leading-[1.7] text-stone">
            Velg type og størrelse, så viser vi et eksempel på oppsett. Det endelige
            forslaget lager vi sammen etter befaring.
          </p>

          <h3 className="mt-10 text-eyebrow font-semibold uppercase tracking-[0.18em] text-stone">
            Hvem er rommet for?
          </h3>
          <div role="group" aria-label="Kundetype" className="mt-4 flex flex-wrap gap-2">
            {segments.map((item) => {
              const active = item.id === segment;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSegment(item.id)}
                  aria-pressed={active}
                  className={`min-h-11 cursor-pointer border px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "border-charcoal bg-charcoal text-paper"
                      : "border-paper-line bg-transparent text-charcoal hover:border-charcoal"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <h3 className="mt-8 text-eyebrow font-semibold uppercase tracking-[0.18em] text-stone">
            Hvor stort er rommet?
          </h3>
          <div
            role="group"
            aria-label="Romstørrelse"
            className="mt-4 flex flex-col gap-2"
          >
            {roomSizes.map((item) => {
              const active = item.id === size;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSize(item.id)}
                  aria-pressed={active}
                  className={`flex min-h-[3.5rem] cursor-pointer items-center gap-4 border px-5 text-left transition-colors ${
                    active
                      ? "border-charcoal bg-paper-raised"
                      : "border-paper-line hover:border-stone"
                  }`}
                >
                  <span
                    className={`flex size-[1.125rem] flex-none items-center justify-center rounded-full border-2 ${
                      active ? "border-charcoal" : "border-paper-line"
                    }`}
                  >
                    <span
                      className={`size-2 rounded-full ${active ? "bg-lime-deep" : "bg-transparent"}`}
                    />
                  </span>
                  <span className="flex-1 text-[0.9375rem] font-semibold">
                    {item.label}
                  </span>
                  <span className="text-sm text-stone">{item.range}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-charcoal p-7 text-paper sm:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-charcoal-line pb-5">
            <h3 className="m-0 text-eyebrow font-semibold uppercase tracking-[0.18em] text-mist">
              Eksempel på oppsett
            </h3>
            <p aria-live="polite" className="m-0 text-[0.9375rem] font-semibold text-lime">
              {getPlanTitle(segment, size)}
            </p>
          </div>

          <div
            key={getPlanTitle(segment, size)}
            className="plan-swap mt-6 grid gap-x-7 gap-y-5 sm:grid-cols-2"
          >
            {zones.map((zone) => (
              <div key={zone.name} className="border-t border-charcoal-line pt-4">
                <p className="m-0 text-[0.9375rem] font-semibold">{zone.name}</p>
                <p className="m-0 mt-1.5 text-[0.8125rem] leading-[1.6] text-mist">
                  {zone.desc}
                </p>
              </div>
            ))}
          </div>

          <ul className="m-0 mt-8 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[0.8125rem] text-mist">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-lime">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* The selection travels in the URL, since the form is now a
              separate page and context does not survive navigation. */}
          <Button href={`/kontakt?segment=${segment}&storrelse=${size}`} className="mt-8">
            Få forslag til dette oppsettet
          </Button>
        </div>
      </div>
    </section>
  );
}
