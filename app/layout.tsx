import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Cinzel } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css" with { type: "css" };

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Old Town Camping | Experience the Heart of Berat, Albania",
  description: "Discover Old Town Camping in Berat, Albania. Premium camping experience surrounded by UNESCO heritage sites, ancient castles, and stunning Albanian landscapes.",
  keywords: "camping Berat Albania, Old Town Camping, Berat Castle, Albanian tourism, eco camping, adventure Albania",
  openGraph: {
    title: "Old Town Camping | Berat, Albania",
    description: "Premium camping in the heart of UNESCO-listed Berat, Albania",
    type: "website",
    locale: "en_US",
    siteName: "Old Town Camping",
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Town Camping | Berat, Albania",
    description: "Premium camping in the heart of UNESCO-listed Berat, Albania",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
