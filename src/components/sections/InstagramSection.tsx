"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { CLINIC_INFO } from "@/data/clinicInfo";

export const InstagramSection: React.FC = () => {
  const previewImages = [
    {
      src: "/images/dental/clinic-entrance.jpg",
      alt: "Jaksh's Dental Junction welcoming entrance",
      caption: "Our practice entrance on Valayapathi Salai",
    },
    {
      src: "/images/dental/clinic-shark-divider.jpg",
      alt: "Friendly shark mural divider",
      caption: "Child-friendly clinic environment",
    },
    {
      src: "/images/dental/clinic-ceiling-tooth-light.jpg",
      alt: "Custom tooth ambient light fixture",
      caption: "Thoughtful architectural clinic interior",
    },
    {
      src: "/images/dental/clinic-consultation-desk.jpg",
      alt: "Doctor consultation desk",
      caption: "Dedicated time for patient consultations",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F8F6F0] border-b border-[#E2E4DA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#737B73]">
              Social & Community
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1E332A] font-normal tracking-tight mt-2 leading-tight">
              Life at Jaksh&apos;s Dental Junction
            </h2>
            <p className="mt-2 text-sm text-[#29342D]/80 font-normal">
              Follow our clinic journey, patient education notes, and everyday moments in Mogappair East.
            </p>
          </div>

          <a
            href={CLINIC_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#29483A] bg-[#FFFDF9] hover:bg-[#F0F3EC] border border-[#E2E4DA] transition-colors shrink-0"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@jakshsdentaljunction</span>
            <ExternalLink className="w-3 h-3 text-[#737B73]" />
          </a>
        </div>

        {/* 4 Image Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewImages.map((img, idx) => (
            <a
              key={idx}
              href={CLINIC_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden border border-[#E2E4DA] aspect-square bg-[#FFFDF9] block"
              aria-label={`View ${img.caption} on Instagram`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white">
                <p className="text-[11px] leading-tight font-medium">
                  {img.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
