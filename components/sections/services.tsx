import { Reveal } from "@/components/motion/reveal";
import { GhostWord } from "@/components/ui/ghost-word";

const steps = [
  {
    number: "01",
    title: "Befaring og behovskartlegging",
    body: "Vi ser på rommet, hvem som skal trene og hva dere vil oppnå, og noterer det som styrer valgene: takhøyde, gulv, adkomst og antall brukere.",
  },
  {
    number: "02",
    title: "Planlegging og utstyrsvalg",
    body: "Vi setter opp et forslag til soner og utstyr som passer plassen og bruken, og justerer det sammen med dere før noe bestilles.",
  },
  {
    number: "03",
    title: "Levering og montering",
    body: "Vi koordinerer frakt, monterer utstyret på plass og rydder opp etter oss, så rommet er klart til bruk når vi går.",
  },
  {
    number: "04",
    title: "Service og oppfølging",
    body: "Med serviceavtale følger vi opp utstyret etter levering, så det holder seg trygt og i drift over tid.",
  },
];

export function Services() {
  return (
    <section id="tjenester" className="relative overflow-hidden bg-paper text-ink">
      <GhostWord onPaper className="-right-6 top-10 text-[clamp(90px,11vw,170px)]">
        TJENESTER
      </GhostWord>

      <div className="above-ghost mx-auto max-w-shell px-gutter py-section">
        <Reveal>
        <div className="section-seam max-w-[48ch] pt-7">
          <p className="m-0 text-eyebrow font-bold uppercase tracking-[0.18em] text-brand">
            Slik jobber vi
          </p>
          <h2 className="mt-4 text-h2 font-black italic uppercase">
            Fra tomt rom til ferdig gym
          </h2>
          <p className="mt-4 text-lead text-body">
            Én kontaktperson følger prosjektet hele veien. Fire steg, uten at dere må
            koordinere flere leverandører underveis.
          </p>
        </div>
        </Reveal>

        {/* A sequence, not four interchangeable cards: one rule runs across
            the top of every step and the accent marks where each begins. */}
        <Reveal
          as="ol"
          stagger
          className="m-0 mt-14 grid list-none gap-x-7 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <li key={step.number} className="relative border-t border-paper-line pt-7">
              <span className="absolute -top-px left-0 h-0.5 w-12 bg-brand" />
              <span className="block text-[32px] font-black italic leading-none text-brand">
                {step.number}
              </span>
              <h3 className="mt-4 text-h3 font-extrabold italic">{step.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-body">{step.body}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
