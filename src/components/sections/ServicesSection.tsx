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
    <section id="treatments" className="py-20 lg:py-28 bg-[#F7F5EF] border-b border-[#D9E6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF5EF] border border-[#D9E6DE] text-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#176B57]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#18332E]">
                Clinical Services
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18332E] font-normal tracking-tight mt-1 leading-tight">
              Treatments & dental care areas.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#65756F] leading-relaxed font-normal">
              A structured directory of our eleven dental care categories. Select any treatment to read detailed consultation information and preparation guidance.
            </p>
          </div>

          {/* Category Filter Pills (Restrained) */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#176B57] text-white shadow-2xs"
                    : "bg-[#FFFFFF] text-[#65756F] hover:bg-[#EEF5EF] hover:text-[#18332E] border border-[#D9E6DE]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Treatment Directory (Numbered List / Table Format) */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#D9E6DE] divide-y divide-[#D9E6DE] overflow-hidden shadow-xs">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group p-5 sm:p-6 transition-all hover:bg-[#EEF5EF]/60 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-3 border-l-transparent hover:border-l-[#5F9B82]"
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
                <span className="font-mono text-xs text-[#65756F] group-hover:text-[#18332E] transition-colors shrink-0">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-[#18332E] group-hover:text-[#176B57] transition-colors">
                    {service.name}
                  </h3>
                  <span className="inline-block md:hidden text-[11px] text-[#65756F] mt-0.5">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-[#65756F] md:w-5/12 leading-relaxed">
                {service.shortSummary}
              </p>

              {/* Action Indicator */}
              <div className="flex items-center justify-between md:justify-end gap-3 md:w-2/12 pt-2 md:pt-0 border-t md:border-t-0 border-[#D9E6DE]/60">
                <span className="hidden md:inline-block text-[11px] text-[#18332E] bg-[#EEF5EF] px-2.5 py-0.5 rounded border border-[#D9E6DE]">
                  {service.category}
                </span>
                <span className="text-xs font-medium text-[#176B57] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on consultation */}
        <div className="mt-8 p-4 rounded-xl bg-[#FFFFFF] border border-[#D9E6DE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#65756F]">
          <div>
            <strong className="text-[#18332E] font-medium">Unsure which care area applies to your symptoms?</strong>{" "}
            A general consultation allows our dental team to assess your oral health and recommend appropriate care.
          </div>
          <button
            onClick={() => handleEnquire("General Consultation")}
            className="text-xs font-semibold text-[#176B57] hover:underline shrink-0"
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
