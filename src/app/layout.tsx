import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/data/constructionData";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090a0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Haridass Construction | Builders & Construction Company in Chennai",
  description:
    "Haridass Construction provides quality construction services in Ambattur, Chennai, with a focus on reliable service, quality materials and professional workmanship.",
  keywords: [
    "Haridass Construction",
    "Builders in Ambattur Chennai",
    "Construction Company Ambattur",
    "Real Estate Builders Chennai",
    "Residential Construction Chennai",
    "Civil Contractors Ambattur",
    "Commercial Building Construction Chennai",
    "Building Renovation Chennai",
    "Kallikuppam Builders",
  ],
  authors: [{ name: "Haridass Construction" }],
  openGraph: {
    title: "Haridass Construction | Builders & Construction Company in Chennai",
    description:
      "Haridass Construction provides quality construction services in Ambattur, Chennai, with a focus on reliable service, quality materials and professional workmanship.",
    type: "website",
    locale: "en_IN",
    siteName: "Haridass Construction",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": BUSINESS_INFO.name,
    "description": "Professional construction company focused on quality construction, reliable service, beautiful designs, and high-quality materials.",
    "telephone": BUSINESS_INFO.phoneDisplay,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 48, 4th Street, East Balaji Nagar, Kallikuppam",
      "addressLocality": "Ambattur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600053",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.1197,
      "longitude": 80.1481
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Ambattur"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "21",
      "bestRating": "5"
    }
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${cinzel.variable} font-sans bg-[#090a0c] text-[#f3f3f1] min-h-screen antialiased selection:bg-[#c5a880]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
