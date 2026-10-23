import { GhostWord } from "@/components/ui/ghost-word";
import { SkewRule } from "@/components/ui/skew-rule";

const services = [
  {
    number: "01",
    title: "Befaring og rådgivning",
    body: "Vi ser på rommet, hvem som skal trene og hva dere vil oppnå, og anbefaler oppsett og utstyr.",
  },
  {
    number: "02",
    title: "Utstyr som passer",
    body: "Nøye utvalgt utstyr til treningssenter, arbeidsplass eller hjemmegym, valgt etter plass og bruksbehov.",
  },
  {
    number: "03",
    title: "Levering og montering",
    body: "Vi leverer, monterer og rydder opp, så dere kan begynne å trene med en gang.",
  },
  {
    number: "04",
    title: "Serviceavtale",
    body: "Personlig oppfølging etter levering. Vi holder utstyret i form år etter år.",
  },
];

export function Services() {
  return (
    <section id="tjenester" className="relative overflow-hidden bg-paper text-ink">
      <GhostWord onPaper className="-right-5 top-[70px] text-[clamp(90px,11vw,170px)]">
        TJENESTER
      </GhostWord>

      <div className="relative mx-auto max-w-shell px-5 pb-16 pt-16 sm:px-8 sm:pb-[104px] sm:pt-28">
        <SkewRule className="mb-[18px] h-1.5 w-11" />
        <h2 className="m-0 text-[clamp(38px,4.6vw,64px)] font-black italic uppercase leading-[1.02]">
          Fra tomt rom til ferdig gym
        </h2>
        <p className="mb-14 mt-[18px] max-w-[520px] text-base leading-[1.7] text-body">
          Én kontaktperson følger prosjektet fra start til slutt. Vi møter deg lokalt og
          tilpasser alt til plassen og bruken.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {services.map((service) => (
            <article
              key={service.number}
              className="lift-card flex min-h-[280px] flex-col gap-[14px] bg-paper-raised px-7 py-[34px]"
            >
              <div className="text-[52px] font-black italic leading-none text-brand">
                {service.number}
              </div>
              <h3 className="m-0 text-[21px] font-extrabold italic">{service.title}</h3>
              <p className="m-0 text-sm leading-[1.7] text-body">{service.body}</p>
              <SkewRule className="mt-auto h-1 w-[26px]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
