"use client";

import React from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import { Phone, MessageCircle, Calendar, Navigation } from "lucide-react";

interface MobileStickyBarProps {
  onOpenAppointment: () => void;
}

export function MobileStickyBar({ onOpenAppointment }: MobileStickyBarProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#faf7f2]/95 backdrop-blur-md border-t border-[#1e242b]/15 px-3 py-2.5 shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* 1. Call */}
        <a
          href={`tel:${NIVIS_DATA.contact.phoneTel}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white border border-[#1e242b]/10 text-[#1e242b] active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#153e35]" />
          <span className="text-[10px] font-semibold mt-1">Call</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={`https://wa.me/${NIVIS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
            NIVIS_DATA.contact.defaultWhatsappText
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#eaf4ed] border border-[#153e35]/15 text-[#153e35] active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span className="text-[10px] font-semibold mt-1">WhatsApp</span>
        </a>

        {/* 3. Book Visit */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#153e35] text-white active:scale-95 transition-transform shadow-sm"
        >
          <Calendar className="w-4 h-4 text-amber-300" />
          <span className="text-[10px] font-semibold mt-1">Book</span>
        </button>

        {/* 4. Directions */}
        <a
          href={NIVIS_DATA.location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white border border-[#1e242b]/10 text-[#1e242b] active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-[#c86343]" />
          <span className="text-[10px] font-semibold mt-1">Directions</span>
        </a>
      </div>
    </div>
  );
}
