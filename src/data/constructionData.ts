export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  details: string;
  category: string;
  image: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'structural' | 'renovation';
  tag: string;
  workType: string;
  location: string;
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verifiedSource: string;
  initials: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const BUSINESS_INFO = {
  name: "HARIDASS CONSTRUCTION",
  tagline: "Real Estate Builders & Construction Company",
  subTagline: "Ambattur, Chennai, Tamil Nadu",
  address: "No. 48, 4th Street, East Balaji Nagar, Kallikuppam, Ambattur, Chennai, Tamil Nadu 600053",
  addressShort: "No. 48, 4th St, East Balaji Nagar, Kallikuppam, Ambattur, Chennai - 600053",
  city: "Chennai",
  locality: "Ambattur",
  state: "Tamil Nadu",
  pincode: "600053",
  phoneRaw: "08056052207",
  phoneDisplay: "080560 52207",
  phoneInternational: "+91 80560 52207",
  phoneTel: "tel:08056052207",
  whatsappUrl: "https://wa.me/918056052207?text=Hello%20Haridass%20Construction%2C%20I%20would%20like%20to%20inquire%20about%20your%20construction%20services.",
  googleRating: 4.8,
  googleReviewCount: 21,
  serviceArea: "Serving Ambattur & surrounding areas of Chennai.",
  mapsSearchQuery: "https://maps.google.com/?q=No.+48,+4th+Street,+East+Balaji+Nagar,+Kallikuppam,+Ambattur,+Chennai,+Tamil+Nadu+600053",
  mapsEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15543.082713835697!2d80.1481!3d13.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263a23a31c5b9%3A0x6b29f0789781608!2sKallikuppam%2C%20Ambattur%2C%20Chennai%2C%20Tamil%20Nadu%20600053!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    shortDescription: "Custom independent homes, duplexes, and residential villas crafted to your specific architectural needs with enduring structural strength.",
    details: "From site preparation and footing to structural RCC framing, masonry, and refined architectural finishes, we build homes tailored for your family's future.",
    category: "Residential",
    image: "/images/services/service-residential.jpg",
    features: [
      "Custom floor plan execution",
      "Robust RCC framed structures",
      "Quality masonry & plastering",
      "Turnkey civil construction"
    ]
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    shortDescription: "Modern commercial spaces, retail units, and office structures executed with functional efficiency and reliable engineering.",
    details: "Built to accommodate business operations with optimized layouts, durable structural components, and clean architectural facades.",
    category: "Commercial",
    image: "/images/services/service-commercial.jpg",
    features: [
      "Commercial shell & core builds",
      "Retail & office floor layouts",
      "Durable heavy-duty flooring",
      "Utility & infrastructure integration"
    ]
  },
  {
    id: "building-renovation",
    title: "Building Renovation",
    shortDescription: "Comprehensive structural upgrades, facade modernization, and interior remodeling to renew and enhance existing properties.",
    details: "Breathe new life into aging structures through careful structural strengthening, layout reconfiguration, modern waterproofing, and elevation overhauls.",
    category: "Renovation",
    image: "/images/services/service-renovation.jpg",
    features: [
      "Exterior elevation upgrades",
      "Structural retrofitting & repairs",
      "Floor plan reconfigurations",
      "Terrace & wall waterproofing"
    ]
  },
  {
    id: "interior-exterior-works",
    title: "Interior & Exterior Works",
    shortDescription: "Refined architectural finishes, custom false ceilings, premium exterior elevation cladding, and decorative craftsmanship.",
    details: "Harmonizing interior comfort with commanding curbside appeal through quality carpentry, tile cladding, painting, and elevation elements.",
    category: "Finishing",
    image: "/images/services/service-interiors.jpg",
    features: [
      "Designer exterior elevation accents",
      "Gypsum & grid false ceiling systems",
      "Custom woodwork & carpentry",
      "Interior & exterior premium paint finishes"
    ]
  },
  {
    id: "structural-civil-works",
    title: "Structural & Civil Works",
    shortDescription: "Robust RCC framework, foundation execution, slab casting, and precision civil engineering built to code.",
    details: "The backbone of every enduring building. We focus on exact concrete mixes, proper steel reinforcement tying, and rigorous curing cycles.",
    category: "Civil",
    image: "/images/services/service-structural.jpg",
    features: [
      "Deep foundation & column footing",
      "Reinforced cement concrete (RCC) slabs",
      "Load-bearing brick & block masonry",
      "Compound walls & earth retaining structures"
    ]
  },
  {
    id: "construction-consultation",
    title: "Construction Consultation",
    shortDescription: "Expert guidance on site feasibility, structural layout planning, material selection, and realistic budget estimation.",
    details: "Make informed construction choices before breaking ground with transparent advice on material grading, stage-wise planning, and execution roadmaps.",
    category: "Consultation",
    image: "/images/services/service-consultation.jpg",
    features: [
      "Site assessment & layout guidance",
      "Material quality & grade recommendations",
      "Stage-by-stage construction planning",
      "Transparent budget & timeline advisory"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Contemporary Residential Villa",
    category: "residential",
    tag: "Residential",
    workType: "Construction Work",
    location: "Chennai",
    image: "/images/projects/project-1.jpg",
    aspectRatio: "landscape",
    description: "Multi-level independent residence featuring clean geometric lines, large glass fenestrations, and warm ambient exterior lighting."
  },
  {
    id: "proj-2",
    title: "Reinforced Concrete Framework",
    category: "structural",
    tag: "Civil & Structural",
    workType: "Construction Work",
    location: "Ambattur, Chennai",
    image: "/images/projects/project-2.jpg",
    aspectRatio: "portrait",
    description: "Heavy-duty structural civil works detailing precise column shuttering, rebar tying, and quality-controlled RCC slab casting."
  },
  {
    id: "proj-3",
    title: "Modern Commercial Plaza",
    category: "commercial",
    tag: "Commercial",
    workType: "Construction Work",
    location: "Chennai",
    image: "/images/projects/project-3.jpg",
    aspectRatio: "landscape",
    description: "Contemporary commercial structure with expansive glass facade, integrated ventilation louvers, and functional retail floor layout."
  },
  {
    id: "proj-4",
    title: "Architectural Interior & Joinery",
    category: "residential",
    tag: "Interior Works",
    workType: "Construction Work",
    location: "Chennai",
    image: "/images/projects/project-4.jpg",
    aspectRatio: "square",
    description: "Refined residential living area with custom teakwood finishes, ambient cove lighting, and seamless floor transitions."
  },
  {
    id: "proj-5",
    title: "Independent Duplex Residence",
    category: "residential",
    tag: "Residential",
    workType: "Construction Work",
    location: "Chennai",
    image: "/images/projects/project-5.jpg",
    aspectRatio: "landscape",
    description: "Spacious family duplex with private landscaped terrace, stone finish accents, and optimized cross-ventilation."
  },
  {
    id: "proj-6",
    title: "Facade Upgrade & Building Renovation",
    category: "renovation",
    tag: "Renovation",
    workType: "Construction Work",
    location: "Ambattur, Chennai",
    image: "/images/projects/project-6.jpg",
    aspectRatio: "portrait",
    description: "Comprehensive structural renewal and exterior facade modernization bringing contemporary elegance to an existing structure."
  },
  {
    id: "proj-7",
    title: "Structural Foundation & Site Layout",
    category: "structural",
    tag: "Civil Works",
    workType: "Construction Work",
    location: "Ambattur, Chennai",
    image: "/images/projects/project-7.jpg",
    aspectRatio: "square",
    description: "Engineered site layout and column footing execution following strict alignment and curing protocols."
  },
  {
    id: "proj-8",
    title: "Luxury Villa Exterior & Cladding",
    category: "residential",
    tag: "Exterior Works",
    workType: "Construction Work",
    location: "Chennai",
    image: "/images/projects/project-8.jpg",
    aspectRatio: "landscape",
    description: "Finished exterior elevation showcasing high-grade stone cladding, textured weather-shield coatings, and custom metal gates."
  }
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Quality Materials",
    description: "We source certified, high-grade cement, corrosion-resistant steel, kiln-fired bricks, and vetted plumbing/electrical fixtures to ensure your building withstands environmental weathering for generations."
  },
  {
    number: "02",
    title: "Attention to Detail",
    description: "From millimeter-exact foundation leveling to seamless tile alignment and crack-free plastering, our on-site supervision guarantees structural accuracy and refined finishes at every checkpoint."
  },
  {
    number: "03",
    title: "Reliable Service",
    description: "Honest communication, disciplined site coordination, and dependable execution ensure a transparent construction experience without unnecessary delays or hidden surprises."
  },
  {
    number: "04",
    title: "Designs Built Around Your Needs",
    description: "We prioritize practical space planning, natural daylighting, ventilation, and aesthetics customized to match your family's daily lifestyle or commercial business requirements."
  }
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Local Property Client",
    rating: 5,
    date: "Google Review",
    comment: "Good service, good quality material and beautiful designs.",
    verifiedSource: "Verified Google Review",
    initials: "GC"
  },
  {
    id: "rev-2",
    author: "Chennai Homeowner",
    rating: 5,
    date: "Google Review",
    comment: "Super quality nice work and work is perfect.",
    verifiedSource: "Verified Google Review",
    initials: "CH"
  },
  {
    id: "rev-3",
    author: "Verified Customer",
    rating: 5,
    date: "Google Review",
    comment: "Excellent work nice good job.",
    verifiedSource: "Verified Google Review",
    initials: "VC"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    number: "STEP 01",
    title: "Consultation",
    description: "We meet to discuss your plot location, space requirements, budget expectations, and stylistic preferences.",
    deliverables: ["Site inspection & discussion", "Initial requirement scoping", "Preliminary feasibility review"]
  },
  {
    step: "02",
    number: "STEP 02",
    title: "Planning & Design",
    description: "Drafting practical floor layouts, structural planning, and transparent material specifications tailored to your project.",
    deliverables: ["Architectural layout planning", "Material specification sheet", "Transparent cost estimate"]
  },
  {
    step: "03",
    number: "STEP 03",
    title: "Construction",
    description: "Disciplined civil execution starting with footing, RCC framework, brickwork, and utility installations with strict quality checks.",
    deliverables: ["Foundation & RCC casting", "Brick masonry & plastering", "Stage-wise quality supervision"]
  },
  {
    step: "04",
    number: "STEP 04",
    title: "Handover",
    description: "Final finishing touches, fixture verification, thorough site clean-up, and key handover ready for your immediate occupancy.",
    deliverables: ["Thorough finishing walkthrough", "Electrical & plumbing testing", "Ready-to-occupy project delivery"]
  }
];

export const TRUST_METRICS = [
  {
    label: "Google Rating",
    value: "4.8 / 5",
    subtext: "Verified rating on Google Maps",
    highlight: true
  },
  {
    label: "Customer Reviews",
    value: "21+",
    subtext: "Positive client feedback",
    highlight: false
  },
  {
    label: "Quality Materials",
    value: "100%",
    subtext: "Strict material standards",
    highlight: false
  },
  {
    label: "Local Chennai Presence",
    value: "Ambattur",
    subtext: "East Balaji Nagar, Chennai 53",
    highlight: false
  }
];
