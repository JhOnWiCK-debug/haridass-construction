"use client";

import React from "react";
import Image from "next/image";
import { Phone, Calendar, MapPin, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

interface HeroProps {
  onOpenAppointment: () => void;
}

export function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#e8e2d5]/60">
      {/* Subtle background ambient blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0f4c3a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#b85433]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6">
            
            {/* Minimal eyebrow label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#f4efe6] border border-[#e2dacb] rounded-full text-xs font-semibold tracking-wide text-[#0f4c3a]">
              <span className="w-2 h-2 rounded-full bg-[#0f4c3a]" />
              <span>Veterinary Clinic · Perungudi, Chennai</span>
              <span className="text-zinc-300">|</span>
              <span className="text-[#b85433]">Open Daily until 9 PM</span>
            </div>

            {/* Dramatic Editorial Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#11161b] leading-[1.06]">
                When they need care, <br />
                <span className="italic font-light text-[#0f4c3a]">we're here.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#5e6872] max-w-xl font-normal leading-relaxed">
                Compassionate veterinary treatment and ongoing support for pets in Perungudi, Chennai.
              </p>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#0f4c3a] hover:bg-[#165b4c] active:bg-[#0b382b] rounded-sm shadow-md hover:shadow-lg transition-all group"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={`tel:${VETRI_DATA.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#11161b] bg-white hover:bg-[#f4efe6] border border-[#d8d0c4] hover:border-[#11161b] rounded-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#0f4c3a]" />
                <span>Call {VETRI_DATA.phone}</span>
              </a>
            </div>

            {/* Trust and Rating indicator */}
            <div className="pt-2 border-t border-[#e8e2d5] flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#11161b]">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500 text-base tracking-widest">
                  ★★★★★
                </div>
                <span className="font-semibold text-zinc-900">5.0 Google Rating</span>
                <span className="text-[#5e6872]">· 6 Reviews</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#5e6872] text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 text-[#0f4c3a]" />
                <span className="font-medium text-[#11161b]">Perungudi, Chennai</span>
              </div>
            </div>

            {/* Honest clinical philosophy note */}
            <p className="text-xs text-[#5e6872]/80 leading-relaxed italic">
              "Care that focuses on your pet's recovery, health, and comfort above all else."
            </p>
          </div>

          {/* Right Column: Authentic Editorial Visual Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Editorial Image Frame */}
              <div className="relative overflow-hidden rounded-sm bg-[#e8e2d5] aspect-[4/5] shadow-editorial-lg border border-[#ded5c5]">
                <Image
                  src="/images/vetri/hero-vet-care.jpg"
                  alt="Veterinarian gently examining a calm dog with stethoscope"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-sm bg-black/40 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-emerald-300">
                        Vetri Pet Hospital & Clinic
                      </p>
                      <p className="text-[11px] text-zinc-200">
                        Calm consultations & patient-first veterinary care
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/20 text-white font-medium">
                      9 AM – 9 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-sm shadow-editorial border border-[#e2dacb] hidden sm:flex items-center gap-3 max-w-[240px]">
                <div className="w-9 h-9 rounded-full bg-[#0f4c3a]/10 text-[#0f4c3a] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-[#0f4c3a]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#11161b]">Personal Care</div>
                  <div className="text-[11px] text-[#5e6872]">Treatment over sales</div>
                </div>
              </div>

              {/* Doctors signature pill */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#11161b] text-white p-3.5 rounded-sm shadow-xl border border-white/10 hidden sm:block max-w-[260px]">
                <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                  Veterinary Physicians
                </div>
                <div className="text-xs font-medium text-zinc-100 mt-0.5">
                  Dr. Sandhiya. S & Dr. Ramu
                </div>
                <div className="text-[10px] text-zinc-400 mt-0.5">
                  Consultations in Kurinji Nagar, Perungudi
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
