"use client";

import React from "react";
import Image from "next/image";
import { NIVIS_DATA } from "@/data/nivisData";
import { Star, Quote, HeartHandshake, ShieldCheck, Sparkles, CheckCircle } from "lucide-react";

export function TheCareBehindNivis() {
  return (
    <section id="care-behind-nivis" className="py-20 sm:py-28 bg-[#f4efe6] relative overflow-hidden">
      {/* Subtle background botanical pattern & ambient glows */}
      <div className="absolute inset-0 bg-subtle-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ebf1ee] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153e35]/10 text-[#153e35] text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span>{NIVIS_DATA.brandEditorial.eyebrow}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[#1e242b] font-medium tracking-tight mb-5">
            Compassion you can see in{" "}
            <span className="italic text-[#153e35] font-normal">every story.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed font-light">
            {NIVIS_DATA.brandEditorial.doctorStory}
          </p>
        </div>

        {/* Editorial Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Elegant Visual Pet Composition with Monogram (No fake doctor photo) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative warm background panel */}
              <div className="absolute -inset-3 bg-[#faf7f2] rounded-[2.8rem] shadow-editorial -rotate-1" />

              {/* Composition Container */}
              <div className="relative bg-[#faf7f2] rounded-[2.5rem] p-4 sm:p-5 border border-[#1e242b]/8 overflow-hidden">
                {/* Large Close-up pet photograph */}
                <div className="relative aspect-[4/3] sm:aspect-[16/12] rounded-[2rem] overflow-hidden shadow-inner bg-[#e8e2d5]">
                  <Image
                    src="/images/nivis/dog-closeup.jpg"
                    alt="A calm, trusting companion receiving gentle care"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#153e35]/60 via-transparent to-transparent" />

                  {/* Monogram Badge */}
                  <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-[#faf7f2]/95 backdrop-blur-md border border-[#153e35]/20 flex flex-col items-center justify-center shadow-editorial">
                    <span className="font-serif text-2xl font-bold text-[#153e35] leading-none">
                      N
                    </span>
                    <span className="text-[8px] uppercase tracking-widest text-[#5e6872] font-semibold mt-0.5">
                      Nivis
                    </span>
                  </div>

                  {/* Google Rating Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="font-semibold">{NIVIS_DATA.rating.score} ★</span>
                      <span className="text-white/80">({NIVIS_DATA.rating.count} Google Reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Subtle future-photo ready caption notice */}
                <div className="pt-4 px-2 flex items-center justify-between text-[11px] text-[#5e6872]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#c86343]" />
                    <span>Dedicated local veterinary care in Thiruverkadu</span>
                  </span>
                  <span className="italic text-[#153e35] font-medium">Dr. Karthika</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Editorial Quote & Care Identity */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* The Brand & Clinical Identity Card */}
            <div className="bg-[#faf7f2] rounded-3xl p-7 sm:p-9 border border-[#1e242b]/8 shadow-editorial relative">
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#ebf1ee] text-[#153e35] flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 fill-[#153e35]" />
              </div>

              {/* Large Featured Customer Quote */}
              <blockquote className="font-serif text-2xl sm:text-3xl text-[#1e242b] leading-snug font-normal mb-6">
                &ldquo;{NIVIS_DATA.brandEditorial.featuredQuote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-6 border-t border-[#1e242b]/10">
                <div>
                  <div className="text-sm font-semibold text-[#1e242b]">
                    — {NIVIS_DATA.brandEditorial.featuredQuoteAttribution}
                  </div>
                  <div className="text-xs text-[#5e6872] mt-0.5">
                    Verified Google Review feedback
                  </div>
                </div>

                {/* Focus on Dr. Karthika based on customer reviews */}
                <div className="text-right">
                  <div className="font-serif text-lg font-semibold text-[#153e35]">
                    {NIVIS_DATA.doctorMentioned}
                  </div>
                  <div className="text-xs font-medium text-[#c86343]">
                    {NIVIS_DATA.doctorRole}
                  </div>
                </div>
              </div>

              {/* Additional Context Note */}
              <p className="mt-6 text-xs text-[#5e6872] leading-relaxed bg-[#f4efe6]/80 p-3.5 rounded-xl border border-[#1e242b]/5">
                Pet parents describe Dr. Karthika as caring, loving and deeply committed to the animals under her care. Nivis prioritizes personal attention, gentle physical exams, and clear communication with every pet family.
              </p>
            </div>

            {/* Quick Proof Pillars */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#faf7f2]/80 p-4 rounded-2xl border border-[#1e242b]/5 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#153e35] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#1e242b]">Caring Handling</div>
                  <div className="text-[11px] text-[#5e6872] mt-0.5">Patience and comfort with every animal</div>
                </div>
              </div>

              <div className="bg-[#faf7f2]/80 p-4 rounded-2xl border border-[#1e242b]/5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#153e35] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#1e242b]">5.0 ★ Google Score</div>
                  <div className="text-[11px] text-[#5e6872] mt-0.5">5 real customer reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
