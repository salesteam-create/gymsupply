const shortcuts = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#prosjekter", label: "Prosjekter" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="bg-paper text-ink">
      <div className="mx-auto flex max-w-shell flex-wrap justify-between gap-10 px-5 pb-8 pt-12 sm:px-8 sm:pt-16">
        <div className="flex flex-col gap-1.5">
          <span className="text-[28px] font-black italic">GYM SUPPLY</span>
          <span className="skew-rule h-1 w-14" />
        </div>

        <div className="flex flex-col text-sm">
          <h2 className="m-0 text-[15px] font-extrabold italic">Snarveier</h2>
          {shortcuts.map((shortcut) => (
            <a
              key={shortcut.href}
              href={shortcut.href}
              className="inline-flex min-h-11 items-center text-ink no-underline hover:text-brand"
            >
              {shortcut.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 text-sm text-body">
          <h2 className="m-0 text-[15px] font-extrabold italic text-ink">Gym Supply AS</h2>
          <span>[ADRESSE], Stavanger</span>
          <span>[TELEFON] · [E-POST]</span>
          <span>Org.nr [ORG.NR]</span>
        </div>
      </div>

      <p className="m-0 border-t border-paper-line px-5 pb-7 pt-[18px] text-center text-xs text-body sm:px-8">
        © 2026 Gym Supply AS
      </p>
    </footer>
  );
}
