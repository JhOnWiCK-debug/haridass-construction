"use client";

import React from "react";
import { MapPin, Phone, MessageSquare, ExternalLink, Navigation, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/data/constructionData";

export default function LocationSection() {
  const nearbyAreas = [
    "Ambattur O.T.",
    "Kallikuppam",
    "East Balaji Nagar",
    "Padi",
    "Korattur",
    "Surapet",
    "Mogappair",
    "Kolathur",
  ];

  return (
    <section id="location" className="relative py-24 sm:py-32 bg-[#0c0d10] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
            <span className="w-2 h-0.5 bg-[#c5a880]" />
            Local Chennai Presence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Our Location & Service Area
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
            Conveniently situated in Ambattur, Chennai, enabling swift site supervision and client meetings throughout northwest and metropolitan Chennai.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-[#111317] border border-white/10 p-8 rounded-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#c5a880] block mb-1">
                  Registered Office & Site Office
                </span>
                <h3 className="text-2xl font-serif text-white">
                  HARIDASS CONSTRUCTION
                </h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                  Real Estate Builders & Construction Company
                </p>
              </div>

              {/* Full Address */}
              <div className="flex items-start gap-3.5 p-4 bg-black/40 border border-white/10 rounded-sm">
                <MapPin className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300 leading-relaxed">
                  No. 48, 4th Street,
                  <br />
                  East Balaji Nagar,
                  <br />
                  Kallikuppam, Ambattur,
                  <br />
                  Chennai, Tamil Nadu 600053
                </div>
              </div>

              {/* Service Scope Statement */}
              <div className="p-4 bg-[#c5a880]/10 border border-[#c5a880]/30 rounded-sm">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] mb-1">
                  Service Coverage
                </div>
                <div className="text-sm text-gray-200 font-serif">
                  &ldquo;{BUSINESS_INFO.serviceArea}&rdquo;
                </div>
              </div>

              {/* Surrounding Areas Served */}
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mb-2.5">
                  Key Local Areas Served:
                </div>
                <div className="flex flex-wrap gap-2">
                  {nearbyAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 text-gray-300 rounded-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={BUSINESS_INFO.mapsSearchQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#c5a880]" />
                Get Directions on Google Maps
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="py-2.5 px-3 bg-[#111317] hover:bg-white/5 border border-white/10 text-white text-xs font-mono font-medium flex items-center justify-center gap-1.5 rounded-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 rounded-sm transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 bg-[#111317] border border-white/10 rounded-sm overflow-hidden relative min-h-[420px] flex flex-col">
            <iframe
              title="Haridass Construction Location Map - Ambattur, Chennai"
              src={BUSINESS_INFO.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px", filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="flex-1 w-full h-full"
            />

            {/* Overlay Bar */}
            <div className="p-4 bg-[#111317] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c5a880]" />
                <span>Kallikuppam, Ambattur, Chennai - 600053</span>
              </div>
              <a
                href={BUSINESS_INFO.mapsSearchQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a880] hover:underline flex items-center gap-1 font-medium"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
