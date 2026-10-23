"use client";

import { Reveal } from "@/components/motion/reveal";
import { usePlanner } from "@/components/planner-provider";
import { GhostWord } from "@/components/ui/ghost-word";
import { HeroScene } from "@/components/ui/illustrations";
import { SkewCta } from "@/components/ui/skew-cta";
import { getSegment, segments } from "@/lib/planner";

export function Hero() {
  const { segment, setSegment } = usePlanner();
  const active = getSegment(segment);

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 72% 24%, #1E1640 0%, #0B0B0F 64%)",
      }}
    >
      {/* Watermark sits low and right, clear of the headline. */}
      <GhostWord className="bottom-0 right-[-4%] text-[clamp(110px,15vw,230px)]">
        SUPPLY
      </GhostWord>

      <div className="above-ghost mx-auto grid max-w-shell gap-10 px-gutter pb-section pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pt-20">
        <Reveal stagger className="flex min-w-0 flex-col gap-7">
          <p className="flex items-center gap-3 text-eyebrow font-bold uppercase tracking-[0.18em] text-brand-light">
            <span className="skew-rule h-[5px] w-[34px]" />
            Stavanger · siden 2012
          </p>

          <h1 className="m-0 max-w-[13ch] text-display font-black italic uppercase tracking-[-0.015em]">
            Vi bygger treningsrom som{" "}
            <span className="text-brand-bright">fungerer i praksis</span>
          </h1>

          <p className="m-0 max-w-[52ch] text-lead text-muted">
            Vi hjelper bedrifter, offentlig sektor og private med å finne riktig utstyr
            for rommet, brukerne og bruken. Levering og montering gjennom samme team.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <SkewCta href="#kontakt" className="px-8 py-[18px] text-[15px]" arrowSize={16}>
              {active.cta}
            </SkewCta>
            <a
              href="#prosjekter"
              className="inline-flex min-h-11 items-center border-b-2 border-brand text-[15px] font-bold text-paper no-underline transition-colors hover:border-brand-light hover:text-brand-light"
            >
              Se våre prosjekter
            </a>
          </div>
        </Reveal>

        {/* Framed so the artwork reads as a composed panel, not loose line art. */}
        <div className="relative hidden aspect-[13/14] w-full overflow-hidden border border-line/70 md:block">
          <HeroScene />
        </div>
      </div>

      {/* Segment picker. Sets the same value the planner reads. */}
      <div className="above-ghost mx-auto max-w-shell px-gutter pb-section">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-line/60 pt-7">
          <h2 className="m-0 text-eyebrow font-bold uppercase tracking-[0.18em] text-brand-light">
            Hvem skal bruke rommet?
          </h2>
          <p className="m-0 min-h-6 max-w-[62ch] text-[15px] text-muted">{active.line}</p>
        </div>

        <div
          role="group"
          aria-label="Velg kundetype"
          className="mt-6 grid gap-4 sm:grid-cols-3"
        >
          {segments.map((item) => {
            const isActive = item.id === segment;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSegment(item.id)}
                aria-pressed={isActive}
                className={`skew-tile flex min-h-[132px] cursor-pointer items-center justify-center border px-5 text-paper ${
                  isActive
                    ? "border-brand bg-brand shadow-[0_18px_38px_rgba(90,46,229,0.38)]"
                    : "border-line/70 bg-tile/50 hover:border-brand-light"
                }`}
              >
                <span className="skew-tile__label flex flex-col items-center gap-1.5 text-center">
                  <span className="text-[26px] font-extrabold italic leading-none">
                    {item.label}
                  </span>
                  <span
                    className={`text-[13px] font-medium ${
                      isActive ? "text-brand-pale" : "text-dim"
                    }`}
                  >
                    {item.sub}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
