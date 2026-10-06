"use client";

import React from "react";
import { NIVIS_DATA } from "@/data/nivisData";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  MessageCircle,
  Building,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export function LocationSection() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#f4efe6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153e35]/10 text-[#153e35] text-[11px] font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#c86343]" />
            <span>Thiruverkadu Veterinary Destination</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[#1e242b] font-medium tracking-tight mb-4">
            Come visit{" "}
            <span className="italic text-[#153e35] font-normal">us.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed font-light">
            Conveniently situated right by the Thirumalai Balaji Nagar Bus Stop on Main Road, MGR
            Nagar, Thiruverkadu.
          </p>
        </div>

        {/* Desktop: Left Map, Right Info | Mobile: Map First, Info Below */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Map Column (Mobile First, Desktop Left) */}
          <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col">
            <div className="relative w-full h-[360px] sm:h-[450px] lg:h-full min-h-[380px] rounded-[2.5rem] overflow-hidden border border-[#1e242b]/10 shadow-editorial-lg bg-gray-200">
              {/* Real Embedded Google Map pointing to exact address */}
              <iframe
                title="Real Google Map for Nivis Pet Clinic & Pet Store"
                src={NIVIS_DATA.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.9] contrast-[1.05]"
              />

              {/* Floating Quick Action Overlay on Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#1e242b]/10 shadow-editorial flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#153e35] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1e242b]">
                      Thirumalai Balaji Nagar Bus Stop
                    </div>
                    <div className="text-[10px] text-[#5e6872]">
                      Main Road, MGR Nagar, Thiruverkadu
                    </div>
                  </div>
                </div>

                <a
                  href={NIVIS_DATA.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[#153e35] text-white text-[11px] font-semibold flex items-center gap-1 hover:bg-[#1b4d3e] shrink-0"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location Information Column (Desktop Right, Mobile Second) */}
          <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col justify-between">
            <div className="bg-white rounded-[2.5rem] p-7 sm:p-9 border border-[#1e242b]/8 shadow-editorial space-y-6">
              {/* Full Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#ebf1ee] text-[#153e35] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1e242b]">
                    {NIVIS_DATA.name}
                  </h3>
                  <address className="not-italic text-xs sm:text-sm text-[#5e6872] leading-relaxed mt-1">
                    {NIVIS_DATA.location.landmark}
                    <br />
                    {NIVIS_DATA.location.doorNo}
                    <br />
                    {NIVIS_DATA.location.area}
                    <br />
                    {NIVIS_DATA.location.city}, {NIVIS_DATA.location.state} {NIVIS_DATA.location.pincode}
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#1e242b]/8">
                <div className="w-10 h-10 rounded-2xl bg-[#f4efe6] text-[#153e35] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1e242b] uppercase tracking-wider">
                    Direct Phone Line
                  </div>
                  <a
                    href={`tel:${NIVIS_DATA.contact.phoneTel}`}
                    className="font-serif text-xl sm:text-2xl font-bold text-[#153e35] hover:underline block mt-0.5"
                  >
                    {NIVIS_DATA.contact.phone}
                  </a>
                  <span className="text-[11px] text-[#5e6872]">
                    Call for clinical enquiries, checkups & stock questions
                  </span>
                </div>
              </div>

              {/* Opening Hours & Availability */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#1e242b]/8">
                <div className="w-10 h-10 rounded-2xl bg-[#ebf1ee] text-[#153e35] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#c86343]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#1e242b] uppercase tracking-wider">
                      Opening Schedule
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-sm font-semibold text-[#1e242b] mt-1">
                    {NIVIS_DATA.hours.days}
                  </div>
                  <div className="text-xs text-[#c86343] font-medium mt-0.5">
                    Current listed closing time: {NIVIS_DATA.hours.closingTime}
                  </div>
                  <p className="text-[11px] text-[#5e6872] mt-2 leading-relaxed bg-[#f4efe6] p-2.5 rounded-xl border border-[#1e242b]/5">
                    {NIVIS_DATA.hours.statusNote}
                  </p>
                </div>
              </div>

              {/* Three Mandatory Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={NIVIS_DATA.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-full bg-[#153e35] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1b4d3e] transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>Get Directions</span>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={NIVIS_DATA.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-full bg-[#faf7f2] border border-[#1e242b]/15 text-[#1e242b] text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#ebf1ee] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>

                  <a
                    href={`tel:${NIVIS_DATA.contact.phoneTel}`}
                    className="py-3 px-4 rounded-full bg-[#f4efe6] border border-[#1e242b]/15 text-[#1e242b] text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#e8e2d5] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#153e35]" />
                    <span>Call Nivis</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Women-owned & Local Trust Tag */}
            <div className="mt-4 p-4 rounded-2xl bg-white/70 border border-[#1e242b]/5 flex items-center justify-between text-xs text-[#5e6872]">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#c86343]" />
                <strong className="text-[#1e242b] font-medium">{NIVIS_DATA.identity}</strong> Veterinary Clinic & Pet Store
              </span>
              <span className="font-semibold text-[#153e35]">5.0 ★ Google Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
