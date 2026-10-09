"use client";

import React, { useState } from "react";
import { DENTAL_SERVICES, DentalService } from "@/data/services";
import { ServiceModal } from "@/components/ui/ServiceModal";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Restorative & Rehab",
    "Orthodontics",
    "Specialist Care",
    "Preventive & Family",
    "Surgical",
  ];

  const filteredServices = DENTAL_SERVICES.filter((srv) => {
    if (activeCategory === "All") return true;
    return srv.category === activeCategory;
  });

  const handleEnquire = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const target = document.querySelector("#appointment");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#E2E4DA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#737B73]">
              Clinical Services
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1E332A] font-normal tracking-tight mt-2 leading-tight">
              Treatments & dental care areas.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#29342D]/80 leading-relaxed font-normal">
              A structured directory of our eleven dental care categories. Select any treatment to read detailed consultation information and preparation guidance.
            </p>
          </div>

          {/* Category Filter Pills (Restrained) */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#29483A] text-white"
                    : "bg-[#FFFDF9] text-[#737B73] hover:text-[#29483A] border border-[#E2E4DA]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Treatment Directory (Numbered List / Table Format) */}
        <div className="bg-[#FFFDF9] rounded-2xl border border-[#E2E4DA] divide-y divide-[#E2E4DA]/70 overflow-hidden shadow-xs">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group p-5 sm:p-6 transition-colors hover:bg-[#F0F3EC]/50 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedService(service);
                }
              }}
              aria-label={`View clinical details for ${service.name}`}
            >
              {/* Number & Name */}
              <div className="flex items-baseline gap-4 sm:gap-6 md:w-5/12">
                <span className="font-mono text-xs text-[#737B73] group-hover:text-[#29483A] transition-colors shrink-0">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-[#1E332A] group-hover:text-[#29483A] transition-colors">
                    {service.name}
                  </h3>
                  <span className="inline-block md:hidden text-[11px] text-[#737B73] mt-0.5">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-[#737B73] md:w-5/12 leading-relaxed">
                {service.shortSummary}
              </p>

              {/* Action Indicator */}
              <div className="flex items-center justify-between md:justify-end gap-3 md:w-2/12 pt-2 md:pt-0 border-t md:border-t-0 border-[#E2E4DA]/40">
                <span className="hidden md:inline-block text-[11px] text-[#737B73] bg-[#F8F6F0] px-2 py-0.5 rounded border border-[#E2E4DA]">
                  {service.category}
                </span>
                <span className="text-xs font-medium text-[#29483A] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on consultation */}
        <div className="mt-8 p-4 rounded-xl bg-[#FFFDF9] border border-[#E2E4DA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#737B73]">
          <div>
            <strong className="text-[#29483A] font-medium">Unsure which care area applies to your symptoms?</strong>{" "}
            A general consultation allows our dental team to assess your oral health and recommend appropriate care.
          </div>
          <button
            onClick={() => handleEnquire("General Consultation")}
            className="text-xs font-medium text-[#29483A] hover:underline shrink-0"
          >
            Enquire for a consultation →
          </button>
        </div>

      </div>

      {/* Accessible Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onEnquire={handleEnquire}
      />
    </section>
  );
};
