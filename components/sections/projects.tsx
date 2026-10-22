import { GhostWord } from "@/components/ui/ghost-word";
import {
  CorporateGymIllustration,
  HomeGymIllustration,
  PublicSectorIllustration,
} from "@/components/ui/illustrations";
import { SkewCta } from "@/components/ui/skew-cta";
import { SkewRule } from "@/components/ui/skew-rule";

/*
 * To use a real delivery photo instead of the illustration, drop the file in
 * public/projects/ and swap `Illustration` for:
 *   image: "/projects/bedriftsgym.jpg"
 * then render it with a plain <img> (the static export runs without the image
 * optimiser). Keep the 420px frame so the row stays aligned.
 */
const projects = [
  { title: "Bedriftsgym", client: "[Kunde, sted]", Illustration: CorporateGymIllustration },
  { title: "Offentlig sektor", client: "[Kunde, sted]", Illustration: PublicSectorIllustration },
  { title: "Hjemmegym", client: "[Kunde, sted]", Illustration: HomeGymIllustration },
];

export function Projects() {
  return (
    <section id="prosjekter" className="relative overflow-hidden bg-paper text-ink">
      <GhostWord onPaper className="-right-5 top-[70px] text-[clamp(90px,11vw,170px)]">
        PROSJEKTER
      </GhostWord>

      <div className="relative mx-auto max-w-shell px-8 pb-[104px] pt-28">
        <SkewRule className="mb-[18px] h-1.5 w-11" />
        <h2 className="m-0 text-[clamp(38px,4.6vw,64px)] font-black italic uppercase leading-[1.02]">
          Våre leveranser
        </h2>
        <p className="mb-[52px] mt-[18px] max-w-[520px] text-base leading-[1.7] text-body">
          Et utvalg av treningsrom vi har levert og montert i regionen.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {projects.map(({ title, client, Illustration }) => (
            <figure key={title} className="m-0">
              <div className="h-[420px] overflow-hidden">
                <Illustration />
              </div>
              <figcaption className="px-1 pt-[22px]">
                <div className="text-[17px] font-extrabold italic uppercase">{title}</div>
                <div className="mt-1 text-[13px] text-body">{client}</div>
                <SkewRule className="mt-3 h-1 w-[26px]" />
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-[52px] flex justify-center">
          <SkewCta href="#kontakt" className="px-7 py-4 text-sm">
            Alle prosjekter
          </SkewCta>
        </div>
      </div>
    </section>
  );
}
