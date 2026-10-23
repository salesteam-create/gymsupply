import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ArrowRight } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-charcoal text-paper">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        {/* Full-bleed image column, flush to the page edge as in the reference. */}
        <Media
          label="Utstyr / detaljbilde"
          className="min-h-[18rem] w-full lg:min-h-full"
        />

        <div className="px-gutter py-section lg:pl-14 xl:pl-20">
          <div className="max-w-[62rem]">
            <p className="eyebrow m-0 text-lime">Tjenester</p>
            <h2 className="mt-5 max-w-[16ch] text-h2 font-extrabold">
              En komplett prosess fra start til mål
            </h2>

            <Reveal stagger as="ol" className="m-0 mt-11 list-none p-0">
              {processSteps.map((step) => (
                <li key={step.id} className="border-t border-charcoal-line">
                  <Link
                    href={`/tjenester#${step.id}`}
                    className="group flex items-start gap-5 py-6 no-underline sm:items-center"
                  >
                    <span className="text-sm font-bold tabular-nums text-lime">
                      {step.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[1.0625rem] font-semibold text-paper transition-colors group-hover:text-lime">
                        {step.title}
                      </span>
                      <span className="mt-1.5 block max-w-[54ch] text-sm leading-[1.7] text-mist">
                        {step.body}
                      </span>
                    </span>
                    <ArrowRight className="mt-1 h-4 w-4 flex-none text-mist transition-all duration-200 group-hover:translate-x-1 group-hover:text-lime sm:mt-0" />
                  </Link>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
