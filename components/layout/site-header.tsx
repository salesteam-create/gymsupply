"use client";

import { useEffect, useState } from "react";

import { SkewCta } from "@/components/ui/skew-cta";

const navLinks = [
  { href: "#top", label: "Hjem" },
  { href: "#tjenester", label: "Tjenester" },
  { href: "#planlegger", label: "Planlegg gymmet" },
  { href: "#prosjekter", label: "Prosjekter" },
  { href: "#om", label: "Om oss" },
];

function Wordmark() {
  return (
    <a href="#top" className="flex min-h-11 flex-col justify-center gap-0.5 text-paper no-underline">
      <span className="whitespace-nowrap text-[22px] font-black italic leading-none tracking-[0.01em] sm:text-[30px]">
        GYM SUPPLY
      </span>
      <span className="skew-rule h-1 w-10 sm:w-14" />
    </a>
  );
}

/** Three bars that become a cross while the panel is open. */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        {open ? (
          <>
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </>
        ) : (
          <>
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </>
        )}
      </g>
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // The panel covers the page, so Escape needs to get out of it.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 bg-ink/90 backdrop-blur-[10px]">
      <nav
        aria-label="Hovedmeny"
        className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5"
      >
        <Wordmark />

        {/* Full nav, wide screens only. */}
        <div className="hidden items-center gap-[26px] text-sm font-semibold lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-paper no-underline hover:text-brand-light"
            >
              {link.label}
            </a>
          ))}
          <SkewCta href="#kontakt" className="px-[22px] py-3">
            Book befaring
          </SkewCta>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="hidden min-[400px]:block">
            <SkewCta href="#kontakt" withArrow={false} className="px-4 py-2.5 text-[13px]">
              Book befaring
            </SkewCta>
          </div>

          <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobilmeny"
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          className="flex size-11 cursor-pointer items-center justify-center border-0 bg-transparent text-paper"
        >
          <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      {/* Collapsed menu. Hidden from assistive tech when closed. */}
      <div
        id="mobilmeny"
        hidden={!open}
        className="border-t border-line bg-ink px-5 pb-6 pt-2 lg:hidden"
      >
        <ul className="m-0 flex list-none flex-col p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-line text-base font-semibold text-paper no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <SkewCta
          href="#kontakt"
          className="mt-5 px-[22px] py-3"
          onClick={() => setOpen(false)}
        >
          Book befaring
        </SkewCta>
      </div>
    </header>
  );
}
