"use client";

import React, { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Sun,
  Users,
} from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [closersCount, setClosersCount] = useState("4 - 8 Closers");
  const [selectedState, setSelectedState] = useState("California (NEM 3.0)");
  const [currentSource, setCurrentSource] = useState("Shared Aggregators (Angi/CleanEnergy)");
  const [selectedDate, setSelectedDate] = useState("Tomorrow, 11:00 AM EST");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const dates = [
    "Tomorrow, 10:00 AM EST",
    "Tomorrow, 11:30 AM EST",
    "Tomorrow, 2:00 PM EST",
    "Thursday, 1:00 PM EST",
    "Thursday, 3:30 PM EST",
    "Friday, 11:00 AM EST",
  ];

  const states = [
    "California (NEM 3.0)",
    "Texas (ERCOT / Co-ops)",
    "Florida (FPL / Duke)",
    "Arizona / Nevada",
    "North Carolina / East Coast",
    "Multi-State / Nationwide",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00ff88", "#00f0ff", "#ffffff", "#10b981"],
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#070e1c] shadow-[0_0_60px_rgba(0,255,136,0.15)] text-gray-100 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Sun className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-white">
                HOUSE OF NEXUM // DISCOVERY CALL
              </div>
              <div className="text-xs text-gray-400 font-mono">
                Dedicated Mexico Pod Feasibility & Seat Allocation
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-full bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Step 1: Solar Operation Profile */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Step 01 / 03 • Operations Audit
              </span>
              <h3 className="mt-1 text-xl font-bold text-white">
                How large is your current solar sales floor?
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                We calibrate team caller pods to maintain a minimum of 3-5 confirmed sits per closer per day.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["1 - 3 Closers", "4 - 8 Closers", "9 - 15 Closers", "16+ Closers"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setClosersCount(item)}
                    className={`p-3 text-left rounded-xl border text-sm font-medium transition-all ${
                      closersCount === item
                        ? "border-emerald-400 bg-emerald-500/15 text-emerald-300 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                        : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-white/20"
                    }`}
                  >
                    <Users className="h-4 w-4 mb-2 text-emerald-400" />
                    {item}
                  </button>
                )
              )}
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-gray-300 block mb-2">
                Primary Target Solar Territory
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {states.map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedState(st)}
                    className={`px-3 py-2 text-left rounded-lg border text-xs font-medium transition-all ${
                      selectedState === st
                        ? "border-cyan-400 bg-cyan-500/15 text-cyan-300"
                        : "border-white/10 bg-white/[0.02] text-gray-300 hover:border-white/20"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              >
                <span>Continue to Time Slot</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Time Selection */}
        {step === 2 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Step 02 / 03 • Calendar Selection
              </span>
              <h3 className="mt-1 text-xl font-bold text-white">
                Select your 20-minute Strategy Call
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Review call recordings, objection handling scripts, and Mexico pod seat pricing with our Partner Director.
              </p>
            </div>

            <div className="space-y-2.5">
              {dates.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setSelectedDate(d)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-sm font-medium transition-all ${
                    selectedDate === d
                      ? "border-emerald-400 bg-emerald-500/15 text-emerald-300 shadow-[0_0_15px_rgba(0,255,136,0.15)]"
                      : "border-white/10 bg-white/[0.02] text-gray-300 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-emerald-400" />
                    <span>{d}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>20 Min Zoom</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-gray-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              >
                <span>Final Step: Contact Info</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info & Confirm */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Step 03 / 03 • Reservation Lock
              </span>
              <h3 className="mt-1 text-xl font-bold text-white">
                Where should we send the calendar invitation?
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Selected: <span className="text-emerald-300 font-mono">{selectedDate}</span> for {closersCount} ({selectedState})
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-gray-300 block mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cole Sterling"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-gray-300 block mb-1.5">
                  Solar Company / Org *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Solar Solutions"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-gray-300 block mb-1.5">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="cole@apexsolar.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-gray-300 block mb-1.5">
                  Direct Mobile Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 019-2834"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 flex items-start gap-2.5">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-gray-300">
                <span className="font-semibold text-emerald-300">Zero Obligation Feasibility:</span> We review sample cold call audio, DNC list hygiene guarantees, and your exact market territory economics.
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-gray-400 hover:text-white"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 hover:brightness-110 transition-all shadow-[0_0_25px_rgba(0,255,136,0.35)] disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Securing Calendar Slot...</span>
                ) : (
                  <>
                    <PhoneCall className="h-4 w-4" />
                    <span>Confirm Discovery Call</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Success Confirmed */}
        {step === 4 && (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 shadow-[0_0_30px_rgba(0,255,136,0.3)]">
              <CheckCircle2 className="h-9 w-9" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <Sparkles className="h-3.5 w-3.5" />
                CALENDAR INVITATION DISPATCHED
              </div>
              <h3 className="text-2xl font-bold text-white">
                You&apos;re Confirmed with House of Nexum
              </h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                We sent calendar details and Zoom credentials to{" "}
                <span className="text-emerald-300 font-mono">
                  {formData.email || "your email"}
                </span>
                .
              </p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] max-w-md mx-auto text-left space-y-2 text-xs font-mono text-gray-300">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-gray-400">SESSION TIME:</span>
                <span className="text-cyan-300">{selectedDate}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-gray-400">ORGANIZATION:</span>
                <span className="text-white">{formData.company || "Solar Installer Partner"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">TERRITORY:</span>
                <span className="text-emerald-300">{selectedState}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Done & Return to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
