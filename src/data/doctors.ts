export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: "founder" | "consultant";
  specialty: string;
  qualifications?: string;
  experience?: string;
  awards?: string[];
  certifications?: string[];
  image?: string;
  hasPhoto: boolean;
  location: string;
  bioSummary: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "dr-krishnapriya",
    name: "Dr. Krishnapriya G",
    title: "Founder & Chief Dentist",
    role: "founder",
    specialty: "Rotary Endodontist",
    qualifications: "IDA Certified | Clinical Research Professional",
    experience: "12 Years of Clinical Practice",
    awards: ["Anbu Maruthuvar Awardee"],
    certifications: ["IDA Certified", "Clinical Research Professional"],
    image: "/images/dental/dr-krishnapriya.png",
    hasPhoto: true,
    location: "Chennai",
    bioSummary:
      "Founder and Chief Dentist at Jaksh's Dental Junction with 12 years of clinical practice in Chennai. Specialized Rotary Endodontist, IDA Certified, Clinical Research Professional, and Anbu Maruthuvar Awardee dedicated to compassionate and precise dental care.",
  },
  {
    id: "dr-shankar-guhan",
    name: "Dr. Shankar Guhan",
    title: "Consultant Specialist",
    role: "consultant",
    specialty: "Oral & Maxillofacial Surgeon & Implantologist",
    image: "/images/dental/dr-shankar-guhan.jpg",
    hasPhoto: true,
    location: "Chennai",
    bioSummary:
      "Specialist Consultant in Oral & Maxillofacial Surgery and Dental Implantology, providing advanced surgical extractions, dental implants, and facial trauma solutions.",
  },
  {
    id: "dr-preethi",
    name: "Dr. Preethi",
    title: "Consultant Specialist",
    role: "consultant",
    specialty: "Orthodontics & Dentofacial Orthopedics",
    image: "/images/dental/dr-preethi.jpg",
    hasPhoto: true,
    location: "Chennai",
    bioSummary:
      "Specialist Consultant in Orthodontics & Dentofacial Orthopedics, focusing on smile alignment, braces, clear aligners, and bite correction for patients of all ages.",
  },
  {
    id: "dr-archana",
    name: "Dr. Archana",
    title: "Consultant Specialist",
    role: "consultant",
    specialty: "Periodontist",
    image: undefined,
    hasPhoto: false,
    location: "Chennai",
    bioSummary:
      "Specialist Consultant Periodontist focusing on gum health, treatment of periodontal diseases, specialized gum surgeries, and preventive oral health maintenance.",
  },
  {
    id: "dr-sindhuja",
    name: "Dr. Sindhuja",
    title: "Consultant Specialist",
    role: "consultant",
    specialty: "Pedodontist",
    image: undefined,
    hasPhoto: false,
    location: "Chennai",
    bioSummary:
      "Specialist Consultant Pedodontist dedicated to pediatric oral healthcare, gentle preventive dentistry, and positive dental experiences for infants, children, and teens.",
  },
];
