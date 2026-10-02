"use client";

import React from "react";
import { ArrowRight, Phone, ShieldCheck, Zap, Sparkles } from "lucide-react";

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export default function CtaBanner({ onOpenBooking }: CtaBannerProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#09152a] to-[#040914] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-[0_0_80px_rgba(0,255,136,0.15)] text-center">
          {/* Background Ambient Glow & Cyber Rays */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Cybernetic Corner Decors */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/15 text-xs font-mono text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>LIMITED POD CAPACITY // Q4 POD ALLOCATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Fill Your Closers&apos; Calendars with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Verified Solar Sits?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Schedule a 20-minute Strategy Call. We&apos;ll walk you through live call recordings,
              our TCPA scrubbing protocol, and calculate pod capacity for your target territory.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 px-8 py-4 text-sm font-bold text-slate-950 uppercase tracking-wider hover:brightness-110 shadow-[0_0_35px_rgba(0,255,136,0.35)] transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Book a Discovery Call</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#economics"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-mono text-gray-200 hover:bg-white/[0.08] hover:border-emerald-500/40 transition-all"
              >
                <Zap className="h-4 w-4 text-emerald-400" />
                <span>Calculate Your Pod ROI</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>100% TCPA & DNC Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>5-Day Onboarding Sprint</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Zero US Payroll Liabilities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
