export interface DentalService {
  id: string;
  name: string;
  shortTagline: string;
  category: "General" | "Restorative" | "Surgical" | "Cosmetic" | "Orthodontic";
  iconName: string;
  description: string;
  whyNeeded: string[];
  whatToExpect: string[];
  preparation: string[];
  aftercare: string[];
  whenToContact: string[];
}

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: "general-care",
    name: "General Dental Care",
    shortTagline: "Routine examinations, preventive hygiene & scaling",
    category: "General",
    iconName: "ShieldCheck",
    description:
      "Comprehensive routine dental check-ups, digital oral examinations, and ultrasonic scaling to maintain optimal oral health and detect potential concerns early.",
    whyNeeded: [
      "Preventive plaque and tartar removal beyond what toothbrushing can reach",
      "Early detection of cavities, enamel wear, and gum inflammation",
      "Routine oral cancer screening and bite assessment",
      "Fresh breath maintenance and stain prevention",
    ],
    whatToExpect: [
      "A thorough clinical examination of teeth, gums, and tongue",
      "Gentle ultrasonic scaling to remove calculus and hardened deposits",
      "Polishing for smooth tooth surfaces and light stain removal",
      "Personalized oral hygiene recommendations for home care",
    ],
    preparation: [
      "Brush and floss gently before your appointment",
      "List any current medications or medical conditions to update your doctor",
      "Mention any recent tooth sensitivity, bleeding gums, or discomfort",
    ],
    aftercare: [
      "Teeth may feel noticeably smooth and occasionally mild sensitivity for a few hours",
      "Continue brushing twice daily with a soft-bristled toothbrush",
      "Rinse with warm water or recommended mouthwash as advised",
    ],
    whenToContact: [
      "Persistent gum bleeding lasting beyond 24 hours after cleaning",
      "Unusual tooth pain or swelling developing after your visit",
    ],
  },
  {
    id: "extraction-tooth-removal",
    name: "Extraction / Tooth Removal",
    shortTagline: "Gentle removal of damaged, infected or impacted teeth",
    category: "Surgical",
    iconName: "Activity",
    description:
      "Safe, pain-controlled tooth removal performed with local anesthesia, indicated when a tooth cannot be restored or causes chronic crowding or infection.",
    whyNeeded: [
      "Severe tooth decay or structural damage beyond root canal restoration",
      "Impacted, painful, or misaligned wisdom teeth",
      "Advanced periodontal looseness or recurrent infection",
      "Orthodontic preparation when space creation is clinically indicated",
    ],
    whatToExpect: [
      "Application of local anesthesia so the area is thoroughly numb and comfortable",
      "A sensation of firm pressure, but no sharp discomfort during the procedure",
      "Placement of a sterile gauze pack to help a stable blood clot form",
      "Clear, step-by-step take-home instructions for a peaceful recovery",
    ],
    preparation: [
      "Have a light meal prior to local anesthesia unless instructed otherwise",
      "Inform the doctor about blood thinners or chronic medical conditions",
      "Arrange comfortable transportation if having surgical wisdom tooth extraction",
    ],
    aftercare: [
      "Bite firmly on the sterile gauze pack for 45 to 60 minutes",
      "Do NOT spit, suck through straws, or rinse vigorously for 24 hours",
      "Stick to soft, cool foods like curd, smoothies, idli, and ice cream",
      "Avoid smoking or alcohol, which interfere with clot healing",
    ],
    whenToContact: [
      "Heavy bleeding that does not slow down with firm gauze pressure",
      "Severe or worsening throbbing pain not relieved by prescribed medication",
      "Fever, chills, or noticeable swelling increasing after 48 hours",
    ],
  },
  {
    id: "orthodontic-treatment",
    name: "Orthodontic Treatment",
    shortTagline: "Braces & clear aligners for healthy smiles and proper bite alignment",
    category: "Orthodontic",
    iconName: "Smile",
    description:
      "Customized orthodontic solutions including traditional metal braces, ceramic aesthetic braces, and clear aligners to correct crooked teeth, gaps, and jaw alignment.",
    whyNeeded: [
      "Crowded, rotated, or overlapping teeth difficult to clean effectively",
      "Gaps or spaces between teeth affecting smile aesthetics",
      "Bite misalignment such as overbite, underbite, or crossbite",
      "Improving chewing function and preventing uneven enamel wear",
    ],
    whatToExpect: [
      "Detailed diagnostic photos, dental study models, and cephalometric evaluation",
      "Gentle bonding of brackets or digital scanning for custom clear aligners",
      "Periodic adjustment visits every 4–6 weeks to monitor gradual tooth movement",
      "Mild tenderness for 2–3 days following adjustments as teeth gently shift",
    ],
    preparation: [
      "Complete a thorough professional dental cleaning before orthodontic placement",
      "Ensure all active cavities are restored prior to appliance bonding",
      "Discuss your preferred appliance type (braces vs. aligners) with Dr. Preethi",
    ],
    aftercare: [
      "Use orthodontic brush, interdental brushes, and floss threaders consistently",
      "Avoid hard, sticky foods (chikki, hard candies, chewing gum, biting into whole apples)",
      "Wear aligners for 20–22 hours daily if using clear aligners",
      "Use orthodontic relief wax if brackets cause minor cheek irritation",
    ],
    whenToContact: [
      "A loose bracket, broken archwire, or wire poking sharply into cheeks",
      "Lost or broken aligner trays before the scheduled change date",
    ],
  },
  {
    id: "fillings",
    name: "Fillings",
    shortTagline: "Tooth-colored composite restorations for decay & chipped enamel",
    category: "Restorative",
    iconName: "Sparkles",
    description:
      "Aesthetic tooth-colored composite restorations that blend seamlessly with natural tooth enamel to repair cavities, minor fractures, and worn areas.",
    whyNeeded: [
      "Cavities caused by dental caries requiring restoration to halt decay",
      "Chipped or fractured tooth edges from chewing or accidental impact",
      "Cervical abrasion or enamel erosion causing sensitivity near the gumline",
      "Replacement of deteriorated or leaking older fillings",
    ],
    whatToExpect: [
      "Gentle removal of decayed or weakened tooth structure under local anesthesia if needed",
      "Micro-mechanical bonding and layering of shade-matched composite resin",
      "High-intensity blue light curing to harden the filling in seconds",
      "Precise bite adjustment and smoothing for a natural feel",
    ],
    preparation: [
      "Let the dentist know if you experience cold, sweet, or biting sensitivity",
      "Normal eating prior to appointment is usually fine",
    ],
    aftercare: [
      "Composite fillings harden immediately, but wait until local numbness wears off before chewing hot foods",
      "Maintain regular brushing and flossing around the restoration",
      "Mild temperature sensitivity may occur for a few days and gradually subsides",
    ],
    whenToContact: [
      "The bite feels consistently 'high' or uneven when your teeth come together",
      "Sharp pain when biting or throbbing pain that persists",
    ],
  },
  {
    id: "crown-bridges",
    name: "Crown & Bridges",
    shortTagline: "Durable ceramic crowns and fixed prosthetic bridges",
    category: "Restorative",
    iconName: "Layers",
    description:
      "Precision-crafted dental crowns (caps) to protect root-canal treated or fractured teeth, and fixed bridges to replace one or more missing teeth stably.",
    whyNeeded: [
      "Protecting brittle teeth following root canal treatment (endodontics)",
      "Restoring severely broken, cracked, or worn down teeth",
      "Anchoring fixed replacement teeth without removable plates",
      "Cosmetic enhancement of misshapen or severely discolored teeth",
    ],
    whatToExpect: [
      "Precision tooth preparation and digital/silicone impression recording",
      "Placement of a temporary protective crown while the final ceramic unit is crafted",
      "Custom shade-matching against your adjacent natural teeth",
      "Permanent cementation and meticulous bite verification during the final visit",
    ],
    preparation: [
      "Address any underlying pulp or gum issues before final crown fabrication",
      "Discuss material options (Zirconia, porcelain-fused-to-metal, all-ceramic) with your dentist",
    ],
    aftercare: [
      "Avoid chewing extremely hard or sticky foods on temporary crowns",
      "Floss carefully around the crown margins using horizontal pull-through technique",
      "Report any bite discomfort early so micro-adjustments can be made",
    ],
    whenToContact: [
      "A temporary or permanent crown dislodges or feels loose",
      "Persistent pain when tapping or chewing on the crowned tooth",
    ],
  },
  {
    id: "implant-surgery",
    name: "Implant Surgery",
    shortTagline: "Permanent titanium roots for lifelong replacement of missing teeth",
    category: "Surgical",
    iconName: "ShieldAlert",
    description:
      "Advanced surgical placement of biocompatible titanium dental implants that fuse directly with the jawbone, providing a solid foundation for crowns, bridges, or dentures.",
    whyNeeded: [
      "Permanent replacement for single or multiple missing teeth without shaving adjacent healthy teeth",
      "Preventing jawbone loss and facial sagging that naturally follows tooth loss",
      "Restoring full chewing power and natural smile aesthetics",
      "Stabilizing loose removable dentures",
    ],
    whatToExpect: [
      "Thorough 3D radiographic assessment (CBCT) and bone density evaluation",
      "Precise surgical placement performed under local anesthesia with complete comfort",
      "Healing period (osseointegration) where bone securely bonds with the titanium post",
      "Placement of the abutment and final custom ceramic crown",
    ],
    preparation: [
      "Follow pre-operative antibiotic or anti-inflammatory regimen if prescribed",
      "Disclose medical history including diabetes, heart conditions, or osteoporosis medications",
      "Eat a nutritious soft meal beforehand unless sedation is planned",
    ],
    aftercare: [
      "Apply cold ice packs externally to cheek in 15-minute intervals for first 24 hours",
      "Eat soft, lukewarm foods; avoid chewing directly over the surgical site",
      "Do not disturb or probe the surgical site with tongue or fingers",
      "Take all prescribed antibiotics and pain relievers exactly as instructed",
    ],
    whenToContact: [
      "Uncontrolled bleeding or excessive swelling that peaks after day 3",
      "Severe pain not eased by prescribed medication",
      "Any mobility or sensation of looseness in the implant post",
    ],
  },
  {
    id: "gum-surgery",
    name: "Gum Surgery",
    shortTagline: "Periodontal pocket reduction, gingival flap & tissue health restoration",
    category: "Surgical",
    iconName: "HeartPulse",
    description:
      "Targeted periodontal procedures to treat deep gum pockets, eliminate chronic bacterial reservoirs, manage receding gums, and secure the foundation of natural teeth.",
    whyNeeded: [
      "Deep periodontal pockets that cannot be cleaned by standard scaling alone",
      "Chronic gum swelling, bleeding, and persistent foul breath from bacteria",
      "Bone loss around roots requiring regenerative therapy",
      "Gummy smile correction or cosmetic gum recontouring",
    ],
    whatToExpect: [
      "Local anesthesia ensuring a pain-free, comfortable surgical experience",
      "Gentle access to root surfaces for meticulous debridement and disinfection",
      "Fine dissolving or micro-sutures placed to support healthy gum reattachment",
      "Protective periodontal dressing applied when clinically indicated",
    ],
    preparation: [
      "Complete pre-surgical deep scaling and root planing as advised",
      "Avoid smoking for at least 48 hours prior to treatment to optimize micro-vascular healing",
    ],
    aftercare: [
      "Do not brush directly over the surgical sutures for the first few days; rinse gently",
      "Use prescribed antimicrobial chlorhexidine mouthwash as directed",
      "Stick to a soft, non-spicy, non-acidic diet during initial recovery",
      "Avoid smoking, hot spicy curries, and strenuous workouts for 48 hours",
    ],
    whenToContact: [
      "Continuous bleeding from the surgical gum margin",
      "Severe swelling, fever, or early loosening of sutures causing irritation",
    ],
  },
  {
    id: "teeth-bleaching",
    name: "Teeth Bleaching",
    shortTagline: "Safe, professional teeth whitening for a noticeably brighter smile",
    category: "Cosmetic",
    iconName: "Sun",
    description:
      "In-office professional dental bleaching using safe, clinically tested peroxide formulations with enamel protection to lighten stains from coffee, tea, turmeric, and aging.",
    whyNeeded: [
      "Deep extrinsic stains from tea, coffee, smoking, and spices",
      "Age-related yellowing of enamel and dentin",
      "Pre-wedding, graduation, or special event smile enhancement",
      "Mild fluorosis or superficial enamel discolorations",
    ],
    whatToExpect: [
      "Protective barrier applied to gums to prevent irritation from whitening gel",
      "Controlled application of professional-grade bleaching gel to tooth surfaces",
      "Activation and monitoring in 15–20 minute intervals for noticeable brightness",
      "Desensitizing paste application post-treatment for comfort",
    ],
    preparation: [
      "Ensure professional scaling and cleaning is done first for uniform gel contact",
      "Treat any active cavities or gum inflammation before cosmetic bleaching",
    ],
    aftercare: [
      "Follow the 'White Diet' for 48 hours: avoid dark curries, coffee, tea, red wine, and soy sauce",
      "Avoid smoking and highly colored food items during the porous enamel window",
      "Use sensitive toothpaste if temporary mild thermal sensitivity occurs",
    ],
    whenToContact: [
      "Persistent tooth sensitivity that lasts longer than 3–4 days",
      "Any prolonged gum burning sensation or mucosal irritation",
    ],
  },
  {
    id: "dentures-artificial-tooth",
    name: "Dentures / Replacement Artificial Tooth",
    shortTagline: "Comfortable complete & partial removable prosthetics",
    category: "Restorative",
    iconName: "CheckCircle2",
    description:
      "Custom-crafted complete and partial dentures designed to restore natural aesthetics, clear speech, and proper chewing function for individuals missing several or all teeth.",
    whyNeeded: [
      "Multiple missing teeth affecting the ability to chew food comfortably",
      "Complete edentulism (loss of all upper or lower teeth)",
      "Restoring lip support and natural facial profile height",
      "Affordable, non-surgical tooth replacement alternative",
    ],
    whatToExpect: [
      "Step-by-step anatomical impressions to capture oral tissue contours accurately",
      "Wax try-in stage to verify tooth shade, shape, alignment, and facial aesthetics with you",
      "Delivery of custom denture with meticulous bite and border checks",
      "Follow-up refinement visits to relieve minor pressure points as gums adapt",
    ],
    preparation: [
      "Allow extraction sites to heal sufficiently before final denture fabrication unless immediate denture is planned",
      "Bring any previous dentures for clinical evaluation and reference",
    ],
    aftercare: [
      "Remove and rinse dentures after meals; clean gently with a soft denture brush",
      "Never sleep with dentures; soak them overnight in clean room-temperature water",
      "Start with small bites of soft foods, chewing evenly on both sides of the mouth",
    ],
    whenToContact: [
      "Persistent sore spots, ulcers, or pain that do not improve after 48 hours",
      "Denture clicks, slips repeatedly, or feels unstable during speech",
    ],
  },
];
