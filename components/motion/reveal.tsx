"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  /** Staggers the element's direct children instead of the element itself. */
  stagger?: boolean;
  /** Seconds to wait before starting. */
  delay?: number;
  className?: string;
};

/**
 * Fades and lifts content as it scrolls into view.
 *
 * Content renders visible by default, so it stays readable if this never runs.
 * gsap.from only hides it once the animation is actually set up. Everything is
 * built inside a gsap.context so React Strict Mode's double mount cannot leave
 * a second copy of the tween or its ScrollTrigger behind.
 */
export function Reveal({ children, stagger = false, delay = 0, className }: RevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    const context = gsap.context(() => {
      // Respect the OS setting: no movement, nothing hidden.
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger ? Array.from(element.children) : element;

        gsap.from(targets, {
          opacity: 0,
          y: 24,
          duration: 0.55,
          ease: "power2.out",
          delay,
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      return () => media.revert();
    }, element);

    return () => context.revert();
  }, [stagger, delay]);

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
