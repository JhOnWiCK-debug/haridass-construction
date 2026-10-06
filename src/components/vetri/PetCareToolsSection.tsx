"use client";

import React, { useState } from "react";
import {
  Calendar,
  AlertTriangle,
  BookOpen,
  UserCheck,
  Phone,
  ShieldAlert,
  Printer,
  Sparkles,
  Info,
  Check,
  ArrowRight
} from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function PetCareToolsSection() {
  const [activeTab, setActiveTab] = useState<"vaccine" | "profile" | "guide" | "emergency">("vaccine");

  // Vaccine Planner State
  const [petCategory, setPetCategory] = useState<"dog" | "cat">("dog");
  const [petAgeMonths, setPetAgeMonths] = useState<number>(3);

  // Pet Profile State
  const [profile, setProfile] = useState({
    name: "Simba",
    breed: "Golden Retriever",
    age: "3 years",
    sex: "Male",
    weight: "28 kg",
    microchip: "",
  });
  const [savedCard, setSavedCard] = useState(false);

  // Core vaccination schedules (safe standard veterinary guidelines)
  const dogVaccines = [
    { period: "6–8 Weeks", shot: "Puppy DP / DHPPiL (1st Dose)", type: "Core Immunization" },
    { period: "10–12 Weeks", shot: "DHPPiL Booster + Coronavirus / Kennel Cough", type: "Core Immunization" },
    { period: "14–16 Weeks", shot: "Anti-Rabies (1st Dose) + DHPPiL Booster", type: "Mandatory / Core" },
    { period: "Annual", shot: "Annual Multi-Antigen Booster + Anti-Rabies Booster", type: "Yearly Maintenance" },
  ];

  const catVaccines = [
    { period: "8–9 Weeks", shot: "Feline Tricat (FVRCP 1st Dose)", type: "Core Feline Protection" },
    { period: "12 Weeks", shot: "Feline Tricat Booster (FVRCP 2nd Dose)", type: "Core Feline Protection" },
    { period: "16 Weeks", shot: "Anti-Rabies Vaccination", type: "Mandatory / Core" },
    { period: "Annual", shot: "Annual FVRCP Booster + Anti-Rabies Booster", type: "Yearly Maintenance" },
  ];

  return (
    <section id="pet-care-tools" className="py-20 lg:py-28 bg-[#faf8f5] border-b border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
            Pet Parent Resources
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#11161b]">
            Pet Care Tools & Educational Guidance.
          </h2>
          <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed">
            Essential reference tools for keeping track of your pet's wellness milestones, seasonal comfort, and urgent care protocols.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#f4efe6] border border-[#e2dacb] rounded-sm mb-10 max-w-3xl">
          <button
            type="button"
            onClick={() => setActiveTab("vaccine")}
            className={`flex-1 min-w-[140px] py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all ${
              activeTab === "vaccine"
                ? "bg-[#0f4c3a] text-white shadow-xs"
                : "text-[#11161b] hover:bg-white/60"
            }`}
          >
            Vaccination Guide
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`flex-1 min-w-[140px] py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all ${
              activeTab === "profile"
                ? "bg-[#0f4c3a] text-white shadow-xs"
                : "text-[#11161b] hover:bg-white/60"
            }`}
          >
            Pet Profile Card
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("guide")}
            className={`flex-1 min-w-[140px] py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all ${
              activeTab === "guide"
                ? "bg-[#0f4c3a] text-white shadow-xs"
                : "text-[#11161b] hover:bg-white/60"
            }`}
          >
            Care Guide
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("emergency")}
            className={`flex-1 min-w-[140px] py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all ${
              activeTab === "emergency"
                ? "bg-[#b85433] text-white shadow-xs"
                : "text-[#b85433] hover:bg-white/60"
            }`}
          >
            Warning Signs
          </button>
        </div>

        {/* TAB 1: VACCINATION REMINDER & SCHEDULE */}
        {activeTab === "vaccine" && (
          <div className="bg-white border border-[#ded5c5] rounded-sm p-6 sm:p-10 shadow-editorial space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#f0ebe1]">
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#11161b]">
                  Vaccination Schedule Planner
                </h3>
                <p className="text-xs text-[#5e6872] mt-0.5">
                  General preventive timeline for dogs and cats in Chennai.
                </p>
              </div>

              {/* Selector */}
              <div className="inline-flex rounded-sm border border-[#ded5c5] p-1 bg-[#f4efe6]">
                <button
                  type="button"
                  onClick={() => setPetCategory("dog")}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-xs transition-all ${
                    petCategory === "dog" ? "bg-[#0f4c3a] text-white" : "text-[#11161b]"
                  }`}
                >
                  Canine (Dog)
                </button>
                <button
                  type="button"
                  onClick={() => setPetCategory("cat")}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-xs transition-all ${
                    petCategory === "cat" ? "bg-[#0f4c3a] text-white" : "text-[#11161b]"
                  }`}
                >
                  Feline (Cat)
                </button>
              </div>
            </div>

            {/* Schedule list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(petCategory === "dog" ? dogVaccines : catVaccines).map((v, i) => (
                <div
                  key={i}
                  className="p-4 rounded-sm border border-[#ded5c5] bg-[#faf8f5] flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0f4c3a] bg-[#0f4c3a]/10 px-2 py-0.5 rounded-xs">
                      {v.period}
                    </span>
                    <h4 className="text-sm font-semibold text-[#11161b]">
                      {v.shot}
                    </h4>
                    <p className="text-xs text-[#5e6872]">{v.type}</p>
                  </div>
                  <span className="text-xs font-mono text-[#5e6872]">0{i + 1}</span>
                </div>
              ))}
            </div>

            {/* Note & CTA */}
            <div className="p-4 bg-[#f4efe6] rounded-sm text-xs text-[#5e6872] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[#0f4c3a] shrink-0" />
                <span>
                  Exact schedules depend on your pet's maternal antibodies and vaccination history.
                </span>
              </div>
              <a
                href={VETRI_DATA.whatsappLinks.vaccination}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-semibold text-[#0f4c3a] hover:underline"
              >
                Inquire on WhatsApp →
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: PET HEALTH PROFILE CARD */}
        {activeTab === "profile" && (
          <div className="bg-white border border-[#ded5c5] rounded-sm p-6 sm:p-10 shadow-editorial space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#f0ebe1]">
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#11161b]">
                  Digital Pet Health Card
                </h3>
                <p className="text-xs text-[#5e6872] mt-0.5">
                  Keep essential pet vitals handy for quick clinical check-ins.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSavedCard(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0f4c3a] rounded-sm hover:bg-[#165b4c] transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                {savedCard ? "Card Saved to Session" : "Save / Print Card"}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Input */}
              <div className="lg:col-span-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#11161b] uppercase">Pet Name</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full mt-1 px-3 py-2 text-xs bg-[#faf8f5] border border-[#ded5c5] rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#11161b] uppercase">Breed</label>
                    <input
                      type="text"
                      value={profile.breed}
                      onChange={(e) => setProfile({ ...profile, breed: e.target.value })}
                      className="w-full mt-1 px-3 py-2 text-xs bg-[#faf8f5] border border-[#ded5c5] rounded-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#11161b] uppercase">Age</label>
                    <input
                      type="text"
                      value={profile.age}
                      onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                      className="w-full mt-1 px-3 py-2 text-xs bg-[#faf8f5] border border-[#ded5c5] rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#11161b] uppercase">Sex</label>
                    <input
                      type="text"
                      value={profile.sex}
                      onChange={(e) => setProfile({ ...profile, sex: e.target.value })}
                      className="w-full mt-1 px-3 py-2 text-xs bg-[#faf8f5] border border-[#ded5c5] rounded-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#11161b] uppercase">Weight</label>
                    <input
                      type="text"
                      value={profile.weight}
                      onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
                      className="w-full mt-1 px-3 py-2 text-xs bg-[#faf8f5] border border-[#ded5c5] rounded-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Card Preview */}
              <div className="lg:col-span-6 bg-[#faf8f5] border-2 border-dashed border-[#0f4c3a]/40 rounded-sm p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#e2dacb] pb-3">
                  <div className="font-serif text-lg font-bold text-[#11161b]">
                    VETRI PATIENT PROFILE
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#0f4c3a] text-white px-2 py-0.5 rounded-xs">
                    Perungudi Clinic
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[#5e6872] block text-[10px] uppercase">Companion Name:</span>
                    <span className="font-serif text-xl font-bold text-[#11161b]">{profile.name || "Pet"}</span>
                  </div>
                  <div>
                    <span className="text-[#5e6872] block text-[10px] uppercase">Breed:</span>
                    <span className="font-medium text-[#11161b]">{profile.breed || "Not specified"}</span>
                  </div>
                  <div>
                    <span className="text-[#5e6872] block text-[10px] uppercase">Age / Sex:</span>
                    <span className="font-medium text-[#11161b]">{profile.age} · {profile.sex}</span>
                  </div>
                  <div>
                    <span className="text-[#5e6872] block text-[10px] uppercase">Recorded Weight:</span>
                    <span className="font-medium text-[#11161b]">{profile.weight}</span>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-[#5e6872] border-t border-[#e2dacb] flex justify-between">
                  <span>Vetri Pet Hospital · Call: 93840 17392</span>
                  <span>Erikarai St, Kurinji Nagar</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PET CARE GUIDE */}
        {activeTab === "guide" && (
          <div className="bg-white border border-[#ded5c5] rounded-sm p-6 sm:p-10 shadow-editorial space-y-8 animate-in fade-in duration-200">
            <div className="pb-6 border-b border-[#f0ebe1]">
              <h3 className="font-serif text-2xl font-normal text-[#11161b]">
                Chennai Climate Pet Care Guide
              </h3>
              <p className="text-xs text-[#5e6872] mt-0.5">
                Practical, seasonal guidance for coastal humidity, hydration, and tick prevention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-sm bg-[#faf8f5] border border-[#ded5c5] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#b85433] font-semibold">
                  01. Heat & Hydration
                </span>
                <h4 className="font-serif text-lg font-normal text-[#11161b]">
                  Protecting Against Heat Exhaustion
                </h4>
                <p className="text-xs text-[#5e6872] leading-relaxed">
                  During warm Chennai afternoons, walk pets early (before 7:30 AM) or after sunset. Avoid hot asphalt that burns sensitive paw pads. Ensure clean, cool water bowls are replenished several times daily.
                </p>
              </div>

              <div className="p-5 rounded-sm bg-[#faf8f5] border border-[#ded5c5] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#0f4c3a] font-semibold">
                  02. Parasite Vigilance
                </span>
                <h4 className="font-serif text-lg font-normal text-[#11161b]">
                  Tick & Flea Prevention
                </h4>
                <p className="text-xs text-[#5e6872] leading-relaxed">
                  Warm coastal weather accelerates tick cycles. Inspect ears, paws, and underbelly after outdoor walks. Consult with Vetri for safe, weight-calibrated spot-on preventive treatments.
                </p>
              </div>

              <div className="p-5 rounded-sm bg-[#faf8f5] border border-[#ded5c5] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#11161b] font-semibold">
                  03. Nutrition & Diet
                </span>
                <h4 className="font-serif text-lg font-normal text-[#11161b]">
                  Balanced Digestive Care
                </h4>
                <p className="text-xs text-[#5e6872] leading-relaxed">
                  Avoid sudden dietary changes or human seasonings (onions, garlic, chocolate, grapes are toxic). If your companion shows low appetite or sluggishness for more than 24 hours, bring them in for evaluation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: EMERGENCY WARNING SIGNS */}
        {activeTab === "emergency" && (
          <div className="bg-[#fff9f8] border-2 border-[#b85433]/30 rounded-sm p-6 sm:p-10 shadow-editorial space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#b85433]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#b85433]/10 text-[#b85433] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#11161b]">
                    Critical Symptoms Requiring Immediate Attention
                  </h3>
                  <p className="text-xs text-[#b85433] font-medium">
                    Educational triage guidance for pet parents
                  </p>
                </div>
              </div>

              <a
                href={`tel:${VETRI_DATA.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#b85433] hover:bg-[#9c4427] rounded-sm transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Vetri: {VETRI_DATA.phone}
              </a>
            </div>

            {/* Checklist of red flag symptoms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-white border border-[#b85433]/20 space-y-1">
                <div className="text-xs font-bold text-[#b85433] flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Severe Breathing Difficulty
                </div>
                <p className="text-xs text-[#5e6872]">
                  Rapid, shallow breathing, blue/pale gums, or wheezing accompanied by visible distress.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-white border border-[#b85433]/20 space-y-1">
                <div className="text-xs font-bold text-[#b85433] flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Heavy Bleeding or Acute Trauma
                </div>
                <p className="text-xs text-[#5e6872]">
                  Uncontrolled bleeding, deep puncture wounds, or severe impact injuries from vehicles.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-white border border-[#b85433]/20 space-y-1">
                <div className="text-xs font-bold text-[#b85433] flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Seizures or Sudden Collapse
                </div>
                <p className="text-xs text-[#5e6872]">
                  Involuntary muscle tremors, inability to stand, unresponsiveness, or disorientation.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-white border border-[#b85433]/20 space-y-1">
                <div className="text-xs font-bold text-[#b85433] flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Suspected Ingestion of Poisons
                </div>
                <p className="text-xs text-[#5e6872]">
                  Accidental ingestion of rodenticides, toxic household chemicals, lilies (cats), or medications.
                </p>
              </div>
            </div>

            {/* MANDATORY DISCLAIMER */}
            <div className="p-4 bg-white border border-[#ded5c5] rounded-sm text-xs text-[#5e6872] space-y-1.5">
              <span className="font-semibold text-[#11161b] block">
                IMPORTANT MEDICAL DISCLAIMER:
              </span>
              <p>
                This guidance is strictly for general pet parent education. It does not replace physical examination or diagnosis by a qualified veterinary doctor. Vetri does not prescribe medication or calculate dosages online. If your pet is in distress, please seek immediate physical veterinary attention.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
