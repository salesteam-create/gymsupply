"use client";

import { useState, type FormEvent } from "react";

import { GhostWord } from "@/components/ui/ghost-word";
import { SkewCta } from "@/components/ui/skew-cta";
import { SkewRule } from "@/components/ui/skew-rule";

const fieldClasses =
  "border-0 border-b-2 border-line bg-ink px-4 py-[14px] text-[15px] text-paper min-h-12 box-border";

const projectTypes = ["Bedriftsgym", "Offentlig sektor", "Hjemmegym", "Serviceavtale"];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend yet: the prototype only confirms receipt.
    setSent(true);
  }

  return (
    <section id="kontakt" className="relative overflow-hidden bg-ink">
      <GhostWord className="-right-2.5 top-[70px] text-[clamp(90px,11vw,170px)]">
        KONTAKT
      </GhostWord>

      <div className="relative mx-auto flex max-w-shell flex-wrap gap-14 px-8 py-28">
        <div className="flex min-w-0 flex-1 basis-[420px] flex-col gap-[22px]">
          <SkewRule className="h-1.5 w-11" />
          <h2 className="m-0 text-[clamp(44px,5.6vw,80px)] font-black italic uppercase leading-none">
            Klar for å <span className="text-brand-bright">bygge?</span>
          </h2>
          <p className="m-0 max-w-[440px] text-base leading-[1.7] text-muted">
            Fortell oss litt om rommet og behovet. Vi tar kontakt og avtaler en befaring.
          </p>
          <div className="flex flex-col gap-2 font-semibold">
            <a href="#kontakt" className="text-paper hover:text-brand-light">
              [TELEFON]
            </a>
            <a href="#kontakt" className="text-paper hover:text-brand-light">
              [E-POST]
            </a>
          </div>
        </div>

        <div className="min-w-0 flex-1 basis-[520px] bg-ink-raised p-9">
          {sent ? (
            <div className="flex min-h-[360px] flex-col justify-center gap-4">
              <p className="m-0 text-[54px] font-black italic uppercase leading-none text-brand-bright">
                Takk!
              </p>
              <p className="m-0 text-base leading-[1.6] text-muted">
                Vi har mottatt forespørselen din og tar kontakt innen kort tid.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="min-h-11 cursor-pointer self-start border-[1.5px] border-brand bg-transparent px-5 py-3 text-sm font-semibold text-paper"
              >
                Send en ny
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[14px]">
                <label className="flex flex-col gap-2 text-[13px] font-semibold">
                  Navn
                  <input
                    type="text"
                    name="navn"
                    required
                    placeholder="Ola Nordmann"
                    className={fieldClasses}
                  />
                </label>
                <label className="flex flex-col gap-2 text-[13px] font-semibold">
                  Telefon eller e-post
                  <input
                    type="text"
                    name="kontakt"
                    required
                    placeholder="900 00 000"
                    className={fieldClasses}
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-[13px] font-semibold">
                Type prosjekt
                <select name="type" className={fieldClasses}>
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 text-[13px] font-semibold">
                Fortell oss om rommet
                <textarea
                  name="melding"
                  rows={4}
                  placeholder="Størrelse, antall brukere, ønsker…"
                  className={`${fieldClasses} resize-y`}
                />
              </label>

              <SkewCta
                type="submit"
                withArrow={false}
                className="min-h-[52px] self-start px-[30px] py-4 text-[15px]"
              >
                Send forespørsel
              </SkewCta>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
