"use client";

import React, { useState } from "react";
import TiltCard from "@/components/ui/TiltCard";
import {
  Users,
  Database,
  Radio,
  ShieldAlert,
  Headphones,
  CheckCircle,
  FileSpreadsheet,
  MessageSquare,
  Sparkles,
  PhoneCall,
  CalendarCheck,
  TrendingUp,
  Cpu,
  MapPin,
  ExternalLink,
} from "lucide-react";

interface BentoGridProps {
  onOpenBooking: () => void;
}

export default function BentoGrid({ onOpenBooking }: BentoGridProps) {
  const [activeTab, setActiveTab] = useState<"pillars" | "telemetry">("pillars");

  return (
    <section id="pillars" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-mono text-cyan-300">
            <Cpu className="h-3.5 w-3.5" />
            <span>ARCHITECTED FOR SOLAR VOLUME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Three Pillars of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Predictable Solar Pipeline
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Generic offshore call centers fail because they don&apos;t know NEM 3.0 or US homeowner psychology.
            House of Nexum replaces chaos with an engineering-grade outbound engine.
          </p>
        </div>

        {/* Bento Grid Layout with 3D Tilt Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* PILLAR 1: Dedicated Callers in Mexico (Span 7) */}
          <div className="lg:col-span-7">
            <TiltCard glowColor="green" className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">
                        Pillar 01 // Talent Infrastructure
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Dedicated Callers in Mexico
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-gray-300">
                    <MapPin className="h-3 w-3 text-emerald-400" />
                    Guadalajara & CDMX Hubs
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                  Nearshore elite reps with neutral North American accents, operating strictly within US time zones (EST, CST, PST).
                  Every caller passes our 3-week Solar University: mastering NEM 3.0 battery arbitrage, PPA zero-down mechanics, utility escalator rebuttals, and homeowner qualification criteria.
                </p>

                {/* Sub-features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-semibold text-white block">Dedicated Pod Culture</span>
                      <span className="text-gray-400">Reps dial exclusively for your brand, never shared between clients.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-semibold text-white block">Dedicated QA & Team Lead</span>
                      <span className="text-gray-400">Daily call scorecards, whisper coaching, and continuous pitch tuning.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rep Telemetry Visual Bar */}
              <div className="p-4 rounded-xl bg-[#030814]/90 border border-emerald-500/20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-gray-300">POD REPS ON FLOOR:</span>
                  <span className="text-emerald-400 font-bold">12 DIALERS</span>
                </div>
                <div className="text-gray-400">
                  PACE: <span className="text-cyan-300">182 DIALS/REP/DAY</span>
                </div>
                <div className="text-gray-400">
                  AVG TALK TIME: <span className="text-white">4m 18s</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* PILLAR 2: Data List Scrubbing (Span 5) */}
          <div className="lg:col-span-5">
            <TiltCard glowColor="cyan" className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                    <Database className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                      Pillar 02 // Compliance & Data
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Data List Scrubbing & TCPA Shield
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  Never risk a federal TCPA lawsuit. We ingest, enrich, and cross-reference every homeowner record before a single call is placed.
                </p>

                {/* Data Pipeline badges */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs">
                    <span className="flex items-center gap-2 text-gray-200">
                      <ShieldAlert className="h-4 w-4 text-cyan-400" />
                      National & State DNC Registry Scrub
                    </span>
                    <span className="font-mono text-emerald-400 font-semibold">100% CLEAN</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs">
                    <span className="flex items-center gap-2 text-gray-200">
                      <FileSpreadsheet className="h-4 w-4 text-cyan-400" />
                      Litigator & Serial Plaintiff Blacklist
                    </span>
                    <span className="font-mono text-emerald-400 font-semibold">FILTERED</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs">
                    <span className="flex items-center gap-2 text-gray-200">
                      <CheckCircle className="h-4 w-4 text-cyan-400" />
                      Single-Family Deed & Owner Verification
                    </span>
                    <span className="font-mono text-cyan-300 font-semibold">OWNER-OCCUPIED</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-xs text-cyan-200 flex items-center gap-2 font-mono">
                <Sparkles className="h-4 w-4 shrink-0 text-cyan-300" />
                <span>Zero carrier spam flags via dynamic STIR/SHAKEN A-attestation</span>
              </div>
            </TiltCard>
          </div>

          {/* PILLAR 3: CRM / Discord Handoff (Span 7) */}
          <div className="lg:col-span-7">
            <TiltCard glowColor="emerald" className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                      <Radio className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">
                        Pillar 03 // Real-Time Routing
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        CRM & Discord Handoff Protocol
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                    &lt; 30s LATENCY
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                  The moment a homeowner is qualified, our rep syncs the appointment directly onto your closer&apos;s calendar (GoHighLevel, HubSpot, Salesforce, JobNimbus) and dispatches a rich payload to your private Discord or Slack war-room.
                </p>

                {/* Live Discord Handoff Simulation Mockup */}
                <div className="rounded-xl border border-white/10 bg-[#09101f] p-4 text-xs font-mono space-y-2 mb-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>#nexum-solar-dispatches</span>
                    </div>
                    <span className="text-gray-500 text-[10px]">Just now • BOT</span>
                  </div>
                  <div className="text-gray-300 space-y-1">
                    <div className="text-white font-bold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      NEW QUALIFIED SIT: Robert M. (Fresno, CA • PG&amp;E)
                    </div>
                    <div className="text-gray-400">
                      • Power Bill: <span className="text-emerald-300">$295/mo (Summer Peak $410)</span> | Roof Age: 6 yrs (Comp Shingle)
                    </div>
                    <div className="text-gray-400">
                      • Calendar Slot: <span className="text-cyan-300">Tomorrow @ 4:30 PM PST</span> (Assigned to: Marcus V.)
                    </div>
                    <div className="flex items-center gap-3 pt-2 text-[11px]">
                      <span className="px-2 py-1 rounded bg-white/10 text-white flex items-center gap-1 cursor-pointer hover:bg-white/20">
                        <Headphones className="h-3 w-3 text-emerald-400" /> Listen Audio (.mp3)
                      </span>
                      <span className="px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">
                        Bill Verified ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                <span>SUPPORTED:</span>
                {["GoHighLevel", "HubSpot", "Salesforce", "JobNimbus", "Discord", "Slack"].map(
                  (crm) => (
                    <span
                      key={crm}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300"
                    >
                      {crm}
                    </span>
                  )
                )}
              </div>
            </TiltCard>
          </div>

          {/* Complementary Card: 78.4% Sit Rate Protocol (Span 5) */}
          <div className="lg:col-span-5">
            <TiltCard glowColor="amber" className="h-full p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                    <CalendarCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">
                      Retention Architecture
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      78.4% Show-Rate Protocol
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  An appointment is useless if the homeowner flakes. We execute an automated 3-touch verification sequence that locks homeowner commitment.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <span className="h-5 w-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-[10px] shrink-0">
                      1
                    </span>
                    <span>
                      <strong className="text-white block">Immediate SMS & Utility Bill Request:</strong> Rep texts homeowner from local area code to upload their electric statement.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <span className="h-5 w-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-[10px] shrink-0">
                      2
                    </span>
                    <span>
                      <strong className="text-white block">T-24h Closer Profile Dispatch:</strong> Homeowner receives your closer&apos;s photo & bio so they know who is arriving/calling.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <span className="h-5 w-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-[10px] shrink-0">
                      3
                    </span>
                    <span>
                      <strong className="text-white block">T-2h Live Phone Confirmation:</strong> Pod team lead reconfirms decision-maker attendance.
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-mono font-semibold uppercase tracking-wider text-gray-200 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-all flex items-center justify-center gap-2"
              >
                <span>Audit Your Current Show Rates</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
