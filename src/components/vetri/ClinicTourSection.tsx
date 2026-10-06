"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MapPin, Clock, ShieldCheck, UserCheck, Eye, Sparkles } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function ClinicTourSection() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const realPhotos = [
    {
      src: "/images/vetri/vetri-clinic-front.jpg",
      title: "Clinic Storefront & Timings",
      caption: "Glass entrance on Erikarai St showing consultation hours 9 AM – 9 PM and services.",
      tag: "Exterior & Reception",
    },
    {
      src: "/images/vetri/vetri-clinic-interior.jpg",
      title: "Consultation & Clinical Area",
      caption: "Clean examination table, verified pharmaceutical supplies, and dedicated consultation desk.",
      tag: "Clinical Space",
    },
    {
      src: "/images/vetri/vetri-poster-banner.png",
      title: "Clinic Doctors & Banner",
      caption: "Dr. Sandhiya. S (93840 17392) & Dr. Ramu (8248842014) · Compassion, Care, Cure.",
      tag: "Veterinary Team",
    },
  ];

  return (
    <section id="clinic" className="py-20 lg:py-28 bg-[#faf8f5] border-b border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
              Authentic Practice
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#11161b]">
              Inside Vetri Pet Clinic.
            </h2>
            <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed">
              No stock clinic facades. Here is our genuine clinic space in Kurinji Nagar, Perungudi, equipped for calm consultations and dedicated pet care.
            </p>
          </div>

          <div className="text-xs text-[#5e6872] bg-[#f4efe6] px-4 py-2 rounded-sm border border-[#ded5c5]">
            <span className="font-semibold text-[#11161b]">Verified Location:</span> 2, Erikarai St, Perungudi
          </div>
        </div>

        {/* 3 Real Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {realPhotos.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ded5c5] rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#0f4c3a] hover:shadow-editorial transition-all group"
            >
              <div>
                {/* Photo container */}
                <div
                  className="relative aspect-[4/5] bg-[#e8e2d5] cursor-pointer overflow-hidden"
                  onClick={() => setActivePhoto(item.src)}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/90 text-[#11161b] text-xs font-semibold shadow-sm">
                      <Eye className="w-3.5 h-3.5" /> View Photo
                    </span>
                  </div>

                  {/* Tag badge */}
                  <div className="absolute top-3 left-3 bg-[#11161b]/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-xs text-[10px] font-mono uppercase tracking-wider">
                    {item.tag}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-xl font-normal text-[#11161b]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5e6872] leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 text-[11px] font-medium text-[#0f4c3a] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Facility Photograph</span>
              </div>
            </div>
          ))}
        </div>

        {/* Doctors Bio Strip */}
        <div className="mt-12 bg-[#11161b] text-white rounded-sm p-8 sm:p-10 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-400">
                Our Veterinary Doctors
              </span>
              <h3 className="font-serif text-3xl font-normal text-white">
                Caring hands you can trust.
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Led by practicing veterinary physicians dedicated to compassionate, accessible treatment in the Perungudi neighbourhood.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VETRI_DATA.doctors.map((doc, i) => (
                <div
                  key={doc.name}
                  className="bg-[#192027] border border-white/10 rounded-sm p-5 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-300 font-serif font-bold text-lg">
                      {doc.name.charAt(3) || "D"}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-white">
                        {doc.name}
                      </h4>
                      <p className="text-xs text-emerald-400 font-medium">
                        {doc.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400">
                    {doc.notes}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-400">Direct Contact:</span>
                    <a
                      href={`tel:${doc.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      <Phone className="w-3 h-3 text-emerald-400" />
                      {doc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh] aspect-[4/5] bg-black rounded-sm overflow-hidden">
            <Image
              src={activePhoto}
              alt="Vetri Pet Clinic full photo"
              fill
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full text-xs font-mono"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
