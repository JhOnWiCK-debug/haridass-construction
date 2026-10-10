"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { MessageSquare, ExternalLink, Heart, Shield } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#EEF5EF] border-b border-[#D9E6DE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#D9E6DE] space-y-5 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF5EF] text-[#18332E] text-xs font-medium border border-[#D9E6DE]">
            <Heart className="w-3.5 h-3.5 text-[#176B57]" />
            <span>Patient Experience & Local Feedback</span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-3xl text-[#18332E] font-normal tracking-tight max-w-xl mx-auto">
            Authentic feedback from Mogappair East.
          </h2>

          <p className="text-xs sm:text-sm text-[#65756F] max-w-lg mx-auto leading-relaxed">
            We value genuine relationships with our patients and their families. Read unfiltered reviews directly on Google Maps or share your own experience following your visit to our clinic.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#176B57] hover:bg-[#125544] transition-colors shadow-2xs"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>

            <a
              href={CLINIC_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-medium text-[#18332E] bg-[#EEF5EF] hover:bg-[#D9E6DE] border border-[#D9E6DE] transition-colors"
            >
              <span>View Clinic Profile</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
