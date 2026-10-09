import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { CLINIC_INFO } from "@/data/clinicInfo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#29483A",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jakshsdentaljunction.com"),
  title: "Jaksh's Dental Junction | Dental Care in Mogappair East, Chennai",
  description:
    "Thoughtful dental care for individuals and families in Mogappair East, Chennai. Led by Dr. Krishnapriya G alongside experienced consultant specialists. Where dentistry & kindness meet.",
  keywords: [
    "Jaksh's Dental Junction",
    "Dentist in Mogappair East",
    "Dental clinic in Mogappair",
    "Dental care in Chennai",
    "Dentist in Chennai",
    "Dr Krishnapriya G",
    "Rotary Endodontist Chennai",
    "Dental clinic Valayapathi Salai",
    "Orthodontist Mogappair",
    "Dental Implants Chennai",
  ],
  authors: [{ name: "Jaksh's Dental Junction" }],
  openGraph: {
    title: "Jaksh's Dental Junction | Dental Care in Mogappair East, Chennai",
    description:
      "Gentle dentistry. Thoughtfully done. Explore treatments, meet the team, and find our clinic on Valayapathi Salai, Mogappair East.",
    type: "website",
    locale: "en_IN",
    siteName: "Jaksh's Dental Junction",
    images: [
      {
        url: "/images/dental/clinic-official-logo.jpg",
        width: 800,
        height: 800,
        alt: "Jaksh's Dental Junction Logo",
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
    "@type": "Dentist",
    name: CLINIC_INFO.name,
    description:
      "Jaksh's Dental Junction is an independent dental clinic on Valayapathi Salai, Mogappair East, Chennai. Gentle dentistry delivered with attention, clarity and kindness.",
    telephone: CLINIC_INFO.phoneDisplay,
    url: "https://jakshsdentaljunction.com",
    image: "https://jakshsdentaljunction.com/images/dental/clinic-official-logo.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_INFO.address.street,
      addressLocality: CLINIC_INFO.address.area,
      addressRegion: CLINIC_INFO.address.state,
      postalCode: CLINIC_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0888998,
      longitude: 80.1764654,
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
        ],
        opens: "17:00",
        closes: "20:30",
      },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "AdministrativeArea", name: "Mogappair East" },
      { "@type": "AdministrativeArea", name: "Mogappair West" },
      { "@type": "AdministrativeArea", name: "Anna Nagar" },
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
        className={`${cormorant.variable} ${dmSans.variable} font-sans bg-[#F8F6F0] text-[#29342D] min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
