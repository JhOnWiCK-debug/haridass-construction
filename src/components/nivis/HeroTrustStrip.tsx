"use client";

import React from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import { Star, MessageSquareHeart, Clock, MapPin } from "lucide-react";

export function HeroTrustStrip() {
  const items = [
    {
      icon: Star,
      value: "5.0 ★",
      label: "Google Rating",
      sub: "Flawless local feedback",
      accent: "text-amber-500",
    },
    {
      icon: MessageSquareHeart,
      value: "5",
      label: "Google Reviews",
      sub: "Genuine pet parents",
      accent: "text-[#153e35]",
    },
    {
      icon: Clock,
      value: "9:30 PM",
      label: "Listed Closing Time",
      sub: "Open Monday – Sunday",
      accent: "text-[#153e35]",
    },
    {
      icon: MapPin,
      value: "MGR Nagar",
      label: "Thiruverkadu, Chennai",
      sub: "Near Balaji Nagar Bus Stop",
      accent: "text-[#c86343]",
    },
  ];

  return (
    <section className="relative z-10 -mt-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#f4efe6] border border-[#1e242b]/8 p-6 sm:p-8 shadow-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1e242b]/10">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center md:items-start text-center md:text-left ${
                    idx > 0 ? "pt-5 md:pt-0 md:pl-6 lg:pl-8" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className={`w-4 h-4 ${item.accent}`} />
                    <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#1e242b] tracking-tight">
                      {item.value}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#1e242b]">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-[#5e6872] mt-0.5">{item.sub}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
