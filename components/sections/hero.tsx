import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";

export function Hero() {
  return (
    <section className="relative isolate bg-charcoal text-paper">
      {/* The hero photograph. Replace by setting src; see docs/images.md. */}
      <Media
        label="Hovedbilde — treningsrom"
        priority
        className="absolute inset-0 h-full w-full"
      />

      {/* Keeps the headline legible over any photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(32,33,31,0.96) 0%, rgba(32,33,31,0.86) 34%, rgba(32,33,31,0.42) 62%, rgba(32,33,31,0.22) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[min(84vh,46rem)] max-w-shell flex-col justify-center px-gutter py-section">
        <div className="max-w-[46rem]">
          <p className="eyebrow m-0 text-lime">Treningsløsninger for en sterkere hverdag</p>

          <h1 className="mt-7 text-display font-extrabold">
            Vi skaper <span className="text-lime">treningsmiljøer</span> som gjør en
            forskjell
          </h1>

          <p className="mt-6 max-w-[48ch] text-lead text-paper/80">
            Gym Supply leverer komplette treningsløsninger til bedrifter, offentlige
            aktører, treningssentre og privatpersoner, fra planlegging til ferdig
            installasjon.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <Button href="/kontakt">Book befaring</Button>
            <Button href="/prosjekter" variant="outline">
              Se våre prosjekter
            </Button>
          </div>
        </div>

        {/* Verified location. Service area is the Stavanger region; no
            nationwide claim is made without confirmation. */}
        <div className="mt-14 self-start border-l-2 border-lime pl-4 lg:absolute lg:bottom-[calc(var(--spacing-section)*0.6)] lg:right-[var(--spacing-gutter)] lg:mt-0">
          <p className="m-0 text-eyebrow font-semibold uppercase tracking-[0.18em] text-lime">
            Stavanger, Norge
          </p>
          <p className="m-0 mt-1.5 max-w-[26ch] text-sm leading-[1.6] text-paper/70">
            Vi leverer og monterer treningsmiljøer i Stavanger og nærområdene.
          </p>
        </div>
      </div>
    </section>
  );
}
