"use client";

import React from "react";
import { Star, Shield, MapPin, Clock } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function TrustStrip() {
  const trustItems = [
    {
      icon: Star,
      title: "5.0 ★ Google Rating",
      subtext: "6 Verified Pet Parent Reviews",
    },
    {
      icon: Shield,
      title: "Pet-focused veterinary care",
      subtext: "Prioritizing treatment & recovery",
    },
    {
      icon: MapPin,
      title: "Perungudi, Chennai",
      subtext: "Erikarai St · Near Sunrise Pharmacy",
    },
    {
      icon: Clock,
      title: "Open until 9 PM",
      subtext: "Daily 9:00 AM – 9:00 PM",
    },
  ];

  return (
    <section className="bg-[#f4efe6] border-b border-[#e2dacb] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-sm bg-[#faf8f5] border border-[#ded5c5] flex items-center justify-center text-[#0f4c3a] shrink-0 group-hover:bg-[#0f4c3a] group-hover:text-white transition-colors duration-200 shadow-2xs">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#11161b] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5e6872] mt-0.5">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
