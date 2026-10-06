"use client";

import React from "react";
import { Star, ShieldAlert, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function TreatmentFirstSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#11161b] text-[#faf8f5] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0f4c3a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-400">
            Our Clinical Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mt-2">
            Care that goes beyond the counter.
          </h2>
        </div>

        {/* Visually Striking Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Large Typography Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-l-2 border-emerald-400 pl-6 space-y-3">
              <h3 className="font-serif text-5xl sm:text-6xl font-normal text-white leading-[1.05]">
                Treatment first. <br />
                <span className="text-emerald-400 italic font-light">Pets always.</span>
              </h3>
            </div>

            <p className="text-base text-zinc-300 font-light leading-relaxed pl-6">
              When pet parents bring an animal to Vetri, our primary focus is medical assessment, compassionate diagnosis, and clinical recovery.
            </p>

            <div className="pt-4 pl-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Honest, clinically grounded recommendations</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent explanation of every procedure</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Focus on your pet's recovery above commercial sales</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Genuine Customer Sentiment */}
          <div className="lg:col-span-7 bg-[#192027] border border-white/10 rounded-sm p-8 sm:p-12 relative shadow-2xl">
            {/* Quote Icon watermark */}
            <div className="absolute top-6 right-6 text-white/5 pointer-events-none">
              <MessageSquareQuote className="w-24 h-24" />
            </div>

            <div className="space-y-6 relative">
              {/* Star Rating Badge */}
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400 text-sm tracking-wider">
                  ★★★★★
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-zinc-300">
                  Verified Google Review
                </span>
              </div>

              {/* Genuine Unedited Review Quote */}
              <blockquote className="font-serif text-2xl sm:text-3xl text-zinc-100 font-normal leading-relaxed italic">
                "Among commercial pet clinic in Chennai the clinic which focus more on treatment then selling of products hope they soon reach high."
              </blockquote>

              {/* Attribution */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">Guna Sundari</div>
                  <div className="text-xs text-zinc-400">Pet Parent · Google Review</div>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded">
                  5.0 ★ Rating
                </span>
              </div>

              {/* Editorial Context */}
              <div className="pt-4 border-t border-white/5 text-xs text-zinc-300 leading-relaxed space-y-2">
                <p>
                  Vetri is built on veterinary medicine first. While essential pet nutrition and healthcare supplies are readily available at the clinic, our veterinarians will never pressure pet parents into unnecessary purchases.
                </p>
                <p className="text-emerald-400 font-medium">
                  Our single priority is doing what is medically right for your pet.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
