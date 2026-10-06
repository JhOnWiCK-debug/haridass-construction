"use client";

import React from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import { AlertTriangle, Phone, ShieldCheck, HeartPulse, Sparkles, Navigation } from "lucide-react";

export function ParvoEducationSection() {
  const earlySigns = [
    { title: "Sudden Lethargy & Dullness", desc: "Puppy loses playfulness, stays in a corner, or refuses to get up." },
    { title: "Repeated Vomiting", desc: "Persistent foaming or bile vomiting, unable to retain even small sips of water." },
    { title: "Severe or Bloody Diarrhea", desc: "Watery, foul-smelling stools which rapidly lead to dehydration." },
    { title: "Refusal to Eat or Drink", desc: "Skipping meals completely, leading to quick hypothermia and glucose drops." },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#f4efe6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#153e35] text-[#faf7f2] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-editorial-lg">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1b4d3e] rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c86343]/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-semibold tracking-wider uppercase mb-5 backdrop-blur-sm">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Pet Health Awareness</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] font-medium tracking-tight mb-5">
              When your pet is{" "}
              <span className="italic font-normal text-amber-200">seriously unwell.</span>
            </h2>

            {/* General Educational Text */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-light mb-8 max-w-3xl">
              Some illnesses can become serious quickly, especially in puppies and young pets.
              Conditions like viral gastroenteritis (including Parvovirus) demand prompt, supportive
              veterinary assessment before severe dehydration sets in. If your pet is showing
              concerning symptoms, professional veterinary assessment is important.
            </p>

            {/* Early warning signs grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {earlySigns.map((sign, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                >
                  <div className="text-sm font-semibold text-amber-200 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{sign.title}</span>
                  </div>
                  <div className="text-xs text-white/75 leading-relaxed">
                    {sign.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions & Responsible Medical CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/15">
              <a
                href={`tel:${NIVIS_DATA.contact.phoneTel}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c86343] text-white font-semibold text-sm hover:bg-[#b05032] shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Nivis — {NIVIS_DATA.contact.phone}</span>
              </a>

              <a
                href={NIVIS_DATA.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Directions to Clinic</span>
              </a>

              <span className="text-xs text-white/60 self-center sm:self-auto sm:ml-auto">
                No appointment needed for immediate clinical triage during clinic hours.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
