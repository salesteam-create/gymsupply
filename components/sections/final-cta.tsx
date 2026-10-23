import { Button } from "@/components/ui/button";
import { business, telHref } from "@/lib/site";

/**
 * Closing conversion section. Dark and high contrast so the page does not end
 * on a second light slab after the FAQ, and so the lime CTA carries the most
 * weight on the page.
 */
export function FinalCta() {
  return (
    <section className="bg-charcoal py-section text-paper">
      <div className="mx-auto max-w-shell px-gutter">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="eyebrow m-0 text-lime">Neste steg</p>
            <h2 className="mt-5 max-w-[18ch] text-h2 font-extrabold">
              Har du et treningsrom i <span className="text-lime">tankene?</span>
            </h2>
            <p className="mt-6 max-w-[54ch] text-lead text-paper/80">
              Fortell oss om plassen, behovene og planene dine. Vi hjelper deg med å
              finne en løsning som passer.
            </p>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <Button href="/kontakt">Book befaring</Button>
              <Button href="/kontakt" variant="outline" arrow={false}>
                Kontakt oss
              </Button>
            </div>
          </div>

          {/* What happens next, using only steps the company describes. */}
          <div className="border-t border-charcoal-line pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
            <h3 className="m-0 text-eyebrow font-semibold uppercase tracking-[0.18em] text-mist">
              Slik går vi videre
            </h3>
            <ol className="m-0 mt-5 flex list-none flex-col gap-4 p-0">
              {[
                "Vi tar kontakt for å forstå rommet og behovet.",
                "Vi avtaler en befaring på stedet.",
                "Du får et forslag til oppsett og utstyr.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4 text-[0.9375rem] leading-[1.65] text-mist">
                  <span className="font-bold tabular-nums text-lime">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            {business.phone || business.email ? (
              <div className="mt-8 flex flex-col border-t border-charcoal-line pt-6">
                {business.phone ? (
                  <a
                    href={telHref(business.phone)}
                    className="flex min-h-11 items-center font-semibold text-paper no-underline transition-colors hover:text-lime"
                  >
                    {business.phone}
                  </a>
                ) : null}
                {business.email ? (
                  <a
                    href={`mailto:${business.email}`}
                    className="flex min-h-11 items-center font-semibold text-paper no-underline transition-colors hover:text-lime"
                  >
                    {business.email}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
