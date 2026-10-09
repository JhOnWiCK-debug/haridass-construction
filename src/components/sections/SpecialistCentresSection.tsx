"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";

export const SpecialistCentresSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F6F0] border-b border-[#DCE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EEE4] border border-[#B8CBB8] text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#29483A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#203B2F]">
              Affiliations & Capabilities
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#203B2F] font-normal tracking-tight mt-1 leading-tight">
            Registered centres & specialist capabilities.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#344139] leading-relaxed font-normal">
            Specialized clinical care designations supporting distinct patient requirements at our Mogappair East practice.
          </p>
        </div>

        {/* 3-Column Subtle Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_INFO.specialistCentres.map((centre, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#FFFDF9] border border-[#DCE5D8] flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-[#A9C0A7] hover:shadow-xs"
            >
              <div className="space-y-3">
                <span className="text-[10.5px] uppercase tracking-wider font-mono text-[#203B2F] bg-[#E7EEE4] px-2.5 py-1 rounded border border-[#DCE5D8]">
                  {centre.category}
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl text-[#203B2F] font-normal leading-snug">
                  {centre.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#737B73] leading-relaxed">
                  {centre.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCE5D8] flex items-center gap-1.5 text-[11px] font-medium text-[#29483A]">
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
