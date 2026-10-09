"use client";

import React from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const FloatingWhatsApp: React.FC = () => {
  const message = "Hello Jaksh's Dental Junction, I would like to enquire about a dental appointment.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/918825564486?text=${encodedMessage}`;

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-5 left-4 sm:left-6 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Jaksh's Dental Junction on WhatsApp"
        className="group flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29483A] focus-visible:ring-offset-2"
      >
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          <WhatsAppIcon className="w-5 h-5 text-white" />
        </div>
        <span className="hidden sm:inline text-xs font-medium tracking-wide font-sans text-white">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
