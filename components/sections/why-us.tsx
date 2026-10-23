import { PinIcon, TeamIcon, WrenchIcon } from "@/components/ui/icons";

/*
 * Doubles as the "Om oss" destination in the nav. The facts here are the ones
 * that can be checked in the public company register; anything that cannot be
 * verified stays out. See README for what still needs confirming.
 */
const reasons = [
  {
    Icon: PinIcon,
    title: "Lokalt i Stavanger",
    body: "Vi holder til på Forus og møter deg på stedet. Befaring, levering og montering gjøres av folk som kjenner rommet fra før.",
  },
  {
    Icon: TeamIcon,
    title: "Ett team hele veien",
    body: "Rådgivning, utstyr, levering og montering gjennom samme leverandør. Dere trenger ikke koordinere flere aktører.",
  },
  {
    Icon: WrenchIcon,
    title: "Vi blir med videre",
    body: "Vi tilbyr serviceavtale for oppfølging av utstyret etter at rommet er tatt i bruk.",
  },
];

export function WhyUs() {
  return (
    <section id="om" className="bg-paper text-ink">
      <div className="mx-auto max-w-shell px-gutter py-section">
        <div className="grid gap-10 border-t border-paper-line pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="section-seam pt-7">
            <p className="m-0 text-eyebrow font-bold uppercase tracking-[0.18em] text-brand">
              Om oss
            </p>
            <h2 className="mt-4 text-h2 font-black italic uppercase">
              Gym Supply, siden 2012
            </h2>
            <p className="mt-4 text-lead text-body">
              Vi leverer treningsutstyr og komplette treningsrom til bedrifter, offentlig
              sektor og private i Stavanger-regionen, og står for planlegging, levering
              og montering.
            </p>
          </div>

          <ul className="m-0 grid list-none gap-x-8 gap-y-9 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ Icon, title, body }) => (
              <li key={title} className="border-t border-paper-line pt-6">
                <Icon size={32} className="text-brand" />
                <h3 className="mt-4 text-h3 font-extrabold italic">{title}</h3>
                <p className="mt-2.5 text-sm leading-[1.7] text-body">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
