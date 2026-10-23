import { Reveal } from "@/components/motion/reveal";
import { Media } from "@/components/ui/media";
import { valueThemes } from "@/lib/content";

/**
 * Section 09. Large editorial type with numbered statements against a single
 * image, deliberately unlike the segment cards and the planning list.
 */
export function ValueThemes() {
  return (
    <section className="bg-charcoal py-section text-paper">
      <div className="mx-auto max-w-shell px-gutter">
        <div className="max-w-[22ch]">
          <p className="eyebrow m-0 text-lime">Hvorfor det betyr noe</p>
          <h2 className="mt-5 text-h2 font-extrabold">
            Mer enn utstyr. En løsning som <span className="text-lime">fungerer</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
          <Reveal stagger as="ol" className="m-0 list-none p-0">
            {valueThemes.map((theme) => (
              <li
                key={theme.number}
                className="grid gap-x-8 gap-y-3 border-t border-charcoal-line py-8 sm:grid-cols-[auto_1fr]"
              >
                <span className="text-sm font-bold tabular-nums text-lime">
                  {theme.number}
                </span>
                <div>
                  <h3 className="m-0 text-[1.375rem] font-bold tracking-[-0.02em]">
                    {theme.title}
                  </h3>
                  <p className="mt-3 max-w-[56ch] text-[0.9375rem] leading-[1.75] text-mist">
                    {theme.body}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>

          <Media label="Detalj fra et ferdig rom" className="aspect-[3/4] w-full" />
        </div>
      </div>
    </section>
  );
}
