"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Building2, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/constructionData";

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export default function AboutSection({ onOpenConsultation }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#090a0c] overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 group">
              <Image
                src="/images/about/about-craft.jpg"
                alt="Haridass Construction Architectural Planning & Civil Execution"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-transparent to-transparent opacity-80" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#111317]/90 backdrop-blur-md border border-white/15 rounded-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#c5a880] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Kallikuppam, Ambattur
                </div>
                <div className="text-white text-sm font-serif">
                  No. 48, 4th Street, East Balaji Nagar, Chennai 600053
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent Frame */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#c5a880]/40 pointer-events-none" />
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880]">
              <span className="w-2 h-0.5 bg-[#c5a880]" />
              About Our Company
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.15]">
              Built on Quality.{" "}
              <span className="italic font-light text-[#dfbe99]">
                Driven by Trust.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Haridass Construction is a dedicated Real Estate Builders & Construction Company based in Ambattur, Chennai. We deliver dependable construction services with unwavering attention to quality, materials, workmanship, and customer satisfaction.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Whether building a new residential home, executing commercial structural works, or undertaking a building renovation, our approach centers on structural durability, thoughtful planning, and straightforward client communication. Every site is managed with care to ensure spaces are built safely, reliably, and to your satisfaction.
            </p>

            {/* Core Values / Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#111317] border border-white/10 rounded-sm">
                <div className="text-[#c5a880] font-serif text-lg mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#c5a880]" />
                  Material Quality
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Carefully vetted cement, steel, bricks, and fittings designed for long-term endurance.
                </p>
              </div>

              <div className="p-4 bg-[#111317] border border-white/10 rounded-sm">
                <div className="text-[#c5a880] font-serif text-lg mb-1 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#c5a880]" />
                  Reliable Execution
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Disciplined on-site coordination and strict structural compliance across every phase.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-2 rounded-sm cursor-pointer"
              >
                <span>About Haridass Construction</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 rounded-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Call 080560 52207</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
