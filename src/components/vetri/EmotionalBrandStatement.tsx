"use client";

import React from "react";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

export function EmotionalBrandStatement() {
  return (
    <section className="py-20 lg:py-32 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column - Asymmetrical with overlap */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative">
              {/* Decorative background border block */}
              <div className="absolute -inset-4 bg-[#f4efe6] rounded-sm transform -rotate-1 hidden sm:block border border-[#e2dacb]" />

              {/* Main photograph */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-sm overflow-hidden bg-[#e8e2d5] shadow-editorial-lg border border-[#ded5c5]">
                <Image
                  src="/images/vetri/family-bond.jpg"
                  alt="Pet parent embracing dog with genuine love and care"
                  fill
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Editorial quote tag */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#11161b] text-white p-4 sm:p-5 rounded-sm max-w-xs shadow-xl border border-white/10 hidden sm:block">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <Heart className="w-3.5 h-3.5 fill-emerald-400" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold">
                    The Vetri Promise
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-serif italic leading-relaxed">
                  "Every examination is carried out with patience, respect, and unconditional gentleness."
                </p>
              </div>
            </div>
          </div>

          {/* Typography Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8 pl-0 lg:pl-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
                Human & Animal Bond
              </span>
              
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#11161b] leading-[1.08]">
                Because they're family.
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-[#374151] font-light leading-relaxed">
              From routine health needs to moments when your pet needs extra support, Vetri is built around thoughtful veterinary care and the people who care deeply about their animals.
            </p>

            <div className="space-y-4 pt-2">
              <div className="border-l-2 border-[#0f4c3a] pl-4 space-y-1">
                <h4 className="text-sm font-semibold text-[#11161b]">
                  Calm, unhurried consultations
                </h4>
                <p className="text-xs sm:text-sm text-[#5e6872] leading-relaxed">
                  We know a visit to the clinic can feel overwhelming for a frightened animal. We give them space to sniff, settle, and feel secure.
                </p>
              </div>

              <div className="border-l-2 border-[#0f4c3a]/40 pl-4 space-y-1">
                <h4 className="text-sm font-semibold text-[#11161b]">
                  Practical guidance for home recovery
                </h4>
                <p className="text-xs sm:text-sm text-[#5e6872] leading-relaxed">
                  Healing doesn't end when you leave our clinic door. We walk you through every step of nursing your companion back to vitality.
                </p>
              </div>
            </div>

            {/* Subtle editorial indicator */}
            <div className="flex items-center gap-3 pt-2 text-xs text-[#5e6872]">
              <span className="w-8 h-px bg-[#0f4c3a]" />
              <span className="font-mono uppercase tracking-wider text-[11px] text-[#0f4c3a]">
                Professional Treatment · Personal Care
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
