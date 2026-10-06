"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NIVIS_DATA, NivisService } from "@/data/nivisData";
import {
  Calendar,
  CheckCircle,
  ArrowRight,
  Info,
  X,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenAppointment: () => void;
}

export function ServicesSection({ onOpenAppointment }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<NivisService | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153e35]/10 text-[#153e35] text-[11px] font-semibold tracking-wider uppercase mb-3">
            <span>Essential Veterinary Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[#1e242b] font-medium tracking-tight mb-4">
            Care when they{" "}
            <span className="italic text-[#153e35] font-normal">need it.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed font-light">
            Focused, unhurried veterinary assessment and support for dogs, cats, and growing pets in
            MGR Nagar, Thiruverkadu.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NIVIS_DATA.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-[#1e242b]/8 overflow-hidden shadow-editorial hover:shadow-editorial-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e2d5]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-medium text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1e242b] mb-2 group-hover:text-[#153e35] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5e6872] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#1e242b]/85">
                        <CheckCircle className="w-3.5 h-3.5 text-[#153e35] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1e242b]/8 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#153e35] hover:text-[#c86343] transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={onOpenAppointment}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4efe6] text-[#1e242b] text-xs font-semibold hover:bg-[#153e35] hover:text-white transition-all"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#faf7f2] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#1e242b]/10 animate-in zoom-in-95 duration-200">
            <div className="relative aspect-[16/9] bg-[#e8e2d5]">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  Veterinary Care
                </span>
                <h3 className="font-serif text-2xl font-bold mt-0.5">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-[#5e6872] leading-relaxed mb-4">
                {selectedService.description}
              </p>

              <div className="bg-[#f4efe6] p-3.5 rounded-2xl mb-4 border border-[#1e242b]/5">
                <div className="text-xs font-semibold text-[#1e242b] mb-1">
                  Ideal For:
                </div>
                <div className="text-xs text-[#5e6872]">{selectedService.idealFor}</div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-semibold text-[#1e242b] uppercase tracking-wider mb-2">
                  Clinical Inclusions
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1e242b]/80">
                      <CheckCircle className="w-3.5 h-3.5 text-[#153e35] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#1e242b]/10">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenAppointment();
                  }}
                  className="flex-1 py-3 px-4 rounded-full bg-[#153e35] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1b4d3e] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Visit</span>
                </button>

                <a
                  href={`https://wa.me/${NIVIS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Hi Nivis Pet Clinic, I would like to enquire about ${selectedService.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-full bg-[#eaf4ed] text-[#153e35] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#d6ebd9] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
