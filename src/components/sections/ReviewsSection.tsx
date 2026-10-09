"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { MessageSquare, ExternalLink, Heart, Shield } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#F8F6F0] border-b border-[#DCE5D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFDF9] border border-[#DCE5D8] space-y-5 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EEE4] text-[#203B2F] text-xs font-medium border border-[#B8CBB8]">
            <Heart className="w-3.5 h-3.5 text-[#29483A]" />
            <span>Patient Experience & Local Feedback</span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-3xl text-[#203B2F] font-normal tracking-tight max-w-xl mx-auto">
            Authentic feedback from Mogappair East.
          </h2>

          <p className="text-xs sm:text-sm text-[#737B73] max-w-lg mx-auto leading-relaxed">
            We value genuine relationships with our patients and their families. Read unfiltered reviews directly on Google Maps or share your own experience following your visit to our clinic.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#203B2F] bg-[#E7EEE4] hover:bg-[#B8CBB8]/40 border border-[#DCE5D8] transition-colors"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#29483A]" />
            </a>

            <a
              href={CLINIC_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#737B73] hover:text-[#203B2F] hover:bg-[#E7EEE4]/50 transition-colors"
            >
              <span>View Clinic Profile</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
