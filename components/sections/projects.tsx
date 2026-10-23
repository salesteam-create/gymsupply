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
  client: string;
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
  {
    title: "Bedriftsgym",
    client: "[Kunde, sted]",
    Illustration: CorporateGymIllustration,
  },
  {
    title: "Offentlig sektor",
    client: "[Kunde, sted]",
    Illustration: PublicSectorIllustration,
  },
  {
    title: "Hjemmegym",
    client: "[Kunde, sted]",
    Illustration: HomeGymIllustration,
  },
];

export function Projects() {
  return (
    <section id="prosjekter" className="relative overflow-hidden bg-paper text-ink">
      <GhostWord onPaper className="-right-5 top-[70px] text-[clamp(90px,11vw,170px)]">
        PROSJEKTER
      </GhostWord>

      <div className="relative mx-auto max-w-shell px-5 pb-16 pt-16 sm:px-8 sm:pb-[104px] sm:pt-28">
        <SkewRule className="mb-[18px] h-1.5 w-11" />
        <h2 className="m-0 text-[clamp(38px,4.6vw,64px)] font-black italic uppercase leading-[1.02]">
          Våre leveranser
        </h2>
        <p className="mb-10 mt-[18px] max-w-[520px] text-base leading-[1.7] text-body sm:mb-[52px]">
          Et utvalg av treningsrom vi har levert og montert i regionen.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
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
                <div className="mt-1 text-[13px] text-body">{client}</div>
                <SkewRule className="mt-3 h-1 w-[26px]" />
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-[52px]">
          <SkewCta href="#kontakt" className="px-7 py-4 text-sm">
            Alle prosjekter
          </SkewCta>
        </div>
      </div>
    </section>
  );
}
