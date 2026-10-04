export interface GalleryItem {
  id: string;
  title: string;
  category: "Exterior & Signage" | "Operatory & Technology" | "Reception & Ambience";
  image: string;
  alt: string;
  description: string;
}

export const CLINIC_GALLERY: GalleryItem[] = [
  {
    id: "exterior-sign",
    title: "Clinic Storefront & Illuminated Signboard",
    category: "Exterior & Signage",
    image: "/images/dental/clinic-exterior-sign.jpg",
    alt: "Jaksh's Dental Junction illuminated clinic signboard and storefront at Mogappair East, Chennai",
    description:
      "Brightly lit exterior storefront on Valayapathi Salai displaying the clinic motto 'Where dentistry & kindness meet', phone contact, and clinic timings.",
  },
  {
    id: "clinic-entrance",
    title: "Welcoming Glass Entrance & Glow Logo",
    category: "Exterior & Signage",
    image: "/images/dental/clinic-entrance.jpg",
    alt: "Jaksh's Dental Junction illuminated pedestal logo and glass entrance door",
    description:
      "Modern glass entrance featuring the custom illuminated oval branding pedestal and clean, welcoming threshold.",
  },
  {
    id: "operatory-chair",
    title: "Modern Dental Operatory & Sterilization Hub",
    category: "Operatory & Technology",
    image: "/images/dental/clinic-operatory.jpg",
    alt: "High-tech dental chair, surgical spotlight, and sterilized clinical cabinetry at Jaksh's Dental Junction",
    description:
      "State-of-the-art ergonomic dental treatment chair with precision LED lighting, modern X-ray equipment, and hygienic storage.",
  },
  {
    id: "consultation-desk",
    title: "Doctor Consultation Desk & Educational Models",
    category: "Operatory & Technology",
    image: "/images/dental/clinic-consultation-desk.jpg",
    alt: "Doctor consultation desk with tooth anatomy models, TNDC certifications, and patient education guides",
    description:
      "Private consultation station equipped with detailed anatomical models, dental council credentials, and treatment guides.",
  },
  {
    id: "shark-divider",
    title: "Pediatric-Friendly Shark Mural & Divider",
    category: "Reception & Ambience",
    image: "/images/dental/clinic-shark-divider.jpg",
    alt: "Friendly shark dental mural divider creating a welcoming, comforting environment for children and adults",
    description:
      "Playful shark dental partition that eases anxiety for young patients and creates a warm, cheerful treatment environment.",
  },
  {
    id: "waiting-lounge",
    title: "Comfortable Patient Reception & Lounge",
    category: "Reception & Ambience",
    image: "/images/dental/clinic-waiting-lounge.jpg",
    alt: "Patient waiting lounge with plush leather sofa, indoor green plants, and ambient lighting",
    description:
      "Air-conditioned waiting area with comfortable leather seating, natural indoor greenery, and a relaxing atmosphere.",
  },
  {
    id: "tooth-ceiling-light",
    title: "Custom Tooth-Shaped Backlit Ceiling Design",
    category: "Reception & Ambience",
    image: "/images/dental/clinic-ceiling-tooth-light.jpg",
    alt: "Artistic tooth-shaped ambient backlit ceiling fixture with warm green glow",
    description:
      "Architectural ceiling installation designed in the silhouette of a tooth with warm ambient illumination and signature green accents.",
  },
];
