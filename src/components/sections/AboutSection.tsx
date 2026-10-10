"use client";

import React from "react";
import Image from "next/image";
import { Check, Heart, Shield, Clock, MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#EEF5EF] border-b border-[#D9E6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#D9E6DE] text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#176B57]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#18332E]">
              About the Practice
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18332E] font-normal tracking-tight mt-1 leading-tight">
            A thoughtful approach to dental care.
          </h2>
          <p className="mt-4 text-[#65756F] text-base sm:text-lg leading-relaxed font-normal">
            Located on Valayapathi Salai in Mogappair East, Jaksh&apos;s Dental Junction was founded with a singular purpose: to provide dental consultations where patients feel listened to, informed, and genuinely cared for.
          </p>
        </div>

        {/* Editorial Two-Tone Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Architectural Photography Bay */}
          <div className="lg:col-span-6 p-4 sm:p-6 rounded-3xl bg-[#FFFFFF] border border-[#D9E6DE] flex flex-col justify-between shadow-xs">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3.5">
                <div className="relative rounded-2xl overflow-hidden aspect-3/4 border border-[#D9E6DE] bg-[#F7F5EF] shadow-xs">
                  <Image
                    src="/images/dental/clinic-waiting-lounge.jpg"
                    alt="Patient reception and waiting lounge at Jaksh's Dental Junction"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5EF] border border-[#D9E6DE]">
                  <p className="text-xs font-medium text-[#18332E]">
                    Welcoming Ambience
                  </p>
                  <p className="text-[11px] text-[#65756F] mt-0.5">
                    Designed for quiet comfort and reduced treatment apprehension.
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 pt-6 sm:pt-8">
                <div className="p-3.5 rounded-xl bg-[#F7F5EF] border border-[#D9E6DE]">
                  <p className="text-xs font-medium text-[#18332E]">
                    Consultation Focus
                  </p>
                  <p className="text-[11px] text-[#65756F] mt-0.5">
                    Thorough explanation of findings before any clinical decisions.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-3/4 border border-[#D9E6DE] bg-[#F7F5EF] shadow-xs">
                  <Image
                    src="/images/dental/clinic-consultation-desk.jpg"
                    alt="Doctor consultation desk with anatomical dental models"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D9E6DE] flex items-center justify-between text-[11px] text-[#65756F]">
              <span>Valayapathi Salai, Block 6</span>
              <span className="font-mono text-[#18332E]">Plus Code: 35HP+8F</span>
            </div>
          </div>

          {/* Right Column: Values & Principles Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FFFFFF] border border-[#D9E6DE] shadow-xs flex flex-col justify-between space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-[#65756F] leading-relaxed">
              <p>
                We believe that dental health should never feel overwhelming or rushed. From preventive cleanings and pediatric care to specialized endodontics, orthodontics, and restorative rehabilitation, each treatment plan is guided by your long-term health and personal comfort.
              </p>
              <p>
                Our clinic brings together general dental care and consultant specialists across oral surgery, implantology, orthodontics, periodontics, and pediatric dentistry under one roof in Mogappair East.
              </p>
            </div>

            {/* Principles List with Sage Accents */}
            <div className="space-y-4 pt-4 border-t border-[#D9E6DE]">
              <div className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#EEF5EF] border border-[#D9E6DE] text-[#176B57] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-medium text-[#18332E]">
                    Transparent Communication
                  </h4>
                  <p className="text-xs text-[#65756F] mt-0.5 leading-relaxed">
                    We clearly explain your oral conditions, discuss practical alternatives, and provide honest recommendations without pressure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#EEF5EF] border border-[#D9E6DE] text-[#176B57] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-medium text-[#18332E]">
                    Comfort-Oriented Clinical Environment
                  </h4>
                  <p className="text-xs text-[#65756F] mt-0.5 leading-relaxed">
                    A calm waiting lounge and relaxed operatory designed to ease dental apprehension for children, teens, and adults alike.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#EEF5EF] border border-[#D9E6DE] text-[#176B57] flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-medium text-[#18332E]">
                    Dedicated Evening Hours
                  </h4>
                  <p className="text-xs text-[#65756F] mt-0.5 leading-relaxed">
                    Consultations are held Monday through Saturday from 5:00 PM to 8:30 PM, accommodating school, college, and workday commitments.
                  </p>
                </div>
              </div>
            </div>

            {/* Location Reference */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#65756F]">
              <MapPin className="w-4 h-4 text-[#176B57]" />
              <span>Valayapathi Salai, 6th Block, Mogappair East, Chennai 600037</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
