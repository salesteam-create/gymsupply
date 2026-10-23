import { Reveal } from "@/components/motion/reveal";
import { Media } from "@/components/ui/media";
import { planningFactors } from "@/lib/content";

/**
 * Section 04. Asymmetric: one tall image against a structured list, so it
 * reads differently from the card grid above it.
 */
export function Challenge() {
  return (
    <section className="bg-paper-raised py-section text-charcoal">
      <div className="mx-auto grid max-w-shell gap-12 px-gutter lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Media
            label="Rom under planlegging"
            className="aspect-[4/5] w-full"
          />
        </div>

        <div>
          <p className="eyebrow m-0 text-stone">Utgangspunktet</p>
          <h2 className="mt-5 max-w-[18ch] text-h2 font-extrabold">
            Et godt treningsrom starter med de riktige valgene
          </h2>
          <p className="mt-5 max-w-[52ch] text-lead text-stone">
            Utstyrslisten er sjelden det vanskelige. Det som avgjør om rommet blir brukt,
            er hvor godt valgene passer plassen og menneskene som skal trene der.
          </p>

          <Reveal stagger as="ul" className="m-0 mt-11 grid list-none gap-x-10 gap-y-8 p-0 sm:grid-cols-2">
            {planningFactors.map((factor) => (
              <li key={factor.title} className="border-t border-paper-line pt-5">
                <h3 className="m-0 text-[1.0625rem] font-bold">{factor.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.7] text-stone">
                  {factor.body}
                </p>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
