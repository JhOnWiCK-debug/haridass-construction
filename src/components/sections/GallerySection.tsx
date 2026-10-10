"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CLINIC_GALLERY, GalleryItem } from "@/data/gallery";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { Maximize2 } from "lucide-react";

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleNavigate = (index: number) => {
    if (CLINIC_GALLERY[index]) {
      setSelectedItem(CLINIC_GALLERY[index]);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#EEF5EF] border-b border-[#D9E6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#D9E6DE] text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#176B57]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#18332E]">
              Clinic Environment
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18332E] font-normal tracking-tight mt-1 leading-tight">
            Inside Jaksh&apos;s Dental Junction.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#65756F] leading-relaxed font-normal">
            Authentic photography from our clinic on Valayapathi Salai, Mogappair East. Designed for cleanliness, unhurried patient consultations, and clinical precision.
          </p>
        </div>

        {/* Varied Editorial Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Main Large Feature Image: Operatory */}
          <div
            onClick={() => setSelectedItem(CLINIC_GALLERY[2] || CLINIC_GALLERY[0])}
            className="md:col-span-8 group relative rounded-2xl overflow-hidden border border-[#D9E6DE] bg-[#FFFFFF] cursor-pointer aspect-16/10 sm:aspect-16/9 shadow-xs"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedItem(CLINIC_GALLERY[2] || CLINIC_GALLERY[0]);
            }}
            aria-label="View operatory photo in detail"
          >
            <Image
              src="/images/dental/clinic-operatory.jpg"
              alt="Operatory chair and clinical equipment at Jaksh's Dental Junction"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18332E]/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#EEF5EF]">
                  Operatory Suite
                </p>
                <h3 className="text-sm sm:text-base font-medium">
                  Modern Dental Operatory & Sterilization Hub
                </h3>
              </div>
              <span className="p-2 rounded-full bg-white/20 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Side Tall Image: Exterior Signboard at Night */}
          <div
            onClick={() => setSelectedItem(CLINIC_GALLERY[0])}
            className="md:col-span-4 group relative rounded-2xl overflow-hidden border border-[#D9E6DE] bg-[#FFFFFF] cursor-pointer aspect-4/3 md:aspect-auto shadow-xs"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedItem(CLINIC_GALLERY[0]);
            }}
            aria-label="View exterior signboard in detail"
          >
            <Image
              src="/images/dental/clinic-exterior-sign.jpg"
              alt="Illuminated exterior clinic signboard at Mogappair East"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18332E]/80 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs uppercase tracking-wider text-[#EEF5EF]">
                Exterior Signboard
              </p>
              <h3 className="text-sm font-medium">
                Storefront on Valayapathi Salai
              </h3>
            </div>
          </div>

          {/* Lower Row: 3 Varied Images */}
          <div
            onClick={() => setSelectedItem(CLINIC_GALLERY[5])}
            className="md:col-span-4 group relative rounded-2xl overflow-hidden border border-[#D9E6DE] bg-[#FFFFFF] cursor-pointer aspect-4/3 shadow-xs"
            role="button"
            tabIndex={0}
            aria-label="View waiting lounge in detail"
          >
            <Image
              src="/images/dental/clinic-waiting-lounge.jpg"
              alt="Air-conditioned patient waiting lounge with natural plants"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18332E]/80 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-[11px] uppercase tracking-wider text-[#EEF5EF]">Reception</p>
              <h3 className="text-xs sm:text-sm font-medium">Patient Waiting Lounge</h3>
            </div>
          </div>

          <div
            onClick={() => setSelectedItem(CLINIC_GALLERY[4])}
            className="md:col-span-4 group relative rounded-2xl overflow-hidden border border-[#D9E6DE] bg-[#FFFFFF] cursor-pointer aspect-4/3 shadow-xs"
            role="button"
            tabIndex={0}
            aria-label="View pediatric shark divider in detail"
          >
            <Image
              src="/images/dental/clinic-shark-divider.jpg"
              alt="Friendly shark mural partition easing pediatric dental anxiety"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18332E]/80 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-[11px] uppercase tracking-wider text-[#EEF5EF]">Child-Friendly</p>
              <h3 className="text-xs sm:text-sm font-medium">Shark Mural Partition</h3>
            </div>
          </div>

          <div
            onClick={() => setSelectedItem(CLINIC_GALLERY[6])}
            className="md:col-span-4 group relative rounded-2xl overflow-hidden border border-[#D9E6DE] bg-[#FFFFFF] cursor-pointer aspect-4/3 shadow-xs"
            role="button"
            tabIndex={0}
            aria-label="View architectural ceiling light in detail"
          >
            <Image
              src="/images/dental/clinic-ceiling-tooth-light.jpg"
              alt="Custom tooth-shaped ambient backlit ceiling installation"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18332E]/80 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-[11px] uppercase tracking-wider text-[#EEF5EF]">Architectural</p>
              <h3 className="text-xs sm:text-sm font-medium">Custom Tooth Ceiling Installation</h3>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <GalleryLightbox
        item={selectedItem}
        items={CLINIC_GALLERY}
        onClose={() => setSelectedItem(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
};
