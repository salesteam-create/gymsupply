import { pillars } from "@/lib/content";

function PillarIcon({ index }: { index: number }) {
  const paths = [
    "M12 3l8 6-8 12-8-12 8-6zM4 9h16",
    "M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zM12 2v3M12 19v3M2 12h3M19 12h3",
    "M9 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 6 2 6 5.5",
    "M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19.5a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2zM17.5 19.5a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z",
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 flex-none text-lime"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[index]} />
    </svg>
  );
}

/** The band under the hero. Four claims the business can stand behind. */
export function Pillars() {
  return (
    <section className="border-y border-charcoal-line bg-charcoal text-paper">
      <ul className="mx-auto grid max-w-shell list-none grid-cols-1 gap-px p-0 px-gutter sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <li
            key={pillar.title}
            className="flex items-center gap-4 py-6 lg:border-r lg:border-charcoal-line lg:px-7 lg:first:pl-0 lg:last:border-r-0"
          >
            <PillarIcon index={index} />
            <div>
              <p className="m-0 text-[0.9375rem] font-semibold">{pillar.title}</p>
              <p className="m-0 mt-0.5 text-[0.8125rem] text-mist">{pillar.sub}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
