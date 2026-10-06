import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { VETRI_DATA } from "@/data/vetriData";

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
  themeColor: "#0f4c3a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vetripethospital.com"),
  title: "Vetri Pet Hospital & Pet Clinic | Veterinary Care in Perungudi, Chennai",
  description:
    "Compassionate veterinary treatment and ongoing support for pets in Perungudi, Chennai. General consultations, preventive care, vaccinations, supportive therapy & senior pet care. Open daily until 9 PM.",
  keywords: [
    "Vetri Pet Hospital",
    "Vetri Pet Clinic",
    "Veterinary clinic Perungudi",
    "Pet hospital Perungudi",
    "Veterinary hospital Perungudi Chennai",
    "Pet doctor Perungudi",
    "Veterinary clinic Chennai",
    "Pet hospital near Perungudi",
    "Dr Sandhiya S veterinarian",
    "Dr Ramu veterinarian",
    "Pet clinic Erikarai St Kurinji Nagar",
  ],
  authors: [{ name: "Vetri Pet Hospital & Pet Clinic" }],
  openGraph: {
    title: "Vetri Pet Hospital & Pet Clinic | Professional Treatment. Personal Care.",
    description:
      "Compassionate veterinary treatment and ongoing support for pets in Perungudi, Chennai. 5.0 ★ Google Rating.",
    type: "website",
    locale: "en_IN",
    siteName: "Vetri Pet Hospital & Pet Clinic",
    images: [
      {
        url: "/images/vetri/hero-vet-care.jpg",
        width: 1200,
        height: 630,
        alt: "Vetri Pet Hospital & Pet Clinic - Perungudi, Chennai",
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
    name: VETRI_DATA.name,
    description:
      "Vetri Pet Hospital & Pet Clinic provides compassionate veterinary treatment, preventive wellness, and supportive care for dogs, cats, and pets in Perungudi, Chennai.",
    telephone: VETRI_DATA.phoneFormatted,
    url: "https://vetripethospital.com",
    image: "/images/vetri/hero-vet-care.jpg",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: VETRI_DATA.address.line1,
      addressLocality: VETRI_DATA.address.area,
      addressRegion: VETRI_DATA.address.state,
      postalCode: VETRI_DATA.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9654,
      longitude: 80.2464,
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
        opens: "09:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "6",
    },
    employee: [
      {
        "@type": "Person",
        name: "Dr. Sandhiya. S",
        jobTitle: "Veterinary Physician & Surgeon",
      },
      {
        "@type": "Person",
        name: "Dr. Ramu",
        jobTitle: "Veterinary Physician",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Perungudi" },
      { "@type": "AdministrativeArea", name: "Kurinji Nagar" },
      { "@type": "AdministrativeArea", name: "Kandanchavadi" },
      { "@type": "AdministrativeArea", name: "Thoraipakkam" },
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
        className={`${cormorant.variable} ${jakarta.variable} font-sans bg-[#faf8f5] text-[#11161b] min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
