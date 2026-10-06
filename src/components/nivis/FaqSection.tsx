"use client";

import React, { useState } from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#faf7f2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4efe6] text-[#153e35] text-[11px] font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[#1e242b] font-medium tracking-tight mb-4">
            Answers for{" "}
            <span className="italic text-[#153e35] font-normal">pet parents.</span>
          </h2>

          <p className="text-base text-[#5e6872] leading-relaxed font-light">
            Clear, grounded information about visiting Nivis Pet Clinic & Pet Store in Thiruverkadu.
          </p>
        </div>

        {/* Minimal Accordion */}
        <div className="space-y-3">
          {NIVIS_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#1e242b]/8 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-[#faf7f2]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#1e242b]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#f4efe6] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#153e35] text-white" : "text-[#1e242b]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5e6872] leading-relaxed border-t border-[#1e242b]/5 bg-[#faf7f2]/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-3xl bg-[#f4efe6] border border-[#1e242b]/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#1e242b]">
              Have a specific question about your pet?
            </h4>
            <p className="text-xs text-[#5e6872] mt-0.5">
              Call our clinic team directly or drop us a WhatsApp message.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${NIVIS_DATA.contact.phoneTel}`}
              className="px-4 py-2.5 rounded-full bg-[#153e35] text-white text-xs font-semibold hover:bg-[#1b4d3e] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {NIVIS_DATA.contact.phone}</span>
            </a>

            <a
              href={`https://wa.me/${NIVIS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
                NIVIS_DATA.contact.defaultWhatsappText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#eaf4ed] text-[#153e35] text-xs font-semibold hover:bg-[#d6ebd9] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
