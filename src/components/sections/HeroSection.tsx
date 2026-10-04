"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Award,
  Clock,
  MapPin,
  Sparkles,
  ChevronRight,
  Heart,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

interface HeroSectionProps {
  onOpenAppointmentModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointmentModal }) => {
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const heroPhotos = [
    {
      src: "/images/dental/clinic-operatory.jpg",
      alt: "Jaksh's Dental Junction modern treatment operatory chair and equipment",
      caption: "Advanced Dental Operatory",
      sub: "Ergonomic clinical setup & strict sterilization",
    },
    {
      src: "/images/dental/clinic-exterior-sign.jpg",
      alt: "Jaksh's Dental Junction illuminated storefront on Valayapathi Salai Mogappair East",
      caption: "Mogappair East Clinic",
      sub: "Easily accessible on Valayapathi Salai",
    },
    {
      src: "/images/dental/clinic-shark-divider.jpg",
      alt: "Friendly shark dental mural divider for relaxed patient comfort",
      caption: "Warm & Gentle Environment",
      sub: "Anxiety-free dentistry for kids & adults",
    },
  ];

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

  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-emerald-50/70 via-white to-white overflow-hidden"
    >
      {/* Subtle organic light-green decorative backdrop elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/35 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-in fade-in duration-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Women-Owned Dental Practice • Mogappair East, Chennai</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              Professional Dental Care <br className="hidden sm:inline" />
              <span className="text-emerald-600 bg-clip-text">You Can Trust</span>
            </h1>

            {/* Tagline & Subheading */}
            <div className="mb-6 space-y-2">
              <p className="text-base sm:text-lg font-semibold text-emerald-800 flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                Jaksh&apos;s Dental Junction — Where dentistry & kindness meet
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Founded by <strong>Dr. Krishnapriya G</strong> (Rotary Endodontist with 12 years of clinical practice) alongside multidisciplinary specialist consultants. Experience comfortable, patient-first dental treatments in a modern, caring environment.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={handleBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md shadow-emerald-600/25 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </button>

              <a
                href={CLINIC_INFO.phone}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-emerald-900 bg-white hover:bg-emerald-50/80 border border-emerald-300/80 shadow-xs transition-all duration-200 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                Call Clinic ({CLINIC_INFO.phoneDisplay})
              </a>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full pt-4 border-t border-slate-200/70">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-emerald-100/80 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <Award className="w-4 h-4 text-emerald-600" />
                  12 Years Practice
                </div>
                <p className="text-xs text-slate-500">Chief Dentist Experience</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 border border-emerald-100/80 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Specialist Team
                </div>
                <p className="text-xs text-slate-500">Surgeon, Ortho, Perio, Pedo</p>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-white/80 border border-emerald-100/80 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  5 PM – 8:30 PM
                </div>
                <p className="text-xs text-slate-500">Evening Consultation Hours</p>
              </div>
            </div>

          </div>

          {/* Right Visual Column (Real Clinic Photos) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/70 border-4 border-white">
                <div className="relative aspect-4/3 sm:aspect-16/11 w-full bg-slate-100">
                  <Image
                    src={heroPhotos[activePhoto].src}
                    alt={heroPhotos[activePhoto].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority
                    className="object-cover transition-all duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10" />

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-600/90 text-white text-[11px] font-semibold mb-1">
                      Real Clinic Photo
                    </span>
                    <h3 className="text-base font-bold leading-tight">
                      {heroPhotos[activePhoto].caption}
                    </h3>
                    <p className="text-xs text-slate-200">
                      {heroPhotos[activePhoto].sub}
                    </p>
                  </div>
                </div>

                {/* Photo Switcher Tabs */}
                <div className="p-3 bg-white grid grid-cols-3 gap-2 border-t border-slate-100">
                  {heroPhotos.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhoto(idx)}
                      className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all ${
                        activePhoto === idx
                          ? "border-emerald-600 ring-2 ring-emerald-400/40 scale-102"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`View ${photo.caption}`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="100px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Floating Doctor Profile Pill */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-emerald-100 flex items-center gap-3.5 max-w-xs animate-in fade-in slide-in-from-bottom duration-700">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-emerald-50 shrink-0 border border-emerald-200">
                  <Image
                    src="/images/dental/dr-krishnapriya.png"
                    alt="Dr. Krishnapriya G Founder"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      Dr. Krishnapriya G
                    </h4>
                  </div>
                  <p className="text-[11px] text-emerald-700 font-semibold">Founder & Chief Dentist</p>
                  <p className="text-[10px] text-slate-500">Rotary Endodontist • 12 Yrs Exp</p>
                </div>
              </div>

              {/* Floating Location Pill */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-xs rounded-2xl px-3.5 py-2 shadow-md border border-slate-200/80 items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  Mogappair East, Chennai
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
