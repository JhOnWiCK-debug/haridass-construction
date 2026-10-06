"use client";

import React from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import { Phone, Navigation, Clock, ShieldAlert } from "lucide-react";

export function EmergencyCta() {
  return (
    <section className="py-14 sm:py-18 bg-[#f4efe6] relative overflow-hidden border-y border-[#1e242b]/8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c86343]/15 text-[#c86343] text-[11px] font-semibold tracking-wider uppercase mb-4">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Need Timely Guidance?</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1e242b] tracking-tight mb-4">
          Something doesn&apos;t feel right?
        </h2>

        <p className="text-base sm:text-lg text-[#5e6872] max-w-2xl mx-auto leading-relaxed font-light mb-8">
          When your pet needs attention, getting professional advice quickly matters. If you notice
          sudden sickness, unusual behavior, or worrying symptoms, reach out to Nivis.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-4">
          <a
            href={`tel:${NIVIS_DATA.contact.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#153e35] text-white font-semibold text-sm hover:bg-[#1b4d3e] shadow-md transition-all"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call Nivis — {NIVIS_DATA.contact.phone}</span>
          </a>

          <a
            href={NIVIS_DATA.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#1e242b] border border-[#1e242b]/15 font-semibold text-sm hover:bg-[#faf7f2] shadow-sm transition-all"
          >
            <Navigation className="w-4 h-4 text-[#c86343]" />
            <span>Get Directions</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-[#5e6872]">
          <Clock className="w-3.5 h-3.5" />
          <span>Operating Monday–Sunday • Listed closing time: 9:30 PM (Call to verify today&apos;s schedule)</span>
        </div>
      </div>
    </section>
  );
}
