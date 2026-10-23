import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ArrowCircle, ArrowRight } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { solutions } from "@/lib/content";

/**
 * Section 03. The first segment takes a wide tile and the other three run
 * taller beside it, so the row has a focal point instead of four identical
 * cards. The grid stays consistent; only the proportions vary.
 */
export function Solutions() {
  const [lead, ...rest] = solutions;

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
              Behovene er ikke de samme. Et bedriftsgym, en gymsal og et rom i kjelleren
              planlegges ulikt, selv om utstyret kan ligne.
            </p>
            <Link
              href="/tjenester"
              className="mt-4 inline-flex min-h-11 items-center gap-2 border-b border-charcoal text-sm font-semibold text-charcoal no-underline transition-colors hover:border-stone hover:text-stone"
            >
              Se hvordan vi jobber
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <Reveal
          stagger
          as="ul"
          className="m-0 mt-12 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          <SolutionCard solution={lead} wide />
          {rest.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function SolutionCard({
  solution,
  wide = false,
}: {
  solution: (typeof solutions)[number];
  wide?: boolean;
}) {
  return (
    <li
      id={solution.id}
      className={`scroll-mt-28 ${wide ? "sm:col-span-2 lg:col-span-2" : ""}`}
    >
      <Link
        href="/kontakt"
        className={`group relative block overflow-hidden no-underline ${
          wide ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[4/5]"
        }`}
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
              "linear-gradient(to top, rgba(32,33,31,0.93) 0%, rgba(32,33,31,0.5) 42%, rgba(32,33,31,0.06) 76%)",
          }}
        />
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 sm:p-7">
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-lime">
              {solution.title}
            </span>
            <span
              className={`mt-2.5 block font-bold text-white ${
                wide ? "max-w-[24ch] text-[1.375rem] leading-[1.25]" : "text-[1.0625rem] leading-[1.3]"
              }`}
            >
              {solution.need}
            </span>
            <span className="mt-2 block max-w-[42ch] text-[0.8125rem] leading-[1.6] text-white/70">
              {solution.blurb}
            </span>
          </span>
          <ArrowCircle />
        </span>
      </Link>
    </li>
  );
}
