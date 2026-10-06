"use client";

import React from "react";
import { Phone, MessageCircle, Calendar, Navigation } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

interface MobileActionBarProps {
  onOpenAppointment: () => void;
}

export function MobileActionBar({ onOpenAppointment }: MobileActionBarProps) {
  return (
    <aside aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-t border-[#ded5c5] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2 px-3">
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        
        {/* 1. Call */}
        <a
          href={`tel:${VETRI_DATA.phone}`}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-sm text-[#11161b] hover:text-[#0f4c3a] active:bg-[#f4efe6] transition-colors"
          aria-label="Call clinic"
        >
          <Phone className="w-4 h-4 text-[#0f4c3a] mb-1" />
          <span className="text-[10px] font-semibold tracking-tight uppercase">Call</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={VETRI_DATA.whatsappLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-sm text-[#0f4c3a] active:bg-[#0f4c3a]/10 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#0f4c3a] mb-1" />
          <span className="text-[10px] font-semibold tracking-tight uppercase">WhatsApp</span>
        </a>

        {/* 3. Book */}
        <button
          type="button"
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-sm bg-[#0f4c3a] text-white shadow-xs active:bg-[#165b4c] transition-colors"
          aria-label="Book visit"
        >
          <Calendar className="w-4 h-4 text-white mb-1" />
          <span className="text-[10px] font-semibold tracking-tight uppercase">Book</span>
        </button>

        {/* 4. Directions */}
        <a
          href={VETRI_DATA.googleMaps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-sm text-[#11161b] hover:text-[#0f4c3a] active:bg-[#f4efe6] transition-colors"
          aria-label="Get directions on Google Maps"
        >
          <Navigation className="w-4 h-4 text-[#0f4c3a] mb-1" />
          <span className="text-[10px] font-semibold tracking-tight uppercase">Directions</span>
        </a>

      </div>
    </aside>
  );
}
