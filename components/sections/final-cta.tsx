import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-paper-raised py-section text-charcoal">
      <div className="mx-auto max-w-shell px-gutter">
        <div className="grid gap-9 lg:grid-cols-[1.1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow m-0 text-stone">Neste steg</p>
            <h2 className="mt-5 max-w-[20ch] text-h2 font-extrabold">
              Har du et rom som skal bli et treningsrom?
            </h2>
            <p className="mt-5 max-w-[56ch] text-lead text-stone">
              Fortell oss om plassen, behovene og planene dine. Vi tar kontakt for å
              avtale en befaring og lager et forslag sammen med dere.
            </p>
          </div>
          <div className="flex flex-wrap gap-3.5">
            <Button href="/kontakt">Book befaring</Button>
            <Button href="/prosjekter" variant="outline" className="border-charcoal">
              Se prosjekter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
