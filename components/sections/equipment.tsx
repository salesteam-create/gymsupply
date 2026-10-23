import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { equipmentCategories } from "@/lib/content";

/**
 * Section 08. The first category is given a wide photographic tile and the
 * rest are text-led, so this reads as an editorial grid rather than another
 * row of equal cards.
 *
 * This is not a catalogue: Gym Supply does not publish products, prices or
 * stock, so every route here leads to advice rather than to a basket.
 */
export function Equipment() {
  const [lead, ...rest] = equipmentCategories;

  return (
    <section className="bg-paper py-section text-charcoal">
      <div className="mx-auto max-w-shell px-gutter">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow m-0 text-stone">Utstyr</p>
            <h2 className="mt-5 max-w-[20ch] text-h2 font-extrabold">
              Vi hjelper deg å velge riktig utstyr
            </h2>
          </div>
          <p className="max-w-[44ch] text-[0.9375rem] leading-[1.7] text-stone lg:text-right">
            Hva som passer avhenger av plass, bruk og budsjett. Vi setter sammen utvalget
            etter rommet ditt framfor å selge en ferdig pakke.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="relative lg:col-span-2">
            <Media label={lead.title} className="aspect-[16/9] w-full lg:aspect-[2/1]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-7">
              <h3 className="m-0 text-h3 font-bold text-white">{lead.title}</h3>
              <p className="mt-1.5 max-w-[40ch] text-[0.875rem] leading-[1.6] text-white/75">
                {lead.body}
              </p>
            </div>
          </div>

          <Reveal
            stagger
            as="ul"
            className="m-0 grid list-none grid-cols-1 gap-x-7 gap-y-6 p-0 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-5"
          >
            {rest.slice(0, 3).map((category) => (
              <li key={category.title} className="border-t border-paper-line pt-4">
                <h3 className="m-0 text-[1rem] font-bold">{category.title}</h3>
                <p className="mt-1.5 text-[0.875rem] leading-[1.65] text-stone">
                  {category.body}
                </p>
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal
          stagger
          as="ul"
          className="m-0 mt-5 grid list-none gap-x-7 gap-y-6 p-0 sm:grid-cols-3"
        >
          {rest.slice(3).map((category) => (
            <li key={category.title} className="border-t border-paper-line pt-4">
              <h3 className="m-0 text-[1rem] font-bold">{category.title}</h3>
              <p className="mt-1.5 text-[0.875rem] leading-[1.65] text-stone">
                {category.body}
              </p>
            </li>
          ))}
        </Reveal>

        <div className="mt-11">
          <Button href="/kontakt">Få råd om utstyr til ditt rom</Button>
        </div>
      </div>
    </section>
  );
}
