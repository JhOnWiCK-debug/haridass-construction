"use client";

import React, { useState } from "react";
import { DENTAL_SERVICES, DentalService } from "@/data/services";
import { ServiceModal } from "@/components/ui/ServiceModal";
import {
  ShieldCheck,
  Activity,
  Smile,
  Sparkles,
  Layers,
  HeartPulse,
  Sun,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Info,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Restorative", "Surgical", "Cosmetic", "Orthodontic"];

  const filteredServices = DENTAL_SERVICES.filter((srv) => {
    if (activeCategory === "All") return true;
    return srv.category === activeCategory;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-emerald-600" />;
      case "Smile":
        return <Smile className="w-6 h-6 text-emerald-600" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-emerald-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-emerald-600" />;
      case "Sun":
        return <Sun className="w-6 h-6 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  const handleBookService = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const target = document.querySelector("#appointment");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/60">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
            Comprehensive Dental Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Dental Services & Treatments
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Click on any service card below to view detailed clinical overviews, preparation guidelines, and aftercare expectations.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200/80"
                }`}
              >
                {cat} {cat === "All" ? `(${DENTAL_SERVICES.length})` : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Services Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="clinic-card-hover group relative bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:border-emerald-300 cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedService(service);
                }
              }}
              aria-label={`View details for ${service.name}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1 mb-3">
                  {service.shortTagline}
                </p>
                <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action Prompt */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-emerald-600" />
                  View Details & Care
                </span>
                <span className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookService}
      />
    </section>
  );
};
