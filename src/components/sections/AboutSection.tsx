"use client";

import React from "react";
import Image from "next/image";
import { Check, Heart, Shield, Clock, MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFDF9] border-b border-[#E2E4DA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#737B73]">
            About the Practice
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1E332A] font-normal tracking-tight mt-2 leading-tight">
            A thoughtful approach to dental care.
          </h2>
          <p className="mt-4 text-[#29342D]/85 text-base sm:text-lg leading-relaxed font-normal">
            Located on Valayapathi Salai in Mogappair East, Jaksh&apos;s Dental Junction was founded with a singular purpose: to provide dental consultations where patients feel listened to, informed, and genuinely cared for.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Dual Photography */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-3/4 border border-[#E2E4DA] bg-[#F8F6F0]">
                <Image
                  src="/images/dental/clinic-waiting-lounge.jpg"
                  alt="Patient reception and waiting lounge at Jaksh's Dental Junction"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 rounded-xl bg-[#F0F3EC] border border-[#E2E4DA]">
                <p className="text-xs font-medium text-[#29483A]">
                  Welcoming Ambience
                </p>
                <p className="text-[11px] text-[#737B73] mt-0.5">
                  Designed for quiet comfort and reduced treatment apprehension.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#E2E4DA]">
                <p className="text-xs font-medium text-[#29483A]">
                  Consultation Focus
                </p>
                <p className="text-[11px] text-[#737B73] mt-0.5">
                  Thorough explanation of findings before any clinical decisions.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-3/4 border border-[#E2E4DA] bg-[#F8F6F0]">
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

          {/* Right Column: Values & Information */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-[#29342D]/85 leading-relaxed">
              <p>
                We believe that dental health should never feel overwhelming or rushed. From preventive cleanings and pediatric care to specialized endodontics, orthodontics, and restorative rehabilitation, each treatment plan is guided by your long-term health and personal comfort.
              </p>
              <p>
                Our clinic brings together general dental care and consultant specialists across oral surgery, implantology, orthodontics, periodontics, and pediatric dentistry under one roof in Mogappair East.
              </p>
            </div>

            {/* Principles List */}
            <div className="space-y-4 pt-2 border-t border-[#E2E4DA]">
              <div className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#E7EDE3] text-[#29483A] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-medium text-[#1E332A]">
                    Transparent Communication
                  </h4>
                  <p className="text-xs text-[#737B73] mt-0.5 leading-relaxed">
                    We clearly explain your oral conditions, discuss practical alternatives, and provide honest recommendations without pressure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#E7EDE3] text-[#29483A] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-medium text-[#1E332A]">
                    Comfort-Oriented Clinical Environment
                  </h4>
                  <p className="text-xs text-[#737B73] mt-0.5 leading-relaxed">
                    A calm waiting lounge and relaxed operatory designed to ease dental apprehension for children, teens, and adults alike.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-[#E7EDE3] text-[#29483A] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-medium text-[#1E332A]">
                    Dedicated Evening Hours
                  </h4>
                  <p className="text-xs text-[#737B73] mt-0.5 leading-relaxed">
                    Consultations are held Monday through Saturday from 5:00 PM to 8:30 PM, accommodating school, college, and workday commitments.
                  </p>
                </div>
              </div>
            </div>

            {/* Location Reference */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#737B73]">
              <MapPin className="w-4 h-4 text-[#29483A]" />
              <span>Valayapathi Salai, 6th Block, Mogappair East, Chennai 600037</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
