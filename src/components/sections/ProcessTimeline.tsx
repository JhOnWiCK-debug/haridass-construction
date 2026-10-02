"use client";

import React, { useState } from "react";
import TiltCard from "@/components/ui/TiltCard";
import SolarAudioPlayer from "@/components/ui/SolarAudioPlayer";
import {
  Wrench,
  PhoneCall,
  CalendarCheck2,
  CheckCircle,
  ArrowRight,
  Flame,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProcessTimelineProps {
  onOpenBooking: () => void;
}

export default function ProcessTimeline({ onOpenBooking }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const steps = [
    {
      id: 1,
      title: "Pod Calibration & Script Architecture",
      subtitle: "Days 1 – 5: Pre-Flight Deployment",
      icon: Wrench,
      accentColor: "from-cyan-500 to-blue-500",
      pillColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
      description:
        "We don&apos;t use cookie-cutter scripts. We build a custom objection-handling matrix tailored specifically to your target states, local utility tariffs (PG&E, Duke, FPL, Oncor), and whether you sell PPA, Lease, or Ownership.",
      highlights: [
        "State-specific utility tariff & battery arbitrage scripting",
        "STIR/SHAKEN A-attestation phone numbers (zero spam flags)",
        "Direct calendar & CRM webhook integration (GHL, HubSpot, Salesforce)",
        "Dedicated Mexico pod assignment & rigorous 5-day dry-run drills",
      ],
      metrics: "5-DAY SPRINT TO LAUNCH",
    },
    {
      id: 2,
      title: "High-Velocity Cold Calling Engine",
      subtitle: "Days 6 – Ongoing: Scale Execution",
      icon: PhoneCall,
      accentColor: "from-emerald-500 to-teal-400",
      pillColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      description:
        "Your dedicated caller pod hits the phones with relentless consistency. Utilizing multi-line predictive dialing with local presence caller IDs, each rep executes 180+ dials every single day to scrubbed homeowner lists.",
      highlights: [
        "180+ personalized dials per rep per day",
        "Real-time DNC & TCPA Litigator list scrubbing prior to every dial",
        "4-Point Qualification Check: Homeowner deed, bill > $120, roof age, credit pre-screen",
        "Live Team Lead whisper coaching & daily audio quality audits",
      ],
      metrics: "180+ DIALS / REP / DAY",
    },
    {
      id: 3,
      title: "Booked Appointments & Warm Handoffs",
      subtitle: "Real-Time: Closer Pipeline Delivery",
      icon: CalendarCheck2,
      accentColor: "from-teal-400 to-emerald-400",
      pillColor: "border-teal-500/30 text-teal-300 bg-teal-500/10",
      description:
        "No unverified garbage. When our rep confirms a sit, the appointment drops onto your closer&apos;s calendar, an instant notification with audio & transcript hits your Discord/Slack, and our automated show-rate protocol begins.",
      highlights: [
        "Confirmed sits synced directly to your closer's Google / GHL Calendar",
        "Discord/Slack dispatch with full MP3 call audio & homeowner utility bill",
        "78.4% Show-Rate sequence: 24h closer bio dispatch + 2h live reconfirmation",
        "Live hot transfer option: transfer qualified homeowner instantly to an open closer",
      ],
      metrics: "78.4% SIT-RATE BENCHMARK",
    },
  ];

  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-300">
            <Layers className="h-3.5 w-3.5" />
            <span>OPERATIONAL BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The 3-Step{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Solar Outbound Engine
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            From script architecture to confirmed sits in your calendar in 5 days.
            Here is how House of Nexum turns cold phone lines into predictable solar revenue.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id as 1 | 2 | 3)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  isActive
                    ? "bg-[#071120] border-emerald-400/60 shadow-[0_0_30px_rgba(0,255,136,0.15)] ring-1 ring-emerald-400/30"
                    : "bg-[#050b16]/60 border-white/10 hover:border-white/20 hover:bg-[#070e1c]"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl shrink-0 font-mono font-bold text-sm ${
                    isActive
                      ? "bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,255,136,0.4)]"
                      : "bg-white/5 text-gray-400 border border-white/10"
                  }`}
                >
                  0{step.id}
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                    {step.subtitle}
                  </div>
                  <div
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isActive ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <TiltCard glowColor="green" className="p-6 sm:p-10">
              {(() => {
                const cur = steps[activeStep - 1];
                const Icon = cur.icon;
                return (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${cur.pillColor}`}
                          >
                            STEP 0{cur.id} // {cur.metrics}
                          </span>
                          <h3 className="text-2xl font-bold text-white mt-1">
                            {cur.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-base leading-relaxed">
                      {cur.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-gray-400">
                        Operational Deliverables:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cur.highlights.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-200"
                          >
                            <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        <span>Ready to scale your closer schedule?</span>
                      </div>
                      <button
                        onClick={onOpenBooking}
                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 text-xs font-bold text-slate-950 uppercase tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(0,255,136,0.25)] transition-all"
                      >
                        <span>Deploy This Engine</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </TiltCard>
          </div>

          {/* Right Column: Audio Proof and Real-Time Qualification Sample */}
          <div className="lg:col-span-5 space-y-6">
            <div id="proof" className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Tangible Execution Proof
              </span>
              <h3 className="text-xl font-bold text-white">
                Listen to a Real Nexum Qualification Call
              </h3>
              <p className="text-xs text-gray-400">
                Hear how our Mexico nearshore callers handle tough homeowner objections, verify high utility bills, and lock appointments.
              </p>
            </div>

            <SolarAudioPlayer />

            <div className="p-4 rounded-xl border border-white/10 bg-[#060c18] space-y-2 text-xs font-mono">
              <div className="text-gray-400">VERIFICATION SUMMARY:</div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-gray-500 block">HOME TYPE:</span>
                  <span className="text-emerald-300">Single-Family Owned</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-gray-500 block">AVG ELECTRIC:</span>
                  <span className="text-cyan-300">$340 / Month</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-gray-500 block">ROOF STATUS:</span>
                  <span className="text-white">Unshaded South-Facing</span>
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                  <span className="text-gray-500 block">HANDOFF TYPE:</span>
                  <span className="text-emerald-400">Calendar Direct + Audio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
