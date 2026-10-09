"use client";

import React, { useEffect } from "react";
import { DentalService } from "@/data/services";
import { X, Calendar, ArrowRight, ShieldCheck, Check, Clock, AlertCircle } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicInfo";

interface ServiceModalProps {
  service: DentalService | null;
  onClose: () => void;
  onEnquire: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onEnquire,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-detail-title"
    >
      {/* Subtle backdrop */}
      <div
        className="fixed inset-0 bg-[#1E332A]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Editorial Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-xl shadow-xl border border-[#E2E4DA] overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#F8F6F0] border-b border-[#E2E4DA] flex items-start justify-between gap-4 sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono font-medium text-[#737B73] bg-[#E7EDE3] px-2 py-0.5 rounded">
                Category {service.number}
              </span>
              <span className="text-[11px] font-medium text-[#29483A]">
                {service.category}
              </span>
            </div>
            <h3
              id="service-detail-title"
              className="font-editorial text-2xl sm:text-3xl font-normal text-[#1E332A] tracking-tight"
            >
              {service.name}
            </h3>
            <p className="text-xs text-[#737B73] mt-1 font-normal">
              {service.shortSummary}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#737B73] hover:text-[#1E332A] rounded-lg hover:bg-[#E7EDE3]/50 transition-colors"
            aria-label="Close treatment details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-7 text-[#29342D]/85 text-xs sm:text-sm divide-y divide-[#E2E4DA]/60">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-medium text-[#29483A]">
              Treatment Overview
            </h4>
            <p className="leading-relaxed bg-[#F8F6F0] p-4 rounded-lg border border-[#E2E4DA]/60">
              {service.fullDescription}
            </p>
          </div>

          {/* Why Referred */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-medium text-[#29483A]">
              When this care may be considered
            </h4>
            <ul className="space-y-2">
              {service.whyReferred.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#29483A] font-semibold">•</span>
                  <span className="leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultation Details */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-medium text-[#29483A]">
              What a consultation involves
            </h4>
            <ul className="space-y-2">
              {service.consultationDetails.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#737B73] font-medium">{idx + 1}.</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation & Aftercare */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#F0F3EC] border border-[#E2E4DA]">
              <h5 className="text-[11px] font-medium uppercase tracking-wider text-[#29483A] mb-2">
                Preparation Guidance
              </h5>
              <ul className="space-y-1.5 text-xs text-[#29342D]/80">
                {service.preparationGuidance.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#29483A]">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-[#F8F6F0] border border-[#E2E4DA]">
              <h5 className="text-[11px] font-medium uppercase tracking-wider text-[#29483A] mb-2">
                Aftercare Expectations
              </h5>
              <ul className="space-y-1.5 text-xs text-[#29342D]/80">
                {service.aftercareGuidance.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#29483A]">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clinical Disclaimer */}
          <p className="pt-4 text-[11px] text-[#737B73] italic">
            * Medical Note: Clinical suitability and exact treatment protocols are determined during an in-person dental consultation at Jaksh&apos;s Dental Junction, Mogappair East.
          </p>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-[#F8F6F0] border-t border-[#E2E4DA] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#737B73]">
            Consultations: 5:00 PM – 8:30 PM (Mon–Sat)
          </span>

          <button
            onClick={() => {
              onEnquire(service.name);
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-medium text-white bg-[#29483A] hover:bg-[#1E332A] transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            Enquire About {service.name}
          </button>
        </div>

      </div>
    </div>
  );
};
