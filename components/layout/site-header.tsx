import { SkewCta } from "@/components/ui/skew-cta";

const navLinks = [
  { href: "#top", label: "Hjem" },
  { href: "#tjenester", label: "Tjenester" },
  { href: "#planlegger", label: "Planlegg gymmet" },
  { href: "#prosjekter", label: "Prosjekter" },
  { href: "#om", label: "Om oss" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-ink/90 backdrop-blur-[10px]">
      <nav
        aria-label="Hovedmeny"
        className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-[18px] px-8 py-5"
      >
        <a href="#top" className="flex flex-col gap-0.5 text-paper no-underline">
          <span className="text-[30px] font-black italic leading-none tracking-[0.01em]">
            GYM SUPPLY
          </span>
          <span className="skew-rule h-1 w-14" />
        </a>

        <div className="flex flex-wrap items-center gap-[26px] text-sm font-semibold">
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
      </nav>
    </header>
  );
}
