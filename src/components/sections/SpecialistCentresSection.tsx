"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";

export const SpecialistCentresSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F6F0] border-b border-[#E2E4DA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#737B73]">
            Affiliations & Capabilities
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1E332A] font-normal tracking-tight mt-2 leading-tight">
            Registered centres & specialist capabilities.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#29342D]/80 leading-relaxed font-normal">
            Specialized clinical care designations supporting distinct patient requirements at our Mogappair East practice.
          </p>
        </div>

        {/* 3-Column Subtle Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_INFO.specialistCentres.map((centre, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#FFFDF9] border border-[#E2E4DA] flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-[#B8C7B2]"
            >
              <div className="space-y-3">
                <span className="text-[10.5px] uppercase tracking-wider font-mono text-[#737B73] bg-[#F0F3EC] px-2.5 py-1 rounded">
                  {centre.category}
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#1E332A] font-normal leading-snug">
                  {centre.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#737B73] leading-relaxed">
                  {centre.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E4DA]/60 flex items-center gap-1.5 text-[11px] font-medium text-[#29483A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#29483A]" />
                <span>Jaksh&apos;s Clinical Facility</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
