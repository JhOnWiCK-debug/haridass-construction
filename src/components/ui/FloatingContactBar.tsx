"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp, Calendar } from "lucide-react";
import { BUSINESS_INFO } from "@/data/constructionData";

interface FloatingContactBarProps {
  onOpenConsultation: () => void;
}

export default function FloatingContactBar({ onOpenConsultation }: FloatingContactBarProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Fixed Bottom Conversion Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090a0c]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2.5 flex items-center justify-between gap-2 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]">
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex-1 py-2.5 px-2 bg-white/10 active:bg-white/15 border border-white/15 rounded text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>Call Now</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 bg-[#25D366]/20 active:bg-[#25D366]/30 border border-[#25D366]/40 rounded text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-1 py-2.5 px-2 bg-[#c5a880] active:bg-[#dfbe99] text-[#090a0c] rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
        >
          <span>Get Quote</span>
        </button>
      </div>

      {/* Desktop Floating Quick Connect Widget */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#111317]/90 hover:bg-[#1a1d24] border border-white/15 text-gray-300 hover:text-white flex items-center justify-center transition-all shadow-lg hover:-translate-y-0.5"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <div className="flex items-center gap-2 p-1.5 bg-[#111317]/95 backdrop-blur-md border border-white/15 rounded-full shadow-2xl">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-white/10 text-white text-xs font-medium transition-colors"
            title="Call Haridass Construction"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="font-mono">{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <div className="w-[1px] h-5 bg-white/15" />

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-medium transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 rounded-full bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] text-xs font-semibold uppercase tracking-wider transition-all"
          >
            Consultation
          </button>
        </div>
      </div>
    </>
  );
}
