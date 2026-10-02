"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Shield, Eye, Clock, Compass, Phone } from "lucide-react";
import { WHY_CHOOSE_US, BUSINESS_INFO } from "@/data/constructionData";

const icons = [Shield, Eye, Clock, Compass];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#0c0d10] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
            <span className="w-2 h-0.5 bg-[#c5a880]" />
            Our Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Why Choose Haridass Construction?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            Constructing a building is one of your most significant investments. We approach every site with structural discipline, quality inputs, and genuine accountability.
          </p>
        </div>

        {/* 4 Strong Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = icons[idx] || Shield;
            return (
              <div
                key={item.number}
                className="group relative bg-[#111317] border border-white/10 hover:border-[#c5a880]/50 p-8 rounded-sm transition-all duration-300 flex flex-col justify-between"
              >
                {/* Architectural Numeral */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-serif font-light text-[#c5a880]/80 group-hover:text-[#c5a880] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#c5a880] group-hover:bg-[#c5a880]/10 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-white group-hover:text-[#dfbe99] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                  <span>Ambattur • Chennai</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Commitment Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#111317] via-[#16191f] to-[#111317] border border-white/10 p-6 sm:p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#c5a880]/15 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-serif text-lg">Direct Contractor Access</div>
              <div className="text-gray-400 text-xs sm:text-sm">
                Speak directly with our principal team for clear site updates and transparent timelines.
              </div>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2 rounded-sm transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
