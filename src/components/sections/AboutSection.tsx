"use client";

import React from "react";
import Image from "next/image";
import {
  Heart,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  Award,
  Shield,
  Stethoscope,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/60">
            <Heart className="w-3.5 h-3.5 text-emerald-600" />
            About Jaksh&apos;s Dental Junction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Where Dentistry & Kindness Meet
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            A welcoming, women-owned dental practice situated in Mogappair East, Chennai. We combine patient-centered care, clinical precision, and gentle treatment to make your dental visits comfortable and anxiety-free.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 shadow-md border border-slate-100 group">
                <Image
                  src="/images/dental/clinic-consultation-desk.jpg"
                  alt="Doctor consultation desk with dental charts and models"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
                  Patient Consultation Desk
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 text-emerald-950">
                <span className="text-2xl font-black text-emerald-700 block">12 Years</span>
                <span className="text-xs font-medium text-emerald-800">
                  Clinical Practice by Chief Dentist Dr. Krishnapriya G
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-md">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ethos & Care
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  &ldquo;We treat patients as family members with transparent recommendations, gentle hands, and dedicated attention.&rdquo;
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-4/5 shadow-md border border-slate-100 group">
                <Image
                  src="/images/dental/clinic-entrance.jpg"
                  alt="Jaksh's Dental Junction clinic entrance at Mogappair East"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
                  Welcoming Clinic Entrance
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-emerald-50/40 p-6 rounded-3xl border border-emerald-100">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-emerald-100 shrink-0 border-2 border-emerald-300">
                  <Image
                    src="/images/dental/dr-krishnapriya.png"
                    alt="Dr. Krishnapriya G Founder and Chief Dentist"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-slate-900">Dr. Krishnapriya G</h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                      Founder & Chief Dentist
                    </span>
                  </div>
                  <p className="text-xs font-medium text-emerald-700 mb-1">
                    Rotary Endodontist • 12 Years Clinical Practice • IDA Certified
                  </p>
                  <p className="text-xs text-slate-600">
                    Clinical Research Professional • Anbu Maruthuvar Awardee • Chennai
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Located on Valayapathi Salai in 6th Block, Mogappair East, <strong>Jaksh&apos;s Dental Junction</strong> was established to provide Chennai residents with thorough, compassionate dental solutions under one roof. Our clinic is women-owned and managed with an uncompromising commitment to clinical hygiene and patient well-being.
            </p>

            {/* Core Values Bullets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Patient-Focused Dental Care</h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    We listen carefully to your concerns, explain all findings thoroughly, and formulate treatments tailored to your comfort and health.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Comfortable Clinic Environment</h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    A calm, air-conditioned reception lounge, playful friendly interior partitions for children, and pristine clinical operatories.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Comprehensive Range of Dental Treatments</h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    From root canals, restorative fillings, and preventive cleanings to implantology, orthodontics, periodontics, and pedodontics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Convenient Mogappair East Location</h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Valayapathi Salai (Plus Code: 35HP+8F), open Monday to Saturday from 5:00 PM to 8:30 PM for convenient evening visits.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <MapPin className="w-4 h-4 text-emerald-600" /> Mogappair East, Chennai 600037
              </span>
              <span className="flex items-center gap-1.5 text-emerald-800">
                <Clock className="w-4 h-4 text-emerald-600" /> Mon–Sat 5:00 PM – 8:30 PM
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
