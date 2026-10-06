export interface NivisService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  idealFor: string;
  image: string;
}

export interface NivisReview {
  id: string;
  author: string;
  rating: number;
  highlight: string;
  quote: string;
  petMentioned?: string;
  conditionMentioned?: string;
  date?: string;
}

export interface StoreCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  sampleItems: string[];
  image: string;
}

export interface UrgencyOption {
  id: string;
  label: string;
  severity: "urgent" | "prompt" | "advice";
  guidance: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const NIVIS_DATA = {
  name: "Nivis Pet Clinic & Pet Store",
  shortName: "Nivis",
  tagline: "Because every pet deserves a little more care.",
  supportingLine:
    "Compassionate veterinary care and everyday pet essentials, all in one place in Thiruverkadu.",
  eyebrow: "NIVIS PET CLINIC + PET STORE · THIRUVERKADU",
  doctorMentioned: "Dr. Karthika",
  doctorRole: "Veterinary Care",
  identity: "Women-owned",
  
  rating: {
    score: "5.0",
    max: "5.0",
    count: 5,
    stars: 5,
    source: "Google Reviews",
    quoteSnippet: "She is very caring and loving with pets.",
  },

  contact: {
    phone: "086101 25329",
    phoneDisplay: "086101 25329",
    phoneTel: "+918610125329",
    whatsappNumber: "918610125329",
    whatsappDisplay: "+91 86101 25329",
    defaultWhatsappText:
      "Hi Nivis Pet Clinic, I would like to enquire about an appointment for my pet.",
    storeWhatsappText: (category: string, item: string) =>
      `Hi Nivis Pet Clinic & Pet Store, I would like to enquire about ${item || category}. Is it available?`,
  },

  location: {
    area: "MGR Nagar, Thiruverkadu, Chennai",
    landmark: "Thirumalai Balaji Nagar, Bus Stop",
    doorNo: "No. 74/1, Main Road",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600077",
    fullAddress:
      "Thirumalai Balaji Nagar, Bus Stop, No. 74/1, Main Road, MGR Nagar, Thiruverkadu, Chennai, Tamil Nadu 600077",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Thirumalai+Balaji+Nagar+Bus+Stop+No+74%2F1+Main+Road+MGR+Nagar+Thiruverkadu+Chennai+600077",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Thirumalai+Balaji+Nagar+Bus+Stop+No+74%2F1+Main+Road+MGR+Nagar+Thiruverkadu+Chennai+Tamil+Nadu+600077",
    embedMapUrl:
      "https://maps.google.com/maps?q=Thirumalai+Balaji+Nagar+Bus+Stop+No+74%2F1+Main+Road+MGR+Nagar+Thiruverkadu+Chennai+600077&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  hours: {
    days: "Monday–Sunday",
    closingTime: "9:30 PM",
    displayStatus: "Open · Closes 9:30 PM",
    statusNote:
      "Listed closing time is 9:30 PM (hours confirmed by the business 12 weeks ago). Please call the clinic to confirm today's availability.",
  },

  trustStrip: [
    { label: "Google Rating", value: "5.0 ★", note: "Flawless feedback" },
    { label: "Google Reviews", value: "5", note: "Real pet parents" },
    { label: "Listed Closing Time", value: "9:30 PM", note: "Monday – Sunday" },
    { label: "Location", value: "MGR Nagar", note: "Thiruverkadu, Chennai" },
  ],

  brandEditorial: {
    eyebrow: "THE CARE BEHIND NIVIS",
    headline: "Compassion you can see in every story.",
    subheadline: "They can't tell you what's wrong. That's why care matters.",
    leadStory:
      "When a pet isn't feeling well, every pet parent wants someone who will listen, explain and treat them with patience. Nivis Pet Clinic is built around compassionate veterinary care and a genuine love for animals.",
    doctorStory:
      "Nivis Pet Clinic is built around thoughtful veterinary care and a genuine love for animals. Pet parents have specifically described Dr. Karthika as caring, loving and committed to their pets.",
    featuredQuote: "She is very caring and loving with pets.",
    featuredQuoteAttribution: "Nivis pet parent",
    quoteContext: "Real customer feedback describing Dr. Karthika's gentle, dedicated clinical approach.",
  },

  reviews: [
    {
      id: "jaswinth",
      author: "Jaswinth Jawatg",
      rating: 5,
      highlight: "Full Recovery from Paralysis",
      quote:
        "My dog is fully paralyzed. Dr. Karthika made my dog cured and now it's fully recovered. Thank u doctor. She is very caring and loving with pets, such a good human being. Once again thank u doctor, u gave my pet back.",
      petMentioned: "Dog",
      conditionMentioned: "Paralysis recovery",
      date: "Google Review",
    },
    {
      id: "mathan",
      author: "Mathan Somu",
      rating: 5,
      highlight: "Lara's Parvo Treatment & Recovery",
      quote:
        "Doctor is care with my pet. My pet Lara is affected in paarvo, she cured my pet completely. Thank u doctor.",
      petMentioned: "Lara",
      conditionMentioned: "Parvo care",
      date: "Google Review",
    },
    {
      id: "shanmugam",
      author: "Shanmugam",
      rating: 5,
      highlight: "Puppy's Life Saved Through Intensive Care",
      quote:
        "My dogs is affected in paarvo virus. Dr. Karthika saved my puppy's life. Thank u and grateful doctor. Continue your service madam keep it up.",
      petMentioned: "Puppy",
      conditionMentioned: "Parvovirus care",
      date: "Google Review",
    },
  ] as NivisReview[],

  services: [
    {
      id: "veterinary-consultation",
      title: "Veterinary Consultation",
      subtitle: "Professional clinical assessment with unhurried listening",
      description:
        "Comprehensive health evaluation for your dog, cat, or young pet. We check vital signs, address your concerns, and recommend evidence-based care in a calm setting.",
      bullets: [
        "Head-to-tail clinical examination",
        "Gentle, stress-free handling",
        "Clear explanations for pet parents",
        "Tailored guidance for every life stage",
      ],
      idealFor: "Routine check-ups, sudden lethargy, coat issues, or general health concerns",
      image: "/images/nivis/hero-vet-care.jpg",
    },
    {
      id: "vaccination",
      title: "Vaccination",
      subtitle: "Preventive immunization and customized schedule planning",
      description:
        "Protect your pet against life-threatening viral infections like Parvovirus, Rabies, DHPPi, and feline panleukopenia with proper cold-chain maintained vaccines.",
      bullets: [
        "Core and non-core vaccination planning",
        "Puppy & kitten primary immunization series",
        "Annual booster advisory and tracking",
        "Post-vaccine observation and comfort",
      ],
      idealFor: "Puppies, kittens, and adult dogs & cats due for scheduled boosters",
      image: "/images/nivis/preventive-care.jpg",
    },
    {
      id: "puppy-kitten-care",
      title: "Puppy & Kitten Care",
      subtitle: "Delicate foundational support for growing companions",
      description:
        "Young pets require specialized developmental care, deworming protocols, nutritional guidance, and proactive monitoring during their most vulnerable months.",
      bullets: [
        "Weight & growth monitoring",
        "Safe deworming protocols",
        "Dietary and weaning advice",
        "Early socialization and hygiene tips",
      ],
      idealFor: "New pet parents with puppies or kittens under 1 year of age",
      image: "/images/nivis/kitten-care.jpg",
    },
    {
      id: "pet-treatment",
      title: "Pet Treatment",
      subtitle: "Attentive care when your companion becomes unwell",
      description:
        "Prompt, empathetic clinical interventions when pets experience fever, digestive distress, skin flare-ups, ear infections, or acute illness.",
      bullets: [
        "Targeted symptom relief & therapy",
        "Fluid support and dehydration management",
        "Skin, ear, and eye treatments",
        "Transparent home-care instructions",
      ],
      idealFor: "Pets showing signs of sickness, reduced appetite, or unusual behavior",
      image: "/images/nivis/dog-wellness.jpg",
    },
    {
      id: "preventive-care",
      title: "Preventive Care",
      subtitle: "General wellness, parasite control, and longevity advice",
      description:
        "Proactive health management to catch subtle problems before they develop. We help pet parents maintain healthy weight, dental hygiene, and tick/flea prevention.",
      bullets: [
        "Tick, flea, and heartworm protection",
        "Nutritional counseling & weight review",
        "Coat and paw health checks",
        "Seasonal wellness advice for Chennai climate",
      ],
      idealFor: "Maintaining everyday vitality and extending your pet's healthy years",
      image: "/images/nivis/gentle-touch.jpg",
    },
    {
      id: "follow-up-care",
      title: "Follow-Up Care",
      subtitle: "Continuous recovery oversight and pet-parent communication",
      description:
        "Healing doesn't end when you leave the clinic. We monitor recovery trajectory, review medication responses, and ensure your pet is back to their joyful self.",
      bullets: [
        "Recovery progress check-ins",
        "Dosage clarification and reassurance",
        "Dressing and wound healing assessment",
        "Direct WhatsApp line for updates",
      ],
      idealFor: "Pets recovering from illness, infections, or acute treatments",
      image: "/images/nivis/senior-dog-care.jpg",
    },
  ] as NivisService[],

  storeCategories: [
    {
      id: "food",
      name: "Food",
      tagline: "Nutritionally balanced diets",
      description:
        "Quality kibble, wet food, and breed-appropriate nutrition for growing puppies, adult dogs, and indoor cats.",
      sampleItems: ["Puppy Starter Diets", "Adult Dog Kibble", "Kitten Gravy Food", "Adult Cat Wet Food"],
      image: "/images/nivis/pet-store-food.jpg",
    },
    {
      id: "treats",
      name: "Treats",
      tagline: "Healthy training & reward bites",
      description:
        "High-protein biscuits, dental chews, freeze-dried bites, and tasty rewards that support positive reinforcement.",
      sampleItems: ["Dental Sticks", "Chicken Jerky Bites", "Calcium Bones", "Catnip Infused Treats"],
      image: "/images/nivis/pet-store-treats.jpg",
    },
    {
      id: "toys",
      name: "Toys",
      tagline: "Mental stimulation & joyful play",
      description:
        "Durable chew ropes, squeaky plushies, fetch balls, and interactive feather wands to keep pets engaged and active.",
      sampleItems: ["Durable Cotton Ropes", "Teething Rings", "Interactive Cat Teasers", "Rubber Bounce Balls"],
      image: "/images/nivis/pet-store-toys.jpg",
    },
    {
      id: "grooming",
      name: "Grooming",
      tagline: "Skin-friendly care and hygiene",
      description:
        "Mild medicated & cosmetic shampoos, de-shedding slicker brushes, paw wipes, and nail trimmers.",
      sampleItems: ["Anti-Tick Shampoos", "Gentle Puppy Washes", "Slicker Brushes", "Pet Cleaning Wipes"],
      image: "/images/nivis/pet-store-grooming.jpg",
    },
    {
      id: "care-essentials",
      name: "Care Essentials",
      tagline: "Everyday health and comfort basics",
      description:
        "Flea & tick pipettes, deworming accessories, feeding bowls, potty pads, and travel essentials.",
      sampleItems: ["Absorbent Puppy Pads", "Stainless Steel Bowls", "Tick Sprays & Spot-ons", "Ear Cleaning Solution"],
      image: "/images/nivis/pet-store-care.jpg",
    },
    {
      id: "accessories",
      name: "Accessories",
      tagline: "Secure walks and comfortable rest",
      description:
        "Ergonomic harnesses, soft collars, sturdy walking leashes, cozy pet beds, and travel crates.",
      sampleItems: ["Reflective Leashes", "Padded Chest Harnesses", "Comfort Collars", "Cozy Sleep Mats"],
      image: "/images/nivis/dog-closeup.jpg",
    },
  ] as StoreCategory[],

  urgencyTriage: [
    {
      id: "difficulty-breathing",
      label: "Difficulty breathing or persistent panting / gasping",
      severity: "urgent",
      guidance: "Immediate danger. Oxygenation compromise requires rapid hands-on veterinary attention.",
    },
    {
      id: "severe-bleeding",
      label: "Severe or uncontrolled bleeding",
      severity: "urgent",
      guidance: "Apply gentle, clean pressure with a sterile cloth and proceed to the clinic immediately.",
    },
    {
      id: "seizure",
      label: "Seizure, twitching, or sudden loss of consciousness",
      severity: "urgent",
      guidance: "Keep your pet in a safe, soft space away from furniture edges. Do not put hands near their mouth. Seek immediate care.",
    },
    {
      id: "unable-to-stand",
      label: "Unable to stand, sudden paralysis, or collapsed",
      severity: "urgent",
      guidance: "Keep your pet flat, warm, and transport gently on a sturdy towel or blanket.",
    },
    {
      id: "suspected-poisoning",
      label: "Suspected poisoning (chemicals, rodent poison, human meds)",
      severity: "urgent",
      guidance: "Do not induce vomiting unless instructed by a vet. Bring the packaging or substance name to the clinic.",
    },
    {
      id: "severe-injury",
      label: "Severe trauma, road hit, or deep bite wound",
      severity: "urgent",
      guidance: "Minimize movement to prevent further injury and head to the veterinary clinic promptly.",
    },
    {
      id: "repeated-vomiting",
      label: "Repeated vomiting or bloody vomit (especially puppies)",
      severity: "prompt",
      guidance: "High risk of rapid dehydration. Puppies especially need urgent assessment for viral infections like Parvo.",
    },
    {
      id: "severe-diarrhea",
      label: "Severe watery or foul-smelling diarrhea (with or without blood)",
      severity: "prompt",
      guidance: "Potentially critical gastrointestinal inflammation. Withhold heavy food and get veterinary assessment.",
    },
    {
      id: "not-eating",
      label: "Complete refusal of food and water for more than 24 hours",
      severity: "prompt",
      guidance: "Significant warning sign. Cats and puppies deteriorate rapidly when completely fasting.",
    },
    {
      id: "extreme-weakness",
      label: "Extreme lethargy, dull eyes, or unresponsive to calls",
      severity: "prompt",
      guidance: "Indicates systemic stress, severe fever, or electrolyte loss.",
    },
    {
      id: "other",
      label: "Minor limping, mild itching, or general behavior change",
      severity: "advice",
      guidance: "Monitor closely for changes. Book a routine consultation for peace of mind.",
    },
  ] as UrgencyOption[],

  faqs: [
    {
      question: "Where is Nivis Pet Clinic located?",
      answer:
        "Nivis Pet Clinic & Pet Store is located in MGR Nagar, Thiruverkadu, Chennai. You can find us at Thirumalai Balaji Nagar, Bus Stop, No. 74/1, Main Road, MGR Nagar, Thiruverkadu, Chennai, Tamil Nadu 600077. Landmark: Right near the Thirumalai Balaji Nagar Bus Stop.",
    },
    {
      question: "What are the clinic's opening hours?",
      answer:
        "The clinic's listed hours are Monday–Sunday with a listed closing time of 9:30 PM (confirmed by the business 12 weeks ago). Because daily hours may occasionally adjust based on clinical duties, we recommend calling 086101 25329 to confirm today's availability before heading out.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can easily submit an appointment request using the 'Book a Visit' form on this website, or connect directly through WhatsApp / Call at 086101 25329. Please note that appointments are confirmed after our team checks clinic schedule availability.",
    },
    {
      question: "Does Nivis treat puppies and kittens?",
      answer:
        "Yes, we provide dedicated puppy and kitten care, including foundational health examinations, primary vaccinations, deworming, growth monitoring, and nutritional advice for your growing companion.",
    },
    {
      question: "Does Nivis provide vaccinations?",
      answer:
        "Yes, we administer essential core vaccines for dogs (DHPPi, Anti-Rabies, Kennel Cough) and cats (Tricat / FPV, Anti-Rabies) with cold-chain storage and personalized vaccination schedules.",
    },
    {
      question: "Does Nivis have a pet store?",
      answer:
        "Yes! Nivis combines a veterinary clinic with a convenient pet store offering everyday pet essentials—including pet food, nutritious treats, interactive toys, grooming shampoos, collars, leashes, and care supplies. You can also enquire about specific product availability over WhatsApp.",
    },
    {
      question: "How can I contact the clinic?",
      answer:
        "You can call us directly at 086101 25329 or message us on WhatsApp at +91 86101 25329. Both lines connect directly with our clinic team in Thiruverkadu.",
    },
    {
      question: "What should I do if my pet needs urgent attention?",
      answer:
        "If your pet is showing critical signs such as difficulty breathing, severe bleeding, seizures, collapse, or suspected poisoning, please contact Nivis immediately at 086101 25329 and head towards the clinic. While we do not claim 24/7 hospital emergency facilities, we offer attentive clinical triage during operating hours.",
    },
  ] as FaqItem[],

  disclaimers: {
    medical:
      "All medical guidance and reviews represent individual pet-parent experiences. Nivis Pet Clinic does not guarantee medical outcomes or claim universal cures. Always consult a veterinarian for hands-on examination.",
    passport:
      "Personal organizer — not an official medical record. Information is saved locally on your device for your reference and is not connected to clinic medical databases.",
    urgency:
      "This triage guide provides general information only and does not replace professional veterinary examination. If your pet is in severe distress, contact a veterinarian immediately.",
    vaccination:
      "Vaccination schedules vary depending on the pet's age, health status, and prior history. Confirm the appropriate schedule with your veterinarian.",
    store:
      "Inventory availability may change. Use our WhatsApp enquiry link to confirm stock before visiting.",
    hours:
      "Listed hours confirmed by the business 12 weeks ago. Always call ahead to verify current availability.",
  },
};
