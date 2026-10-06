export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  suitableFor: string;
  tag: string;
  iconName: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  text: string;
  source: string;
  petContext?: string;
  date?: string;
}

export interface DoctorInfo {
  name: string;
  phone: string;
  role: string;
  notes?: string;
}

export const VETRI_DATA = {
  name: "Vetri Pet Hospital & Pet Clinic",
  shortName: "Vetri",
  brandDescriptor: "PET HOSPITAL & CLINIC",
  tagline: "Professional treatment. Personal care.",
  motto: "Care. Companionship. Commitment.",
  principles: "Compassion • Care • Cure",
  
  phone: "93840 17392",
  phoneFormatted: "+91 93840 17392",
  phoneSecondary: "82488 42014",
  phoneSecondaryFormatted: "+91 82488 42014",
  whatsappNumber: "919384017392",
  
  rating: 5.0,
  reviewCount: 6,
  
  address: {
    line1: "2, Erikarai St (Panchayat Main Road)",
    landmark: "Near Sunrise Pharmacy",
    area: "Kurinji Nagar, Perungudi",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600097",
    full: "2, Erikarai St (Panchayat Main Road), near Sunrise Pharmacy, Kurinji Nagar, Perungudi, Chennai, Tamil Nadu 600097",
  },
  
  hours: {
    display: "Open daily until 9:00 PM",
    detailed: "Monday to Sunday: 9:00 AM – 9:00 PM",
    opensAt: "09:00",
    closesAt: "21:00",
  },
  
  doctors: [
    {
      name: "Dr. Sandhiya. S",
      phone: "93840 17392",
      role: "Veterinary Physician & Surgeon",
      notes: "Primary clinic contact & consultations",
    },
    {
      name: "Dr. Ramu",
      phone: "82488 42014",
      role: "Veterinary Physician",
      notes: "Consultations & treatments",
    },
  ] as DoctorInfo[],
  
  animalsTreated: [
    { label: "Dogs", desc: "Canine medical care & checkups" },
    { label: "Cats", desc: "Feline medicine & gentle handling" },
    { label: "Birds", desc: "Avian health assessment" },
    { label: "Rabbits", desc: "Lagomorph wellness & nutrition" },
    { label: "Guinea Pigs", desc: "Small pet care & support" },
  ],
  
  googleMaps: {
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Vetri+Pet+Clinic+2+Erikarai+St+Kurinji+Nagar+Perungudi+Chennai+600097",
    embedUrl:
      "https://maps.google.com/maps?q=Vetri%20Pet%20Clinic%2C%202%20Erikarai%20St%2C%20Kurinji%20Nagar%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600097&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  
  whatsappLinks: {
    general:
      "https://wa.me/919384017392?text=Hi%20Vetri%20Pet%20Hospital%2C%20I%20would%20like%20to%20know%20more%20about%20your%20veterinary%20services.",
    appointment:
      "https://wa.me/919384017392?text=Hi%20Vetri%20Pet%20Hospital%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20pet.",
    seniorPet:
      "https://wa.me/919384017392?text=Hi%20Vetri%20Pet%20Hospital%2C%20I%20would%20like%20to%20consult%20regarding%20supportive%20care%20for%20my%20senior%20pet.",
    vaccination:
      "https://wa.me/919384017392?text=Hi%20Vetri%20Pet%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20vaccination%20schedules%20for%20my%20pet.",
  },
  
  services: [
    {
      id: "general-consultation",
      title: "General Consultation",
      shortDesc: "Professional veterinary assessment for your pet.",
      fullDesc:
        "Comprehensive health checkups, physical examinations, vital checks, and attentive diagnostic evaluation when your companion shows any changes in behaviour, appetite, or energy.",
      suitableFor: "All pet species, routine health screenings, new adoptions",
      tag: "Clinical Assessment",
      iconName: "Stethoscope",
    },
    {
      id: "preventive-care",
      title: "Preventive Care",
      shortDesc: "Supporting your pet's long-term health and wellbeing.",
      fullDesc:
        "Proactive health maintenance tailored to Chennai's climate, including parasite screening, tick and flea prevention, skin condition reviews, and dietary counseling.",
      suitableFor: "Growing puppies, kittens, adult pets",
      tag: "Wellness Maintenance",
      iconName: "ShieldCheck",
    },
    {
      id: "vaccination",
      title: "Vaccination",
      shortDesc: "Veterinary guidance around appropriate preventive care.",
      fullDesc:
        "Timely immunization protocols against rabies, DHPPiL, feline tricat, and other communicable conditions, recorded in your pet's dedicated health book.",
      suitableFor: "Puppies, kittens, and annual adult booster visits",
      tag: "Immunization",
      iconName: "Syringe",
    },
    {
      id: "treatment",
      title: "Treatment",
      shortDesc: "Care when your pet is unwell or needs medical attention.",
      fullDesc:
        "Careful clinical diagnosis and therapeutic management for fevers, gastrointestinal upset, skin allergies, respiratory concerns, minor wounds, and sudden illnesses.",
      suitableFor: "Pets experiencing acute symptoms or discomfort",
      tag: "Medical Therapy",
      iconName: "HeartHandshake",
    },
    {
      id: "supportive-care",
      title: "Supportive Care",
      shortDesc: "Ongoing care and support when recommended by the veterinarian.",
      fullDesc:
        "Gentle, accessible clinical support including intravenous (IV) fluid therapy, subcutaneous hydration, nursing care, and comfort management for chronic conditions.",
      suitableFor: "Pets requiring ongoing clinical support, fluid therapy",
      tag: "Therapeutic Support",
      iconName: "Activity",
    },
    {
      id: "senior-pet-care",
      title: "Senior Pet Care",
      shortDesc: "Thoughtful attention for ageing pets and their changing needs.",
      fullDesc:
        "Compassionate geriatric care focusing on mobility, renal support, organ health monitoring, hydration balance, and quality of life for our older furry companions.",
      suitableFor: "Dogs & cats aged 7+ years",
      tag: "Geriatric Wellness",
      iconName: "Clock",
    },
  ] as ServiceItem[],
  
  reviews: [
    {
      author: "Baskaran Nbaskaran",
      rating: 5.0,
      source: "Google Review",
      petContext: "Simba (13 years old)",
      text:
        "I strongly recommend Vetri Clinic for the care and treatment of pets. My Simba is 13 years old and has been diagnosed with CKD. At this stage of his life, we sometimes need to take him to a nearby clinic for IV fluids and supportive care.",
    },
    {
      author: "Arun Murugan",
      rating: 5.0,
      source: "Google Review",
      petContext: "Pet Wellness & Care",
      text:
        "I strongly recommend this clinic for your pet's health and wellness. The doctors are caring, professional, and provide excellent treatment. Your pet will be in safe and capable hands.",
    },
    {
      author: "Guna Sundari",
      rating: 5.0,
      source: "Google Review",
      petContext: "Treatment-Focused Care",
      text:
        "Among commercial pet clinic in Chennai the clinic which focus more on treatment then selling of products hope they soon reach high.",
    },
  ] as ReviewItem[],
  
  featuredStory: {
    petName: "SIMBA",
    age: "13 years old",
    condition: "CKD (Chronic Kidney Disease) Management",
    author: "Baskaran Nbaskaran",
    source: "Google Review",
    quote:
      "My Simba is 13 years old and has been diagnosed with CKD. At this stage of his life, we sometimes need to take him to a nearby clinic for IV fluids and supportive care.",
    note:
      "When managing chronic illnesses in senior pets, accessibility and gentle clinical handling make every difference. Vetri provides thoughtful, compassionate supportive care and fluid therapy to help families support their older companions comfortably.",
  },
  
  approachSteps: [
    {
      step: "01",
      title: "Listen",
      short: "Understand the pet and the concern",
      desc:
        "We take the time to hear your observations. Because you know your pet best, your insights on their appetite, sleep, and habits guide our evaluation.",
    },
    {
      step: "02",
      title: "Assess",
      short: "Evaluate the pet carefully",
      desc:
        "A calm, gentle physical examination that prioritizes your pet's comfort and reduces stress, evaluating vital signs and pinpointing areas of discomfort.",
    },
    {
      step: "03",
      title: "Care",
      short: "Provide appropriate veterinary care",
      desc:
        "Targeted treatment focused strictly on your pet's medical needs. Clear explanations of medications, therapeutic steps, and home nursing requirements.",
    },
    {
      step: "04",
      title: "Follow Up",
      short: "Ongoing guidance & reassurance",
      desc:
        "Clear recovery instructions and accessible WhatsApp follow-up communication so you're never left wondering about next steps.",
    },
  ],
};
