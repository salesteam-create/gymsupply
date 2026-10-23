"use client";

import { usePlanner } from "@/components/planner-provider";
import { GhostWord } from "@/components/ui/ghost-word";
import { RackIllustration } from "@/components/ui/icons";
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
        background: "radial-gradient(ellipse at 70% 30%, #1E1640 0%, #0B0B0F 62%)",
      }}
    >
      <GhostWord className="-left-5 top-10 text-[clamp(120px,17vw,260px)]">GYM</GhostWord>
      <GhostWord className="-right-10 top-[300px] text-[clamp(120px,17vw,260px)]">
        SUPPLY
      </GhostWord>

      <div className="relative mx-auto flex max-w-shell flex-wrap items-center gap-10 px-5 pb-12 pt-14 sm:px-8 sm:pb-[72px] sm:pt-24">
        <div className="flex min-w-0 flex-1 basis-[600px] flex-col gap-[26px]">
          <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-light">
            <span className="skew-rule h-[5px] w-[34px]" />
            Stavanger · siden 2012
          </p>

          <h1 className="m-0 text-[clamp(38px,7.2vw,108px)] font-black italic uppercase leading-[1.02] tracking-[-0.01em] sm:leading-[0.98]">
            Vi bygger rom folk vil <span className="text-brand-bright">trene i</span>
          </h1>

          <p className="m-0 max-w-[540px] text-[17px] leading-[1.7] text-muted">
            Utstyr, montering og rådgivning for bedrifter, offentlig sektor og private
            hjemmegym. Fra første befaring til siste skrue, med ett team hele veien.
          </p>

          <div className="flex flex-wrap items-center gap-[18px]">
            <SkewCta href="#kontakt" className="px-[30px] py-[18px] text-[15px]" arrowSize={16}>
              {active.cta}
            </SkewCta>
            <a
              href="#prosjekter"
              className="inline-flex min-h-11 items-center border-b-2 border-brand text-[15px] font-bold text-paper no-underline"
            >
              Se prosjekter
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 basis-[380px] justify-center">
          <RackIllustration className="w-full max-w-[440px]" />
        </div>
      </div>

      {/* Audience picker. Shares its choice with the planner section. */}
      <div className="relative mx-auto max-w-shell px-5 pb-12 sm:px-8 lg:px-14 lg:pb-16">
        <p className="m-0 mb-[18px] min-h-[26px] text-[15px] text-muted">{active.line}</p>

        <div
          role="group"
          aria-label="Velg kundetype"
          className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px]"
        >
          {segments.map((item) => {
            const isActive = item.id === segment;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSegment(item.id)}
                aria-pressed={isActive}
                className={`skew-tile flex min-h-[150px] cursor-pointer items-center justify-center border-0 text-paper ${
                  isActive
                    ? "bg-brand shadow-[0_20px_40px_rgba(90,46,229,0.45)]"
                    : "bg-tile shadow-none"
                }`}
              >
                <span className="skew-tile__label flex flex-col items-center gap-2">
                  <span className="text-[28px] font-extrabold italic">{item.label}</span>
                  <span className="text-[13px] font-medium text-brand-pale">{item.sub}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
