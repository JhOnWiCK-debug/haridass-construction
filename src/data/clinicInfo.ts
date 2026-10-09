export interface ClinicInfo {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  founder: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  instagram: string;
  colgateFeatureUrl: string;
  address: {
    street: string;
    block: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  plusCode: string;
  googleMapsUrl: string;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;
  timings: {
    days: string;
    hours: string;
    sunday: string;
    schedule: { day: string; hours: string; isOpen: boolean }[];
  };
  specialistCentres: {
    title: string;
    category: string;
    description: string;
  }[];
}

export const CLINIC_INFO: ClinicInfo = {
  name: "Jaksh's Dental Junction",
  tagline: "Where dentistry & kindness meet",
  heroHeadline: "Gentle dentistry. Thoughtfully done.",
  heroSubheadline:
    "Thoughtful dental care for individuals and families, delivered with attention, clarity and kindness. Explore our treatments and meet the dental professionals who care for your smile.",
  founder: "Dr. Krishnapriya G",
  phone: "tel:08825564486",
  phoneDisplay: "088255 64486",
  whatsapp: "https://wa.me/918825564486?text=Hello%20Jaksh%27s%20Dental%20Junction%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.",
  instagram: "https://www.instagram.com/jakshsdentaljunction/",
  colgateFeatureUrl:
    "https://www.linkedin.com/posts/colgate-palmolive-india-ltd-_colpal-champions-of-smiles-dr-krishna-activity-7505850071956201472-0VBN",
  address: {
    street: "Valayapathi Salai, 6th Block",
    block: "Block 6",
    area: "Mogappair East",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600037",
    full: "Valayapathi Salai, 6th Block, Block 6, Mogappair East, Chennai, Tamil Nadu 600037",
  },
  plusCode: "35HP+8F Chennai, Tamil Nadu",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jaksh%27s+Dental+Junction+Valayapathi+Salai+Mogappair+East+Chennai+600037",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Jaksh%27s+Dental+Junction+Valayapathi+Salai+Block+6+Mogappair+East+Chennai+Tamil+Nadu+600037",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0826490650965!2d80.17646547585093!3d13.08889988723709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263889025e171%3A0xb5e73ef5cfc87f94!2sValayapathi%20Salai%2C%20Block%206%2C%20Mogappair%20East%2C%20Chennai%2C%20Tamil%20Nadu%20600037!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  timings: {
    days: "Monday – Saturday",
    hours: "5:00 PM – 8:30 PM",
    sunday: "Closed",
    schedule: [
      { day: "Monday", hours: "5:00 PM – 8:30 PM", isOpen: true },
      { day: "Tuesday", hours: "5:00 PM – 8:30 PM", isOpen: true },
      { day: "Wednesday", hours: "5:00 PM – 8:30 PM", isOpen: true },
      { day: "Thursday", hours: "5:00 PM – 8:30 PM", isOpen: true },
      { day: "Friday", hours: "5:00 PM – 8:30 PM", isOpen: true },
      { day: "Saturday", hours: "5:00 PM – 8:30 PM", isOpen: true },
      { day: "Sunday", hours: "Closed", isOpen: false },
    ],
  },
  specialistCentres: [
    {
      title: "Registered ABHAYA Centre",
      category: "Specialist Care",
      description:
        "Providing dedicated, compassionate oral healthcare protocols with specialised clinical sensitivity and patient consideration.",
    },
    {
      title: "Registered Sports Dental Centre",
      category: "Athletic Oral Health",
      description:
        "Custom protective athletic mouthguards, dentofacial trauma prevention, and performance-aligned dental care for athletes and sports participants.",
    },
    {
      title: "Precisalign Aligner Provider",
      category: "Clear Orthodontics",
      description:
        "Modern digital clear aligner planning for comfortable, subtle tooth alignment without traditional metal brackets.",
    },
  ],
};
