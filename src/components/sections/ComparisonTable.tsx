"use client";

import React from "react";
import { Check, X, ShieldAlert, Zap, Sparkles } from "lucide-react";

export default function ComparisonTable() {
  const criteria = [
    {
      feature: "Lead / Appointment Exclusivity",
      nexum: "100% Exclusive (Only your closers)",
      leadGen: "Sold to 4-6 competitors simultaneously",
      domestic: "Exclusive (High rep turnover)",
      offshore: "Exclusive (Low conversion)",
    },
    {
      feature: "Accent & US Solar Fluency",
      nexum: "Tier-1 Bilingual, Neutral Accent, NEM 3.0 Trained",
      leadGen: "Form fill (No caller qualification)",
      domestic: "Native English, High cost",
      offshore: "Heavy accent, frequent disconnects",
    },
    {
      feature: "TCPA & Federal DNC Scrubbing",
      nexum: "Dual-layer real-time scrub + Litigator filter",
      leadGen: "Frequent lawsuits from aged opt-in lists",
      domestic: "Requires separate expensive compliance tools",
      offshore: "Often zero TCPA compliance checks",
    },
    {
      feature: "Direct-to-Calendar & Discord Sync",
      nexum: "Instant GHL/Salesforce sync + MP3 call audio",
      leadGen: "Lagged CSV or webhook delivery",
      domestic: "Manual CRM entry by SDR",
      offshore: "Spreadsheet email batching",
    },
    {
      feature: "All-In Cost per Qualified Sit",
      nexum: "$75 – $110 / Verified Sit",
      leadGen: "$220 – $380 / Sit (After 50% junk rate)",
      domestic: "$320 – $480 / Sit (Salary + benefits)",
      offshore: "$140 – $190 / Sit (Low show rate)",
    },
    {
      feature: "Deployment & Setup Timeline",
      nexum: "5-Day Calibration Sprint",
      leadGen: "1-2 days (Immediate junk volume)",
      domestic: "45-60 days recruiting & hiring",
      offshore: "3-4 weeks generic training",
    },
  ];

  return (
    <section id="comparison" className="relative py-24 bg-[#040813]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-300">
            <Zap className="h-3.5 w-3.5" />
            <span>MODEL BENCHMARK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Nexum Compares to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Traditional Acquisition
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Why leading US residential solar companies are replacing shared lead vendors and domestic SDRs with dedicated Mexico pods.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#070e1b]/90 backdrop-blur-xl shadow-2xl">
          <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-gray-300 font-mono text-xs uppercase tracking-wider">
                <th className="p-4 sm:p-5 w-1/4">Operational Vector</th>
                <th className="p-4 sm:p-5 w-1/4 bg-emerald-500/10 border-x border-emerald-500/30 text-emerald-400 font-bold">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    <span>House of Nexum (Nearshore)</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 w-1/4 text-gray-400">Shared Lead Vendors</th>
                <th className="p-4 sm:p-5 w-1/4 text-gray-400">Domestic US SDR Floor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {criteria.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="p-4 sm:p-5 font-semibold text-white">
                    {item.feature}
                  </td>
                  <td className="p-4 sm:p-5 bg-emerald-500/5 border-x border-emerald-500/20 text-emerald-300 font-medium font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{item.nexum}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-gray-400">
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-rose-500/70 shrink-0" />
                      <span>{item.leadGen}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80 shrink-0" />
                      <span>{item.domestic}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
