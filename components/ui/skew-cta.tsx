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
  /** Applies to either element, so links can close the mobile menu. */
  onClick?: () => void;
} & Omit<ComponentProps<"button">, "className" | "children" | "onClick">;

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
  onClick,
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
      <a href={href} onClick={onClick} className={`skew-cta ${className}`}>
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`skew-cta ${className}`}
      {...buttonProps}
    >
      {label}
    </button>
  );
}
