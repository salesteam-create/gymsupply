export type Testimonial = {
  /** The customer's own words, published with their permission. */
  quote: string;
  /** Who said it: name, role and organisation. */
  attribution: string;
};

/**
 * Verified testimonials only. Each one needs the customer's permission to be
 * quoted and named.
 *
 * While this is empty the testimonial section does not render at all. That is
 * deliberate: an empty quote frame or an example quote reads as either broken
 * or invented, and both cost more trust than leaving it out.
 */
export const testimonials: Testimonial[] = [];
