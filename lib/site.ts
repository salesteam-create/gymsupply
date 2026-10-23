/**
 * Facts that appear in metadata, structured data and contact routes.
 * Everything here is checkable in the public company register; unverified
 * details stay null rather than being guessed at.
 *
 * Fill phone and email in and the site renders real tel: and mailto: links
 * everywhere. While they are null those routes are omitted entirely, because
 * showing a visitor a placeholder costs more trust than showing nothing.
 */

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath =
  process.env.GITHUB_PAGES === "true" && repository ? `/${repository}` : "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://salesteam-create.github.io${basePath}`;

export const business = {
  name: "Gym Supply AS",
  /** The company states 2012; the register records registration in 2013. */
  foundingYear: "2012",
  organisationNumber: "912979113",
  street: "Forusparken 32, c/o CrossFit Centrum",
  postalCode: "4031",
  city: "Stavanger",
  country: "NO",
  areaServed: "Stavanger-regionen",

  /** Set these to publish working contact routes. See README. */
  phone: null as string | null,
  email: null as string | null,
} as const;

/** Digits only, for the href on a tel: link. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export const hasDirectContact = Boolean(business.phone || business.email);
