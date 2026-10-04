"use client";

import React, { useEffect } from "react";
import { PostCareTopic } from "@/data/postCare";
import {
  X,
  Calendar,
  AlertTriangle,
  Clock,
  Ban,
  Utensils,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle,
  FileHeart,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

interface PostCareModalProps {
  topic: PostCareTopic | null;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const PostCareModal: React.FC<PostCareModalProps> = ({
  topic,
  onClose,
  onBookAppointment,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (topic) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [topic, onClose]);

  if (!topic) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-care-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-emerald-100/70 via-emerald-50 to-white border-b border-emerald-200/80 flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">
                {topic.badge}
              </span>
              <span className="text-xs font-semibold text-emerald-800">
                Post-Treatment Care Protocol
              </span>
            </div>
            <h3
              id="post-care-modal-title"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              {topic.title}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-700 font-medium mt-1">
              {topic.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-slate-200/80 transition-colors shrink-0 shadow-2xs"
            aria-label="Close post treatment care modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 divide-y divide-slate-100">
          
          {/* Summary Banner */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex items-start gap-3">
            <FileHeart className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
              {topic.summary}
            </p>
          </div>

          {/* 1. What to Expect */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              1. What to Expect
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {topic.whatToExpect.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 flex items-start gap-2"
                >
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Immediate Aftercare */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              2. Immediate Aftercare (First 24–48 Hours)
            </h4>
            <ul className="space-y-2">
              {topic.immediateAftercare.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 bg-emerald-50/40 p-3 rounded-xl border border-emerald-100/60"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Things to Avoid */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
              <Ban className="w-4 h-4 text-amber-600" />
              3. Things to Avoid
            </h4>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-2">
              {topic.thingsToAvoid.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950">
                  <span className="font-bold text-amber-700">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 & 5. Food & Drink Guidance + Oral Hygiene */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-600" />
                4. Food & Drink Guidance
              </h4>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-700">
                {topic.foodAndDrink.map((item, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                5. Oral Hygiene Guidance
              </h4>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-700">
                {topic.oralHygiene.map((item, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Warning Signs / When to Contact Clinic */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs font-bold text-red-900 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              6. Warning Signs — When to Contact the Clinic
            </h4>
            <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200/80 text-xs sm:text-sm text-red-950 space-y-2">
              {topic.warningSigns.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">!</span>
                  <span>{item}</span>
                </div>
              ))}
              <div className="pt-2 mt-2 border-t border-red-200/70 flex items-center gap-2 text-xs font-bold text-red-900">
                <Phone className="w-3.5 h-3.5" />
                If experiencing urgent symptoms, call Jaksh&apos;s Dental Junction directly at{" "}
                <a href={CLINIC_INFO.phone} className="underline font-extrabold hover:text-red-950">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="pt-4 text-[11px] text-slate-400 italic">
            * Medical Educational Disclaimer: These post-treatment instructions are intended to assist patients following standard dental care at Jaksh&apos;s Dental Junction. They do not substitute emergency medical intervention or personalized clinical instructions provided by your treating dentist.
          </p>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={CLINIC_INFO.phone}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            Call Clinic: {CLINIC_INFO.phoneDisplay}
          </a>

          <button
            onClick={() => {
              onBookAppointment();
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/30 transition-all"
          >
            <Calendar className="w-4 h-4" />
            Book Follow-up / Appointment
          </button>
        </div>

      </div>
    </div>
  );
};
