"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageSquare, ArrowDown, ArrowRight, ShieldCheck, MapPin, Star } from "lucide-react";
import { BUSINESS_INFO } from "@/data/constructionData";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Modern Architectural Construction by Haridass Construction"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Layered architectural dark overlays */}
        <div className="absolute inset-0 bg-[#090a0c]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-[#090a0c]/40 to-transparent" />
        <div className="absolute inset-0 bg-architectural-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 flex flex-col justify-center">
        {/* Top Architectural Badge */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gray-300">
            Ambattur, Chennai • Real Estate Builders & Construction
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.1] mb-6">
            Building Spaces That Stand the{" "}
            <span className="italic font-light text-[#dfbe99] underline decoration-[#c5a880]/30 decoration-1 underline-offset-8">
              Test of Time.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-10">
            Quality construction, thoughtful design, and reliable execution for residential and commercial projects across Chennai.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#projects"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-xs tracking-wider uppercase transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              View Our Work
            </a>

            {/* Direct Phone / WhatsApp Quick Connect */}
            <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 sm:flex-initial px-4 py-3.5 bg-black/50 hover:bg-black/80 border border-white/10 text-gray-200 text-xs font-mono flex items-center justify-center gap-2 transition-colors rounded-sm"
                title="Direct call"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors rounded-sm"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Bottom Credibility Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 max-w-5xl">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[#c5a880]">
              <Star className="w-4 h-4 fill-[#c5a880]" />
              <span className="text-xl font-bold font-serif text-white">4.8 / 5</span>
            </div>
            <p className="text-xs text-gray-400">21 Google Reviews</p>
          </div>

          <div className="space-y-1">
            <div className="text-xl font-bold font-serif text-white">Quality Materials</div>
            <p className="text-xs text-gray-400">Strict structural standards</p>
          </div>

          <div className="space-y-1">
            <div className="text-xl font-bold font-serif text-white">Professional Execution</div>
            <p className="text-xs text-gray-400">Supervised site workmanship</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-white">
              <MapPin className="w-4 h-4 text-[#c5a880]" />
              <span className="text-xl font-bold font-serif">Ambattur</span>
            </div>
            <p className="text-xs text-gray-400">Chennai, Tamil Nadu 600053</p>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#trust-bar"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gray-400 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span>Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#c5a880]" />
      </a>
    </section>
  );
}
