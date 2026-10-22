import { GhostWord } from "@/components/ui/ghost-word";
import { QuoteMarkIcon } from "@/components/ui/icons";
import { SkewRule } from "@/components/ui/skew-rule";

export function Testimonial() {
  return (
    <section id="om" className="relative overflow-hidden bg-ink">
      <GhostWord className="left-5 top-[60px] text-[clamp(90px,11vw,170px)]">KUNDER</GhostWord>

      <div className="relative mx-auto max-w-shell px-8 pb-[104px] pt-[120px]">
        <SkewRule className="mb-[18px] h-1.5 w-11" />
        <h2 className="mb-14 mt-0 text-[clamp(38px,4.6vw,64px)] font-black italic uppercase leading-[1.02]">
          Hva kundene sier
        </h2>

        <div className="flex flex-wrap items-center gap-14">
          <div className="relative h-80 min-w-0 flex-[0_1_380px] bg-brand">
            {/* Offset outline frame behind the portrait. */}
            <div className="absolute -bottom-[18px] -right-[18px] left-[18px] top-[18px] border-2 border-brand" />
            <div className="absolute inset-0 flex items-center justify-center text-[13px] tracking-[0.08em] text-brand-pale">
              [KUNDEBILDE]
            </div>
          </div>

          <div className="min-w-0 flex-1 basis-[460px]">
            <QuoteMarkIcon className="text-brand" />
            <blockquote className="mb-0 ml-0 mr-0 mt-5 text-[clamp(20px,2.1vw,28px)] font-medium leading-[1.55]">
              Gym Supply forvandlet hjemmet mitt til et topp moderne treningsstudio.
              Utstyrskvaliteten er fantastisk og servicen bedre enn forventet.
            </blockquote>
            <p className="mt-6 text-[15px] font-extrabold italic uppercase tracking-[0.04em]">
              Kristian Nordahl
              <span className="ml-2 text-brand-light" aria-label="5 av 5 stjerner">
                ★★★★★
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
