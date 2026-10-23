import type { ReactNode } from "react";

type MediaProps = {
  /** Path under public/, e.g. "/solutions/bedriftsgym.jpg". */
  src?: string;
  /** Describes the room for anyone who cannot see it. Required with src. */
  alt?: string;
  /** Shown in the fallback so an empty slot still reads as deliberate. */
  label?: string;
  /** Loads eagerly and at high priority. Use for the hero image only. */
  priority?: boolean;
  className?: string;
  children?: ReactNode;
};

/**
 * An image slot.
 *
 * With `src` it renders the photo. Without one it renders a charcoal panel
 * carrying the brand mark, so the layout is complete and intentional before
 * the photography arrives. Either way the box reserves its space, so adding a
 * photo later shifts nothing.
 */
export function Media({
  src,
  alt,
  label,
  priority = false,
  className = "",
  children,
}: MediaProps) {
  return (
    <div className={`relative overflow-hidden bg-charcoal-soft ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.016) 0 14px, transparent 14px 28px)",
          }}
        >
          <div className="flex flex-col items-center gap-3 px-6 text-center">
            <BrandMark className="h-9 w-9 text-charcoal-line" />
            {label ? (
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal-line">
                {label}
              </span>
            ) : null}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

/** The ring-and-dot from the logo, simplified for use as a mark. */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path
        d="M16 3a13 13 0 1 0 13 13h-9"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="square"
      />
      <circle cx="16" cy="16" r="3.6" fill="currentColor" />
    </svg>
  );
}
