import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CLINIC_INFO } from "@/data/clinicInfo";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#16a34a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jakshsdentaljunction.com"),
  title: "Jaksh's Dental Junction | Dental Care in Mogappair East, Chennai",
  description:
    "Jaksh's Dental Junction is a premier women-owned dental clinic on Valayapathi Salai, Mogappair East, Chennai, led by Dr. Krishnapriya G (Rotary Endodontist with 12 years clinical practice). Specialist dental care where dentistry and kindness meet.",
  keywords: [
    "Jaksh's Dental Junction",
    "Dentist in Mogappair East",
    "Dental clinic in Mogappair",
    "Dentist in Chennai",
    "Dental care in Mogappair East",
    "Dr Krishnapriya G",
    "Root canal specialist Mogappair",
    "Orthodontist Mogappair",
    "Dental implants Chennai",
    "Women owned dental clinic Chennai",
    "Dentist Valayapathi Salai",
  ],
  authors: [{ name: "Jaksh's Dental Junction" }, { name: "Dr. Krishnapriya G" }],
  openGraph: {
    title: "Jaksh's Dental Junction | Dental Care in Mogappair East, Chennai",
    description:
      "Professional, gentle dental care in Mogappair East, Chennai. Led by Dr. Krishnapriya G with a team of specialist consultant doctors. Where dentistry and kindness meet.",
    type: "website",
    locale: "en_IN",
    siteName: "Jaksh's Dental Junction",
    images: [
      {
        url: "/images/dental/clinic-exterior-sign.jpg",
        width: 1200,
        height: 630,
        alt: "Jaksh's Dental Junction - Mogappair East, Chennai",
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
      "Jaksh's Dental Junction is a patient-centric, women-owned dental clinic in Mogappair East, Chennai, founded by Rotary Endodontist Dr. Krishnapriya G. Providing specialist root canals, implants, orthodontics, restorations, and preventive care.",
    telephone: CLINIC_INFO.phoneDisplay,
    url: "https://jakshsdentaljunction.com",
    image: "/images/dental/clinic-exterior-sign.jpg",
    founder: {
      "@type": "Person",
      name: "Dr. Krishnapriya G",
      jobTitle: "Founder & Chief Dentist",
      honorificPrefix: "Dr.",
      award: "Anbu Maruthuvar Awardee",
    },
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
      {
        "@type": "City",
        name: "Chennai",
      },
      {
        "@type": "AdministrativeArea",
        name: "Mogappair East",
      },
      {
        "@type": "AdministrativeArea",
        name: "Mogappair West",
      },
      {
        "@type": "AdministrativeArea",
        name: "Anna Nagar",
      },
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
        className={`${jakarta.variable} font-sans bg-[#fbfdfb] text-slate-800 min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
