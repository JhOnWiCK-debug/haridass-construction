"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Hammer } from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/constructionData";

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0c0d10] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
              <span className="w-2 h-0.5 bg-[#c5a880]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Our Construction Services
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
              Dependable construction solutions for residential and commercial spaces across Chennai, executed with quality materials and disciplined craftsmanship.
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.16em] text-gray-400 font-mono hidden md:block">
            06 Dedicated Service Areas
          </div>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem, idx: number) => {
            const numStr = (idx + 1).toString().padStart(2, "0");
            return (
              <div
                key={service.id}
                className="group relative bg-[#111317] border border-white/10 hover:border-[#c5a880]/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between"
              >
                {/* Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-black">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-[#111317]/30 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 font-mono text-xs font-semibold tracking-wider px-2.5 py-1 bg-black/70 backdrop-blur-md text-[#c5a880] border border-white/10 rounded-sm">
                    {numStr}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-white group-hover:text-[#dfbe99] transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6 pt-3 border-t border-white/5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-400">
                          <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 bg-white/5 group-hover:bg-[#c5a880] text-gray-200 group-hover:text-[#090a0c] border border-white/10 group-hover:border-[#c5a880] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-between rounded-sm cursor-pointer"
                  >
                    <span>Inquire for {service.category}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
