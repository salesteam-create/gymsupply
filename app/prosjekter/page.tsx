import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { solutions } from "@/lib/content";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Prosjekter",
  description:
    "Treningsrom Gym Supply har planlagt, levert og montert for bedrifter, treningssentre, offentlig sektor og private i Stavanger og nærområdene.",
  alternates: { canonical: "/prosjekter" },
};

/*
 * Reads from lib/projects.ts. While that is empty the page explains what we
 * deliver and offers references on request, rather than showing placeholder
 * cards that imply a portfolio we have not published.
 */
export default function ProsjekterPage() {
  return (
    <>
      <PageHero
        eyebrow="Prosjekter"
        title="Treningsrom vi har levert"
        lead="Vi har levert og montert treningsrom i Stavanger og nærområdene siden 2012."
        imageLabel="Ferdig prosjekt"
      />

      <section className="bg-paper py-section">
        <div className="mx-auto max-w-shell px-gutter">
          {projects.length > 0 ? (
            <ul className="m-0 grid list-none gap-x-7 gap-y-14 p-0 lg:grid-cols-2">
              {projects.map((project, index) => (
                <li
                  key={project.slug}
                  className={index % 3 === 0 ? "lg:col-span-2" : undefined}
                >
                  <Media
                    src={project.photo}
                    alt={project.photoAlt}
                    label={project.title}
                    className={`w-full ${index % 3 === 0 ? "aspect-[2/1]" : "aspect-[16/10]"}`}
                  />
                  <p className="m-0 mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-stone">
                    {project.category}
                  </p>
                  <h2 className="mt-2 text-h3 font-bold">{project.title}</h2>
                  {project.client || project.location ? (
                    <p className="m-0 mt-1 text-sm text-stone">
                      {[project.client, project.location].filter(Boolean).join(" · ")}
                    </p>
                  ) : null}
                  <p className="mt-3 max-w-[56ch] text-[0.9375rem] leading-[1.75] text-stone">
                    {project.delivered}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <div className="grid gap-9 border-t border-paper-line pt-12 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="m-0 max-w-[60ch] text-lead text-stone">
                  Vi publiserer ikke enkeltprosjekter med kundenavn her. Ta kontakt, så
                  viser vi gjerne fram tidligere leveranser som ligner på rommet og
                  bruken du planlegger for.
                </p>
                <Button href="/kontakt">Be om referanser</Button>
              </div>

              <h2 className="mt-16 text-h3 font-bold">Typer rom vi leverer</h2>
              <ul className="m-0 mt-7 grid list-none gap-5 p-0 sm:grid-cols-2 xl:grid-cols-4">
                {solutions.map((solution) => (
                  <li key={solution.id}>
                    <Media label={solution.title} className="aspect-[3/4] w-full" />
                    <h3 className="mt-5 text-[1.0625rem] font-bold">{solution.title}</h3>
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
