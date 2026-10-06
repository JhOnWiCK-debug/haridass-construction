import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { NIVIS_DATA } from "@/data/nivisData";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#153e35",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nivispetclinic.com"),
  title: "Nivis Pet Clinic & Pet Store | Veterinary Care in Thiruverkadu, Chennai",
  description:
    "Compassionate veterinary care and everyday pet essentials in Thiruverkadu, Chennai. Consultations, vaccinations, puppy & kitten care, pet treatment. 5.0 ★ Google Rating.",
  keywords: [
    "Nivis Pet Clinic",
    "Nivis Pet Clinic Thiruverkadu",
    "Nivis Pet Store MGR Nagar",
    "Pet clinic Thiruverkadu",
    "Veterinary clinic Thiruverkadu",
    "Pet doctor Thiruverkadu",
    "Pet store Thiruverkadu",
    "Pet clinic MGR Nagar",
    "Dr Karthika veterinarian",
    "Pet clinic Chennai 600077",
  ],
  authors: [{ name: "Nivis Pet Clinic & Pet Store" }],
  openGraph: {
    title: "Nivis Pet Clinic & Pet Store | Because every pet deserves a little more care.",
    description:
      "Compassionate veterinary care and everyday pet essentials in MGR Nagar, Thiruverkadu, Chennai. 5.0 ★ Google Rating from real pet parents.",
    type: "website",
    locale: "en_IN",
    siteName: "Nivis Pet Clinic & Pet Store",
    images: [
      {
        url: "/images/nivis/hero-vet-care.jpg",
        width: 1200,
        height: 630,
        alt: "Nivis Pet Clinic & Pet Store - Thiruverkadu, Chennai",
      },
    ],
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
    "@type": "VeterinaryCare",
    name: NIVIS_DATA.name,
    description:
      "Nivis Pet Clinic & Pet Store provides compassionate veterinary care and everyday pet essentials for pets in Thiruverkadu, Chennai.",
    telephone: NIVIS_DATA.contact.phone,
    url: "https://nivispetclinic.com",
    image: "/images/nivis/hero-vet-care.jpg",
    priceRange: "₹₹",
    isAccessibleForFree: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${NIVIS_DATA.location.doorNo}, ${NIVIS_DATA.location.landmark}`,
      addressLocality: "Thiruverkadu",
      addressRegion: "Tamil Nadu",
      postalCode: NIVIS_DATA.location.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0694,
      longitude: 80.1246,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:30",
        closes: "21:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "5",
    },
    employee: [
      {
        "@type": "Person",
        name: NIVIS_DATA.doctorMentioned,
        jobTitle: NIVIS_DATA.doctorRole,
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Thiruverkadu" },
      { "@type": "AdministrativeArea", name: "MGR Nagar" },
      { "@type": "AdministrativeArea", name: "Thirumalai Balaji Nagar" },
      { "@type": "City", name: "Chennai" },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${jakarta.variable} font-sans bg-[#faf7f2] text-[#1e242b] min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
