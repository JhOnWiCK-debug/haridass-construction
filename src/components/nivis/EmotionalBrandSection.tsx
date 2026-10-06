"use client";

import React from "react";
import Image from "next/image";
import { NIVIS_DATA } from "@/data/nivisData";
import { Heart, Stethoscope, CheckCircle2 } from "lucide-react";

export function EmotionalBrandSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Emotional Photograph */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Background tonal block */}
              <div className="absolute -inset-3 bg-[#e8e2d5]/60 rounded-[2.5rem] -rotate-2 -z-10" />

              <div className="relative overflow-hidden rounded-[2.2rem] shadow-editorial-lg aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/nivis/cat-gentle.jpg"
                  alt="A calm, comforted companion resting with peace in a caring clinic environment"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                    Quiet, Fear-Free Approach
                  </p>
                  <p className="font-serif text-lg sm:text-xl font-normal italic mt-0.5">
                    &quot;Listening to the patient who has no words.&quot;
                  </p>
                </div>
              </div>

              {/* Little floating detail pill */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-sm border border-[#1e242b]/10 p-3.5 rounded-2xl shadow-editorial flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#153e35]/10 text-[#153e35] flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-[#153e35]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1e242b]">Personal Attention</div>
                  <div className="text-[11px] text-[#5e6872]">Every appointment is unhurried</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Large Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#f4efe6] text-[#153e35] text-[11px] font-semibold tracking-wider uppercase mb-5">
              <span>Patient-First Ethos</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[#1e242b] font-medium tracking-tight mb-6">
              They can&apos;t tell you what&apos;s wrong.
              <br />
              <span className="italic text-[#153e35] font-normal">
                That&apos;s why care matters.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed mb-6 font-light">
              When a pet isn&apos;t feeling well, every pet parent wants someone who will listen,
              explain and treat them with patience. Nivis Pet Clinic is built around compassionate
              veterinary care and a genuine love for animals.
            </p>

            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#153e35] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1e242b]/90 leading-snug">
                  <strong>Gentle physical examination</strong> — prioritizing your pet&apos;s comfort and minimizing fear or anxiety.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#153e35] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1e242b]/90 leading-snug">
                  <strong>Transparent pet-parent dialogue</strong> — clear guidance on symptoms, diet, and recovery steps without medical jargon.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#153e35] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1e242b]/90 leading-snug">
                  <strong>Integrated pet store</strong> — carry home veterinary-approved nutrition, supplements, and essentials in one convenient visit.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e242b]/10 flex items-center gap-4">
              <span className="font-serif text-sm italic text-[#5e6872]">
                &quot;Because every pet deserves a little more care.&quot;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
