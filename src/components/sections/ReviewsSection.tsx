"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { MessageSquare, ExternalLink, Heart, Shield } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#F8F6F0] border-b border-[#E2E4DA]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-[#FFFDF9] border border-[#E2E4DA] space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F3EC] text-[#29483A] text-xs font-medium border border-[#E2E4DA]">
            <Heart className="w-3.5 h-3.5 text-[#29483A]" />
            <span>Patient Experience & Local Feedback</span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-3xl text-[#1E332A] font-normal tracking-tight max-w-xl mx-auto">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#29483A] bg-[#F8F6F0] hover:bg-[#E7EDE3] border border-[#E2E4DA] transition-colors"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#737B73]" />
            </a>

            <a
              href={CLINIC_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#737B73] hover:text-[#29483A] hover:bg-[#F8F6F0] transition-colors"
            >
              <span>View Clinic Profile</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
