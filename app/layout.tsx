import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Cinzel } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
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
  metadataBase: new URL("https://oldtowncampingberat.com"),
  title: "Old Town Camping Berat | Camping në Berat, Shqipëri",
  description: "Old Town Camping Berat – kampingu më i mirë në Berat, Shqipëri. Eksploroni kalanë e Beratit, trashëgiminë UNESCO dhe peizazhet mahnitëse. Camping Berat Albania.",
  keywords: "camping Berat, camping Berat Albania, kamp Berat, kampim Berat, Old Town Camping, Berat camping, camping Shqipëri, Berat Castle camping, eco camping Albania, adventure Albania, glamping Berat, tent camping Berat",
  alternates: {
    canonical: "https://oldtowncampingberat.com",
  },
  openGraph: {
    title: "Old Town Camping Berat | Camping në Berat, Shqipëri",
    description: "Kampingu më i mirë në Berat – pranë Kalasë UNESCO. Reservoni tani!",
    type: "website",
    url: "https://oldtowncampingberat.com",
    locale: "en_US",
    siteName: "Old Town Camping Berat",
    images: [
      {
        url: "/camp_photo1.jpg",
        width: 1200,
        height: 630,
        alt: "Old Town Camping Berat Albania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Town Camping Berat | Camping në Berat, Shqipëri",
    description: "Kampingu më i mirë në Berat – pranë Kalasë UNESCO. Reservoni tani!",
    images: ["/camp_photo1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Campground",
  name: "Old Town Camping Berat",
  description:
    "Premium camping experience in the heart of UNESCO-listed Berat, Albania. Surrounded by ancient castles and stunning Albanian landscapes.",
  url: "https://oldtowncampingberat.com",
  telephone: "+35568 421 1666",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berat",
    addressCountry: "AL",
    addressRegion: "Berat County",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7058,
    longitude: 19.9522,
  },
  image: "https://oldtowncampingberat.com/camp_photo1.jpg",
  priceRange: "$$",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Tent Camping", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Shower Facilities", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant/Bar", value: true },
  ],
  sameAs: [
    "https://www.facebook.com/oldtowncampingberat",
    "https://www.instagram.com/oldtowncampingberat",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  );
}
