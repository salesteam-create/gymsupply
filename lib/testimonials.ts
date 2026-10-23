export type Testimonial = {
  quote: string;
  attribution: string;
};

/**
 * Published by Gym Supply on gymsupply.no. Verified against the live site on
 * 23 October 2026 — these are the company's own customer quotes, not examples.
 *
 * Note: the portraits beside them on the current site are WordPress theme
 * placeholders, not photographs of these customers, so no portrait is carried
 * over here. Add real ones only if the customers agree to be photographed.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Gym Supply forvandlet hjemmet mitt til et topp moderne treningsstudio. Utstyrskvaliteten er fantastisk og servicen bedre enn forventet.",
    attribution: "Kristian Nordahl",
  },
  {
    quote:
      "Jeg anbefaler Gym Supply til alle som ønsker et profesjonelt treningsmiljø. De var utrolig hjelpsomme fra start til slutt.",
    attribution: "Maria Johansen",
  },
  {
    quote:
      "Flott service og utstyr som imøtekommer alle mine behov. Takk til Gym Supply for deres dedikasjon og støtte.",
    attribution: "Anne Lie",
  },
];
