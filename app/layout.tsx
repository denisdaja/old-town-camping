import type { Metadata } from "next";
import "./globals.css" with { type: "css" };

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Cinzel:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
