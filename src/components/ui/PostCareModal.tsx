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
  Check,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="post-care-detail-title"
    >
      <div
        className="fixed inset-0 bg-[#18332E]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#D9E6DE] overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#F7F5EF] border-b border-[#D9E6DE] flex items-start justify-between gap-4 sticky top-0 z-20">
          <div>
            <span className="text-[10px] font-mono font-medium text-[#18332E] bg-[#EEF5EF] px-2 py-0.5 rounded">
              {topic.badge}
            </span>
            <h3
              id="post-care-detail-title"
              className="font-editorial text-2xl sm:text-3xl font-normal text-[#18332E] tracking-tight mt-1"
            >
              {topic.title}
            </h3>
            <p className="text-xs text-[#65756F] mt-0.5 font-normal">
              {topic.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#65756F] hover:text-[#18332E] rounded-lg hover:bg-[#EEF5EF] transition-colors"
            aria-label="Close care guidance"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Guidance Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-[#18332E]/85 text-xs sm:text-sm divide-y divide-[#D9E6DE]/60">
          
          {/* Summary Note */}
          <div className="p-4 rounded-xl bg-[#EEF5EF] border border-[#D9E6DE] leading-relaxed">
            {topic.summary}
          </div>

          {/* 1. What to Expect */}
          <div className="pt-6 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-medium text-[#176B57]">
              1. What to Expect During Initial Recovery
            </h4>
            <ul className="space-y-1.5">
              {topic.whatToExpect.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#176B57] font-semibold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Immediate Aftercare */}
          <div className="pt-6 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-medium text-[#176B57]">
              2. Immediate Aftercare (First 24–48 Hours)
            </h4>
            <ul className="space-y-2">
              {topic.immediateAftercare.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#F7F5EF] p-3 rounded-lg border border-[#D9E6DE]/60">
                  <Check className="w-4 h-4 text-[#176B57] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Things to Avoid */}
          <div className="pt-6 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-medium text-[#8F3E37]">
              3. Things to Avoid
            </h4>
            <div className="p-4 rounded-xl bg-[#FAF3F2] border border-[#EACECB] space-y-1.5 text-[#5A2521]">
              {topic.thingsToAvoid.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="font-semibold text-[#8F3E37]">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 & 5. Diet & Hygiene */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#D9E6DE]">
              <h5 className="text-[11px] font-medium uppercase tracking-wider text-[#176B57] mb-2">
                Food & Drink Guidance
              </h5>
              <ul className="space-y-1.5 text-xs text-[#18332E]/80">
                {topic.foodAndDrink.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#176B57]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#EEF5EF] border border-[#D9E6DE]">
              <h5 className="text-[11px] font-medium uppercase tracking-wider text-[#176B57] mb-2">
                Oral Hygiene
              </h5>
              <ul className="space-y-1.5 text-xs text-[#18332E]/80">
                {topic.oralHygiene.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#176B57]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Warning Signs */}
          <div className="pt-6 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-medium text-[#8F3E37]">
              6. Warning Signs Requiring Professional Advice
            </h4>
            <div className="p-4 rounded-xl bg-[#FAF3F2] border border-[#EACECB] text-xs text-[#5A2521] space-y-1.5">
              {topic.warningSigns.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-[#8F3E37]">!</span>
                  <span>{item}</span>
                </div>
              ))}
              <div className="pt-2 mt-2 border-t border-[#EACECB] text-[11px]">
                If experiencing concerning post-operative symptoms, contact our clinic at{" "}
                <a href={CLINIC_INFO.phone} className="underline font-medium text-[#8F3E37]">
                  {CLINIC_INFO.phoneDisplay}
                </a>.
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="pt-4 text-[11px] text-[#65756F] italic">
            * Medical Educational Disclaimer: These aftercare guidelines serve general recovery awareness and do not replace personalized instructions given by your treating dentist.
          </p>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-[#F7F5EF] border-t border-[#D9E6DE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={CLINIC_INFO.phone}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-medium text-[#18332E] hover:bg-[#EEF5EF] border border-[#D9E6DE] flex items-center justify-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#176B57]" />
            Call Front Desk ({CLINIC_INFO.phoneDisplay})
          </a>

          <button
            onClick={() => {
              onBookAppointment();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#176B57] hover:bg-[#125544] transition-colors shadow-xs"
          >
            Book Review Appointment
          </button>
        </div>

      </div>
    </div>
  );
};
