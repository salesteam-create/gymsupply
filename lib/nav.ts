export type NavChild = { href: string; label: string; blurb: string };
export type NavItem = { href: string; label: string; children?: NavChild[] };

/**
 * Main navigation. Dropdown entries deep-link to real anchors that exist
 * today; when the segment landing pages are built, only these hrefs change.
 */
export const mainNav: NavItem[] = [
  {
    href: "/#losninger",
    label: "Løsninger",
    children: [
      {
        href: "/#bedriftsgym",
        label: "Bedriftsgym",
        blurb: "Trening på arbeidsplassen",
      },
      {
        href: "/#treningssentre",
        label: "Treningssentre",
        blurb: "Komplette kommersielle anlegg",
      },
      {
        href: "/#offentlig",
        label: "Offentlig sektor",
        blurb: "Skoler, kommuner og institusjoner",
      },
      { href: "/#hjemmegym", label: "Hjemmegym", blurb: "Løsninger for hjemmet" },
    ],
  },
  {
    href: "/tjenester",
    label: "Tjenester",
    children: [
      {
        href: "/tjenester#befaring",
        label: "Befaring og rådgivning",
        blurb: "Vi starter med rommet",
      },
      {
        href: "/tjenester#planlegging",
        label: "Planlegging og utstyrsvalg",
        blurb: "Forslag tilpasset bruken",
      },
      {
        href: "/tjenester#levering",
        label: "Levering og montering",
        blurb: "Ferdig montert på plass",
      },
      {
        href: "/tjenester#service",
        label: "Service og oppfølging",
        blurb: "Vi blir med videre",
      },
    ],
  },
  { href: "/prosjekter", label: "Prosjekter" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];
