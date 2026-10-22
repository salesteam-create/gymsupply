import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gym Supply – Vi bygger rom folk vil trene i",
  description:
    "Utstyr, montering og rådgivning for bedrifter, offentlig sektor og private hjemmegym. Stavanger, siden 2012.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
