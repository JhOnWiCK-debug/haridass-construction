"use client";

import React from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import { Calendar, Phone, Navigation, Heart, Star, Sparkles } from "lucide-react";

interface FinalCtaProps {
  onOpenAppointment: () => void;
}

export function FinalCta({ onOpenAppointment }: FinalCtaProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#153e35] text-white relative overflow-hidden">
      {/* Background radial warmth */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1b4d3e] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#c86343]/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
          <Heart className="w-5 h-5 fill-amber-300 text-amber-300" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-5 leading-[1.1]">
          For the pets who{" "}
          <span className="italic font-normal text-amber-200">make life better.</span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-1.5 mb-10">
          <div className="text-sm font-semibold tracking-wider uppercase text-white/90">
            {NIVIS_DATA.name}
          </div>
          <div className="text-xs text-white/70">
            MGR Nagar • Thiruverkadu • Chennai
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-amber-300">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              ))}
            </div>
            <span>5.0 ★ Google Rating • 5 Google Reviews</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <button
            onClick={onOpenAppointment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#153e35] font-semibold text-sm hover:bg-[#faf7f2] shadow-lg transition-all"
          >
            <Calendar className="w-4 h-4 text-[#153e35]" />
            <span>Book a Visit</span>
          </button>

          <a
            href={`tel:${NIVIS_DATA.contact.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-amber-300" />
            <span>Call Nivis</span>
          </a>

          <a
            href={NIVIS_DATA.location.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
          >
            <Navigation className="w-4 h-4 text-[#c86343]" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
}
