export interface ClinicInfo {
  name: string;
  tagline: string;
  founder: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
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
  badges: string[];
}

export const CLINIC_INFO: ClinicInfo = {
  name: "Jaksh's Dental Junction",
  tagline: "Where dentistry & kindness meet",
  founder: "Dr. Krishnapriya G",
  phone: "tel:08825564486",
  phoneDisplay: "088255 64486",
  whatsapp: "https://wa.me/918825564486?text=Hello%20Jaksh%27s%20Dental%20Junction%2C%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment.",
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
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jaksh%27s+Dental+Junction+Valayapathi+Salai+Mogappair+East+Chennai+600037",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Jaksh%27s+Dental+Junction+Valayapathi+Salai+Block+6+Mogappair+East+Chennai+Tamil+Nadu+600037",
  // Standard Google Maps iframe embed for Mogappair East location
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0826490650965!2d80.17646547585093!3d13.08889988723709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263889025e171%3A0xb5e73ef5cfc87f94!2sValayapathi%20Salai%2C%20Block%206%2C%20Mogappair%20East%2C%20Chennai%2C%20Tamil%20Nadu%20600037!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
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
  badges: [
    "Women-Owned Dental Clinic",
    "Founder with 12 Years Clinical Practice",
    "IDA Certified Rotary Endodontist",
    "Specialist Consultant Team",
    "Convenient Mogappair East Location",
  ],
};
