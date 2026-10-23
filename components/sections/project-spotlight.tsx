import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { featuredProject } from "@/lib/projects";

/**
 * Section 05.
 *
 * With a verified project it is a single dominant photographic layout with an
 * overlaid information panel. With none, it says plainly that references are
 * available on request rather than showing an invented case study.
 */
export function ProjectSpotlight() {
  if (!featuredProject) {
    return (
      <section className="bg-charcoal py-section text-paper">
        <div className="mx-auto max-w-shell px-gutter">
          <div className="grid gap-10 border-t border-charcoal-line pt-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow m-0 text-lime">Prosjekter</p>
              <h2 className="mt-5 max-w-[20ch] text-h2 font-extrabold">
                Vi har levert treningsrom i regionen siden 2012
              </h2>
              <p className="mt-5 max-w-[56ch] text-lead text-mist">
                Vi viser gjerne fram tidligere leveranser som ligner på ditt prosjekt.
                Ta kontakt, så finner vi referanser som passer rommet og bruken du
                planlegger for.
              </p>
            </div>
            <Button href="/kontakt">Be om referanser</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate bg-charcoal text-paper">
      <Media
        src={featuredProject.photo}
        alt={featuredProject.photoAlt}
        label={featuredProject.title}
        className="absolute inset-0 h-full w-full"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(32,33,31,0.95) 0%, rgba(32,33,31,0.78) 46%, rgba(32,33,31,0.3) 100%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-shell px-gutter py-section">
        <div className="max-w-[44rem]">
          <p className="eyebrow m-0 text-lime">Utvalgt prosjekt</p>
          <h2 className="mt-5 text-h2 font-extrabold">{featuredProject.title}</h2>
          <p className="mt-3 text-sm text-mist">
            {[featuredProject.client, featuredProject.location, featuredProject.category]
              .filter(Boolean)
              .join(" · ")}
          </p>

          <dl className="m-0 mt-9 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="m-0 text-eyebrow font-semibold uppercase tracking-[0.18em] text-lime">
                Behovet
              </dt>
              <dd className="m-0 mt-2 text-[0.9375rem] leading-[1.7] text-paper/85">
                {featuredProject.brief}
              </dd>
            </div>
            <div>
              <dt className="m-0 text-eyebrow font-semibold uppercase tracking-[0.18em] text-lime">
                Levert
              </dt>
              <dd className="m-0 mt-2 text-[0.9375rem] leading-[1.7] text-paper/85">
                {featuredProject.delivered}
              </dd>
            </div>
          </dl>

          <Button href="/prosjekter" className="mt-9">
            Se prosjektet
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
