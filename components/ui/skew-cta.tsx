import type { ComponentProps, ReactNode } from "react";

import { ArrowUpRightIcon } from "@/components/ui/icons";

type SkewCtaProps = {
  children: ReactNode;
  /** Renders an anchor when set, a button otherwise. */
  href?: string;
  /** Trailing arrow glyph. On by default for links, off for form actions. */
  withArrow?: boolean;
  arrowSize?: number;
  className?: string;
} & Omit<ComponentProps<"button">, "className" | "children">;

/**
 * The skewed brand call to action. The outer element leans left and the label
 * leans back so the text reads upright.
 */
export function SkewCta({
  children,
  href,
  withArrow,
  arrowSize = 14,
  className = "",
  ...buttonProps
}: SkewCtaProps) {
  const showArrow = withArrow ?? Boolean(href);
  const label = (
    <span className="skew-cta__label">
      {children}
      {showArrow ? <ArrowUpRightIcon size={arrowSize} /> : null}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={`skew-cta ${className}`}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={`skew-cta ${className}`} {...buttonProps}>
      {label}
    </button>
  );
}
