/**
 * Data behind the "Planlegg gymmet ditt" planner. Picking a segment and a room
 * size resolves to a list of zones that make up the example layout.
 */

export type SegmentId = "bedrift" | "offentlig" | "hjem";
export type SizeId = "s" | "m" | "l";

export type Segment = {
  id: SegmentId;
  label: string;
  sub: string;
  line: string;
  cta: string;
};

export type RoomSize = {
  id: SizeId;
  label: string;
  range: string;
  /** Lower-case form used inside the plan title, e.g. "Bedrift, middels rom". */
  name: string;
};

export type Zone = {
  name: string;
  desc: string;
};

export const segments: Segment[] = [
  {
    id: "bedrift",
    label: "Bedrift",
    sub: "Gym for ansatte",
    line: "Bedriftsgym ansatte faktisk bruker, planlagt etter plass, antall brukere og budsjett.",
    cta: "Book befaring for bedrift",
  },
  {
    id: "offentlig",
    label: "Offentlig",
    sub: "Skoler, kommuner, etater",
    line: "Robuste løsninger for skoler, kommuner og etater som tåler daglig bruk av mange.",
    cta: "Be om tilbud",
  },
  {
    id: "hjem",
    label: "Hjemmegym",
    sub: "Kjeller, garasje, stue",
    line: "Hjemmegym i kjeller, garasje eller stue, med riktig utstyr for rommet du har.",
    cta: "Planlegg hjemmegymmet",
  },
];

export const roomSizes: RoomSize[] = [
  { id: "s", label: "Lite rom", range: "under 30 m²", name: "lite rom" },
  { id: "m", label: "Middels rom", range: "30 til 80 m²", name: "middels rom" },
  { id: "l", label: "Stort rom", range: "over 80 m²", name: "stort rom" },
];

const zones = {
  kond: {
    name: "Kondisjon",
    desc: "Tredemølle, sykkel eller romaskin for oppvarming og utholdenhet.",
  },
  fri: {
    name: "Frivekter",
    desc: "Manualer, benk og stativ. Mye trening på liten plass.",
  },
  app: {
    name: "Styrkeapparater",
    desc: "Trygge, guidede maskiner som passer nybegynnere.",
  },
  rack: {
    name: "Rack og vektstang",
    desc: "Kraftstativ med plater for tung styrketrening.",
  },
  funk: {
    name: "Funksjonell sone",
    desc: "Gulvflate for kettlebells, slynger og gruppetimer.",
  },
  toy: {
    name: "Uttøyning og mobilitet",
    desc: "Matter, ruller og rolig sone for restitusjon.",
  },
  robust: {
    name: "Slitesterkt gulv",
    desc: "Gummigulv som tåler høy belastning og mange brukere.",
  },
  oppb: {
    name: "Oppbevaring",
    desc: "Ryddige stativer og vegger som holder rommet trygt.",
  },
} satisfies Record<string, Zone>;

type ZoneKey = keyof typeof zones;

const plans: Record<SegmentId, Record<SizeId, ZoneKey[]>> = {
  bedrift: {
    s: ["kond", "fri", "toy"],
    m: ["kond", "app", "fri", "toy"],
    l: ["kond", "app", "rack", "funk", "toy", "oppb"],
  },
  offentlig: {
    s: ["kond", "fri", "robust"],
    m: ["kond", "app", "funk", "robust"],
    l: ["kond", "app", "rack", "funk", "robust", "oppb"],
  },
  hjem: {
    s: ["rack", "fri", "toy"],
    m: ["rack", "fri", "kond", "toy"],
    l: ["rack", "fri", "kond", "funk", "toy", "oppb"],
  },
};

export function getSegment(id: SegmentId): Segment {
  return segments.find((segment) => segment.id === id) ?? segments[0];
}

export function getRoomSize(id: SizeId): RoomSize {
  return roomSizes.find((size) => size.id === id) ?? roomSizes[0];
}

export function getPlanZones(segment: SegmentId, size: SizeId): Zone[] {
  return plans[segment][size].map((key) => zones[key]);
}

export function getPlanTitle(segment: SegmentId, size: SizeId): string {
  return `${getSegment(segment).label}, ${getRoomSize(size).name}`;
}
