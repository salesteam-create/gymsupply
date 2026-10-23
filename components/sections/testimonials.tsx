import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/lib/testimonials";

/**
 * Customer quotes Gym Supply publishes on its own site. Renders only when
 * lib/testimonials.ts holds entries, so it cannot show an empty frame.
 *
 * No portraits: the images beside these quotes on the current site are theme
 * placeholders rather than photographs of the customers.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-charcoal py-section text-paper">
      <div className="mx-auto max-w-shell px-gutter">
        <div className="max-w-[20ch]">
          <p className="eyebrow m-0 text-lime">Referanser</p>
          <h2 className="mt-5 text-h2 font-extrabold">Hva kundene sier</h2>
        </div>

        <Reveal
          stagger
          as="ul"
          className="m-0 mt-12 grid list-none gap-x-7 gap-y-10 p-0 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <li key={item.attribution} className="border-t border-charcoal-line pt-7">
              <svg
                viewBox="0 0 56 44"
                className="h-7 w-9 text-lime"
                aria-hidden="true"
              >
                <path
                  d="M0 44V26C0 10 8 2 22 0l2 7c-8 2-12 7-12 15h10v22H0zm32 0V26c0-16 8-24 22-26l2 7c-8 2-12 7-12 15h10v22H32z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="m-0 mt-5 text-[1.0625rem] leading-[1.7] text-paper/90">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-mist">
                {item.attribution}
              </figcaption>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
