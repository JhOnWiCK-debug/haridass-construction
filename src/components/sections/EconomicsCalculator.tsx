"use client";

import React, { useState } from "react";
import TiltCard from "@/components/ui/TiltCard";
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Percent,
  Users,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface EconomicsCalculatorProps {
  onOpenBooking: () => void;
}

export default function EconomicsCalculator({
  onOpenBooking,
}: EconomicsCalculatorProps) {
  // Calculator state
  const [closers, setClosers] = useState(4);
  const [sitsPerCloserWeek, setSitsPerCloserWeek] = useState(5);
  const [dealMargin, setDealMargin] = useState(6500);
  const [closeRate, setCloseRate] = useState(25);

  // Calculations
  const monthlySitsNeeded = Math.round(closers * sitsPerCloserWeek * 4.2);
  const projectedCloses = Math.round(monthlySitsNeeded * (closeRate / 100));
  const projectedGrossMargin = projectedCloses * dealMargin;

  // Pods required: assume 1 dedicated caller yields ~35-45 qualified sits/mo
  const callersNeeded = Math.max(1, Math.ceil(monthlySitsNeeded / 40));

  // Domestic US SDR cost: $6,500 salary + $1,200 payroll tax/benefits + $400 dialer/data = $8,100 / mo / seat
  const domesticMonthlyCost = callersNeeded * 8100;

  // House of Nexum Nearshore Pod seat cost estimate (all-in talent, QA lead, dialer, list scrubbing): ~$3,600 / mo / seat
  const nexumMonthlyCost = callersNeeded * 3600;

  const monthlySavings = domesticMonthlyCost - nexumMonthlyCost;
  const netProfit = projectedGrossMargin - nexumMonthlyCost;
  const roiMultiplier = (projectedGrossMargin / nexumMonthlyCost).toFixed(1);

  return (
    <section id="economics" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-300">
            <Calculator className="h-3.5 w-3.5" />
            <span>SOLAR ECONOMICS ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Zero-Risk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Solar BPO Model
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Compare the hard economics of dedicated nearshore caller pods in Mexico
            against domestic US hiring, recruiting churn, and junk shared lead aggregators.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#070e1b]/80 backdrop-blur-xl space-y-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  Your Sales Team Parameters
                </span>
                <span className="text-xs font-mono text-cyan-300">
                  REAL-TIME CALCULATION
                </span>
              </div>

              {/* Slider 1: Number of Closers */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300 font-medium">
                    Solar Closers on Floor:
                  </span>
                  <span className="text-emerald-400 font-mono font-bold text-base bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    {closers} Reps
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={closers}
                  onChange={(e) => setClosers(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-gray-500">
                  <span>1 Closer</span>
                  <span>10 Closers</span>
                  <span>20 Closers</span>
                </div>
              </div>

              {/* Slider 2: Target Sits Per Closer / Week */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300 font-medium">
                    Target Sits per Closer / Week:
                  </span>
                  <span className="text-cyan-400 font-mono font-bold text-base bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20">
                    {sitsPerCloserWeek} Sits / Wk
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={10}
                  step={1}
                  value={sitsPerCloserWeek}
                  onChange={(e) => setSitsPerCloserWeek(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-gray-500">
                  <span>2 Sits</span>
                  <span>6 Sits</span>
                  <span>10 Sits</span>
                </div>
              </div>

              {/* Slider 3: Deal Gross Margin / Commission */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300 font-medium">
                    Average Margin per Closed Deal:
                  </span>
                  <span className="text-white font-mono font-bold text-base bg-white/10 px-3 py-1 rounded-lg border border-white/20">
                    ${dealMargin.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={3500}
                  max={12000}
                  step={500}
                  value={dealMargin}
                  onChange={(e) => setDealMargin(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-gray-500">
                  <span>$3,500</span>
                  <span>$7,500</span>
                  <span>$12,000</span>
                </div>
              </div>

              {/* Slider 4: Sit to Close Rate % */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300 font-medium">
                    Expected Sit-to-Close Rate:
                  </span>
                  <span className="text-emerald-300 font-mono font-bold text-base bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    {closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={45}
                  step={5}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-gray-500">
                  <span>10% (Tough Market)</span>
                  <span>25% (Average)</span>
                  <span>45% (Elite Closers)</span>
                </div>
              </div>
            </div>

            {/* Zero-Risk BPO Model Guarantee Box */}
            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Shield className="h-4 w-4" />
                <span>Nexum Zero-Risk SLA Guarantees</span>
              </div>
              <ul className="text-xs text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span><strong>100% Dedicated Reps:</strong> Zero caller sharing. Exclusively trained on your offering.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span><strong>Full Data & Dialer Included:</strong> Multi-line dialer, DNC scrubbing & data licenses covered.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span><strong>No US Payroll Liabilities:</strong> Zero workers comp, state payroll tax, or healthcare overhead.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results Output Column (Span 6) with 3D Tilt */}
          <div className="lg:col-span-6">
            <TiltCard glowColor="green" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Projected Pipeline Impact
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Estimated Monthly Production
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {roiMultiplier}x
                  </span>
                  <div className="text-[10px] font-mono text-gray-400">
                    ESTIMATED ROI
                  </div>
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-gray-400 uppercase">
                    Monthly Sits Delivered
                  </span>
                  <div className="text-2xl font-bold font-mono text-white">
                    {monthlySitsNeeded}{" "}
                    <span className="text-xs text-emerald-400 font-sans">sits</span>
                  </div>
                  <div className="text-[10px] text-gray-500">
                    ~{(monthlySitsNeeded / 4.2).toFixed(0)} sits per week
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-gray-400 uppercase">
                    Projected Closes
                  </span>
                  <div className="text-2xl font-bold font-mono text-emerald-400">
                    {projectedCloses}{" "}
                    <span className="text-xs text-white font-sans">deals</span>
                  </div>
                  <div className="text-[10px] text-gray-500">
                    Based on {closeRate}% close rate
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-gray-400 uppercase">
                    Gross Revenue Created
                  </span>
                  <div className="text-2xl font-bold font-mono text-cyan-300">
                    ${projectedGrossMargin.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-gray-500">
                    @ ${dealMargin.toLocaleString()} margin / deal
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-gray-400 uppercase">
                    Pod Size Allocated
                  </span>
                  <div className="text-2xl font-bold font-mono text-white">
                    {callersNeeded}{" "}
                    <span className="text-xs text-emerald-400 font-sans">
                      dedicated reps
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-500">
                    + 1 Dedicated Team Lead
                  </div>
                </div>
              </div>

              {/* Cost Comparison: Domestic US vs House of Nexum */}
              <div className="p-5 rounded-xl bg-[#030713] border border-white/10 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center justify-between">
                  <span>MONTHLY OVERHEAD COMPARISON</span>
                  <span className="text-emerald-400 font-bold">
                    SAVE ${monthlySavings.toLocaleString()} / MO
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center text-gray-400">
                    <span>US In-House SDR Team ({callersNeeded} reps):</span>
                    <span className="text-rose-400 line-through">
                      ${domesticMonthlyCost.toLocaleString()}/mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-white font-bold">
                    <span className="text-emerald-300">
                      House of Nexum Nearshore Pod:
                    </span>
                    <span className="text-emerald-400 text-sm">
                      ${nexumMonthlyCost.toLocaleString()}/mo
                    </span>
                  </div>
                </div>

                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-emerald-400"
                    style={{
                      width: `${(nexumMonthlyCost / domesticMonthlyCost) * 100}%`,
                    }}
                  />
                  <div className="h-full bg-rose-500/40 flex-1" />
                </div>
                <div className="text-[10px] text-gray-400">
                  House of Nexum saves you{" "}
                  <strong className="text-emerald-300">
                    {Math.round((monthlySavings / domesticMonthlyCost) * 100)}%
                  </strong>{" "}
                  compared to US domestic payroll, recruiting fees, and software.
                </div>
              </div>

              {/* Call to action */}
              <button
                onClick={onOpenBooking}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 py-3.5 text-sm font-bold text-slate-950 uppercase tracking-wider hover:brightness-110 shadow-[0_0_30px_rgba(0,255,136,0.3)] transition-all"
              >
                <span>Lock In Pod Allocation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
