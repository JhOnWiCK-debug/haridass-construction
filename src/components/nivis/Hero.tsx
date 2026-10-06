"use client";

import React from "react";
import Image from "next/image";
import { NIVIS_DATA } from "@/data/nivisData";
import { Star, Calendar, Navigation, ShieldCheck, Heart, Sparkles, MapPin, Clock } from "lucide-react";

interface HeroProps {
  onOpenAppointment: () => void;
}

export function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#faf7f2]">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ebf1ee] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f4efe6] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#153e35]/10 text-[#153e35] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#153e35] animate-pulse" />
              <span>{NIVIS_DATA.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08] text-[#1e242b] font-medium tracking-tight mb-6">
              Because every pet deserves{" "}
              <span className="italic font-normal text-[#153e35]">a little more care.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed max-w-2xl mb-8 font-light">
              Compassionate veterinary care and everyday pet essentials for the pets who are part
              of your family. Unhurried clinical listening in MGR Nagar, Thiruverkadu.
            </p>

            {/* Google Trust Proof */}
            <div className="flex flex-wrap items-center gap-4 py-4 px-5 rounded-2xl bg-[#f4efe6]/80 border border-[#1e242b]/5 self-start mb-8 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-base font-bold text-[#1e242b]">5.0</span>
                <span className="text-xs font-medium text-[#1e242b]">Google Rating</span>
                <span className="text-xs text-[#5e6872]">•</span>
                <span className="text-xs text-[#5e6872]">5 Google Reviews</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#153e35] text-[#faf7f2] font-semibold text-sm hover:bg-[#1b4d3e] shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <Calendar className="w-4 h-4 text-[#8fa89b] group-hover:text-white transition-colors" />
                <span>Book a Visit</span>
              </button>

              <a
                href={NIVIS_DATA.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#1e242b] border border-[#1e242b]/15 font-semibold text-sm hover:bg-[#f4efe6] hover:border-[#153e35]/30 shadow-sm transition-all duration-200"
              >
                <Navigation className="w-4 h-4 text-[#c86343]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Micro note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-[#5e6872]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Current listed closing time: 9:30 PM • Women-owned veterinary clinic</span>
            </div>
          </div>

          {/* Right Asymmetrical Imagery Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#153e35]/10 via-[#c86343]/5 to-transparent rounded-[2.5rem] transform -rotate-1 -z-10" />

              {/* Main Photo Card */}
              <div className="relative overflow-hidden rounded-[2.2rem] shadow-editorial-lg bg-white border border-[#1e242b]/10 aspect-[4/5]">
                <Image
                  src="/images/nivis/hero-vet-care.jpg"
                  alt="Veterinarian gently examining a beloved pet in a calm clinical environment"
                  fill
                  priority
                  className="object-cover object-center scale-[1.02] hover:scale-100 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />

                {/* Subtle soft vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#153e35]/80 via-transparent to-black/10" />

                {/* Floating caption overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#faf7f2]/95 backdrop-blur-md border border-white/60 shadow-editorial">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#153e35] text-[#faf7f2] flex items-center justify-center text-xs font-serif font-bold shrink-0 mt-0.5">
                      K
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1e242b]">
                        Gentle, unhurried veterinary handling
                      </p>
                      <p className="text-[11px] text-[#5e6872] mt-0.5">
                        &quot;She is very caring and loving with pets.&quot; — Nivis pet parent
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Little Floating Accent Tag */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3.5 py-2 rounded-2xl bg-[#153e35] text-[#faf7f2] text-xs font-medium shadow-editorial flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Pet Clinic + Pet Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
