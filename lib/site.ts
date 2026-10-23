/**
 * Facts that appear in metadata and structured data. Everything here is
 * checkable in the public company register; unverified details stay out.
 * See README for what the business still needs to confirm.
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
} as const;
