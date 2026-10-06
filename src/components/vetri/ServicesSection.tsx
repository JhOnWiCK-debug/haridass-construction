"use client";

import React, { useState } from "react";
import {
  Stethoscope,
  ShieldCheck,
  Syringe,
  HeartHandshake,
  Activity,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Calendar,
  X,
  Info
} from "lucide-react";
import { VETRI_DATA, ServiceItem } from "@/data/vetriData";

interface ServicesSectionProps {
  onOpenAppointment: () => void;
}

export function ServicesSection({ onOpenAppointment }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Stethoscope: <Stethoscope className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Syringe: <Syringe className="w-5 h-5" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5" />,
    Activity: <Activity className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#faf8f5] border-b border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
              Veterinary Services
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#11161b]">
              Thoughtful care at every visit.
            </h2>
            <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed">
              Every pet receives attentive, individualized medical evaluation without unneeded procedures or rushed appointments.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#5e6872] pb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0f4c3a]" />
            <span>Open daily for consultations until 9:00 PM</span>
          </div>
        </div>

        {/* Animals We Welcome pill row */}
        <div className="mb-12 p-4 rounded-sm bg-[#f4efe6] border border-[#e2dacb] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#11161b]">
            <Info className="w-4 h-4 text-[#0f4c3a]" />
            <span>Welcoming Companions Of All Kinds:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {VETRI_DATA.animalsTreated.map((animal) => (
              <span
                key={animal.label}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white border border-[#ded5c5] text-xs font-medium text-[#11161b]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c3a]" />
                {animal.label}
              </span>
            ))}
          </div>
        </div>

        {/* 6 Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VETRI_DATA.services.map((service, index) => {
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white border border-[#ded5c5] rounded-sm p-8 flex flex-col justify-between hover:border-[#0f4c3a] hover:shadow-editorial transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-5">
                  {/* Header Row: Category Badge + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#0f4c3a] bg-[#0f4c3a]/8 px-2.5 py-1 rounded-xs">
                      {service.tag}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#faf8f5] border border-[#ded5c5] flex items-center justify-center text-[#0f4c3a] group-hover:bg-[#0f4c3a] group-hover:text-white transition-colors">
                      {iconMap[service.iconName] || <Stethoscope className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Service Title */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-normal text-[#11161b] group-hover:text-[#0f4c3a] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#5e6872] leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-[#f0ebe1] flex items-center justify-between text-xs font-semibold text-[#11161b]">
                  <span className="text-[#0f4c3a] group-hover:underline">
                    View clinical focus
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#5e6872] group-hover:text-[#0f4c3a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-sm bg-[#f4efe6] border border-[#e2dacb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-[#11161b]">
              Need medical advice about an uncommon symptom?
            </h4>
            <p className="text-xs sm:text-sm text-[#5e6872]">
              Call our Perungudi clinic to discuss whether your pet should be brought in for physical examination.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${VETRI_DATA.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#11161b] bg-white border border-[#ded5c5] rounded-sm hover:border-[#11161b] transition-colors"
            >
              Call {VETRI_DATA.phone}
            </a>
            <button
              type="button"
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f4c3a] hover:bg-[#165b4c] rounded-sm transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Consultation
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="bg-[#faf8f5] border border-[#ded5c5] rounded-sm max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1 text-[#5e6872] hover:text-[#11161b] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#0f4c3a] bg-[#0f4c3a]/10 px-2 py-0.5 rounded-xs">
                {selectedService.tag}
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#11161b]">
                {selectedService.title}
              </h3>
              <p className="text-sm text-[#b85433] font-medium">
                {selectedService.shortDesc}
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#374151] leading-relaxed border-t border-b border-[#e8e2d5] py-4">
              <p>{selectedService.fullDesc}</p>
              <div className="bg-white p-3.5 rounded-sm border border-[#e2dacb] text-xs space-y-1">
                <span className="font-semibold text-[#11161b] block">Recommended for:</span>
                <span className="text-[#5e6872]">{selectedService.suitableFor}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  onOpenAppointment();
                }}
                className="w-full sm:flex-1 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f4c3a] hover:bg-[#165b4c] rounded-sm text-center transition-colors"
              >
                Book for {selectedService.title}
              </button>
              <a
                href={`https://wa.me/${VETRI_DATA.whatsappNumber}?text=Hi%20Vetri%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(selectedService.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#0f4c3a] bg-[#0f4c3a]/10 hover:bg-[#0f4c3a]/20 rounded-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
