import type { ReactNode } from "react";

import { Media } from "@/components/ui/media";

/** Shared masthead for the inner pages. */
export function PageHero({
  eyebrow,
  title,
  lead,
  imageLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  imageLabel?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate bg-charcoal text-paper">
      {imageLabel ? (
        <>
          <Media label={imageLabel} priority className="absolute inset-0 h-full w-full" />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(32,33,31,0.96) 0%, rgba(32,33,31,0.84) 42%, rgba(32,33,31,0.46) 100%)",
            }}
          />
        </>
      ) : null}

      <div className="relative mx-auto max-w-shell px-gutter pb-section pt-[clamp(3.5rem,6vw,6rem)]">
        <p className="eyebrow m-0 text-lime">{eyebrow}</p>
        <h1 className="mt-6 max-w-[20ch] text-display font-extrabold">{title}</h1>
        {lead ? (
          <p className="mt-6 max-w-[56ch] text-lead text-paper/80">{lead}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
