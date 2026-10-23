import { GhostWord } from "@/components/ui/ghost-word";
import { QuoteMarkIcon } from "@/components/ui/icons";
import { CustomerMonogram } from "@/components/ui/illustrations";

/*
 * Placeholder structure. The quote, the name and any rating must come from a
 * real customer who has agreed to be named before this goes in front of
 * visitors. Do not fill it with example copy.
 */
export function Testimonial() {
  return (
    <section id="kunder" className="relative overflow-hidden bg-ink">
      <GhostWord className="-left-4 bottom-0 text-[clamp(90px,11vw,170px)]">
        KUNDER
      </GhostWord>

      <div className="above-ghost mx-auto max-w-shell px-gutter py-section">
        <div className="section-seam max-w-[46ch] pt-7">
          <p className="m-0 text-eyebrow font-bold uppercase tracking-[0.18em] text-brand-light">
            Referanser
          </p>
          <h2 className="mt-4 text-h2 font-black italic uppercase">Hva kundene sier</h2>
        </div>

        <figure className="m-0 mt-12 grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center lg:gap-16">
          <div className="relative aspect-square w-full max-w-[320px] bg-brand">
            <div className="absolute -bottom-4 -right-4 left-4 top-4 border-2 border-brand" />
            <div className="absolute inset-0 overflow-hidden">
              <CustomerMonogram initials="GS" />
            </div>
          </div>

          <div className="min-w-0">
            <QuoteMarkIcon className="text-brand" />
            <blockquote className="m-0 mt-5 text-[clamp(1.125rem,1.9vw,1.625rem)] font-medium leading-[1.55] text-muted">
              [KUNDESITAT — hentes fra en kunde som har godkjent å bli sitert]
            </blockquote>
            <figcaption className="mt-6 text-[15px] font-extrabold italic uppercase tracking-[0.04em]">
              [NAVN, ROLLE OG VIRKSOMHET]
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
