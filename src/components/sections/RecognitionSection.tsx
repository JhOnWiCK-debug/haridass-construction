"use client";

import React from "react";
import { ExternalLink, Award } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const RecognitionSection: React.FC = () => {
  return (
    <section id="recognition" className="py-16 lg:py-20 bg-[#FFFDF9] border-b border-[#E2E4DA]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#F8F6F0] border border-[#E2E4DA] relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#737B73]">
                  Professional Feature
                </span>
                <span className="text-[#E2E4DA]">•</span>
                <span className="text-[11px] font-medium text-[#29483A]">
                  #ChampionsOfSmiles
                </span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1E332A] font-normal tracking-tight">
                Recognition for a commitment to smiles.
              </h2>

              <p className="text-sm text-[#29342D]/85 leading-relaxed font-normal">
                Dr. Krishnapriya G was featured by Colgate-Palmolive (India) Ltd. as part of its #ChampionsOfSmiles feature, highlighting clinical dedication and personal patient care in dentistry.
              </p>
            </div>

            <div className="shrink-0 pt-2 md:pt-0">
              <a
                href={CLINIC_INFO.colgateFeatureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#29483A] bg-[#FFFDF9] hover:bg-[#F0F3EC] border border-[#E2E4DA] transition-colors"
              >
                <span>View the original feature</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#737B73]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
