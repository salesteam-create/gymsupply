"use client";

import { usePlanner } from "@/components/planner-provider";
import { GhostWord } from "@/components/ui/ghost-word";
import { SkewCta } from "@/components/ui/skew-cta";
import { getPlanTitle, getPlanZones, roomSizes, segments } from "@/lib/planner";

const included = ["✓ Befaring", "✓ Levering", "✓ Montering", "+ Serviceavtale"];

export function Planner() {
  const { segment, size, setSegment, setSize } = usePlanner();
  const zones = getPlanZones(segment, size);

  return (
    <section id="planlegger" className="relative overflow-hidden bg-ink">
      <GhostWord className="-right-2.5 top-20 text-[clamp(90px,11vw,170px)]">
        PLANLEGG
      </GhostWord>

      <div className="above-ghost mx-auto flex max-w-shell flex-wrap gap-10 px-gutter py-section lg:gap-14">
        <div className="flex min-w-0 flex-1 basis-[460px] flex-col gap-[22px]">
          <div className="section-seam pt-7">
            <p className="m-0 text-eyebrow font-bold uppercase tracking-[0.18em] text-brand-light">
              Planlegger
            </p>
            <h2 className="mt-4 text-h2 font-black italic uppercase">
              Planlegg gymmet ditt
            </h2>
          </div>
          <p className="m-0 max-w-[52ch] text-[15px] leading-[1.7] text-muted">
            Velg type og størrelse, så viser vi et eksempel på oppsett. Det endelige
            forslaget lager vi sammen etter befaring.
          </p>

          <h3 className="mt-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-light">
            Hvem er gymmet for?
          </h3>
          <div role="group" aria-label="Kundetype" className="flex flex-wrap gap-2.5">
            {segments.map((item) => {
              const isActive = item.id === segment;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSegment(item.id)}
                  aria-pressed={isActive}
                  className={`skew-tile min-h-[46px] cursor-pointer border-0 px-[22px] py-3 text-paper ${
                    isActive ? "bg-brand" : "bg-chip"
                  }`}
                >
                  <span className="skew-tile__label inline-block text-sm font-bold">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <h3 className="mt-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-light">
            Hvor stort er rommet?
          </h3>
          <div role="group" aria-label="Romstørrelse" className="flex flex-col gap-3">
            {roomSizes.map((item) => {
              const isActive = item.id === size;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSize(item.id)}
                  aria-pressed={isActive}
                  className={`flex min-h-16 cursor-pointer items-center gap-4 border-[1.5px] px-[22px] py-5 text-left text-paper transition-colors ${
                    isActive
                      ? "border-brand bg-ink-active"
                      : "border-line bg-ink-sunken hover:border-brand-light"
                  }`}
                >
                  <span
                    className={`flex flex-none items-center justify-center rounded-full border-2 size-[18px] ${
                      isActive ? "border-brand" : "border-line"
                    }`}
                  >
                    <span
                      className={`size-2 rounded-full ${
                        isActive ? "bg-brand-light" : "bg-transparent"
                      }`}
                    />
                  </span>
                  <span className="flex-1 text-base font-bold italic">{item.label}</span>
                  <span className="text-[15px] font-bold italic text-muted">{item.range}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Resulting example layout. */}
        <div className="flex min-w-0 flex-1 basis-[500px] flex-col gap-[22px] border-[1.5px] border-brand bg-ink-raised p-5 sm:p-9">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-dim">
              Eksempel på oppsett
            </h3>
            <p
              aria-live="polite"
              className="m-0 text-base font-extrabold italic text-brand-light"
            >
              {getPlanTitle(segment, size)}
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
            {zones.map((zone) => (
              <div
                key={zone.name}
                className="flex flex-col gap-2 border-t-4 border-brand bg-ink p-5"
              >
                <span className="text-base font-extrabold italic">{zone.name}</span>
                <span className="text-[13px] leading-[1.6] text-muted">{zone.desc}</span>
              </div>
            ))}
          </div>

          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0 text-[13px] font-semibold text-brand-pale">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <SkewCta href="#kontakt" className="self-start px-[26px] py-4 text-sm">
            Få forslag til dette oppsettet
          </SkewCta>
        </div>
      </div>
    </section>
  );
}
