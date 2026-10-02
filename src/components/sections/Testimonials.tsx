"use client";

import React from "react";
import TiltCard from "@/components/ui/TiltCard";
import { Star, ShieldCheck, TrendingUp, Quote, Building2 } from "lucide-react";

export default function Testimonials() {
  const caseStudies = [
    {
      company: "Apex Solar Partners",
      location: "San Diego & Central Valley, California",
      tagline: "Overcoming California NEM 3.0 with Precision Pre-Screening",
      quote:
        "Under NEM 3.0, Facebook leads were delivering homeowners who couldn't qualify for battery arbitrage. Nexum deployed a 6-rep pod in Mexico that only books sits with electric bills above $250. Our battery attach rate hit 74% in month one.",
      author: "Marcus Vance",
      role: "VP of Sales Operations",
      metrics: [
        { label: "Monthly Sits", value: "148 Sits" },
        { label: "Show Rate", value: "81.4%" },
        { label: "Cost Per Sit", value: "$82" },
      ],
      glow: "green" as const,
    },
    {
      company: "SunVolt Energy Group",
      location: "Dallas & Houston, Texas (ERCOT)",
      tagline: "Scaling from 4 to 12 Closers with Zero SDR Hiring Headaches",
      quote:
        "We used to spend $18,000/month recruiting and training domestic SDRs who quit after 60 days. House of Nexum gave us an institutional caller pod with a dedicated manager and daily Discord audio dispatches. It completely stabilized our floor.",
      author: "David Calderon",
      role: "Managing Partner",
      metrics: [
        { label: "Added Revenue", value: "$520k / mo" },
        { label: "Close Rate", value: "32%" },
        { label: "Launch Speed", value: "5 Days" },
      ],
      glow: "cyan" as const,
    },
    {
      company: "Solaria Clean Energy",
      location: "Tampa & Orlando, Florida",
      tagline: "Ditching Shared Aggregators for Exclusive Homeowner Conversations",
      quote:
        "When our reps were calling shared leads from CleanEnergy, 4 other companies were dialing the same homeowner simultaneously. With Nexum, every sit is 100% exclusive to our brand with zero DNC risk. Our reps actually love the calendar now.",
      author: "Elena Rostova",
      role: "Director of Outbound Sales",
      metrics: [
        { label: "Exclusive Sits", value: "94 / mo" },
        { label: "Sit-to-Close", value: "28.5%" },
        { label: "ROI Multiplier", value: "7.8x" },
      ],
      glow: "emerald" as const,
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-300">
            <Building2 className="h-3.5 w-3.5" />
            <span>SOLAR PARTNER CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Proven Results Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Top US Solar Markets
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            See how solar installers and sales organizations generate predictable, qualified pipeline with House of Nexum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((item, idx) => (
            <TiltCard
              key={idx}
              glowColor={item.glow}
              className="p-6 sm:p-7 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    VERIFIED CLIENT
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">{item.company}</h4>
                  <div className="text-xs text-gray-400 font-mono">{item.location}</div>
                </div>

                <div className="text-xs font-mono text-emerald-400 font-medium">
                  {item.tagline}
                </div>

                <p className="text-xs text-gray-300 leading-relaxed italic border-l-2 border-emerald-500/40 pl-3">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4 mt-6">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {item.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="text-xs font-mono font-bold text-white">{m.value}</div>
                      <div className="text-[9px] font-mono text-gray-400 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                  <div>
                    <span className="font-semibold text-white block">{item.author}</span>
                    <span className="text-[11px] text-gray-400">{item.role}</span>
                  </div>
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
