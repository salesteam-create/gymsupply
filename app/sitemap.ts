import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1 },
  { path: "/tjenester", priority: 0.8 },
  { path: "/prosjekter", priority: 0.8 },
  { path: "/om-oss", priority: 0.6 },
  { path: "/kontakt", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
