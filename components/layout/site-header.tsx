"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { mainNav } from "@/lib/nav";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMenu && !drawer) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setDrawer(false);
      }
    }
    function onClick(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu, drawer]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]) && href !== "/#losninger";

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-line/70 bg-charcoal/95 text-paper backdrop-blur-md">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-gutter py-3.5">
        <Logo />

        <div ref={navRef} className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu(openMenu === item.label ? null : item.label)
                  }
                  className="flex min-h-11 cursor-pointer items-center gap-1.5 border-0 bg-transparent px-3.5 text-[0.9375rem] font-medium text-paper transition-colors hover:text-lime"
                >
                  {item.label}
                  <Chevron open={openMenu === item.label} />
                </button>

                {openMenu === item.label ? (
                  <div className="absolute left-0 top-full w-[19rem] border border-charcoal-line bg-charcoal-soft p-2 shadow-2xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenMenu(null)}
                        className="block px-3.5 py-3 no-underline transition-colors hover:bg-charcoal"
                      >
                        <span className="block text-[0.9375rem] font-semibold text-paper">
                          {child.label}
                        </span>
                        <span className="mt-0.5 block text-[0.8125rem] text-mist">
                          {child.blurb}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpenMenu(null)}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={`flex min-h-11 items-center px-3.5 text-[0.9375rem] font-medium no-underline transition-colors hover:text-lime ${
                  isCurrent(item.href) ? "text-lime" : "text-paper"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden min-[420px]:block">
            <Button href="/kontakt" className="px-5 py-2.5 text-sm">
              Book befaring
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setDrawer((value) => !value)}
            aria-expanded={drawer}
            aria-controls="mobilmeny"
            aria-label={drawer ? "Lukk meny" : "Åpne meny"}
            className="flex size-11 cursor-pointer items-center justify-center border-0 bg-transparent text-paper lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {drawer ? (
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
          </button>
        </div>
      </div>

      <div
        id="mobilmeny"
        hidden={!drawer}
        className="border-t border-charcoal-line bg-charcoal px-gutter pb-7 pt-2 lg:hidden"
      >
        <ul className="m-0 flex list-none flex-col p-0">
          {mainNav.map((item) => (
            <li key={item.label} className="border-b border-charcoal-line/70">
              <Link
                href={item.href}
                onClick={() => setDrawer(false)}
                className="flex min-h-[3.25rem] items-center text-base font-semibold text-paper no-underline"
              >
                {item.label}
              </Link>
              {item.children ? (
                <ul className="m-0 list-none pb-2 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => setDrawer(false)}
                        className="flex min-h-11 items-center text-sm text-mist no-underline"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
        <Button href="/kontakt" onClick={() => setDrawer(false)} className="mt-6 w-full">
          Book befaring
        </Button>
      </div>
    </header>
  );
}
