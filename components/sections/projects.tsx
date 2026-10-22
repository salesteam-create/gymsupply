import { GhostWord } from "@/components/ui/ghost-word";
import { SkewCta } from "@/components/ui/skew-cta";
import { SkewRule } from "@/components/ui/skew-rule";

const projects = [
  { title: "Bedriftsgym", placeholder: "[PROSJEKTBILDE 1]", flip: false },
  { title: "Offentlig sektor", placeholder: "[PROSJEKTBILDE 2]", flip: true },
  { title: "Hjemmegym", placeholder: "[PROSJEKTBILDE 3]", flip: false },
];

/** Alternating diagonal hatch standing in for the project photography. */
function hatch(flip: boolean) {
  const [a, b] = flip ? ["#23212F", "#1A1924"] : ["#1A1924", "#23212F"];

  return {
    background: `repeating-linear-gradient(135deg, ${a} 0 18px, ${b} 18px 36px)`,
  };
}

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
          {projects.map((project) => (
            <figure key={project.title} className="m-0">
              <div
                style={hatch(project.flip)}
                className="flex h-[420px] items-center justify-center text-[13px] tracking-[0.08em] text-dim"
              >
                {project.placeholder}
              </div>
              <figcaption className="px-1 pt-[22px]">
                <div className="text-[17px] font-extrabold italic uppercase">
                  {project.title}
                </div>
                <div className="mt-1 text-[13px] text-body">[Kunde, sted]</div>
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
