export interface TeamMember {
  id: string;
  name: string;
  role: "Chief Dentist" | "Specialist Consultant" | "Clinical Staff";
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

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-krishnapriya",
    name: "Dr. Krishnapriya G",
    role: "Chief Dentist",
    specialty: "Rotary Endodontist & Chief Dentist",
    qualifications: "IDA Certified | Clinical Research Professional",
    experience: "12 Years of Clinical Practice",
    awards: ["Anbu Maruthuvar Awardee"],
    certifications: ["IDA Certified", "Clinical Research Professional"],
    image: "/images/dental/dr-krishnapriya.png",
    hasPhoto: true,
    location: "Chennai",
    bioSummary:
      "Founder and Chief Dentist at Jaksh's Dental Junction with 12 years of clinical practice. Specialist Rotary Endodontist, IDA Certified, Clinical Research Professional, and Anbu Maruthuvar Awardee focusing on patient comfort and gentle, restorative dental treatments.",
  },
  {
    id: "dr-shankar-guhan",
    name: "Dr. Shankar Guhan",
    role: "Specialist Consultant",
    specialty: "Oral & Maxillofacial Surgeon & Implantologist",
    image: "/images/dental/dr-shankar-guhan.jpg",
    hasPhoto: true,
    location: "Chennai",
    bioSummary:
      "Consultant in Oral & Maxillofacial Surgery and Dental Implantology, managing complex extractions, bone grafting, and dental implant placements.",
  },
  {
    id: "dr-preethi",
    name: "Dr. Preethi",
    role: "Specialist Consultant",
    specialty: "Orthodontics & Dentofacial Orthopedics",
    image: "/images/dental/dr-preethi.jpg",
    hasPhoto: true,
    location: "Chennai",
    bioSummary:
      "Consultant Orthodontist focusing on dentofacial alignment, traditional braces, and clear aligner therapies for teenagers and adults.",
  },
  {
    id: "dr-archana",
    name: "Dr. Archana",
    role: "Specialist Consultant",
    specialty: "Periodontist Consultant",
    image: "/images/dental/doctor-consultant-female.jpg",
    hasPhoto: true,
    location: "Chennai",
    bioSummary:
      "Consultant Periodontist specialising in gum disease therapy, periodontal regeneration, and supportive maintenance for long-term tooth retention.",
  },
  {
    id: "dr-taher",
    name: "Dr. Taher Ahmed",
    role: "Specialist Consultant",
    specialty: "Endodontist",
    image: "/images/dental/dr-taher-ahmed.jpg",
    hasPhoto: true,
    location: "Chennai",
    bioSummary:
      "Consultant Endodontist concentrating on precision root canal treatments, endodontic retreatment, and conservative tooth preservation.",
  },
  {
    id: "dr-sindhuja",
    name: "Dr. Sindhuja",
    role: "Specialist Consultant",
    specialty: "Pedodontist",
    image: undefined,
    hasPhoto: false,
    location: "Chennai",
    bioSummary:
      "Consultant Pedodontist providing gentle, child-centred oral care, early habit interception, and positive early clinical experiences for young patients.",
  },
  {
    id: "mrs-ramya",
    name: "Mrs. Ramya",
    role: "Clinical Staff",
    specialty: "Dental Nurse",
    image: "/images/dental/nurse-ramya.jpg",
    hasPhoto: true,
    location: "Chennai",
    bioSummary:
      "Dedicated dental nurse supporting patient comfort, chairside clinical assistance, and stringent operatory sterilisation protocols.",
  },
];
