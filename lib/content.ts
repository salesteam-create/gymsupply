/**
 * Page content kept out of the components so copy can be reviewed in one
 * place.
 *
 * Everything here is grounded in what Gym Supply publishes on gymsupply.no
 * (verified 23 October 2026) or in the public company register. No delivery
 * times, customer counts, certifications, prices, brand partnerships or
 * geographic coverage beyond "Stavanger og nærområdene" appear anywhere.
 */

export type Solution = {
  id: string;
  title: string;
  /** The situation this customer is actually in. */
  need: string;
  blurb: string;
  photo?: string;
  photoAlt?: string;
};

export const solutions: Solution[] = [
  {
    id: "bedriftsgym",
    title: "Bedriftsgym",
    need: "Begrenset areal som skal gi mest mulig tilbake til de ansatte.",
    blurb:
      "Vi finner kombinasjonen som dekker flest behov på den plassen dere faktisk har, uten at rommet blir trangt å bruke.",
  },
  {
    id: "treningssentre",
    title: "Treningssentre",
    need: "Riktig balanse mellom utstyr, kapasitet og flyt i lokalet.",
    blurb:
      "Utstyr valgt etter hvor mange som trener samtidig, og plassert slik at sonene ikke konkurrerer om det samme gulvet.",
  },
  {
    id: "offentlig",
    title: "Offentlig sektor",
    need: "Robuste rom som tåler mange brukere over tid.",
    blurb:
      "Løsninger for skoler, kommuner og institusjoner, der slitestyrke og trygg bruk veier tyngst.",
  },
  {
    id: "hjemmegym",
    title: "Hjemmegym",
    need: "Et rom hjemme som skal fungere innenfor plass og budsjett.",
    blurb:
      "Kjeller, garasje eller stue. Vi tar hensyn til takhøyde, gulv og adkomst før vi anbefaler utstyr.",
  },
];

/** The four services Gym Supply lists on gymsupply.no/services. */
export const pillars = [
  { title: "Rådgivning", sub: "Tilpasset plass og bruksbehov" },
  { title: "Skreddersydd utstyr", sub: "Nøye utvalgt for ditt rom" },
  { title: "Installasjon og montering", sub: "Erfaring fra prosjekter i regionen" },
  { title: "Serviceavtale", sub: "Oppfølging før og etter prosjektet" },
];

export const processSteps = [
  {
    id: "behovskartlegging",
    number: "01",
    title: "Behovskartlegging",
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
    title: "Levering og montering",
    body: "Vi koordinerer frakt og monterer utstyret på plass, så rommet er klart til bruk når vi er ferdige.",
  },
  {
    id: "oppfolging",
    number: "04",
    title: "Oppfølging",
    body: "Med serviceavtale følger vi opp utstyret etter levering, med personlig oppfølging før og etter prosjektet.",
  },
];

/** Section 04: what actually decides whether a training room works. */
export const planningFactors = [
  {
    title: "Hvem som skal bruke rommet",
    body: "Nybegynnere, ansatte i arbeidstiden og erfarne løftere trenger ulikt utstyr. Brukergruppen avgjør hva som bør stå der.",
  },
  {
    title: "Hvor mange som trener samtidig",
    body: "Et rom for to om gangen planlegges annerledes enn et rom for tolv. Kapasitet avgjør hvor mange stasjoner som gir mening.",
  },
  {
    title: "Plassen rommet faktisk har",
    body: "Takhøyde, gulv og adkomst setter rammene. Et rack krever høyde, og tungt utstyr krever et gulv som tåler det.",
  },
  {
    title: "Hvordan folk beveger seg",
    body: "Utstyr som står feil gjør rommet tregt å bruke. Avstand mellom stasjoner avgjør om alt kan brukes samtidig.",
  },
];

/** Section 08: what we help select. Not a catalogue, and no prices. */
export const equipmentCategories = [
  { title: "Kondisjonsutstyr", body: "Tredemølle, sykkel og romaskin for oppvarming og utholdenhet." },
  { title: "Styrkeapparater", body: "Guidede maskiner som er trygge for nybegynnere og store brukergrupper." },
  { title: "Frivekter", body: "Manualer, kettlebells og tilhørende stativ. Mye trening på liten plass." },
  { title: "Rack, stativ og benker", body: "Kraftstativ, vektstang og benker for tung styrketrening." },
  { title: "Treningsgulv", body: "Gummigulv og underlag som tåler belastning og demper støy." },
  { title: "Funksjonell trening", body: "Gulvflate og utstyr for slynger, kettlebells og gruppetimer." },
  { title: "Oppbevaring og tilbehør", body: "Stativer og vegger som holder rommet ryddig og trygt å bevege seg i." },
];

/** Section 09. */
export const valueThemes = [
  {
    number: "01",
    title: "Riktig utstyr til riktig bruk",
    body: "Utstyr som passer brukerne blir brukt. Vi velger etter hvem som skal trene og hva de skal få ut av det, ikke etter hva som ser mest imponerende ut i et rom.",
  },
  {
    number: "02",
    title: "Bedre utnyttelse av plassen",
    body: "De fleste rom har mer kapasitet enn de ser ut til. Plassering, sonedeling og riktig kombinasjon av stasjoner avgjør hvor mye rommet faktisk gir.",
  },
  {
    number: "03",
    title: "En oversiktlig prosess",
    body: "Rådgivning, utstyr, levering og montering gjennom én leverandør. Dere slipper å koordinere flere aktører eller være mellomledd mellom dem.",
  },
];

/**
 * Section 13. Every answer is supported by what the company publishes.
 * Questions we cannot answer from verified sources are left out rather than
 * guessed at — see README for the ones still awaiting confirmation.
 */
export const faqs = [
  {
    q: "Hvordan kommer jeg i gang med et nytt treningsrom?",
    a: "Ta kontakt og fortell kort om rommet og hva det skal brukes til. Vi avtaler en befaring, ser på plassen sammen med dere og lager et forslag til oppsett og utstyr derfra.",
  },
  {
    q: "Kan dere hjelpe med planlegging av utstyr og areal?",
    a: "Ja. Rådgivning er en av hovedtjenestene våre. Vi tar hensyn til tilgjengelig plass og bruksbehov når vi anbefaler utstyr og plassering.",
  },
  {
    q: "Hvilken informasjon trenger dere for å foreslå en løsning?",
    a: "Omtrentlig størrelse på rommet, takhøyde, hva slags gulv det har, hvem som skal trene og omtrent hvor mange som bruker rommet samtidig. Vet dere ikke alt, finner vi ut av det på befaringen.",
  },
  {
    q: "Kan dere hjelpe med å oppgradere et eksisterende treningsrom?",
    a: "Ja. Mange prosjekter handler om å bytte ut eller supplere utstyr i et rom som allerede er i bruk, ikke om å bygge noe nytt fra bunnen.",
  },
  {
    q: "Tilbyr dere levering og montering?",
    a: "Ja. Vi leverer og monterer utstyret, og har erfaring fra flere prosjekter i regionen. Levering og installasjon er en del av det vi tilbyr, ikke noe dere må ordne selv.",
  },
  {
    q: "Hvilke områder leverer dere til?",
    a: "Vi prioriterer lokal tilstedeværelse i Stavanger og nærområdene, slik at vi kan møte kundene ansikt til ansikt og følge hvert prosjekt til det er ferdig.",
  },
  {
    q: "Hva skjer etter at jeg sender en forespørsel?",
    a: "Vi tar kontakt for å forstå rommet og behovet, avtaler en befaring, og lager et forslag til oppsett og utstyr sammen med dere.",
  },
];
