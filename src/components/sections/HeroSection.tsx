"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, Clock, MapPin, Sparkles, HeartHandshake, Users } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

interface HeroSectionProps {
  onOpenAppointmentModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointmentModal }) => {
  const handleBookClick = () => {
    if (onOpenAppointmentModal) {
      onOpenAppointmentModal();
    } else {
      const target = document.querySelector("#appointment");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#treatments");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[#F7F5EF] overflow-hidden border-b border-[#D9E6DE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF5EF] border border-[#D9E6DE] text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#176B57]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#18332E]">
                Jaksh&apos;s Dental Junction &nbsp;•&nbsp; Mogappair East, Chennai
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#18332E] font-normal leading-[1.08] tracking-tight">
              Gentle dentistry. <br />
              <span className="italic text-[#176B57]">Thoughtfully done.</span>
            </h1>

            {/* Tagline with subtle sage accent bar */}
            <div className="border-l-2 border-[#5F9B82] pl-3.5 py-0.5">
              <p className="text-sm sm:text-base font-medium text-[#176B57] italic">
                &ldquo;{CLINIC_INFO.tagline}&rdquo;
              </p>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-[#65756F] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {CLINIC_INFO.heroSubheadline}
            </p>

            {/* Actions: Primary, Secondary & Phone */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={handleBookClick}
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white bg-[#176B57] hover:bg-[#125544] transition-all shadow-xs"
              >
                Book an Appointment
              </button>

              <a
                href="#treatments"
                onClick={handleExploreClick}
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#18332E] bg-[#FFFFFF] hover:bg-[#EEF5EF] border border-[#D9E6DE] hover:border-[#176B57] transition-all flex items-center justify-center gap-2"
              >
                Explore Our Treatments
                <ArrowRight className="w-3.5 h-3.5 text-[#65756F]" />
              </a>

              <a
                href={CLINIC_INFO.phone}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#65756F] hover:text-[#18332E] transition-colors py-2 px-1"
                aria-label={`Call ${CLINIC_INFO.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#176B57]" />
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>

            {/* Discreet Meta Footnote */}
            <div className="pt-6 border-t border-[#D9E6DE] flex flex-wrap items-center gap-6 text-xs text-[#65756F]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#176B57]" />
                <span>Valayapathi Salai, Block 6</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#176B57]" />
                <span>Mon–Sat: 5:00 PM – 8:30 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Clinic Photography with Soft Sage Matting */}
          <div className="lg:col-span-5 relative">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-[#EEF5EF] border border-[#D9E6DE] shadow-xs">
              <div className="relative rounded-2xl overflow-hidden border border-[#D9E6DE] bg-[#FFFFFF]">
                <div className="relative aspect-4/5 w-full bg-[#EEF5EF]/60">
                  <Image
                    src="/images/dental/clinic-operatory.jpg"
                    alt="Jaksh's Dental Junction clinical operatory and patient care setting in Mogappair East, Chennai"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Quiet Photographic Caption */}
                <div className="p-4 bg-[#FFFFFF] border-t border-[#D9E6DE] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#18332E]">
                      Clinical Operatory
                    </p>
                    <p className="text-[11px] text-[#65756F]">
                      Clean, calm, and individually prepared for every appointment
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#18332E] bg-[#EEF5EF] px-2.5 py-0.5 rounded border border-[#D9E6DE]">
                    Mogappair East
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Trust Strip (Meridian Reference Style) */}
        <div className="mt-16 pt-10 border-t border-[#D9E6DE] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D9E6DE] shadow-xs hover:border-[#5F9B82] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#EEF5EF] flex items-center justify-center text-[#176B57] mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#18332E] font-normal mb-1.5">
              Personalized Care
            </h3>
            <p className="text-xs sm:text-sm text-[#65756F] leading-relaxed">
              Every consultation is unhurried. We listen carefully, assess your oral condition, and explain treatment steps clearly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D9E6DE] shadow-xs hover:border-[#5F9B82] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#EEF5EF] flex items-center justify-center text-[#176B57] mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#18332E] font-normal mb-1.5">
              Calm Environment
            </h3>
            <p className="text-xs sm:text-sm text-[#65756F] leading-relaxed">
              Thoughtfully designed operatory suite and waiting lounge crafted to eliminate anxiety for children, teens, and adults.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D9E6DE] shadow-xs hover:border-[#5F9B82] transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#EEF5EF] flex items-center justify-center text-[#176B57] mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl text-[#18332E] font-normal mb-1.5">
              Multidisciplinary Team
            </h3>
            <p className="text-xs sm:text-sm text-[#65756F] leading-relaxed">
              Comprehensive clinical endodontics led by our founder alongside visiting consultants in oral surgery, orthodontics, and pedodontics.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
