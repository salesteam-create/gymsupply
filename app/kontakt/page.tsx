import { Suspense } from "react";
import type { Metadata } from "next";

import { EnquiryForm } from "@/components/sections/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { business, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt og befaring",
  description:
    "Fortell oss om rommet og behovet, så tar vi kontakt for å avtale en befaring. Gym Supply holder til på Forus i Stavanger.",
  alternates: { canonical: "/kontakt" },
};

const nextSteps = [
  "Vi tar kontakt for å forstå rommet og behovet.",
  "Vi avtaler en befaring på stedet.",
  "Du får et forslag til oppsett og utstyr.",
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Book en befaring"
        lead="Fortell oss om plassen, behovene og planene dine. Vi tar kontakt for å avtale en befaring og lager et forslag sammen med dere."
      />

      <section className="bg-paper py-section">
        <div className="mx-auto grid max-w-shell gap-12 px-gutter lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="m-0 text-h3 font-bold">Slik går vi videre</h2>
            <ol className="m-0 mt-5 flex list-none flex-col gap-4 p-0">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4 text-[0.9375rem] leading-[1.65] text-stone">
                  <span className="font-bold text-charcoal tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-paper-line pt-6">
              <h2 className="m-0 text-h3 font-bold">{business.name}</h2>
              <address className="mt-3 text-[0.9375rem] not-italic leading-[1.75] text-stone">
                {business.street}
                <br />
                {business.postalCode} {business.city}
              </address>
              <div className="mt-1 flex flex-col">
                {business.phone ? (
                  <a
                    href={telHref(business.phone)}
                    className="flex min-h-11 items-center font-semibold text-charcoal no-underline hover:text-lime-deep"
                  >
                    {business.phone}
                  </a>
                ) : null}
                {business.email ? (
                  <a
                    href={`mailto:${business.email}`}
                    className="flex min-h-11 items-center font-semibold text-charcoal no-underline hover:text-lime-deep"
                  >
                    {business.email}
                  </a>
                ) : null}
              </div>
              <p className="m-0 mt-2 text-sm text-stone">Org.nr. 912 979 113</p>
            </div>
          </div>

          <div className="bg-paper-raised p-7 sm:p-10">
            <Suspense fallback={<p className="m-0 text-stone">Laster skjema…</p>}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
