import { PinIcon, TeamIcon, WrenchIcon } from "@/components/ui/icons";
import { SkewRule } from "@/components/ui/skew-rule";

const reasons = [
  {
    Icon: PinIcon,
    title: "Lokalt i Stavanger",
    body: "Vi møter deg ansikt til ansikt og følger hvert prosjekt helt i mål.",
  },
  {
    Icon: TeamIcon,
    title: "Ett team, fra A til Å",
    body: "Rådgivning, utstyr, levering og montering fra samme team, siden 2012.",
  },
  {
    Icon: WrenchIcon,
    title: "Service etter levering",
    body: "Med serviceavtale holder vi utstyret trygt og i drift over tid.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-shell grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-12 px-8 py-24">
        {reasons.map(({ Icon, title, body }) => (
          <div key={title} className="flex flex-col gap-[14px]">
            <Icon className="text-brand" />
            <h3 className="m-0 text-[22px] font-extrabold italic">{title}</h3>
            <p className="m-0 text-sm leading-[1.7] text-body">{body}</p>
            <SkewRule className="h-1 w-[26px]" />
          </div>
        ))}
      </div>
    </section>
  );
}
