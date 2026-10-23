import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import { business } from "@/lib/site";

export function AboutTeaser() {
  return (
    <section className="bg-charcoal text-paper">
      <div className="grid lg:grid-cols-2">
        <div className="bg-paper px-gutter py-section text-charcoal lg:px-14 xl:px-20">
          <div className="max-w-[46ch]">
            <p className="eyebrow m-0 text-stone">Om Gym Supply</p>
            <h2 className="mt-5 text-h2 font-extrabold">
              Erfaring, kunnskap og ekte engasjement
            </h2>
            <p className="mt-6 text-lead text-stone">
              Siden {business.foundingYear} har vi hjulpet bedrifter, treningssentre,
              offentlige aktører og privatpersoner med å skape bedre treningsmiljøer. Vi
              holder til på Forus og møter deg på stedet.
            </p>
            <Button href="/om-oss" variant="outline" className="mt-8 border-charcoal">
              Bli kjent med oss
            </Button>
          </div>
        </div>

        <Media label="Teamet" className="min-h-[20rem] w-full lg:min-h-full" />
      </div>
    </section>
  );
}
