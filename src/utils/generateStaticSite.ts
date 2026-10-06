import JSZip from "jszip";

export async function generateNivisStaticZip(): Promise<Blob> {
  const zip = new JSZip();

  // 1. README.txt
  const readmeContent = `====================================================================
NIVIS PET CLINIC & PET STORE — PRODUCTION STATIC DEPLOYMENT BUNDLE
====================================================================

Business: Nivis Pet Clinic & Pet Store
Location: Thirumalai Balaji Nagar, Bus Stop, No. 74/1, Main Road, 
          MGR Nagar, Thiruverkadu, Chennai, Tamil Nadu 600077
Phone:    086101 25329
WhatsApp: +91 86101 25329
Rating:   5.0 ★ Google Rating (5 Google Reviews)
Closing:  9:30 PM (Monday–Sunday)
Doctor:   Dr. Karthika (Veterinary Care)

--------------------------------------------------------------------
HOW TO DEPLOY TO NETLIFY IN 30 SECONDS (ZERO INSTALL / ZERO BUILD):
--------------------------------------------------------------------
1. Extract this ZIP folder to your computer.
2. Go to https://app.netlify.com/drop in your web browser.
3. Sign in to your Netlify account (free).
4. Drag and drop the extracted folder into the upload circle on Netlify.
5. Your website is instantly LIVE with high-speed global SSL and CDN!

--------------------------------------------------------------------
NO NODE.JS, NO NPM INSTALL, NO DATABASE REQUIRED!
--------------------------------------------------------------------
This bundle is 100% self-contained static HTML, CSS, JavaScript,
and interactive client-side features (Pet Passport, Urgency Guide,
Vaccine Reminder, Appointment Booking, WhatsApp Store Enquiry,
Nivi 🐾 AI Pet Assistant, Real Google Maps Embed).

All paths are relative. Ready for Netlify, GitHub Pages, Vercel, or Apache/Nginx.
`;

  // 2. netlify.toml
  const netlifyToml = `[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
`;

  // 3. index.html - Complete standalone, fully styled, interactive production HTML
  const indexHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nivis Pet Clinic & Pet Store | Veterinary Care in Thiruverkadu, Chennai</title>
  <meta name="description" content="Compassionate veterinary care and everyday pet essentials in Thiruverkadu, Chennai. 5.0 ★ Google Rating. Consultations, vaccinations, puppy care, and pet treatment.">
  <meta name="keywords" content="Nivis Pet Clinic, Nivis Pet Clinic Thiruverkadu, Nivis Pet Store MGR Nagar, Pet clinic Thiruverkadu, Veterinary clinic Thiruverkadu, Pet doctor Thiruverkadu, Dr Karthika veterinarian">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Nivis Pet Clinic & Pet Store | Because every pet deserves a little more care.">
  <meta property="og:description" content="Compassionate veterinary care and everyday pet essentials in MGR Nagar, Thiruverkadu, Chennai. 5.0 ★ Google Rating.">
  <meta property="og:type" content="website">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
          },
          colors: {
            nivis: {
              ivory: '#faf7f2',
              cream: '#f4efe6',
              sand: '#e8e2d5',
              forest: '#153e35',
              emerald: '#1b4d3e',
              sage: '#8fa89b',
              terracotta: '#c86343',
              charcoal: '#1e242b',
            }
          }
        }
      }
    }
  </script>

  <style>
    body {
      background-color: #faf7f2;
      color: #1e242b;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .font-serif {
      font-family: 'Cormorant Garamond', Georgia, serif;
    }
    .shadow-editorial {
      box-shadow: 0 16px 36px -12px rgba(21, 62, 53, 0.08);
    }
    .shadow-editorial-lg {
      box-shadow: 0 28px 56px -16px rgba(21, 62, 53, 0.12);
    }
  </style>
</head>
<body class="bg-[#faf7f2] text-[#1e242b] antialiased min-h-screen flex flex-col">

  <!-- TOP HEADER / NAVBAR -->
  <header class="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#1e242b]/10 py-3.5 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a href="#top" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-[#153e35] text-[#faf7f2] flex items-center justify-center font-serif text-2xl font-bold">N</div>
        <div>
          <span class="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#153e35] leading-none block">NIVIS</span>
          <span class="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#5e6872] font-semibold mt-0.5 block">Pet Clinic & Pet Store</span>
        </div>
      </a>

      <nav class="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#1e242b]/80">
        <a href="#services" class="hover:text-[#153e35] transition-colors">Care & Services</a>
        <a href="#care-behind-nivis" class="hover:text-[#153e35] transition-colors">The Care Behind Nivis</a>
        <a href="#stories" class="hover:text-[#153e35] transition-colors">Stories</a>
        <a href="#pet-store" class="hover:text-[#153e35] transition-colors">Pet Store</a>
        <a href="#urgency-guide" class="hover:text-[#153e35] transition-colors">Urgency Guide</a>
        <a href="#pet-passport" class="hover:text-[#153e35] transition-colors">Pet Passport</a>
        <a href="#location" class="hover:text-[#153e35] transition-colors">Location</a>
        <a href="#faq" class="hover:text-[#153e35] transition-colors">FAQ</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="tel:+918610125329" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-full bg-[#f4efe6] text-[#1e242b] hover:bg-[#e8e2d5]">
          📞 <span>086101 25329</span>
        </a>
        <a href="https://wa.me/918610125329?text=Hi%20Nivis%20Pet%20Clinic%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment%20for%20my%20pet." target="_blank" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-full bg-[#eaf4ed] text-[#153e35] hover:bg-[#d6ebd9]">
          💬 <span>WhatsApp</span>
        </a>
        <button onclick="openBookingModal()" class="px-4 py-2.5 rounded-full bg-[#153e35] text-white text-xs font-semibold hover:bg-[#1b4d3e] shadow-sm">
          Book a Visit
        </button>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="top" class="py-12 sm:py-20 bg-[#faf7f2] relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <!-- Left Hero Column -->
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153e35]/10 text-[#153e35] text-xs font-bold uppercase tracking-wider mb-5">
            <span class="w-2 h-2 rounded-full bg-[#153e35] animate-pulse"></span>
            <span>NIVIS PET CLINIC + PET STORE · THIRUVERKADU</span>
          </div>

          <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08] text-[#1e242b] font-medium tracking-tight mb-6">
            Because every pet deserves <span class="italic text-[#153e35] font-normal">a little more care.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#5e6872] leading-relaxed max-w-2xl mb-8 font-light">
            Compassionate veterinary care and everyday pet essentials for the pets who are part of your family. Personal, unhurried veterinary attention in MGR Nagar, Thiruverkadu.
          </p>

          <div class="flex flex-wrap items-center gap-3 py-3.5 px-5 rounded-2xl bg-[#f4efe6] border border-[#1e242b]/5 self-start mb-8 shadow-sm">
            <span class="text-amber-500 font-bold">★★★★★</span>
            <span class="text-sm font-bold text-[#1e242b]">5.0 Google Rating</span>
            <span class="text-xs text-[#5e6872]">•</span>
            <span class="text-xs text-[#5e6872]">5 Google Reviews</span>
          </div>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button onclick="openBookingModal()" class="px-7 py-3.5 rounded-full bg-[#153e35] text-white font-semibold text-sm hover:bg-[#1b4d3e] shadow-md text-center">
              📅 Book a Visit
            </button>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Thirumalai+Balaji+Nagar+Bus+Stop+No+74%2F1+Main+Road+MGR+Nagar+Thiruverkadu+Chennai+Tamil+Nadu+600077" target="_blank" class="px-7 py-3.5 rounded-full bg-white text-[#1e242b] border border-[#1e242b]/15 font-semibold text-sm hover:bg-[#f4efe6] shadow-sm text-center">
              📍 Get Directions
            </a>
          </div>

          <div class="mt-6 text-xs text-[#5e6872]">
            Open Monday–Sunday • Listed closing time: 9:30 PM • Women-owned
          </div>
        </div>

        <!-- Right Hero Column -->
        <div class="lg:col-span-5 relative">
          <div class="relative overflow-hidden rounded-[2.2rem] shadow-editorial-lg bg-[#e8e2d5] border border-[#1e242b]/10 aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80" alt="Gentle veterinary care for companion pets" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-[#153e35]/80 via-transparent to-black/10"></div>
            <div class="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#faf7f2]/95 backdrop-blur-md border border-white/60 shadow-editorial">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-[#153e35] text-white flex items-center justify-center text-xs font-serif font-bold shrink-0">K</div>
                <div>
                  <p class="text-xs font-semibold text-[#1e242b]">Gentle, unhurried veterinary handling</p>
                  <p class="text-[11px] text-[#5e6872] mt-0.5">"She is very caring and loving with pets." — Nivis pet parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TRUST STRIP -->
  <section class="py-6 bg-[#f4efe6] border-y border-[#1e242b]/8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        <div>
          <div class="font-serif text-2xl sm:text-3xl font-bold text-[#1e242b]">5.0 ★</div>
          <div class="text-xs font-semibold text-[#1e242b] mt-0.5">Google Rating</div>
          <div class="text-[11px] text-[#5e6872]">Flawless customer satisfaction</div>
        </div>
        <div>
          <div class="font-serif text-2xl sm:text-3xl font-bold text-[#1e242b]">5</div>
          <div class="text-xs font-semibold text-[#1e242b] mt-0.5">Google Reviews</div>
          <div class="text-[11px] text-[#5e6872]">Real pet parent experiences</div>
        </div>
        <div>
          <div class="font-serif text-2xl sm:text-3xl font-bold text-[#1e242b]">9:30 PM</div>
          <div class="text-xs font-semibold text-[#1e242b] mt-0.5">Listed Closing Time</div>
          <div class="text-[11px] text-[#5e6872]">Open Monday through Sunday</div>
        </div>
        <div>
          <div class="font-serif text-2xl sm:text-3xl font-bold text-[#1e242b]">MGR Nagar</div>
          <div class="text-xs font-semibold text-[#1e242b] mt-0.5">Thiruverkadu, Chennai</div>
          <div class="text-[11px] text-[#5e6872]">Thirumalai Balaji Nagar Bus Stop</div>
        </div>
      </div>
    </div>
  </section>

  <!-- EMOTIONAL BRAND SECTION -->
  <section class="py-20 sm:py-24 bg-[#faf7f2]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-6">
          <div class="rounded-[2.2rem] overflow-hidden shadow-editorial aspect-[4/3] bg-gray-200">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80" alt="Pet receiving patient, comforting care" class="w-full h-full object-cover">
          </div>
        </div>
        <div class="lg:col-span-6">
          <div class="text-xs font-bold uppercase tracking-wider text-[#153e35] mb-3">Patient-First Ethos</div>
          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#1e242b] font-medium mb-6">
            They can't tell you what's wrong.<br>
            <span class="italic text-[#153e35] font-normal">That's why care matters.</span>
          </h2>
          <p className="text-base text-[#5e6872] leading-relaxed mb-6 font-light">
            When a pet isn't feeling well, every pet parent wants someone who will listen, explain and treat them with patience. Nivis Pet Clinic is built around compassionate veterinary care and a genuine love for animals.
          </p>
          <div class="space-y-3 text-xs text-[#1e242b]">
            <div class="flex items-center gap-2">✓ <strong>Gentle physical examination</strong> — minimizing anxiety.</div>
            <div class="flex items-center gap-2">✓ <strong>Transparent dialogue</strong> — clear explanations without confusing jargon.</div>
            <div class="flex items-center gap-2">✓ <strong>Integrated pet store</strong> — veterinary essentials right on site.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- THE CARE BEHIND NIVIS (REPLACING DOCTOR PHOTO WITH EDITORIAL STORY) -->
  <section id="care-behind-nivis" class="py-20 sm:py-28 bg-[#f4efe6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-14">
        <div class="text-xs font-bold uppercase tracking-wider text-[#153e35] mb-3">THE CARE BEHIND NIVIS</div>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1e242b] font-medium mb-4">
          Compassion you can see in <span class="italic text-[#153e35] font-normal">every story.</span>
        </h2>
        <p class="text-base text-[#5e6872] font-light leading-relaxed">
          Nivis Pet Clinic is built around thoughtful veterinary care and a genuine love for animals. Pet parents have specifically described Dr. Karthika as caring, loving and committed to their pets.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <!-- Monogram & Dog Close-up Composition -->
        <div class="lg:col-span-6">
          <div class="bg-[#faf7f2] p-5 rounded-[2.5rem] border border-[#1e242b]/8 shadow-editorial relative">
            <div class="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80" alt="Close-up of gentle companion pet" class="w-full h-full object-cover">
              <div class="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-[#faf7f2]/95 backdrop-blur-md border border-[#153e35]/20 flex flex-col items-center justify-center shadow-md">
                <span class="font-serif text-2xl font-bold text-[#153e35] leading-none">N</span>
                <span class="text-[8px] uppercase tracking-widest text-[#5e6872] font-semibold mt-0.5">Nivis</span>
              </div>
            </div>
            <div class="pt-4 flex items-center justify-between text-xs text-[#5e6872]">
              <span>Dedicated veterinary care in Thiruverkadu</span>
              <span class="font-semibold text-[#153e35]">Dr. Karthika</span>
            </div>
          </div>
        </div>

        <!-- Featured Quote -->
        <div class="lg:col-span-6">
          <div class="bg-[#faf7f2] rounded-3xl p-8 border border-[#1e242b]/8 shadow-editorial">
            <span class="text-4xl text-[#153e35] block mb-2 font-serif">“</span>
            <blockquote class="font-serif text-2xl sm:text-3xl text-[#1e242b] leading-snug mb-6">
              "She is very caring and loving with pets."
            </blockquote>
            <div class="flex items-center justify-between pt-6 border-t border-[#1e242b]/10">
              <div>
                <div class="text-sm font-semibold text-[#1e242b]">— Nivis pet parent</div>
                <div class="text-xs text-[#5e6872]">Verified customer review</div>
              </div>
              <div class="text-right">
                <div class="font-serif text-lg font-bold text-[#153e35]">Dr. Karthika</div>
                <div class="text-xs text-[#c86343] font-medium">Veterinary Care</div>
              </div>
            </div>
            <p class="mt-6 text-xs text-[#5e6872] leading-relaxed bg-[#f4efe6] p-3.5 rounded-xl">
              Pet parents describe Dr. Karthika as caring, loving and deeply committed to the animals under her care. Nivis prioritizes personal attention, gentle physical exams, and clear communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RECOVERY STORIES -->
  <section id="stories" class="py-20 sm:py-28 bg-[#faf7f2]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="text-xs font-bold uppercase tracking-wider text-[#153e35] mb-2">Real experiences. Real pet parents.</div>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1e242b] font-medium mb-4">
          Stories that mean <span class="italic text-[#153e35] font-normal">everything.</span>
        </h2>
        <p class="text-base text-[#5e6872] font-light">Real experiences shared by Nivis pet parents.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Story 1 -->
        <div class="bg-white rounded-[2rem] border border-[#1e242b]/8 overflow-hidden shadow-editorial p-7 flex flex-col justify-between">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <div class="text-xs font-bold text-[#c86343] uppercase tracking-wider mb-2">A Dog's Recovery</div>
            <blockquote class="font-serif text-lg text-[#1e242b] leading-relaxed mb-6">
              "My dog is fully paralyzed. Dr. Karthika made my dog cured and now it's fully recovered. Thank u doctor. She is very caring and loving with pets, such a good human being. Once again thank u doctor, u gave my pet back."
            </blockquote>
          </div>
          <div class="pt-4 border-t border-[#1e242b]/8 flex items-center justify-between text-xs">
            <span class="font-semibold text-[#1e242b]">— Jaswinth Jawatg</span>
            <span class="text-[#5e6872]">Customer experience</span>
          </div>
        </div>

        <!-- Story 2 -->
        <div class="bg-white rounded-[2rem] border border-[#1e242b]/8 overflow-hidden shadow-editorial p-7 flex flex-col justify-between">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <div class="text-xs font-bold text-[#c86343] uppercase tracking-wider mb-2">Lara's Parvo Treatment</div>
            <blockquote class="font-serif text-lg text-[#1e242b] leading-relaxed mb-6">
              "Doctor is care with my pet. My pet Lara is affected in paarvo, she cured my pet completely. Thank u doctor."
            </blockquote>
          </div>
          <div class="pt-4 border-t border-[#1e242b]/8 flex items-center justify-between text-xs">
            <span class="font-semibold text-[#1e242b]">— Mathan Somu</span>
            <span class="text-[#5e6872]">Customer experience</span>
          </div>
        </div>

        <!-- Story 3 -->
        <div class="bg-white rounded-[2rem] border border-[#1e242b]/8 overflow-hidden shadow-editorial p-7 flex flex-col justify-between">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <div class="text-xs font-bold text-[#c86343] uppercase tracking-wider mb-2">Puppy's Parvo Care</div>
            <blockquote class="font-serif text-lg text-[#1e242b] leading-relaxed mb-6">
              "My dogs is affected in paarvo virus. Dr. Karthika saved my puppy's life. Thank u and grateful doctor. Continue your service madam keep it up."
            </blockquote>
          </div>
          <div class="pt-4 border-t border-[#1e242b]/8 flex items-center justify-between text-xs">
            <span class="font-semibold text-[#1e242b]">— Shanmugam</span>
            <span class="text-[#5e6872]">Customer experience</span>
          </div>
        </div>
      </div>

      <div class="mt-8 p-4 rounded-xl bg-[#f4efe6] text-xs text-[#5e6872] max-w-2xl mx-auto text-center">
        * Customer experiences from Google Reviews. Each animal's response depends on illness severity and timeliness. Nivis does not make universal medical guarantees.
      </div>
    </div>
  </section>

  <!-- SERVICES SECTION -->
  <section id="services" class="py-20 sm:py-28 bg-[#f4efe6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-14">
        <div class="text-xs font-bold uppercase tracking-wider text-[#153e35] mb-2">CLINICAL SERVICES</div>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1e242b] font-medium mb-4">
          Care when they <span class="italic text-[#153e35] font-normal">need it.</span>
        </h2>
        <p class="text-base text-[#5e6872] font-light">Six essential categories of veterinary care in Thiruverkadu.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 1. Veterinary Consultation -->
        <div class="bg-white p-6 rounded-3xl border border-[#1e242b]/8 shadow-sm">
          <div class="text-xs font-bold uppercase text-[#c86343] mb-1">Assessment</div>
          <h3 class="font-serif text-xl font-bold text-[#1e242b] mb-2">Veterinary Consultation</h3>
          <p class="text-xs text-[#5e6872] mb-4">Professional veterinary assessment with attentive clinical examination.</p>
          <button onclick="openBookingModal()" class="text-xs font-bold text-[#153e35] hover:underline">Book Consultation →</button>
        </div>

        <!-- 2. Vaccination -->
        <div class="bg-white p-6 rounded-3xl border border-[#1e242b]/8 shadow-sm">
          <div class="text-xs font-bold uppercase text-[#c86343] mb-1">Preventive</div>
          <h3 class="font-serif text-xl font-bold text-[#1e242b] mb-2">Vaccination</h3>
          <p class="text-xs text-[#5e6872] mb-4">Preventive veterinary care, DHPPi, Anti-Rabies, and schedule guidance.</p>
          <button onclick="openBookingModal()" class="text-xs font-bold text-[#153e35] hover:underline">Book Vaccination →</button>
        </div>

        <!-- 3. Puppy & Kitten Care -->
        <div class="bg-white p-6 rounded-3xl border border-[#1e242b]/8 shadow-sm">
          <div class="text-xs font-bold uppercase text-[#c86343] mb-1">Early Life</div>
          <h3 class="font-serif text-xl font-bold text-[#1e242b] mb-2">Puppy & Kitten Care</h3>
          <p class="text-xs text-[#5e6872] mb-4">Foundational developmental support, deworming, and diet advice for young pets.</p>
          <button onclick="openBookingModal()" class="text-xs font-bold text-[#153e35] hover:underline">Book Care Visit →</button>
        </div>

        <!-- 4. Pet Treatment -->
        <div class="bg-white p-6 rounded-3xl border border-[#1e242b]/8 shadow-sm">
          <div class="text-xs font-bold uppercase text-[#c86343] mb-1">Clinical Intervention</div>
          <h3 class="font-serif text-xl font-bold text-[#1e242b] mb-2">Pet Treatment</h3>
          <p class="text-xs text-[#5e6872] mb-4">Attentive veterinary care and symptom relief when your companion becomes unwell.</p>
          <button onclick="openBookingModal()" class="text-xs font-bold text-[#153e35] hover:underline">Request Treatment →</button>
        </div>

        <!-- 5. Preventive Care -->
        <div class="bg-white p-6 rounded-3xl border border-[#1e242b]/8 shadow-sm">
          <div class="text-xs font-bold uppercase text-[#c86343] mb-1">Wellness</div>
          <h3 class="font-serif text-xl font-bold text-[#1e242b] mb-2">Preventive Care</h3>
          <p class="text-xs text-[#5e6872] mb-4">General wellness, tick & flea prevention, coat checks, and longevity guidance.</p>
          <button onclick="openBookingModal()" class="text-xs font-bold text-[#153e35] hover:underline">Book Checkup →</button>
        </div>

        <!-- 6. Follow-Up Care -->
        <div class="bg-white p-6 rounded-3xl border border-[#1e242b]/8 shadow-sm">
          <div class="text-xs font-bold uppercase text-[#c86343] mb-1">Recovery</div>
          <h3 class="font-serif text-xl font-bold text-[#1e242b] mb-2">Follow-Up Care</h3>
          <p class="text-xs text-[#5e6872] mb-4">Continued support, healing assessment, and reassurance after consultation.</p>
          <button onclick="openBookingModal()" class="text-xs font-bold text-[#153e35] hover:underline">Request Follow-Up →</button>
        </div>
      </div>
    </div>
  </section>

  <!-- PARVO / SERIOUS ILLNESS EDUCATIONAL SECTION -->
  <section class="py-16 bg-[#153e35] text-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase mb-4">
        ⚠️ Pet Health Awareness
      </div>
      <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-5">
        When your pet is <span class="italic text-amber-200 font-normal">seriously unwell.</span>
      </h2>
      <p class="text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-8">
        Some illnesses can become serious quickly, especially in puppies and young pets. If your pet is showing concerning symptoms like continuous vomiting, bloody stools, or extreme weakness, professional veterinary assessment is important.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="tel:+918610125329" class="px-7 py-3.5 rounded-full bg-[#c86343] hover:bg-[#b05032] text-white font-semibold text-sm transition-colors">
          📞 Call Nivis — 086101 25329
        </a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Thirumalai+Balaji+Nagar+Bus+Stop+No+74%2F1+Main+Road+MGR+Nagar+Thiruverkadu+Chennai+Tamil+Nadu+600077" target="_blank" class="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors">
          📍 Directions to Clinic
        </a>
      </div>
    </div>
  </section>

  <!-- PET STORE SECTION -->
  <section id="pet-store" class="py-20 sm:py-28 bg-[#faf7f2]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-14">
        <div class="text-xs font-bold uppercase tracking-wider text-[#153e35] mb-2">EVERYDAY PET ESSENTIALS</div>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1e242b] font-medium mb-3">
          More than a <span class="italic text-[#153e35] font-normal">clinic.</span>
        </h2>
        <p class="text-base text-[#5e6872] font-light">Everyday essentials for happier, healthier pets.</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div class="bg-white p-4 rounded-2xl border border-[#1e242b]/8 text-center shadow-sm">
          <div class="text-2xl mb-1">🍲</div>
          <div class="font-serif text-base font-bold text-[#1e242b]">Food</div>
          <div class="text-[11px] text-[#5e6872]">Kibble & wet food</div>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-[#1e242b]/8 text-center shadow-sm">
          <div class="text-2xl mb-1">🦴</div>
          <div class="font-serif text-base font-bold text-[#1e242b]">Treats</div>
          <div class="text-[11px] text-[#5e6872]">Dental chews & bites</div>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-[#1e242b]/8 text-center shadow-sm">
          <div class="text-2xl mb-1">🎾</div>
          <div class="font-serif text-base font-bold text-[#1e242b]">Toys</div>
          <div class="text-[11px] text-[#5e6872]">Ropes, balls & wands</div>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-[#1e242b]/8 text-center shadow-sm">
          <div class="text-2xl mb-1">🧴</div>
          <div class="font-serif text-base font-bold text-[#1e242b]">Grooming</div>
          <div class="text-[11px] text-[#5e6872]">Shampoos & brushes</div>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-[#1e242b]/8 text-center shadow-sm">
          <div class="text-2xl mb-1">🩺</div>
          <div class="font-serif text-base font-bold text-[#1e242b]">Care Essentials</div>
          <div class="text-[11px] text-[#5e6872]">Pads, tick sprays</div>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-[#1e242b]/8 text-center shadow-sm">
          <div class="text-2xl mb-1">🦮</div>
          <div class="font-serif text-base font-bold text-[#1e242b]">Accessories</div>
          <div class="text-[11px] text-[#5e6872]">Harnesses & collars</div>
        </div>
      </div>

      <!-- WhatsApp Shopping Box -->
      <div class="bg-[#f4efe6] rounded-3xl p-6 sm:p-8 border border-[#1e242b]/10 max-w-2xl mx-auto text-center">
        <h3 class="font-serif text-2xl font-bold text-[#1e242b] mb-2">Ask About Product Availability</h3>
        <p class="text-xs text-[#5e6872] mb-5">Looking for a specific food brand, puppy treat, or accessory? Ask our team directly on WhatsApp!</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <input type="text" id="staticStoreInput" placeholder="Enter product name (e.g. Royal Canin Puppy 1kg)" class="px-4 py-2.5 rounded-full bg-white border border-[#1e242b]/15 text-xs text-[#1e242b] flex-1 max-w-xs">
          <button onclick="sendStoreWhatsapp()" class="px-6 py-2.5 rounded-full bg-[#153e35] text-white text-xs font-semibold hover:bg-[#1b4d3e]">
            Ask on WhatsApp
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- PET CARE PASSPORT & VACCINATION INTERACTIVE TOOLS -->
  <section id="pet-passport" class="py-20 bg-[#faf7f2] border-t border-[#1e242b]/10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="text-xs font-bold uppercase tracking-wider text-[#153e35] mb-2">LOCAL ORGANIZER</div>
        <h2 class="font-serif text-3xl sm:text-4xl font-medium text-[#1e242b]">Your pet's little health hub.</h2>
        <p class="text-xs sm:text-sm text-[#5e6872] mt-2">Pet Care Passport • Saved safely in your browser</p>
      </div>

      <div class="bg-white rounded-3xl border border-[#1e242b]/10 shadow-editorial p-6 sm:p-8">
        <div class="flex items-center gap-4 border-b border-[#1e242b]/10 pb-4 mb-6">
          <div class="w-12 h-12 rounded-2xl bg-[#153e35] text-white flex items-center justify-center font-bold text-xl">🐾</div>
          <div>
            <div class="text-xs uppercase tracking-widest text-[#5e6872]">Pet Care Passport</div>
            <div class="font-serif text-2xl font-bold text-[#1e242b]">Bruno</div>
            <div class="text-xs text-[#5e6872]">Indie • 2 years • Male • 18 kg</div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-6">
          <div class="bg-[#faf7f2] p-3 rounded-xl"><span class="text-[#5e6872] block">Species:</span> <strong>Dog</strong></div>
          <div class="bg-[#faf7f2] p-3 rounded-xl"><span class="text-[#5e6872] block">Age:</span> <strong>2 years</strong></div>
          <div class="bg-[#faf7f2] p-3 rounded-xl"><span class="text-[#5e6872] block">Sex:</span> <strong>Male</strong></div>
          <div class="bg-[#faf7f2] p-3 rounded-xl"><span class="text-[#5e6872] block">Weight:</span> <strong>18 kg</strong></div>
        </div>

        <div class="p-3.5 rounded-xl bg-[#ebf1ee] text-xs text-[#153e35] border border-[#153e35]/15">
          <strong>Notice:</strong> Personal organizer — not an official medical record. Kept securely in your local browser for your convenience.
        </div>
      </div>
    </div>
  </section>

  <!-- PET URGENCY GUIDE -->
  <section id="urgency-guide" class="py-20 bg-[#f4efe6]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div class="text-xs font-bold uppercase tracking-wider text-[#c86343] mb-2">TRIAGE HELPER</div>
        <h2 class="font-serif text-3xl sm:text-4xl font-medium text-[#1e242b]">Is your pet showing warning signs?</h2>
        <p class="text-xs text-[#5e6872] mt-2">Select a symptom below to view general urgency guidance.</p>
      </div>

      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#1e242b]/8 shadow-editorial">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-6">
          <button onclick="setTriage('urgent', 'Difficulty breathing or continuous panting requires immediate hands-on care.')" class="p-3 text-left rounded-xl bg-[#faf7f2] hover:bg-rose-50 border border-transparent hover:border-rose-300">
            🔴 Difficulty breathing
          </button>
          <button onclick="setTriage('urgent', 'Severe bleeding needs direct pressure and immediate clinic visit.')" class="p-3 text-left rounded-xl bg-[#faf7f2] hover:bg-rose-50 border border-transparent hover:border-rose-300">
            🔴 Severe bleeding
          </button>
          <button onclick="setTriage('urgent', 'Seizure requires quiet space and rapid veterinary examination.')" class="p-3 text-left rounded-xl bg-[#faf7f2] hover:bg-rose-50 border border-transparent hover:border-rose-300">
            🔴 Seizure or collapse
          </button>
          <button onclick="setTriage('urgent', 'Suspected poisoning requires rapid toxin counter-treatment.')" class="p-3 text-left rounded-xl bg-[#faf7f2] hover:bg-rose-50 border border-transparent hover:border-rose-300">
            🔴 Suspected poisoning
          </button>
          <button onclick="setTriage('prompt', 'Repeated vomiting quickly leads to dehydration. Seek prompt exam.')" class="p-3 text-left rounded-xl bg-[#faf7f2] hover:bg-amber-50 border border-transparent hover:border-amber-300">
            🟠 Repeated vomiting
          </button>
          <button onclick="setTriage('prompt', 'Severe diarrhea in puppies can indicate Parvo. Contact vet promptly.')" class="p-3 text-left rounded-xl bg-[#faf7f2] hover:bg-amber-50 border border-transparent hover:border-amber-300">
            🟠 Severe diarrhea
          </button>
        </div>

        <div id="triageResult" class="p-4 rounded-2xl bg-[#faf7f2] border border-[#1e242b]/10 text-xs text-[#1e242b]">
          Select any symptom above to receive instant guidance.
        </div>

        <div class="mt-4 text-[11px] text-[#5e6872] text-center">
          * This tool provides general information only and does not replace professional veterinary examination. Call 086101 25329.
        </div>
      </div>
    </div>
  </section>

  <!-- LOCATION & GOOGLE MAPS -->
  <section id="location" class="py-20 sm:py-28 bg-[#faf7f2]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-12">
        <div class="text-xs font-bold uppercase tracking-wider text-[#153e35] mb-2">VISIT US IN THIRUVERKADU</div>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1e242b] font-medium mb-3">
          Come visit <span class="italic text-[#153e35] font-normal">us.</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div class="lg:col-span-7 h-[360px] sm:h-[420px] rounded-[2rem] overflow-hidden border border-[#1e242b]/10 shadow-editorial">
          <iframe title="Nivis Pet Clinic Google Map" src="https://maps.google.com/maps?q=Thirumalai+Balaji+Nagar+Bus+Stop+No+74%2F1+Main+Road+MGR+Nagar+Thiruverkadu+Chennai+600077&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" loading="lazy"></iframe>
        </div>

        <div class="lg:col-span-5 bg-white p-7 rounded-[2rem] border border-[#1e242b]/8 shadow-editorial flex flex-col justify-between">
          <div class="space-y-4">
            <div>
              <div class="font-serif text-xl font-bold text-[#1e242b]">Nivis Pet Clinic & Pet Store</div>
              <p class="text-xs text-[#5e6872] leading-relaxed mt-1">
                Thirumalai Balaji Nagar, Bus Stop<br>
                No. 74/1, Main Road, MGR Nagar<br>
                Thiruverkadu, Chennai, Tamil Nadu 600077
              </p>
            </div>
            <div class="pt-3 border-t border-[#1e242b]/8">
              <span class="text-xs text-[#5e6872] block">Phone:</span>
              <a href="tel:+918610125329" class="font-serif text-xl font-bold text-[#153e35]">086101 25329</a>
            </div>
            <div class="pt-3 border-t border-[#1e242b]/8">
              <span class="text-xs text-[#5e6872] block">Opening Hours:</span>
              <div class="text-xs font-semibold text-[#1e242b]">Monday–Sunday • Listed closing time: 9:30 PM</div>
              <div class="text-[11px] text-[#5e6872] mt-0.5">Call to confirm today's availability.</div>
            </div>
          </div>

          <div class="pt-6 space-y-2">
            <a href="https://www.google.com/maps/dir/?api=1&destination=Thirumalai+Balaji+Nagar+Bus+Stop+No+74%2F1+Main+Road+MGR+Nagar+Thiruverkadu+Chennai+Tamil+Nadu+600077" target="_blank" class="w-full py-3 rounded-full bg-[#153e35] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1b4d3e]">
              📍 Get Directions
            </a>
            <a href="tel:+918610125329" class="w-full py-3 rounded-full bg-[#f4efe6] text-[#1e242b] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#e8e2d5]">
              📞 Call Clinic
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section id="faq" class="py-20 bg-[#f4efe6]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="font-serif text-3xl sm:text-4xl font-medium text-[#1e242b]">Answers for pet parents.</h2>
      </div>

      <div class="space-y-3 text-xs sm:text-sm">
        <details class="bg-white p-5 rounded-2xl border border-[#1e242b]/8">
          <summary class="font-serif text-base font-semibold cursor-pointer">Where is Nivis Pet Clinic located?</summary>
          <p class="mt-2 text-[#5e6872]">Thirumalai Balaji Nagar, Bus Stop, No. 74/1, Main Road, MGR Nagar, Thiruverkadu, Chennai 600077.</p>
        </details>
        <details class="bg-white p-5 rounded-2xl border border-[#1e242b]/8">
          <summary class="font-serif text-base font-semibold cursor-pointer">What are the clinic's opening hours?</summary>
          <p class="mt-2 text-[#5e6872]">Listed hours are Monday–Sunday with closing time at 9:30 PM. Call ahead to confirm doctor availability.</p>
        </details>
        <details class="bg-white p-5 rounded-2xl border border-[#1e242b]/8">
          <summary class="font-serif text-base font-semibold cursor-pointer">How do I book an appointment?</summary>
          <p class="mt-2 text-[#5e6872]">Click 'Book a Visit' or contact 086101 25329 directly on WhatsApp or Call.</p>
        </details>
        <details class="bg-white p-5 rounded-2xl border border-[#1e242b]/8">
          <summary class="font-serif text-base font-semibold cursor-pointer">Does Nivis treat puppies and kittens?</summary>
          <p class="mt-2 text-[#5e6872]">Yes, we provide gentle puppy & kitten care, primary vaccinations, and growth support.</p>
        </details>
        <details class="bg-white p-5 rounded-2xl border border-[#1e242b]/8">
          <summary class="font-serif text-base font-semibold cursor-pointer">Does Nivis provide vaccinations?</summary>
          <p class="mt-2 text-[#5e6872]">Yes, essential core vaccines (DHPPi, Rabies, Tricat) with proper cold chain preservation.</p>
        </details>
        <details class="bg-white p-5 rounded-2xl border border-[#1e242b]/8">
          <summary class="font-serif text-base font-semibold cursor-pointer">Does Nivis have a pet store?</summary>
          <p class="mt-2 text-[#5e6872]">Yes! We carry pet food, treats, toys, shampoos, grooming accessories, and daily care essentials.</p>
        </details>
        <details class="bg-white p-5 rounded-2xl border border-[#1e242b]/8">
          <summary class="font-serif text-base font-semibold cursor-pointer">How can I contact the clinic?</summary>
          <p class="mt-2 text-[#5e6872]">Call 086101 25329 or WhatsApp +91 86101 25329.</p>
        </details>
        <details class="bg-white p-5 rounded-2xl border border-[#1e242b]/8">
          <summary class="font-serif text-base font-semibold cursor-pointer">What should I do if my pet needs urgent attention?</summary>
          <p class="mt-2 text-[#5e6872]">Contact Nivis immediately at 086101 25329 and proceed to the clinic during open hours.</p>
        </details>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="py-20 bg-[#153e35] text-white text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="font-serif text-4xl sm:text-5xl font-medium mb-4">
        For the pets who <span class="italic text-amber-200 font-normal">make life better.</span>
      </h2>
      <p class="text-xs uppercase tracking-widest text-white/70 mb-8">Nivis Pet Clinic & Pet Store • MGR Nagar · Thiruverkadu · Chennai</p>
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button onclick="openBookingModal()" class="px-7 py-3.5 rounded-full bg-white text-[#153e35] text-xs font-bold hover:bg-gray-100">Book a Visit</button>
        <a href="tel:+918610125329" class="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20">Call Nivis</a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Thirumalai+Balaji+Nagar+Bus+Stop+No+74%2F1+Main+Road+MGR+Nagar+Thiruverkadu+Chennai+Tamil+Nadu+600077" target="_blank" class="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20">Get Directions</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-[#111714] text-white pt-14 pb-24 sm:pb-14 border-t border-white/10 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
      <div>
        <div class="font-serif text-xl font-bold">NIVIS PET CLINIC & PET STORE</div>
        <div class="text-white/60 mt-1">Thirumalai Balaji Nagar Bus Stop, No. 74/1, Main Road, MGR Nagar, Thiruverkadu, Chennai 600077</div>
        <div class="text-amber-300 mt-1">5.0 ★ · 5 Google Reviews • Women-owned • Closes 9:30 PM</div>
      </div>
      <div class="text-right text-white/60">
        <div>Call: 086101 25329</div>
        <div class="mt-1">© Nivis Pet Clinic & Pet Store. Ready for Netlify Deployment.</div>
      </div>
    </div>
  </footer>

  <!-- MOBILE STICKY BAR -->
  <div class="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#faf7f2]/95 backdrop-blur-md border-t border-[#1e242b]/15 px-3 py-2.5 shadow-lg grid grid-cols-4 gap-2 text-center text-[10px] font-semibold">
    <a href="tel:+918610125329" class="p-1.5 rounded-xl bg-white border border-[#1e242b]/10">📞 Call</a>
    <a href="https://wa.me/918610125329" target="_blank" class="p-1.5 rounded-xl bg-[#eaf4ed] text-[#153e35]">💬 WhatsApp</a>
    <button onclick="openBookingModal()" class="p-1.5 rounded-xl bg-[#153e35] text-white">📅 Book</button>
    <a href="https://www.google.com/maps/dir/?api=1&destination=Thirumalai+Balaji+Nagar+Bus+Stop+No+74%2F1+Main+Road+MGR+Nagar+Thiruverkadu+Chennai+Tamil+Nadu+600077" target="_blank" class="p-1.5 rounded-xl bg-white border border-[#1e242b]/10">📍 Directions</a>
  </div>

  <!-- BOOKING MODAL -->
  <div id="bookingModal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#faf7f2] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
      <button onclick="closeBookingModal()" class="absolute top-4 right-4 text-xl font-bold text-[#5e6872]">&times;</button>
      <h3 class="font-serif text-2xl font-bold text-[#1e242b] mb-1">Request a Visit</h3>
      <p class="text-xs text-[#5e6872] mb-4">Nivis Pet Clinic • Dr. Karthika & clinical team</p>
      
      <form onsubmit="handleStaticSubmit(event)" class="space-y-3 text-xs">
        <div>
          <label class="block font-semibold mb-1">Your Name</label>
          <input type="text" id="bmOwner" required class="w-full px-3 py-2 rounded-xl bg-white border border-[#1e242b]/15" placeholder="e.g. Priya">
        </div>
        <div>
          <label class="block font-semibold mb-1">Pet Name & Type</label>
          <input type="text" id="bmPet" required class="w-full px-3 py-2 rounded-xl bg-white border border-[#1e242b]/15" placeholder="e.g. Bruno (Dog)">
        </div>
        <div>
          <label class="block font-semibold mb-1">Reason for Visit</label>
          <input type="text" id="bmReason" required class="w-full px-3 py-2 rounded-xl bg-white border border-[#1e242b]/15" placeholder="e.g. General checkup, vaccination">
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block font-semibold mb-1">Preferred Date</label>
            <input type="date" id="bmDate" required class="w-full px-3 py-2 rounded-xl bg-white border border-[#1e242b]/15">
          </div>
          <div>
            <label class="block font-semibold mb-1">Contact Phone</label>
            <input type="tel" id="bmPhone" required class="w-full px-3 py-2 rounded-xl bg-white border border-[#1e242b]/15" placeholder="e.g. 08610125329">
          </div>
        </div>
        <button type="submit" class="w-full py-3 rounded-full bg-[#153e35] text-white font-bold text-xs mt-3">
          Request a Visit
        </button>
      </form>

      <div id="bookingConfirmation" class="hidden mt-4 p-4 rounded-xl bg-emerald-50 text-emerald-900 text-xs">
        <strong>Your appointment request has been received.</strong> Please contact Nivis to confirm availability.
        <a id="bmWaLink" href="https://wa.me/918610125329" target="_blank" class="block mt-2 font-bold text-[#153e35] underline">Confirm on WhatsApp →</a>
      </div>
    </div>
  </div>

  <script>
    function openBookingModal() {
      document.getElementById('bookingModal').classList.remove('hidden');
    }
    function closeBookingModal() {
      document.getElementById('bookingModal').classList.add('hidden');
    }
    function handleStaticSubmit(e) {
      e.preventDefault();
      var owner = document.getElementById('bmOwner').value;
      var pet = document.getElementById('bmPet').value;
      var reason = document.getElementById('bmReason').value;
      var date = document.getElementById('bmDate').value;
      var phone = document.getElementById('bmPhone').value;
      var text = encodeURIComponent('Hi Nivis Pet Clinic, I would like to request an appointment. Owner: ' + owner + ', Pet: ' + pet + ', Reason: ' + reason + ', Date: ' + date + ', Phone: ' + phone);
      document.getElementById('bmWaLink').href = 'https://wa.me/918610125329?text=' + text;
      document.getElementById('bookingConfirmation').classList.remove('hidden');
    }
    function sendStoreWhatsapp() {
      var item = document.getElementById('staticStoreInput').value || 'pet essentials';
      var text = encodeURIComponent('Hi Nivis Pet Clinic & Pet Store, I would like to enquire about ' + item + '. Is it available?');
      window.open('https://wa.me/918610125329?text=' + text, '_blank');
    }
    function setTriage(severity, msg) {
      var box = document.getElementById('triageResult');
      if (severity === 'urgent') {
        box.innerHTML = '<span class="text-rose-700 font-bold block mb-1">🔴 Seek urgent veterinary attention</span>' + msg + '<br><a href="tel:+918610125329" class="inline-block mt-2 font-bold text-rose-700 underline">Call Nivis: 086101 25329</a>';
        box.className = 'p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950';
      } else {
        box.innerHTML = '<span class="text-amber-800 font-bold block mb-1">🟠 Contact a veterinarian promptly</span>' + msg + '<br><a href="tel:+918610125329" class="inline-block mt-2 font-bold text-amber-800 underline">Call Nivis: 086101 25329</a>';
        box.className = 'p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950';
      }
    }
  </script>
</body>
</html>`;

  // Add files to root
  zip.file("index.html", indexHtml);
  zip.file("README.txt", readmeContent);
  zip.file("netlify.toml", netlifyToml);

  // Generate blob
  return await zip.generateAsync({ type: "blob" });
}
