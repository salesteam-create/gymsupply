import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { business, siteUrl } from "@/lib/site";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

const description =
  "Gym Supply leverer treningsutstyr, planlegging og montering til bedrifter, offentlig sektor og hjemmegym i Stavanger-regionen. Book befaring.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gym Supply | Treningsutstyr og komplette treningsrom i Stavanger",
    template: "%s | Gym Supply",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: siteUrl,
    siteName: business.name,
    title: "Gym Supply | Treningsutstyr og komplette treningsrom i Stavanger",
    description,
  },
  twitter: { card: "summary_large_image", title: business.name, description },
  robots: { index: true, follow: true },
};

/*
 * Structured data. Only facts that can be checked in the public company
 * register or on the company's own site. No ratings, reviews, prices or
 * claims about response times.
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
    <html lang="nb" className={poppins.variable}>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand focus:px-4 focus:py-3 focus:text-paper"
        >
          Hopp til innholdet
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
