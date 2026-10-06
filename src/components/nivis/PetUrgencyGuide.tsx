"use client";

import React, { useState } from "react";
import { NIVIS_DATA, UrgencyOption } from "@/data/nivisData";
import {
  AlertCircle,
  Phone,
  Navigation,
  CheckSquare,
  Square,
  ShieldAlert,
  ArrowRight,
  Info,
} from "lucide-react";

export function PetUrgencyGuide() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSymptom = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = NIVIS_DATA.urgencyTriage.filter((item) =>
    selectedIds.includes(item.id)
  );

  // Determine highest severity
  const hasUrgent = selectedItems.some((i) => i.severity === "urgent");
  const hasPrompt = selectedItems.some((i) => i.severity === "prompt");
  const hasAdvice = selectedItems.some((i) => i.severity === "advice");

  let triageLevel: "none" | "urgent" | "prompt" | "advice" = "none";
  if (hasUrgent) triageLevel = "urgent";
  else if (hasPrompt) triageLevel = "prompt";
  else if (hasAdvice) triageLevel = "advice";

  return (
    <section id="urgency-guide" className="py-20 sm:py-28 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c86343]/10 text-[#c86343] text-[11px] font-semibold tracking-wider uppercase mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Interactive Triage Helper</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[#1e242b] font-medium tracking-tight mb-4">
            Is your pet showing{" "}
            <span className="italic text-[#c86343] font-normal">warning signs?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed font-light">
            Select any symptoms you are noticing to understand the urgency of veterinary care.
          </p>
        </div>

        {/* Triage Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Symptom Checklist */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-6 sm:p-8 border border-[#1e242b]/8 shadow-editorial">
            <h3 className="text-sm font-semibold text-[#1e242b] uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Select Observed Symptoms</span>
              {selectedIds.length > 0 && (
                <button
                  onClick={() => setSelectedIds([])}
                  className="text-xs text-[#c86343] hover:underline normal-case font-normal"
                >
                  Clear all ({selectedIds.length})
                </button>
              )}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {NIVIS_DATA.urgencyTriage.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleSymptom(item.id)}
                    className={`flex items-start gap-3 p-3 rounded-2xl text-left text-xs transition-all border ${
                      isSelected
                        ? "bg-[#ebf1ee] border-[#153e35] text-[#153e35] font-semibold shadow-sm"
                        : "bg-[#faf7f2] border-transparent text-[#1e242b] hover:bg-[#f4efe6]"
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isSelected ? (
                        <CheckSquare className="w-4 h-4 text-[#153e35]" />
                      ) : (
                        <Square className="w-4 h-4 text-[#8fa89b]" />
                      )}
                    </div>
                    <span className="leading-snug">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Triage Result Card */}
          <div className="lg:col-span-5 flex flex-col">
            {triageLevel === "none" ? (
              <div className="bg-[#f4efe6] rounded-[2rem] p-8 border border-[#1e242b]/8 text-center flex flex-col items-center justify-center min-h-[360px]">
                <div className="w-14 h-14 rounded-2xl bg-[#ebf1ee] text-[#153e35] flex items-center justify-center mb-4">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-medium text-[#1e242b] mb-2">
                  Select Symptoms to Begin
                </h4>
                <p className="text-xs text-[#5e6872] max-w-xs leading-relaxed mb-6">
                  Click on one or more symptoms on the left to see recommended urgency guidance for your pet.
                </p>
                <div className="text-[11px] text-[#8fa89b]">
                  When in doubt, always call Nivis at 086101 25329.
                </div>
              </div>
            ) : (
              <div
                className={`rounded-[2rem] p-6 sm:p-8 border shadow-editorial transition-all ${
                  triageLevel === "urgent"
                    ? "bg-[#fff5f5] border-rose-300"
                    : triageLevel === "prompt"
                    ? "bg-[#fffaf0] border-amber-300"
                    : "bg-[#f5fbf7] border-emerald-300"
                }`}
              >
                {/* Status Indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">
                    {triageLevel === "urgent"
                      ? "🔴"
                      : triageLevel === "prompt"
                      ? "🟠"
                      : "🟡"}
                  </span>
                  <div>
                    <h4
                      className={`font-serif text-xl font-bold tracking-tight ${
                        triageLevel === "urgent"
                          ? "text-rose-900"
                          : triageLevel === "prompt"
                          ? "text-amber-900"
                          : "text-emerald-900"
                      }`}
                    >
                      {triageLevel === "urgent" && "Seek urgent veterinary attention"}
                      {triageLevel === "prompt" && "Contact a veterinarian promptly"}
                      {triageLevel === "advice" && "Seek veterinary advice"}
                    </h4>
                    <span className="text-[11px] text-[#5e6872]">
                      Based on {selectedItems.length} selected symptom(s)
                    </span>
                  </div>
                </div>

                {/* Specific selected guidance list */}
                <div className="space-y-2 mb-6 max-h-56 overflow-y-auto pr-1">
                  {selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-white/80 rounded-xl text-xs leading-relaxed border border-black/5"
                    >
                      <strong className="block text-[#1e242b] font-medium mb-0.5">
                        {item.label}
                      </strong>
                      <span className="text-[#5e6872]">{item.guidance}</span>
                    </div>
                  ))}
                </div>

                {/* Primary Contact CTA for Serious Selections */}
                <div className="space-y-2.5">
                  <a
                    href={`tel:${NIVIS_DATA.contact.phoneTel}`}
                    className={`w-full py-3.5 px-5 rounded-full text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-colors ${
                      triageLevel === "urgent"
                        ? "bg-rose-700 hover:bg-rose-800"
                        : "bg-[#153e35] hover:bg-[#1b4d3e]"
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Nivis — {NIVIS_DATA.contact.phone}</span>
                  </a>

                  <a
                    href={NIVIS_DATA.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 rounded-full bg-white text-[#1e242b] border border-[#1e242b]/15 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#faf7f2] transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#c86343]" />
                    <span>Get Directions to Clinic</span>
                  </a>
                </div>

                <div className="mt-4 text-[10px] text-center text-[#5e6872]">
                  Note: Clinic operates daily with listed closing at 9:30 PM.
                </div>
              </div>
            )}

            {/* Mandatory Triage Disclaimer */}
            <div className="mt-4 p-4 rounded-2xl bg-[#f4efe6] border border-[#1e242b]/10 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#8fa89b] shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#5e6872] leading-relaxed">
                <strong className="text-[#1e242b]">Notice:</strong> {NIVIS_DATA.disclaimers.urgency}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
