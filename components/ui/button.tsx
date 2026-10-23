import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "quiet";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  /** Trailing arrow. On by default. */
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
} & Omit<ComponentProps<"button">, "className" | "children" | "onClick">;

/*
 * Lime is only ever a filled block with charcoal text on it. It measures
 * 1.35:1 against the warm white background, so it can never carry text or a
 * hairline on a light surface.
 */
const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-charcoal hover:bg-lime-bright border border-transparent font-semibold",
  outline:
    "border border-current text-current hover:border-lime hover:text-lime font-semibold",
  quiet: "border border-transparent text-current font-semibold underline-offset-4",
};

export function Button({
  children,
  href,
  variant = "primary",
  arrow = true,
  className = "",
  onClick,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2.5 px-6 py-3 text-[0.9375rem] no-underline transition-colors duration-200 cursor-pointer";
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow ? <ArrowRight className="h-4 w-4 flex-none" /> : null}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("#");
    if (external) {
      return (
        <a href={href} onClick={onClick} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

/** Circular arrow affordance used on the solution cards. */
export function ArrowCircle({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex size-11 flex-none items-center justify-center rounded-full border border-white/45 text-white transition-colors duration-200 group-hover:border-lime group-hover:bg-lime group-hover:text-charcoal ${className}`}
    >
      <ArrowRight className="h-4 w-4" />
    </span>
  );
}
