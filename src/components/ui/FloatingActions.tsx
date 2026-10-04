"use client";

import React, { useState } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import { Phone, MessageSquare, ChevronUp } from "lucide-react";

export const FloatingActions: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-2.5">
      {/* Expandable Menu */}
      {isExpanded && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-3 duration-200">
          {/* WhatsApp Direct */}
          <a
            href={CLINIC_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg text-xs font-bold transition-all hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Direct Call */}
          <a
            href={CLINIC_INFO.phone}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg text-xs font-bold transition-all hover:scale-105"
            aria-label={`Call Clinic at ${CLINIC_INFO.phoneDisplay}`}
          >
            <Phone className="w-4 h-4" />
            <span>Call 088255 64486</span>
          </a>
        </div>
      )}

      {/* Main Bottom-Left Button */}
      <div className="flex items-center gap-2">
        <a
          href={CLINIC_INFO.phone}
          className="flex sm:hidden items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-700/30 transition-transform active:scale-95"
          aria-label={`Call clinic at ${CLINIC_INFO.phoneDisplay}`}
        >
          <Phone className="w-5 h-5" />
        </a>

        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-emerald-200">
          <a
            href={CLINIC_INFO.phone}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call: {CLINIC_INFO.phoneDisplay}
          </a>

          <a
            href={CLINIC_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
