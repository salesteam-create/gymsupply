import Link from "next/link";

import { BrandMark } from "@/components/ui/media";

/** The wordmark splits GYM (lime) from SUPPLY, as the supplied logo does. */
export function Logo({
  tone = "dark",
  className = "",
}: {
  /** "dark" for charcoal surfaces, "light" for the warm white ones. */
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Gym Supply, til forsiden"
      className={`inline-flex min-h-11 items-center gap-2.5 no-underline ${className}`}
    >
      <BrandMark className={`h-7 w-7 ${tone === "dark" ? "text-paper" : "text-grey"}`} />
      <span className="text-[1.25rem] font-extrabold tracking-[0.04em]">
        <span className="text-lime">GYM</span>
        <span className={tone === "dark" ? "text-paper" : "text-grey"}>SUPPLY</span>
      </span>
    </Link>
  );
}
