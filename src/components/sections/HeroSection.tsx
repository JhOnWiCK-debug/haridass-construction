"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, Clock, MapPin } from "lucide-react";
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
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#E7EEE4]/80 via-[#F8F6F0] to-[#F8F6F0] overflow-hidden border-b border-[#DCE5D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EEE4] border border-[#B8CBB8] text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#29483A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#203B2F]">
                Jaksh&apos;s Dental Junction &nbsp;•&nbsp; Mogappair East, Chennai
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#203B2F] font-normal leading-[1.08] tracking-tight">
              Gentle dentistry. <br />
              <span className="italic text-[#29483A]">Thoughtfully done.</span>
            </h1>

            {/* Tagline with subtle sage accent bar */}
            <div className="border-l-2 border-[#A9C0A7] pl-3.5 py-0.5">
              <p className="text-sm sm:text-base font-medium text-[#29483A] italic">
                &ldquo;{CLINIC_INFO.tagline}&rdquo;
              </p>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-[#344139] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {CLINIC_INFO.heroSubheadline}
            </p>

            {/* Actions: Primary, Secondary & Phone */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={handleBookClick}
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs sm:text-sm font-medium tracking-wide text-white bg-[#29483A] hover:bg-[#203B2F] transition-all shadow-xs"
              >
                Book an Appointment
              </button>

              <a
                href="#treatments"
                onClick={handleExploreClick}
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs sm:text-sm font-medium tracking-wide text-[#203B2F] bg-[#FFFDF9] hover:bg-[#E7EEE4] border border-[#DCE5D8] transition-all flex items-center justify-center gap-2"
              >
                Explore Our Treatments
                <ArrowRight className="w-3.5 h-3.5 text-[#737B73]" />
              </a>

              <a
                href={CLINIC_INFO.phone}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#737B73] hover:text-[#203B2F] transition-colors py-2 px-1"
                aria-label={`Call ${CLINIC_INFO.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#29483A]" />
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>

            {/* Discreet Meta Footnote */}
            <div className="pt-6 border-t border-[#DCE5D8] flex flex-wrap items-center gap-6 text-xs text-[#737B73]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#29483A]" />
                <span>Valayapathi Salai, Block 6</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#29483A]" />
                <span>Mon–Sat: 5:00 PM – 8:30 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Clinic Photography with Pale-Sage Architectural Matting */}
          <div className="lg:col-span-5 relative">
            <div className="p-2 sm:p-2.5 rounded-3xl bg-[#E7EEE4] border border-[#DCE5D8] shadow-xs">
              <div className="relative rounded-2xl overflow-hidden border border-[#DCE5D8] bg-[#FFFDF9]">
                <div className="relative aspect-4/5 w-full bg-[#E7EEE4]/60">
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
                <div className="p-4 bg-[#FFFDF9] border-t border-[#DCE5D8] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#203B2F]">
                      Clinical Operatory
                    </p>
                    <p className="text-[11px] text-[#737B73]">
                      Clean, calm, and individually prepared for every appointment
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#203B2F] bg-[#E7EEE4] px-2.5 py-0.5 rounded border border-[#B8CBB8]">
                    Mogappair East
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
