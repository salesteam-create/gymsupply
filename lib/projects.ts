export type Project = {
  slug: string;
  title: string;
  /** Customer or organisation, only with their permission to be named. */
  client?: string;
  location?: string;
  category: string;
  /** What the customer needed. */
  brief: string;
  /** What was delivered. */
  delivered: string;
  photo?: string;
  photoAlt?: string;
  /** Marks the one shown in the spotlight section. */
  featured?: boolean;
};

/**
 * Verified projects only.
 *
 * Gym Supply states it has "erfaring fra flere prosjekter i regionen", but
 * publishes no named projects, photographs or outcomes, so there is nothing
 * here to carry over. Each entry needs the customer's permission to be named,
 * photographs of the finished room, and enough detail to be useful to someone
 * with a similar space.
 *
 * While this is empty the spotlight and gallery render an honest alternative
 * rather than placeholder cards. Never add an invented customer or outcome.
 */
export const projects: Project[] = [];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];
