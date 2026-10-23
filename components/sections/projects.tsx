import { Reveal } from "@/components/motion/reveal";
import { GhostWord } from "@/components/ui/ghost-word";
import {
  CorporateGymIllustration,
  HomeGymIllustration,
  PublicSectorIllustration,
} from "@/components/ui/illustrations";
import { SkewCta } from "@/components/ui/skew-cta";
import { SkewRule } from "@/components/ui/skew-rule";

type Project = {
  title: string;
  /** Customer and place, once they have agreed to be named. Omitted until. */
  client?: string;
  /** Illustration shown until a real photo is dropped in. */
  Illustration: (props: { className?: string }) => React.ReactElement;
  /**
   * Photo of the finished room. Put the file in public/projects/ and set this
   * to its path, e.g. "/projects/bedriftsgym.jpg". When set it replaces the
   * illustration. Use a landscape image of at least 1200px wide.
   */
  photo?: string;
  /** Describe the room for anyone who cannot see the photo. */
  photoAlt?: string;
};

const projects: Project[] = [
  { title: "Bedriftsgym", Illustration: CorporateGymIllustration },
  { title: "Offentlig sektor", Illustration: PublicSectorIllustration },
  { title: "Hjemmegym", Illustration: HomeGymIllustration },
];

export function Projects() {
  return (
    <section id="prosjekter" className="relative overflow-hidden bg-paper text-ink">
      <GhostWord onPaper className="-right-5 top-[70px] text-[clamp(90px,11vw,170px)]">
        PROSJEKTER
      </GhostWord>

      <div className="above-ghost mx-auto max-w-shell px-gutter py-section">
        <div className="section-seam max-w-[46ch] pt-7">
          <p className="m-0 text-eyebrow font-bold uppercase tracking-[0.18em] text-brand">
            Prosjekter
          </p>
          <h2 className="mt-4 text-h2 font-black italic uppercase">Våre leveranser</h2>
          <p className="mt-4 text-lead text-body">
            Et utvalg av treningsrom vi har levert og montert i regionen.
          </p>
        </div>

        <Reveal stagger className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {projects.map(({ title, client, Illustration, photo, photoAlt }) => (
            <figure key={title} className="m-0">
              <div className="h-[260px] overflow-hidden sm:h-[340px] lg:h-[420px]">
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo}
                    alt={photoAlt ?? ""}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Illustration />
                )}
              </div>
              <figcaption className="px-1 pt-[22px]">
                <div className="text-[17px] font-extrabold italic uppercase">{title}</div>
                {client ? (
                  <div className="mt-1 text-[13px] text-body">{client}</div>
                ) : null}
                <SkewRule className="mt-3 h-1 w-[26px]" />
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <div className="mt-10 flex justify-center sm:mt-[52px]">
          <SkewCta href="#kontakt" className="px-7 py-4 text-sm">
            Snakk med oss om et lignende prosjekt
          </SkewCta>
        </div>
      </div>
    </section>
  );
}
