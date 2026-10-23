import { faqs } from "@/lib/content";

/**
 * Section 13.
 *
 * Built on native details/summary: keyboard operable, announced correctly and
 * fully usable with no JavaScript, which a custom button-and-region accordion
 * only matches with extra code. Every answer comes from what Gym Supply
 * publishes; questions we cannot answer from a verified source are left out.
 */
export function Faq() {
  return (
    <section id="faq" className="bg-paper-raised py-section text-charcoal">
      <div className="mx-auto grid max-w-shell gap-12 px-gutter lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow m-0 text-stone">Spørsmål</p>
          <h2 className="mt-5 max-w-[16ch] text-h2 font-extrabold">
            Det kundene lurer på
          </h2>
          <p className="mt-5 max-w-[40ch] text-[0.9375rem] leading-[1.7] text-stone">
            Finner du ikke svaret, ta kontakt. Vi svarer gjerne på det som gjelder ditt
            rom spesielt.
          </p>
        </div>

        <ul className="m-0 list-none p-0">
          {faqs.map((item) => (
            <li key={item.q} className="border-t border-paper-line last:border-b">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.0625rem] font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="mt-1 flex size-6 flex-none items-center justify-center"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform duration-200 group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="m-0 max-w-[62ch] pb-7 text-[0.9375rem] leading-[1.75] text-stone">
                  {item.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
