"use client";

import React, { useState, useMemo } from "react";
import { Calculator, MessageSquare, Phone, Info, Check, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/constructionData";

interface CostEstimatorProps {
  onOpenConsultation: () => void;
}

export default function CostEstimator({ onOpenConsultation }: CostEstimatorProps) {
  const [areaSqFt, setAreaSqFt] = useState<number>(1800);
  const [projectType, setProjectType] = useState<"residential" | "commercial" | "renovation" | "interior">("residential");
  const [qualityGrade, setQualityGrade] = useState<"standard" | "premium">("standard");

  // Rates in INR per sq.ft based on standard Chennai market benchmarks
  const ratesPerSqFt = {
    residential: { standard: 2150, premium: 2750 },
    commercial: { standard: 1950, premium: 2450 },
    renovation: { standard: 1100, premium: 1600 },
    interior: { standard: 950, premium: 1450 },
  };

  const projectLabels = {
    residential: "Residential Independent House / Villa",
    commercial: "Commercial Structure / Office",
    renovation: "Building Renovation & Upgrade",
    interior: "Interior & Finishing Works",
  };

  const currentRate = ratesPerSqFt[projectType][qualityGrade];
  const totalCost = areaSqFt * currentRate;

  // Format to Lakhs/Crores in INR
  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  const handleWhatsAppShare = () => {
    const message = `*Construction Estimate Inquiry - Haridass Construction*%0A%0A*Project Type:* ${encodeURIComponent(
      projectLabels[projectType]
    )}%0A*Built-up Area:* ${areaSqFt} sq.ft%0A*Specification:* ${
      qualityGrade === "standard" ? "Standard Quality" : "Premium Architectural Grade"
    }%0A*Approximate Ballpark Range:* ${encodeURIComponent(
      formatINR(totalCost)
    )} (at ~₹${currentRate}/sq.ft)%0A%0A_Please provide an itemized blueprint quote and site visit schedule for Ambattur / Chennai._`;

    window.open(`https://wa.me/918056052207?text=${message}`, "_blank");
  };

  return (
    <section id="estimator" className="relative py-24 sm:py-32 bg-[#090a0c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
            <span className="w-2 h-0.5 bg-[#c5a880]" />
            Planning Tool
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Chennai Construction Cost Estimator
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            Get an instant ballpark estimate for your construction project in Ambattur and surrounding Chennai areas based on prevailing regional material and labor benchmarks.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#111317] border border-white/10 p-6 sm:p-8 rounded-sm space-y-8">
            {/* Step 1: Select Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                01. Select Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(
                  [
                    { id: "residential", label: "Residential Villa / House" },
                    { id: "commercial", label: "Commercial Building" },
                    { id: "renovation", label: "Building Renovation" },
                    { id: "interior", label: "Interior & Finishings" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setProjectType(tab.id)}
                    className={`p-3.5 text-left text-xs font-medium rounded-sm border transition-all cursor-pointer ${
                      projectType === tab.id
                        ? "bg-[#c5a880]/15 border-[#c5a880] text-white"
                        : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Slider for Built-up Area */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  02. Estimated Built-up Area
                </label>
                <div className="text-base font-serif font-bold text-[#c5a880] px-3 py-1 bg-black/50 border border-white/10 rounded-sm">
                  {areaSqFt.toLocaleString()} sq.ft
                </div>
              </div>

              <input
                type="range"
                min={600}
                max={6000}
                step={50}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#c5a880]"
              />

              <div className="flex justify-between text-[11px] text-gray-400 font-mono mt-2">
                <span>600 sq.ft</span>
                <span>2,500 sq.ft</span>
                <span>6,000 sq.ft</span>
              </div>
            </div>

            {/* Step 3: Quality Tier */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                03. Finish & Material Standard
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setQualityGrade("standard")}
                  className={`p-4 text-left rounded-sm border transition-all cursor-pointer ${
                    qualityGrade === "standard"
                      ? "bg-[#c5a880]/15 border-[#c5a880] text-white"
                      : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  <div className="font-semibold text-sm mb-1 text-white">Standard Quality</div>
                  <div className="text-xs text-gray-400">
                    ISI certified 53-grade cement, Fe550 steel, standard vitrified tiles & CP fittings.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setQualityGrade("premium")}
                  className={`p-4 text-left rounded-sm border transition-all cursor-pointer ${
                    qualityGrade === "premium"
                      ? "bg-[#c5a880]/15 border-[#c5a880] text-white"
                      : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  <div className="font-semibold text-sm mb-1 text-white">Premium Architectural</div>
                  <div className="text-xs text-gray-400">
                    High-end architectural finishes, designer granite/tiles, teakwood joinery, luxury sanitaryware.
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Result Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#111317] border border-white/10 p-6 sm:p-8 rounded-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-3">
                <Calculator className="w-4 h-4" />
                Estimated Ballpark
              </div>

              <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
                {formatINR(totalCost)}
              </div>

              <div className="text-xs font-mono text-gray-400 mb-6">
                Calculated at approximately ₹{currentRate}/sq.ft for {areaSqFt} sq.ft
              </div>

              <div className="space-y-3 py-4 border-t border-b border-white/10 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-400">Scope</span>
                  <span className="text-white font-medium text-right">{projectLabels[projectType]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Material Standard</span>
                  <span className="text-[#c5a880] font-medium capitalize">{qualityGrade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location Base</span>
                  <span className="text-white font-medium">Ambattur, Chennai</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3.5 bg-white/5 rounded-sm border border-white/5 my-6 text-xs text-gray-400 leading-relaxed">
                <Info className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>
                  *This estimate is an indicative ballpark based on Chennai market averages. Final budget depends on soil condition, structural design, floor plans, and specific client selections.
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppShare}
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors rounded-sm shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Send Estimate to WhatsApp
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3 px-4 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-xs tracking-wider uppercase transition-colors rounded-sm cursor-pointer"
              >
                Book Site Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
