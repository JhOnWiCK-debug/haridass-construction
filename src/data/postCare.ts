export interface PostCareTopic {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  summary: string;
  whatToExpect: string[];
  immediateAftercare: string[];
  thingsToAvoid: string[];
  foodAndDrink: string[];
  oralHygiene: string[];
  warningSigns: string[];
}

export const POST_TREATMENT_CARE: PostCareTopic[] = [
  {
    id: "extraction-care",
    title: "Extraction / Tooth Removal",
    subtitle: "Safe healing & clot protection for smooth recovery",
    iconName: "ShieldAlert",
    badge: "Surgical Aftercare",
    summary:
      "Proper care during the first 24 to 48 hours protects the vital healing blood clot (preventing dry socket) and ensures rapid, comfortable gum recovery.",
    whatToExpect: [
      "Mild oozing of saliva tinted slightly pink for the first 12–24 hours is completely normal.",
      "Local anesthesia numbness will wear off in 2 to 4 hours; avoid biting your lips or tongue.",
      "Mild to moderate swelling may occur, typically peaking at around 48 hours and then subsiding.",
      "Gentle jaw stiffness is common after wisdom tooth or molar removal.",
    ],
    immediateAftercare: [
      "Keep firm, continuous pressure on the sterile gauze pack for 45–60 minutes. Discard gently afterwards.",
      "If slight oozing continues, place a fresh sterile cotton pad or a moistened black tea bag and bite firmly for 30 minutes.",
      "Keep your head elevated with an extra pillow when resting or sleeping.",
      "Apply an ice pack to your cheek (15 minutes on, 15 minutes off) during the first 24 hours.",
      "Take your prescribed painkillers and antibiotics on schedule before the anesthesia fully fades.",
    ],
    thingsToAvoid: [
      "DO NOT spit vigorously — swallow saliva gently to protect the healing clot.",
      "DO NOT drink through a straw for at least 5 to 7 days (suction can dislodge the clot).",
      "DO NOT smoke or chew tobacco for at least 72 hours (greatly delays healing).",
      "DO NOT touch or poke the extraction socket with fingers, toothpicks, or your tongue.",
      "Avoid strenuous exercise, heavy lifting, or bending over for 48 hours.",
    ],
    foodAndDrink: [
      "Drink plenty of room-temperature water and hydrating fluids (without straws).",
      "Eat cool, soft, nutritious foods: tender idli, curd rice, mashed bananas, lukewarm khichdi, dalia, ice cream, yogurt.",
      "Avoid very hot foods, hot tea/coffee, spicy gravies, chips, and foods with small seeds for 3–5 days.",
      "Chew strictly on the opposite, non-treated side of your mouth.",
    ],
    oralHygiene: [
      "Do NOT rinse your mouth for the first 24 hours.",
      "After 24 hours, rinse very gently with lukewarm water mixed with 1/2 teaspoon of salt 3–4 times daily, especially after eating.",
      "Brush your other teeth normally, but be extremely gentle near the extraction socket.",
    ],
    warningSigns: [
      "Persistent bright red, heavy bleeding that does not stop after 2 hours of firm gauze pressure.",
      "Severe, throbbing pain radiating toward the ear that begins on day 3 or 4 (potential dry socket).",
      "Fever over 101°F (38.3°C) or severe difficulty swallowing or opening your mouth.",
      "Swelling that continues to worsen after 72 hours rather than improving.",
    ],
  },
  {
    id: "orthodontic-care",
    title: "Orthodontic Treatment",
    subtitle: "Caring for braces, wires, or clear aligner trays",
    iconName: "Smile",
    badge: "Orthodontics",
    summary:
      "Braces and clear aligners move teeth safely. Proper maintenance protects brackets, preserves enamel, and keeps your smile transformation on schedule.",
    whatToExpect: [
      "Teeth will feel tender and mildly loose for 3 to 5 days following appliance bonding or adjustments.",
      "Cheeks and lips may experience friction spots until soft tissues adapt to brackets.",
      "Speech might feel slightly altered during the first few days with new aligners or retainers.",
    ],
    immediateAftercare: [
      "Take prescribed mild analgesics as advised by Dr. Preethi during the initial 48 hours of soreness.",
      "Use orthodontic relief wax: roll a small pea-sized ball, dry the irritating bracket, and press it gently over the wire.",
      "Rinse with warm saltwater to soothe irritated cheek or lip tissues.",
      "If using aligners: wear them 20–22 hours daily, removing only for eating and brushing.",
    ],
    thingsToAvoid: [
      "DO NOT bite into hard foods directly (whole apples, raw carrots, guava, chicken bones, ice cubes).",
      "DO NOT consume sticky candies, chikki, caramel, chewing gum, or hard toffees.",
      "DO NOT open bottle caps, tear packets, or bite fingernails and pen tips with your teeth.",
      "Avoid sugary sodas and acidic beverages that cause white spot lesions around brackets.",
    ],
    foodAndDrink: [
      "Stick to soft foods for the first 3 days after every wire change: pongal, porridge, soft dosas, pasta, soups, smoothies.",
      "Cut fruits and crunchy vegetables into thin, bite-sized slices and chew gently with back teeth.",
      "Drink plenty of water to naturally flush away food particles trapped in braces.",
    ],
    oralHygiene: [
      "Brush thoroughly after every meal using an orthodontic v-trim or soft electric toothbrush.",
      "Use interdental brushes (proxabrush) to clean under wires and around each individual bracket.",
      "Floss daily using an orthodontic floss threader or water flosser.",
      "Clean aligners with cool water and a soft brush; never use hot water which can warp the plastic.",
    ],
    warningSigns: [
      "A loose bracket floating on the wire or a completely dislodged band.",
      "A sharp archwire protruding and cutting into your cheek or tongue.",
      "Lost or cracked clear aligner trays.",
      "Excessive localized gum swelling around any particular bracket.",
    ],
  },
  {
    id: "fillings-care",
    title: "Fillings",
    subtitle: "Protecting tooth-colored composite restorations",
    iconName: "Sparkles",
    badge: "Restorative Care",
    summary:
      "Modern composite fillings cure immediately under dental blue light, but careful initial habits ensure maximum bond strength and everyday comfort.",
    whatToExpect: [
      "Numbness from local anesthesia lasts roughly 2 to 3 hours; be cautious with chewing.",
      "Mild temperature sensitivity to cold drinks or ice cream may persist for 1 to 2 weeks as the nerve settles.",
      "The tooth surface will feel completely smooth and natural.",
    ],
    immediateAftercare: [
      "Wait until numbness completely disappears before eating solid or hot foods to avoid biting lips or tongue.",
      "Chew slowly on the opposite side of your mouth for the remainder of the treatment day.",
      "Use a desensitizing toothpaste if you notice mild cold sensitivity.",
    ],
    thingsToAvoid: [
      "Avoid biting directly on extremely hard items (ice cubes, popcorn kernels, uncracked nuts).",
      "Avoid chewing non-food objects like pens, pencils, or fingernails.",
      "Do not grind or clench your teeth; notify your dentist if you grind at night.",
    ],
    foodAndDrink: [
      "Room temperature beverages and soft foods are ideal for the first 12 hours.",
      "Avoid intensely dark staining foods (black coffee, turmeric curries) for 24 hours while the composite polish stabilizes.",
    ],
    oralHygiene: [
      "Resume regular gentle brushing and flossing right away.",
      "Floss carefully around the restored contact point; the floss should slide through with a gentle snap.",
    ],
    warningSigns: [
      "The bite feels 'high' or when you close your teeth, the new filling hits first.",
      "A sharp edge or roughness that irritates your tongue.",
      "Throbbing toothache that keeps you awake or worsens over time.",
    ],
  },
  {
    id: "crown-bridges-care",
    title: "Crown & Bridges",
    subtitle: "Caring for permanent ceramic crowns and fixed prosthetics",
    iconName: "Layers",
    badge: "Prosthodontic Care",
    summary:
      "Crowns and bridges restore strength and aesthetics. Consistent hygiene around the gumline ensures long-lasting stability.",
    whatToExpect: [
      "Temporary crowns: Lightly cemented for easy removal, requiring gentle chewing habits.",
      "Permanent crowns: Cemented securely; mild gum tenderness around the margin may last 24–48 hours.",
      "The bite may feel slightly new for the first few days as your jaw adapts.",
    ],
    immediateAftercare: [
      "Wait at least 1 hour after permanent cementation before drinking or chewing.",
      "Avoid chewing hard, sticky, or crunchy foods for the first 24 hours while permanent cement fully sets.",
      "Rinse with warm salt water if the gum collar around the crowned tooth feels slightly tender.",
    ],
    thingsToAvoid: [
      "DO NOT pull dental floss upwards if cleaning around a temporary crown; instead, release one end and pull through horizontally.",
      "DO NOT chew ice, hard nuts, hard candy, or sticky sweets like toffee or chikki on the crowned side.",
      "Avoid grinding teeth without a nightguard if you have bruxism.",
    ],
    foodAndDrink: [
      "Start with softer meals on the day of placement (rice, lentils, steamed vegetables, soft fish, idli).",
      "Chew evenly on both sides of your mouth once the 24-hour setting period is complete.",
    ],
    oralHygiene: [
      "Brush twice daily with a soft toothbrush, focusing on the boundary where the crown meets the gumline.",
      "For dental bridges, use superfloss or a bridge threader to clean underneath the artificial floating tooth (pontic).",
      "Maintain 6-month check-ups for professional evaluation of crown margins.",
    ],
    warningSigns: [
      "The crown feels loose, rocks when tapped, or has come off completely.",
      "Your teeth feel uneven when biting down normally after 48 hours.",
      "Persistent pain or throbbing pressure under the crown when chewing.",
    ],
  },
  {
    id: "implant-care",
    title: "Implant Surgery",
    subtitle: "Protecting the titanium implant during bone osseointegration",
    iconName: "ShieldCheck",
    badge: "Implantology",
    summary:
      "Dental implants rely on quiet, undisturbed healing to fuse solidly with your jawbone. Following these steps protects your surgical site.",
    whatToExpect: [
      "Mild swelling, slight bruising, and minor oozing are common during the first 48 hours.",
      "Swelling typically peaks on the second or third day and then subsides rapidly.",
      "Small stitches may be present; some dissolve on their own, while others will be removed in 7–10 days.",
    ],
    immediateAftercare: [
      "Keep firm pressure on the gauze pack placed over the implant site for 45–60 minutes.",
      "Apply an external ice pack wrapped in a cloth to your cheek in 15-minute intervals for the first 24 hours.",
      "Rest with your head elevated on pillows for the first two nights.",
      "Take all prescribed antibiotics and pain medications precisely as scheduled.",
    ],
    thingsToAvoid: [
      "DO NOT chew food directly over the surgical implant site for the first 4–6 weeks.",
      "DO NOT probe, feel, or disturb the implant or stitches with your tongue or fingers.",
      "DO NOT smoke, vape, or use tobacco products — smoking drastically increases implant failure risk.",
      "Avoid strenuous workouts, running, or swimming for 3–5 days post-surgery.",
    ],
    foodAndDrink: [
      "Consume only cool, lukewarm, soft foods (pureed soups, dal khichdi, yogurt, oatmeal, smoothies).",
      "Never drink through a straw; always sip directly from a cup.",
      "Avoid spicy foods, seeds, popcorn, nuts, and crunchy snacks that can lodge near the gums.",
    ],
    oralHygiene: [
      "Do NOT brush the surgical site directly for the first 3 days; brush other teeth carefully.",
      "After 24 hours, use warm saltwater rinses or the prescribed chlorhexidine mouthwash very gently (let it roll in mouth and fall out, no forceful spitting).",
    ],
    warningSigns: [
      "Uncontrolled, continuous bleeding that fails to slow with firm gauze pressure.",
      "Swelling, pain, or fever that increases after day 3.",
      "Any sensation of movement or clicking in the implant healing abutment.",
    ],
  },
  {
    id: "gum-surgery-care",
    title: "Gum Surgery",
    subtitle: "Periodontal healing & gum tissue preservation",
    iconName: "HeartPulse",
    badge: "Periodontics",
    summary:
      "Careful post-operative hygiene and gentle protection allow delicate periodontal tissues to reattach and heal cleanly without infection.",
    whatToExpect: [
      "Slight pinkish saliva or minor spotting is normal for the first 24 hours.",
      "Gums will feel sensitive and look mildly swollen for a few days.",
      "A protective periodontal pack or fine sutures may be placed over the area.",
    ],
    immediateAftercare: [
      "Rest quietly for the remainder of the day after surgery.",
      "Apply cold compresses to the outside of your face in 15-minute cycles during the first 24 hours.",
      "Take prescribed anti-inflammatory and pain medication as directed by the doctor.",
    ],
    thingsToAvoid: [
      "DO NOT brush or floss directly on the surgical area until instructed by the periodontist.",
      "DO NOT pull or stretch your lips to inspect the surgical site, as this can tear sutures.",
      "Avoid smoking or alcohol for at least 72 hours.",
      "Avoid hot, spicy, or crunchy foods that irritate sensitive gums.",
    ],
    foodAndDrink: [
      "Opt for cold or lukewarm soft foods (curd rice, smoothies, mashed potatoes, tender idlis).",
      "Drink plenty of water and clear juices without straws.",
    ],
    oralHygiene: [
      "Do not rinse on the day of surgery.",
      "Starting day 2, gently bathe the mouth with warm saltwater or prescribed antiseptic mouthwash after meals.",
      "Do not spit forcefully; lean over the sink and let the liquid fall out naturally.",
    ],
    warningSigns: [
      "Sustained bleeding from the gumline that does not subside.",
      "Periodontal dressing becomes loose and causes severe pain or bleeding.",
      "High fever or expanding facial swelling.",
    ],
  },
  {
    id: "teeth-bleaching-care",
    title: "Teeth Bleaching",
    subtitle: "Protecting your bright smile & minimizing transient sensitivity",
    iconName: "Sun",
    badge: "Cosmetic Care",
    summary:
      "Teeth bleaching temporarily opens microscopic enamel pores. Adhering to the 48-hour 'White Diet' ensures long-lasting, brilliant results.",
    whatToExpect: [
      "Teeth will look noticeably brighter immediately following the clinic session.",
      "Mild thermal 'zingers' or sensitivity to cold air and chilled water may occur for 24–48 hours.",
      "Gums may show tiny temporary white blanching marks that resolve within a few hours.",
    ],
    immediateAftercare: [
      "Use a desensitizing toothpaste containing potassium nitrate or fluoride as recommended.",
      "Drink room-temperature water rather than ice-cold beverages.",
      "Brush very gently with a soft-bristled toothbrush.",
    ],
    thingsToAvoid: [
      "AVOID all staining foods and beverages for 48 hours ('The White Diet Rule').",
      "NO coffee, black tea, green tea, red wine, cola, or dark fruit juices for 48 hours.",
      "NO turmeric, dark gravies, soy sauce, mustard, ketchup, or beets.",
      "NO smoking, chewing tobacco, or vaping.",
    ],
    foodAndDrink: [
      "Safe foods during first 48 hours: white rice, idli, curd/yogurt, milk, white bread, egg whites, peeled chicken, potatoes, paneer, bananas.",
      "Stick to clear water and white milk.",
    ],
    oralHygiene: [
      "Brush twice daily with a soft toothbrush and non-abrasive sensitivity toothpaste.",
      "Floss daily to keep contacts between teeth bright and plaque-free.",
      "Rinse with plain room-temperature water after every meal.",
    ],
    warningSigns: [
      "Severe or sharp toothache that does not ease after 72 hours.",
      "Severe burning or blistering on the gums or inner lips.",
    ],
  },
  {
    id: "dentures-care",
    title: "Dentures / Replacement Artificial Tooth",
    subtitle: "Adapting to your new prosthetics with comfort & confidence",
    iconName: "CheckCircle2",
    badge: "Prosthetics",
    summary:
      "New dentures require a short adjustment period as mouth muscles learn to balance them. Proper hygiene keeps gums healthy and fresh.",
    whatToExpect: [
      "Increased saliva production for the first few days as your mouth adapts.",
      "Mild difficulty pronouncing certain sounds ('s' and 'th') during the first week.",
      "Occasional minor sore spots as the denture settles into gum contours.",
    ],
    immediateAftercare: [
      "Wear your dentures continuously for the first 24 hours so your dentist can identify any pressure points during your follow-up.",
      "Read out loud or talk in front of a mirror to accelerate natural speech adaptation.",
      "Chew slowly and take small bites, chewing on both sides simultaneously.",
    ],
    thingsToAvoid: [
      "DO NOT sleep with your dentures once the initial adjustment period is completed (gums need nighttime rest).",
      "DO NOT use boiling hot water to clean dentures (this will warp the acrylic plastic).",
      "DO NOT attempt to bend, grind, or adjust metal clasps or acrylic yourself with tools.",
      "Avoid very sticky foods (chewing gum, toffees) or extremely hard crusts.",
    ],
    foodAndDrink: [
      "Begin with soft, easy-to-chew foods: curd rice, mashed vegetables, scrambled eggs, stewed fruits.",
      "Cut foods into small bite-sized pieces and chew using back teeth on both sides.",
    ],
    oralHygiene: [
      "Remove and rinse dentures under running water after every meal.",
      "Brush dentures daily using a soft denture brush and mild non-abrasive soap or denture paste (never abrasive whitening toothpastes).",
      "Soak dentures overnight in a container of clean water or denture-cleansing solution.",
      "Gently clean your gums, tongue, and palate with a soft brush every morning and night.",
    ],
    warningSigns: [
      "Painful sore spots or ulcers that persist without improvement for more than 48 hours.",
      "Denture clicks, slips repeatedly, or falls while speaking.",
      "Cracks, chips, or broken teeth on the denture base.",
    ],
  },
];
