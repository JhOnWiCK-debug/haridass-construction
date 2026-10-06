"use client";

import React from "react";
import { Phone, Calendar, ArrowRight, Heart } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

interface FinalCtaProps {
  onOpenAppointment: () => void;
}

export function FinalCta({ onOpenAppointment }: FinalCtaProps) {
  return (
    <section className="py-24 lg:py-32 bg-[#11161b] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0f4c3a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-10">
        
        {/* Subtle accent badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-emerald-400">
          <Heart className="w-3.5 h-3.5 fill-emerald-400" />
          <span>Vetri Pet Hospital & Pet Clinic · Perungudi</span>
        </div>

        {/* Emotionally Grounded Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.12]">
            They can't tell you what's wrong. <br />
            <span className="italic text-emerald-300 font-light">
              But you can make sure they're cared for.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Professional medical treatment, unhurried examinations, and continuing reassurance for dogs, cats, and pets across Perungudi, Chennai.
          </p>
        </div>

        {/* Dual Primary & Secondary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onOpenAppointment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white bg-[#0f4c3a] hover:bg-[#165b4c] active:bg-[#0b382b] rounded-sm shadow-xl transition-all group"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Visit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`tel:${VETRI_DATA.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white bg-transparent hover:bg-white/10 border border-white/30 rounded-sm transition-all"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call Vetri ({VETRI_DATA.phone})</span>
          </a>
        </div>

        {/* Subtle Clinic Reassurance */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-zinc-400">
          <span>Open daily until 9:00 PM</span>
          <span className="hidden sm:inline">•</span>
          <span>5.0 ★ Google Rating (6 Reviews)</span>
          <span className="hidden sm:inline">•</span>
          <span>Kurinji Nagar, Perungudi, Chennai</span>
        </div>

      </div>
    </section>
  );
}
