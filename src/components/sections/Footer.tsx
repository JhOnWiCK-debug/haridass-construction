"use client";

import React from "react";
import { ShieldCheck, MapPin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#02050c] text-gray-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#081220] border border-emerald-500/40 p-1.5 shadow-[0_0_15px_rgba(0,255,136,0.25)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                    stroke="#00ff88"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3.5" fill="#00f0ff" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-wider text-white font-mono">
                HOUSE OF NEXUM
              </span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Institutional nearshore outbound call center infrastructure built exclusively for US residential and commercial solar organizations.
            </p>

            <div className="space-y-1 text-[11px] font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>Delivery Hubs: Guadalajara &amp; Mexico City, MX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                <span>US Partner Office: Austin, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-emerald-400" />
                <span>partnerships@houseofnexum.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <div className="text-xs uppercase tracking-wider text-white font-bold">
              Infrastructure
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#pillars" className="hover:text-emerald-400 transition-colors">
                  Mexico Caller Hubs
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-emerald-400 transition-colors">
                  DNC &amp; TCPA Scrubbing
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-emerald-400 transition-colors">
                  Discord &amp; CRM Webhooks
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-emerald-400 transition-colors">
                  3-Step Outbound Engine
                </a>
              </li>
              <li>
                <a href="#economics" className="hover:text-emerald-400 transition-colors">
                  Solar Economics &amp; ROI
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Regulatory Notice (Span 4) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Compliance Architecture</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              All calling operations strictly abide by the Telephone Consumer Protection Act (TCPA), the FTC Telemarketing Sales Rule (TSR), and state-level telemarketing statutes. Every campaign executes automated real-time national and state DNC scrubbing with STIR/SHAKEN certified origination.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} House of Nexum. All rights reserved. Bespoke Solar Appointment Infrastructure.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-gray-300 hover:text-white hover:border-emerald-500/30 transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
