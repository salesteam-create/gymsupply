import { Media } from "@/components/ui/media";

/**
 * Stands in for a brand strip.
 *
 * Gym Supply publishes no manufacturer or supplier relationships, so showing
 * brand logos would claim partnerships we cannot evidence. This explains how
 * equipment is chosen instead, which is what the company does say: "nøye
 * utvalgt treningsutstyr tilpasset ditt behov".
 *
 * Replace with a brand strip once the supplier relationships are confirmed in
 * writing — see README.
 */
export function SelectionApproach() {
  return (
    <section className="bg-paper py-section text-charcoal">
      <div className="mx-auto grid max-w-shell items-center gap-12 px-gutter lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow m-0 text-stone">Kvalitet</p>
          <h2 className="mt-5 max-w-[20ch] text-h2 font-extrabold">
            Utstyret velges etter rommet, ikke etter katalogen
          </h2>
          <p className="mt-5 max-w-[52ch] text-lead text-stone">
            Vi binder oss ikke til én ferdig pakke. Utstyret settes sammen etter hvor
            mye plass dere har, hvem som skal trene og hva rommet skal tåle over tid.
          </p>
          <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-[1.75] text-stone">
            Det betyr at et lite bedriftsgym og en gymsal med mange daglige brukere får
            ulike løsninger, selv om behovet på papiret kan se likt ut.
          </p>
        </div>

        <Media label="Utstyr i bruk" className="aspect-[5/4] w-full" />
      </div>
    </section>
  );
}
