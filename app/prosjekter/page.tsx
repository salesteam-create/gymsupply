import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Media } from "@/components/ui/media";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Prosjekter",
  description:
    "Treningsrom Gym Supply har planlagt, levert og montert for bedrifter, treningssentre, offentlig sektor og private i Stavanger-regionen.",
  alternates: { canonical: "/prosjekter" },
};

/*
 * Real projects only. Each entry needs the customer's permission to be named,
 * photographs of the finished room, and the detail that makes it useful to a
 * reader with a similar space. The grid below shows the categories we deliver
 * until those are in place; it never presents an unnamed card as a case study.
 */
type Project = {
  title: string;
  client?: string;
  summary?: string;
  photo?: string;
  photoAlt?: string;
};

const projects: Project[] = [];

export default function ProsjekterPage() {
  return (
    <>
      <PageHero
        eyebrow="Prosjekter"
        title="Treningsrom vi har levert"
        lead="Et utvalg av rom vi har planlagt, levert og montert i Stavanger-regionen."
        imageLabel="Ferdig prosjekt"
      />

      <section className="bg-paper py-section">
        <div className="mx-auto max-w-shell px-gutter">
          {projects.length > 0 ? (
            <ul className="m-0 grid list-none gap-x-7 gap-y-14 p-0 lg:grid-cols-2">
              {projects.map((project) => (
                <li key={project.title}>
                  <Media
                    src={project.photo}
                    alt={project.photoAlt}
                    label={project.title}
                    className="aspect-[16/10] w-full"
                  />
                  <h2 className="mt-6 text-h3 font-bold">{project.title}</h2>
                  {project.client ? (
                    <p className="m-0 mt-1 text-sm text-stone">{project.client}</p>
                  ) : null}
                  {project.summary ? (
                    <p className="mt-3 max-w-[54ch] text-[0.9375rem] leading-[1.75] text-stone">
                      {project.summary}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <>
              <p className="m-0 max-w-[58ch] text-lead text-stone">
                Vi leverer treningsrom i fire hovedkategorier. Ta kontakt, så viser vi
                gjerne fram tidligere leveranser som ligner på ditt prosjekt.
              </p>
              <ul className="m-0 mt-12 grid list-none gap-5 p-0 sm:grid-cols-2 xl:grid-cols-4">
                {solutions.map((solution) => (
                  <li key={solution.id}>
                    <Media label={solution.title} className="aspect-[3/4] w-full" />
                    <h2 className="mt-5 text-h3 font-bold">{solution.title}</h2>
                    <p className="mt-2 text-[0.9375rem] leading-[1.7] text-stone">
                      {solution.blurb}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
