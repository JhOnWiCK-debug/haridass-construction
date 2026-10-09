"use client";

import React from "react";
import { ExternalLink, Award } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const RecognitionSection: React.FC = () => {
  return (
    <section id="recognition" className="py-16 lg:py-20 bg-[#E7EEE4]/60 border-b border-[#DCE5D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#B8CBB8] relative shadow-xs">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EEE4] border border-[#B8CBB8] text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29483A]" />
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#737B73]">
                  Professional Feature
                </span>
                <span className="text-[#DCE5D8]">•</span>
                <span className="text-[11px] font-medium text-[#203B2F]">
                  #ChampionsOfSmiles
                </span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#203B2F] font-normal tracking-tight">
                Recognition for a commitment to smiles.
              </h2>

              <p className="text-sm text-[#344139] leading-relaxed font-normal">
                Dr. Krishnapriya G was featured by Colgate-Palmolive (India) Ltd. as part of its #ChampionsOfSmiles feature, highlighting clinical dedication and personal patient care in dentistry.
              </p>
            </div>

            <div className="shrink-0 pt-2 md:pt-0">
              <a
                href={CLINIC_INFO.colgateFeatureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#203B2F] bg-[#E7EEE4] hover:bg-[#B8CBB8]/40 border border-[#DCE5D8] transition-colors shadow-2xs"
              >
                <span>View the original feature</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#29483A]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
