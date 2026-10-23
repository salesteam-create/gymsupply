"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Reveals the direct children in sequence instead of the block as a whole. */
  stagger?: boolean;
  /**
   * Element to render. With `stagger`, this must be the element that directly
   * holds the items: an extra wrapper in between staggers one block instead of
   * each item.
   */
  as?: "div" | "ol" | "ul";
  className?: string;
};

const STEP_MS = 70;

/**
 * Fades and lifts content as it scrolls into view.
 *
 * 1. Nothing is hidden in the markup, so if the script never runs the content
 *    is simply visible.
 * 2. Anything already on screen is skipped. Hiding something the visitor is
 *    looking at causes a flash and can invalidate the LCP element, so this is
 *    never used above the fold.
 * 3. Under prefers-reduced-motion nothing is touched at all.
 */
export function Reveal({ children, stagger = false, as = "div", className }: RevealProps) {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    const targets: HTMLElement[] = stagger
      ? (Array.from(element.children) as HTMLElement[])
      : [element];

    targets.forEach((target, index) => {
      target.dataset.reveal = "pending";
      if (stagger) target.style.transitionDelay = `${index * STEP_MS}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        targets.forEach((target) => {
          target.dataset.reveal = "shown";
        });
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      targets.forEach((target) => {
        delete target.dataset.reveal;
        target.style.transitionDelay = "";
      });
    };
  }, [stagger]);

  const Tag = as;
  return (
    <Tag ref={container as never} className={className}>
      {children}
    </Tag>
  );
}
