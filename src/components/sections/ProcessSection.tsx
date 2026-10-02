"use client";

import React from "react";
import { MessageSquare, Compass, Hammer, Key, ArrowRight, Check } from "lucide-react";
import { PROCESS_STEPS } from "@/data/constructionData";

const stepIcons = [MessageSquare, Compass, Hammer, Key];

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export default function ProcessSection({ onOpenConsultation }: ProcessSectionProps) {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#0c0d10] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
            <span className="w-2 h-0.5 bg-[#c5a880]" />
            Methodology & Flow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Our 4-Step Construction Process
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            From the initial plot review to the day we hand over your keys, our structured process keeps you informed and confident at every milestone.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Hammer;
            const isLast = idx === PROCESS_STEPS.length - 1;

            return (
              <div key={step.step} className="relative flex flex-col justify-between">
                <div>
                  {/* Step Header with Line */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#111317] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-mono font-semibold tracking-widest text-[#c5a880] px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif text-white mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-4 border-t border-white/5 bg-[#111317]/50 p-4 rounded-sm border border-white/5">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 mb-2">
                    Key Milestones
                  </div>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-xs tracking-wider uppercase transition-all shadow-xl rounded-sm cursor-pointer"
          >
            <span>Start with Step 01: Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
