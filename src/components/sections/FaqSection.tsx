"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do you guarantee TCPA and Federal DNC compliance?",
      a: "Compliance is our foundational architecture. Before any list is loaded into our multi-line dialers, every phone number is scrubbed against the National Do Not Call (DNC) Registry, individual State DNC lists, and our proprietary TCPA Litigator Blacklist (which removes serial plaintiffs and known TCPA litigators). We also utilize STIR/SHAKEN A-attestation caller IDs to prevent spam flagging.",
    },
    {
      q: "What does the accent and language proficiency sound like?",
      a: "Our callers are based in our Tier-1 hubs in Guadalajara and Mexico City. They have lived, studied, or worked in North American environments and speak fluent, accent-neutral English. Listen to our live audio sample on this page to hear the clarity and conversational fluency yourself.",
    },
    {
      q: "How does the direct calendar and CRM integration work?",
      a: "We integrate directly with GoHighLevel, HubSpot, Salesforce, JobNimbus, and Google Calendar via native webhooks and API. When our rep verifies a qualified homeowner, the appointment is scheduled directly onto your chosen closer's calendar. Simultaneously, a webhook sends full MP3 call audio, transcript notes, and electric bill details to your Discord or Slack channel.",
    },
    {
      q: "What qualification criteria do you enforce before an appointment is booked?",
      a: "We calibrate qualification to your exact requirements. Standard criteria include: verified single-family homeowner deed (no renters), electric bill over $120/month, unshaded roof with 10+ years remaining life, and homeowner agreement for both decision-makers to be present for the consultation.",
    },
    {
      q: "How fast can our dedicated pod be dialed in and live?",
      a: "Our standard calibration sprint is 5 business days. During this period, we script your state-specific objection matrix, provision your local presence phone numbers, connect your CRM, and run 5 days of intensive dry-run scenario tests with your dedicated caller pod.",
    },
    {
      q: "What if a caller underperforms or needs replacement?",
      a: "Every pod is backed by our Zero-Downtime SLA. If any caller fails to maintain dial velocity or qualification standards, our dedicated on-site Team Lead replaces and trains a bench caller within 48 hours at zero additional cost to your organization.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#030713]/80 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-mono text-cyan-300">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>OPERATIONAL CLARITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Everything you need to know about partnering with House of Nexum&apos;s nearshore outbound infrastructure.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#070e1b]/70 backdrop-blur-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
