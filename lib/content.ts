/**
 * Page content kept out of the components so copy can be reviewed in one
 * place. Nothing here claims a capability the business has not confirmed:
 * no delivery times, no customer counts, no certifications.
 */

export type Solution = {
  id: string;
  title: string;
  blurb: string;
  /** Photo of a real installation. See public/solutions/README.md. */
  photo?: string;
  photoAlt?: string;
};

export const solutions: Solution[] = [
  {
    id: "bedriftsgym",
    title: "Bedriftsgym",
    blurb: "Økt trivsel, helse og prestasjon på arbeidsplassen.",
  },
  {
    id: "treningssentre",
    title: "Treningssentre",
    blurb: "Komplette løsninger for kommersielle aktører.",
  },
  {
    id: "hjemmegym",
    title: "Hjemmegym",
    blurb: "Skreddersydde løsninger for ditt hjem.",
  },
  {
    id: "offentlig",
    title: "Offentlig sektor",
    blurb: "Robuste løsninger for skoler, kommuner og institusjoner.",
  },
];

export const pillars = [
  { title: "Skreddersydde løsninger", sub: "Tilpasset dine behov" },
  { title: "Kvalitetsutstyr", sub: "Fra ledende merkevarer" },
  { title: "Planlegging og rådgivning", sub: "Fra idé til ferdig løsning" },
  { title: "Levering og installasjon", sub: "Trygt og profesjonelt" },
];

export const processSteps = [
  {
    id: "befaring",
    number: "01",
    title: "Befaring og behovskartlegging",
    body: "Vi ser på rommet, hvem som skal trene og hva dere vil oppnå. Takhøyde, gulv, adkomst og antall brukere styrer valgene videre.",
  },
  {
    id: "planlegging",
    number: "02",
    title: "Planlegging og utstyrsvalg",
    body: "Vi setter opp et forslag til soner og utstyr som passer plassen og bruken, og justerer det sammen med dere før noe bestilles.",
  },
  {
    id: "levering",
    number: "03",
    title: "Levering og installasjon",
    body: "Vi koordinerer frakt, monterer utstyret på plass og rydder opp etter oss, så rommet er klart til bruk når vi går.",
  },
  {
    id: "service",
    number: "04",
    title: "Service og oppfølging",
    body: "Med serviceavtale følger vi opp utstyret etter levering, så det holder seg trygt og i drift over tid.",
  },
];
