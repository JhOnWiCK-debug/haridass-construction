export interface DentalService {
  id: string;
  number: string;
  name: string;
  category: "Restorative & Rehab" | "Orthodontics" | "Specialist Care" | "Preventive & Family" | "Surgical";
  shortSummary: string;
  fullDescription: string;
  whyReferred: string[];
  consultationDetails: string[];
  preparationGuidance: string[];
  aftercareGuidance: string[];
}

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: "restorative-dentistry",
    number: "01",
    name: "Restorative Dentistry",
    category: "Restorative & Rehab",
    shortSummary:
      "Tooth-preserving restorations, modern fillings, and structural crowns to repair compromised teeth.",
    fullDescription:
      "Restorative dentistry focuses on repairing structural damage caused by decay, trauma, or wear. Treatments aim to restore normal chewing strength, seal exposed enamel, and preserve the natural tooth whenever possible through composite restorations and protective crowns.",
    whyReferred: [
      "Cavities or recurrent enamel decay causing sensitivity or food lodgement",
      "Chipped, cracked, or fractured tooth edges from daily wear or chewing",
      "Worn or failing older restorations requiring conservative replacement",
      "Post-endodontic tooth protection requiring durable coronal coverage",
    ],
    consultationDetails: [
      "Detailed clinical inspection of the affected tooth structure",
      "Diagnostic digital radiographic imaging to evaluate decay depth",
      "Discussion of conservative restoration options tailored to your bite",
    ],
    preparationGuidance: [
      "Maintain normal morning oral hygiene prior to your consultation",
      "Inform the team of any temperature sensitivity or pain triggers",
    ],
    aftercareGuidance: [
      "Wait for local anaesthesia numbness to fully wear off before chewing hot food",
      "Maintain gentle brushing and daily interdental cleaning around restored margins",
    ],
  },
  {
    id: "dental-implants",
    number: "02",
    name: "Dental Implants",
    category: "Restorative & Rehab",
    shortSummary:
      "Permanent root-form titanium fixtures to replace individual or multiple missing teeth.",
    fullDescription:
      "Dental implants provide stable, standalone anchors for artificial replacement teeth without modifying adjacent healthy teeth. Biocompatible titanium fixtures integrate with the jawbone to restore chewing function, facial volume, and long-term oral stability.",
    whyReferred: [
      "Single or multiple missing teeth requiring stable replacement",
      "Desire to avoid grinding down adjacent healthy teeth for a bridge",
      "Loose or unstable removable partial or full dentures",
      "Prevention of gradual jawbone resorption following tooth loss",
    ],
    consultationDetails: [
      "Thorough periodontal health check and bone volume assessment",
      "CBCT 3D radiographic evaluation to plan precise implant positioning",
      "Discussion of healing timelines, restorative options, and stages",
    ],
    preparationGuidance: [
      "Share your complete medical history and ongoing medications",
      "Plan for comfortable post-procedure rest on the day of placement",
    ],
    aftercareGuidance: [
      "Apply external cold compresses gently if minor swelling occurs",
      "Follow a soft diet and avoid chewing directly on the implant site during initial healing",
    ],
  },
  {
    id: "clear-aligners",
    number: "03",
    name: "Clear Aligners",
    category: "Orthodontics",
    shortSummary:
      "Discreet, custom-moulded transparent aligner series for progressive tooth alignment.",
    fullDescription:
      "Clear aligners offer a subtle, removable alternative to conventional brackets and wires. Using custom digital planning, a series of comfortable transparent trays gently guides teeth into harmonious alignment with minimal impact on everyday routines.",
    whyReferred: [
      "Mild to moderate crowding, spacing, or overlapping of front teeth",
      "Desire for discreet orthodontic correction during professional or social life",
      "Relapse after previous orthodontic treatment in earlier years",
      "Preference for removable trays that allow unrestricted brushing and flossing",
    ],
    consultationDetails: [
      "Digital intraoral scan or precision impression recording",
      "Assessment of bite relationship, arch form, and smile aesthetics",
      "Digital treatment preview and clear aligner wear schedule planning",
    ],
    preparationGuidance: [
      "Complete a professional dental cleaning beforehand to ensure plaque-free tooth surfaces",
      "Bring any previous orthodontic records or retainers if available",
    ],
    aftercareGuidance: [
      "Wear aligners for 20 to 22 hours daily, removing only for meals and cleaning",
      "Clean aligners gently with cool water and a soft toothbrush daily",
    ],
  },
  {
    id: "braces-orthodontics",
    number: "04",
    name: "Braces & Orthodontics",
    category: "Orthodontics",
    shortSummary:
      "Precision fixed appliance systems to correct complex alignment, spacing, and bite irregularities.",
    fullDescription:
      "Comprehensive orthodontic treatment utilizes fixed brackets and archwires to guide teeth and jaws into functional alignment. Provided by our consultant orthodontist, care is tailored to both growing children and adults seeking lasting occlusal balance.",
    whyReferred: [
      "Severe dental crowding, rotations, or pronounced spacing between teeth",
      "Bite discrepancies including overbites, underbites, open bites, or crossbites",
      "Impacted teeth requiring guided orthodontic traction into the dental arch",
      "Uneven tooth wear or functional chewing difficulties caused by malocclusion",
    ],
    consultationDetails: [
      "Comprehensive facial, occlusal, and cephalometric radiographic examination",
      "Discussion of metal or aesthetic ceramic bracket options",
      "Estimated timeline and periodic adjustment schedule outline",
    ],
    preparationGuidance: [
      "Ensure all cavities are filled and gums are healthy before bracket bonding",
      "Discuss school or work schedules for routine monthly visits",
    ],
    aftercareGuidance: [
      "Use orthodontic interdental brushes to clear debris around brackets after eating",
      "Avoid hard, sticky foods like chikki, hard nuts, and whole crunchy fruits",
    ],
  },
  {
    id: "full-mouth-rehabilitation",
    number: "05",
    name: "Full Mouth Rehabilitation",
    category: "Restorative & Rehab",
    shortSummary:
      "Comprehensive multi-disciplinary reconstruction of worn, missing, or compromised dentition.",
    fullDescription:
      "Full mouth rehabilitation is an individualized, staged treatment plan designed to restore comfort, aesthetics, and chewing function when multiple teeth are severely worn, eroded, broken, or missing. Care combines restorative, endodontic, and prosthetic expertise.",
    whyReferred: [
      "Extensive tooth wear, acid erosion, or severe attrition from grinding",
      "Multiple missing teeth accompanied by collapsed bite height",
      "Chronic jaw discomfort or difficulty chewing effectively",
      "Need for coordinated care across restorations, crowns, and implants",
    ],
    consultationDetails: [
      "Full photographic, radiographic, and articulatory bite registration",
      "Evaluation of vertical dimension of occlusion and temporomandibular joints",
      "Phased treatment roadmap prioritizing symptom relief and functional stability",
    ],
    preparationGuidance: [
      "Prepare a list of dental history, previous treatments, and symptoms",
      "Allow adequate time for an unhurried, thorough initial clinical examination",
    ],
    aftercareGuidance: [
      "Adhere closely to scheduled review appointments between treatment phases",
      "Wear a custom protective nightguard if nighttime clenching was diagnosed",
    ],
  },
  {
    id: "abhaya-centre",
    number: "06",
    name: "ABHAYA Centre",
    category: "Specialist Care",
    shortSummary:
      "Dedicated, compassionate care protocols tailored for patients with dental anxiety or special needs.",
    fullDescription:
      "As a registered ABHAYA Centre, Jaksh's Dental Junction provides a safe, patient-paced, and empathetic care environment. Special attention is given to individuals experiencing dental phobia, sensory sensitivities, or heightened treatment anxiety through gentle pacing and unhurried appointments.",
    whyReferred: [
      "Severe dental anxiety, fear of clinical sounds, or past traumatic experiences",
      "Patients requiring unhurried, step-by-step procedural explanations",
      "Individuals with sensory considerations benefiting from a calm, quiet setting",
      "Supportive care tailored for patients needing accompanied reassurance",
    ],
    consultationDetails: [
      "Gentle conversation-first consultation without immediate invasive procedures",
      "Paced familiarization with the clinic environment and tools",
      "Co-creation of comfort strategies and stop-signals for complete patient control",
    ],
    preparationGuidance: [
      "Let our team know your preferences or triggers when booking your appointment",
      "Feel welcome to bring a supportive family member or calming music",
    ],
    aftercareGuidance: [
      "Rest quietly after your appointment in our air-conditioned lounge",
      "Direct telephone contact with our front desk for reassurance anytime",
    ],
  },
  {
    id: "sports-dentistry",
    number: "07",
    name: "Sports Dentistry",
    category: "Specialist Care",
    shortSummary:
      "Custom protective athletic mouthguards and dentofacial injury prevention for athletes.",
    fullDescription:
      "As a registered Sports Dental Centre, we focus on preventing and managing sports-related dental trauma. We design precision custom-laminated mouthguards for school athletes, martial artists, and sports enthusiasts that provide superior impact absorption without impeding breathing.",
    whyReferred: [
      "Athletes participating in contact or projectile sports (cricket, hockey, football, martial arts)",
      "School students and active youth needing custom dental protection",
      "History of chipped or fractured teeth during physical recreation",
      "Athletes with braces needing specialized orthodontic mouthguards",
    ],
    consultationDetails: [
      "Evaluation of athletic activities, impact risks, and existing restorations",
      "Intraoral digital impressions for multi-laminated custom fabrication",
      "Occlusal check to ensure comfortable jaw support and unobstructed breathing",
    ],
    preparationGuidance: [
      "Bring any existing helmet or chin guard to ensure compatibility",
      "Ensure recent dental restorations or cleanings are completed first",
    ],
    aftercareGuidance: [
      "Rinse your mouthguard in cool water after use and store in a ventilated container",
      "Bring the mouthguard to regular check-ups for ongoing fit verification",
    ],
  },
  {
    id: "aesthetic-dentistry",
    number: "08",
    name: "Aesthetic Dentistry",
    category: "Preventive & Family",
    shortSummary:
      "Subtle smile enhancements including professional whitening, composite veneers, and contouring.",
    fullDescription:
      "Aesthetic dentistry blends clinical precision with natural harmony. Rather than artificial alterations, treatments focus on conservative enhancements such as shade brightening, composite contouring, and ceramic veneers that complement your individual facial features.",
    whyReferred: [
      "Deep enamel discoloration from tea, coffee, fluorosis, or natural aging",
      "Uneven tooth edges, minor chipping, or asymmetrical front tooth lengths",
      "Small gaps between front teeth (diastema) suited for conservative bonding",
      "Upcoming wedding, graduation, or milestone celebrations",
    ],
    consultationDetails: [
      "Smile analysis considering lip line, tooth proportion, and gum architecture",
      "Shade matching and natural enamel translucency evaluation",
      "Discussion of conservative, enamel-preserving treatment options",
    ],
    preparationGuidance: [
      "Complete routine scaling before whitening or aesthetic bonding",
      "Discuss your personal smile goals and expectations with the doctor",
    ],
    aftercareGuidance: [
      "Follow the 48-hour 'White Diet' after bleaching (avoid dark curries, coffee, and tea)",
      "Avoid biting hard non-food items like pen caps or tearing packets",
    ],
  },
  {
    id: "pediatric-dentistry",
    number: "09",
    name: "Pediatric Dentistry",
    category: "Preventive & Family",
    shortSummary:
      "Gentle, friendly oral healthcare and preventive guidance for infants, children, and teens.",
    fullDescription:
      "Provided by our consultant pedodontist, pediatric care fosters positive, lifelong dental attitudes. Our clinic features child-friendly decor, including our cheerful shark mural partition, with treatments tailored to primary teeth, cavity prevention, and habit guidance.",
    whyReferred: [
      "First dental check-up recommendations for infants and toddlers",
      "Early childhood cavities, pit and fissure decay, or toothache",
      "Habit interception for thumb sucking, mouth breathing, or tongue thrusting",
      "Fluoride varnish and sealant applications for cavity-prone primary teeth",
    ],
    consultationDetails: [
      "Child-paced, gentle introductory examination ('tell-show-do' approach)",
      "Assessment of primary tooth development, jaw growth, and spacing",
      "Practical home oral hygiene and diet counselling for parents",
    ],
    preparationGuidance: [
      "Schedule the visit during your child's alert hours (not naptime or bedtime)",
      "Use positive, neutral language without mentioning words that may induce worry",
    ],
    aftercareGuidance: [
      "Supervise daily toothbrushing twice a day with age-appropriate fluoride toothpaste",
      "Limit sugary snacks and sticky sweets between regular meals",
    ],
  },
  {
    id: "periodontal-gum-care",
    number: "10",
    name: "Periodontal & Gum Care",
    category: "Preventive & Family",
    shortSummary:
      "Ultrasonic scaling, deep root planning, and periodontal therapies to safeguard gum foundations.",
    fullDescription:
      "Healthy gums form the biological foundation of every tooth. Led by our consultant periodontist, periodontal care treats bleeding gums, resolves chronic tartar accumulation, and manages deep periodontal pockets to prevent bone loss and tooth mobility.",
    whyReferred: [
      "Gums that bleed during toothbrushing or flossing",
      "Persistent bad breath (halitosis) or sour taste in the mouth",
      "Gum recession exposing sensitive tooth roots or causing longer-looking teeth",
      "Loose or shifting teeth caused by underlying periodontal bone resorption",
    ],
    consultationDetails: [
      "Periodontal pocket depth measurement across all tooth surfaces",
      "Radiographic bone level evaluation and calculus mapping",
      "Individualized hygiene maintenance schedule planning",
    ],
    preparationGuidance: [
      "Note any spots that bleed frequently or feel tender to touch",
      "Inform the dentist of conditions like diabetes which impact gum healing",
    ],
    aftercareGuidance: [
      "Rinse gently with warm saltwater or prescribed antiseptic mouthwash as advised",
      "Use soft-bristled brushes and interdental aids consistently every day",
    ],
  },
  {
    id: "oral-surgery",
    number: "11",
    name: "Oral Surgery",
    category: "Surgical",
    shortSummary:
      "Comfort-controlled extractions, impacted wisdom tooth removal, and minor oral surgical care.",
    fullDescription:
      "Performed by our consultant oral and maxillofacial surgeon, oral surgery encompasses safe, gentle tooth removals, wisdom tooth extractions, and minor soft-tissue procedures. Local anaesthesia ensures complete procedural comfort throughout.",
    whyReferred: [
      "Painful, impacted, or partially erupted third molars (wisdom teeth)",
      "Severely decayed or structurally broken teeth beyond endodontic salvage",
      "Orthodontic extractions indicated for severe crowding relief",
      "Soft tissue frenectomy or minor pre-prosthetic oral surgical adjustments",
    ],
    consultationDetails: [
      "Radiographic assessment of tooth roots and proximity to sensory nerves",
      "Clear explanation of surgical technique, anaesthesia, and recovery",
      "Review of systemic health, clotting parameters, and medical conditions",
    ],
    preparationGuidance: [
      "Eat a light meal beforehand unless otherwise instructed by the surgeon",
      "Wear comfortable, loose clothing and arrange for a companion if preferred",
    ],
    aftercareGuidance: [
      "Maintain continuous pressure on the gauze pad for 45 to 60 minutes",
      "Do NOT spit, smoke, or use drinking straws for 48 hours to protect the healing clot",
    ],
  },
];
