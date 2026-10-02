"use client";

import React from "react";
import { Star, ShieldCheck, Hammer, MapPin, Award, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/data/constructionData";

export default function TrustBar() {
  const trustItems = [
    {
      icon: Star,
      title: "4.8/5 Google Rating",
      subtitle: "Verified by 21 Reviews",
      iconColor: "text-amber-400",
      fillIcon: true,
    },
    {
      icon: Award,
      title: "21+ Customer Reviews",
      subtitle: "Authentic Client Sentiment",
      iconColor: "text-[#c5a880]",
      fillIcon: false,
    },
    {
      icon: ShieldCheck,
      title: "Quality Materials",
      subtitle: "High-grade cement & steel",
      iconColor: "text-[#c5a880]",
      fillIcon: false,
    },
    {
      icon: Hammer,
      title: "Professional Workmanship",
      subtitle: "Precision structural execution",
      iconColor: "text-[#c5a880]",
      fillIcon: false,
    },
    {
      icon: MapPin,
      title: "Chennai Based",
      subtitle: "Ambattur & Surrounding Areas",
      iconColor: "text-[#c5a880]",
      fillIcon: false,
    },
  ];

  return (
    <section id="trust-bar" className="relative z-20 bg-[#0d0e12] border-y border-white/10 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 items-center">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 px-3 py-2 border-l border-white/5 first:border-l-0"
              >
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon
                    className={`w-5 h-5 ${item.iconColor} ${
                      item.fillIcon ? "fill-amber-400" : ""
                    }`}
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white tracking-tight truncate">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-400 truncate">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
