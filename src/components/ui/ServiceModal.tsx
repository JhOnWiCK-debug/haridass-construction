"use client";

import React, { useEffect } from "react";
import { DentalService } from "@/data/services";
import {
  X,
  Calendar,
  HelpCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  ShieldAlert,
  Sparkles,
  Phone,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

interface ServiceModalProps {
  service: DentalService | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-emerald-50 via-white to-emerald-50/50 border-b border-emerald-100 flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                {service.category} Treatment
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Jaksh&apos;s Dental Junction
              </span>
            </div>
            <h3
              id="service-modal-title"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              {service.name}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-700 font-medium mt-1">
              {service.shortTagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-slate-200/80 transition-colors shrink-0 shadow-2xs"
            aria-label="Close treatment modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 divide-y divide-slate-100">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              What is this treatment?
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100/60">
              {service.description}
            </p>
          </div>

          {/* Why Needed */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              Why it may be needed
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.whyNeeded.map((reason, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Expect */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              What you can generally expect
            </h4>
            <ul className="space-y-2">
              {service.whatToExpect.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation & Aftercare side-by-side */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-2">
              <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Preparation Guidance
              </h5>
              <ul className="space-y-1.5 text-xs text-amber-900/90">
                {service.preparation.map((prep, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{prep}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 space-y-2">
              <h5 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Basic Aftercare
              </h5>
              <ul className="space-y-1.5 text-xs text-emerald-900/90">
                {service.aftercare.map((care, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{care}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* When to Contact the Dentist */}
          <div className="pt-6 space-y-2">
            <h4 className="text-xs font-bold text-red-900 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-red-600" />
              When to Contact the Dentist
            </h4>
            <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-200/70 text-xs text-red-900 space-y-1">
              {service.whenToContact.map((contact, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">!</span>
                  <span>{contact}</span>
                </p>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="pt-4 text-[11px] text-slate-400 italic">
            * Medical Note: Information provided is for general educational awareness and does not replace individualized clinical evaluation or diagnosis. Suitability for specific procedures is determined following an in-person dental consultation at Jaksh&apos;s Dental Junction.
          </p>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={CLINIC_INFO.phone}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            Call for Inquiries: {CLINIC_INFO.phoneDisplay}
          </a>

          <button
            onClick={() => {
              onBookService(service.name);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/30 transition-all"
          >
            <Calendar className="w-4 h-4" />
            Book an Appointment for {service.name}
          </button>
        </div>

      </div>
    </div>
  );
};
