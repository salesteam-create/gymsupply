const shortcuts = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#planlegger", label: "Planlegg gymmet" },
  { href: "#prosjekter", label: "Prosjekter" },
  { href: "#om", label: "Om oss" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="bg-paper text-ink">
      <div className="mx-auto grid max-w-shell gap-10 px-gutter pb-8 pt-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-1.5">
          <span className="text-[28px] font-black italic">GYM SUPPLY</span>
          <span className="skew-rule h-1 w-14" />
          <p className="m-0 mt-4 max-w-[34ch] text-sm leading-[1.7] text-body">
            Treningsutstyr, planlegging og montering for bedrifter, offentlig sektor og
            private i Stavanger-regionen.
          </p>
        </div>

        <nav aria-label="Bunnmeny" className="flex flex-col text-sm">
          <h2 className="m-0 mb-1 text-[15px] font-extrabold italic">Snarveier</h2>
          {shortcuts.map((shortcut) => (
            <a
              key={shortcut.href}
              href={shortcut.href}
              className="inline-flex min-h-11 items-center text-ink no-underline hover:text-brand"
            >
              {shortcut.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 text-sm text-body">
          <h2 className="m-0 text-[15px] font-extrabold italic text-ink">Gym Supply AS</h2>
          <address className="not-italic leading-[1.7]">
            Forusparken 32, c/o CrossFit Centrum
            <br />
            4031 Stavanger
          </address>
          <span>[TELEFON] · [E-POST]</span>
          <span>Org.nr. 912 979 113</span>
        </div>
      </div>

      <div className="mx-auto max-w-shell px-gutter">
        <p className="m-0 border-t border-paper-line pb-7 pt-[18px] text-center text-xs text-body">
          © {new Date().getFullYear()} Gym Supply AS
        </p>
      </div>
    </footer>
  );
}
