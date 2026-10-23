import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Media } from "@/components/ui/media";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Gym Supply holder til på Forus i Stavanger og leverer treningsutstyr, planlegging og montering til bedrifter, treningssentre, offentlig sektor og private.",
  alternates: { canonical: "/om-oss" },
};

/* Only what the public company register and the company's own site support. */
const facts = [
  { label: "Etablert", value: business.foundingYear },
  { label: "Holder til", value: `Forus, ${business.city}` },
  { label: "Org.nr.", value: "912 979 113" },
];

const values = [
  {
    title: "Vi starter med rommet",
    body: "Takhøyde, gulv, adkomst og antall brukere avgjør hva som faktisk fungerer. Derfor begynner hvert prosjekt med en befaring, ikke med en produktliste.",
  },
  {
    title: "Én leverandør hele veien",
    body: "Rådgivning, utstyr, levering og montering gjennom samme team. Dere trenger ikke koordinere flere aktører eller være mellomledd.",
  },
  {
    title: "Vi blir med videre",
    body: "Vi tilbyr serviceavtale for oppfølging av utstyret etter at rommet er tatt i bruk, så det holder seg trygt og i drift.",
  },
];

export default function OmOssPage() {
  return (
    <>
      <PageHero
        eyebrow="Om Gym Supply"
        title="Erfaring, kunnskap og ekte engasjement"
        lead={`Siden ${business.foundingYear} har vi hjulpet bedrifter, treningssentre, offentlige aktører og privatpersoner i Stavanger og nærområdene med å skape bedre treningsmiljøer.`}
        imageLabel="Teamet"
      />

      <section className="bg-paper py-section">
        <div className="mx-auto max-w-shell px-gutter">
          <dl className="m-0 grid gap-px border-y border-paper-line sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="py-7 sm:px-7 sm:first:pl-0">
                <dt className="m-0 text-eyebrow font-semibold uppercase tracking-[0.18em] text-stone">
                  {fact.label}
                </dt>
                <dd className="m-0 mt-2 text-h3 font-bold">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Media label="Fra et prosjekt" className="aspect-[4/5] w-full" />

            <ul className="m-0 flex list-none flex-col gap-10 p-0">
              {values.map((value) => (
                <li key={value.title} className="border-t border-paper-line pt-6">
                  <h2 className="m-0 text-h3 font-bold">{value.title}</h2>
                  <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-[1.75] text-stone">
                    {value.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
