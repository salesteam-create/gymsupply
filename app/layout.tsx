import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { business, siteUrl } from "@/lib/site";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const description =
  "Gym Supply leverer treningsutstyr, planlegging, montering og service til bedrifter, treningssentre, offentlig sektor og hjemmegym i Stavanger-regionen.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gym Supply | Komplette treningsløsninger i Stavanger",
    template: "%s | Gym Supply",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: siteUrl,
    siteName: business.name,
    title: "Gym Supply | Komplette treningsløsninger i Stavanger",
    description,
  },
  robots: { index: true, follow: true },
};

/*
 * Structured data carries only facts checkable in the public company
 * register. No ratings, reviews, prices or response times.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description,
  url: siteUrl,
  foundingDate: business.foundingYear,
  identifier: business.organisationNumber,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    postalCode: business.postalCode,
    addressLocality: business.city,
    addressCountry: business.country,
  },
  areaServed: business.areaServed,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" className={jakarta.variable}>
      <body>
        <a
          href="#innhold"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-lime focus:px-4 focus:py-3 focus:font-semibold focus:text-charcoal"
        >
          Hopp til innholdet
        </a>
        <SiteHeader />
        <main id="innhold">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
