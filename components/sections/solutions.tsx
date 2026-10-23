import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ArrowCircle, ArrowRight } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { solutions } from "@/lib/content";

export function Solutions() {
  return (
    <section id="losninger" className="bg-paper py-section text-charcoal">
      <div className="mx-auto max-w-shell px-gutter">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow m-0 text-stone">Løsninger for ulike behov</p>
            <h2 className="mt-5 max-w-[18ch] text-h2 font-extrabold">
              Hvilken løsning passer for deg?
            </h2>
          </div>
          <div className="max-w-[42ch] lg:text-right">
            <p className="m-0 text-[0.9375rem] leading-[1.7] text-stone">
              Vi leverer komplette treningsløsninger til ulike behov og bransjer. Uansett
              størrelse hjelper vi deg fra planlegging til ferdig anlegg.
            </p>
            <Link
              href="/tjenester"
              className="mt-4 inline-flex min-h-11 items-center gap-2 border-b border-charcoal text-sm font-semibold text-charcoal no-underline transition-colors hover:border-lime-deep hover:text-lime-deep"
            >
              Se alle løsninger
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <Reveal
          stagger
          as="ul"
          className="m-0 mt-12 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 xl:grid-cols-4"
        >
          {solutions.map((solution) => (
            <li key={solution.id} id={solution.id} className="scroll-mt-28">
              <Link
                href="/kontakt"
                className="group relative block aspect-[4/5] overflow-hidden no-underline sm:aspect-[3/4]"
              >
                <Media
                  src={solution.photo}
                  alt={solution.photoAlt}
                  label={solution.title}
                  className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(32,33,31,0.92) 0%, rgba(32,33,31,0.55) 38%, rgba(32,33,31,0.08) 72%)",
                  }}
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <span className="min-w-0">
                    <span className="block text-h3 font-bold text-white">
                      {solution.title}
                    </span>
                    <span className="mt-1.5 block max-w-[26ch] text-[0.8125rem] leading-[1.6] text-white/75">
                      {solution.blurb}
                    </span>
                  </span>
                  <ArrowCircle />
                </span>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
