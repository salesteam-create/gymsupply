import type { Metadata } from "next";

import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Media } from "@/components/ui/media";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tjenester: planlegging, levering og montering",
  description:
    "Befaring, planlegging og utstyrsvalg, levering og installasjon, og service etter levering. Én leverandør gjennom hele prosessen.",
  alternates: { canonical: "/tjenester" },
};

export default function TjenesterPage() {
  return (
    <>
      <PageHero
        eyebrow="Tjenester"
        title="En komplett prosess fra start til mål"
        lead="Én kontaktperson følger prosjektet hele veien, så dere slipper å koordinere flere leverandører underveis."
        imageLabel="Montering / arbeid på stedet"
      />

      <section className="bg-paper py-section">
        <div className="mx-auto max-w-shell px-gutter">
          <ol className="m-0 grid list-none gap-x-12 gap-y-14 p-0 lg:grid-cols-2">
            {processSteps.map((step) => (
              <li key={step.id} id={step.id} className="scroll-mt-28">
                <Media
                  label={step.title}
                  className="aspect-[16/10] w-full"
                />
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="text-sm font-bold tabular-nums text-stone">
                    {step.number}
                  </span>
                  <h2 className="m-0 text-h3 font-bold">{step.title}</h2>
                </div>
                <p className="mt-3 max-w-[54ch] text-[0.9375rem] leading-[1.75] text-stone">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq />
      <FinalCta />
    </>
  );
}
