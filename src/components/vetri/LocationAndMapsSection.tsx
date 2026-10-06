"use client";

import React from "react";
import { MapPin, Phone, Clock, ExternalLink, Navigation, Compass, ShieldCheck } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function LocationAndMapsSection() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#faf8f5] border-b border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
            Location & Hours
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#11161b]">
            Find Vetri.
          </h2>
          <p className="text-base sm:text-lg text-[#5e6872] max-w-2xl">
            Conveniently situated in Kurinji Nagar, Perungudi, with parking and calm street access.
          </p>
        </div>

        {/* Real Map and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card (Left Column) */}
          <div className="lg:col-span-5 bg-white border border-[#ded5c5] rounded-sm p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-editorial">
            <div className="space-y-6">
              
              {/* Business Name & Tag */}
              <div className="space-y-1 pb-4 border-b border-[#f0ebe1]">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#11161b]">
                  {VETRI_DATA.name}
                </h3>
                <p className="text-xs text-[#0f4c3a] font-medium uppercase tracking-wider">
                  Care. Companionship. Commitment.
                </p>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#f4efe6] border border-[#ded5c5] flex items-center justify-center text-[#0f4c3a] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#11161b] block">
                    Address
                  </span>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    <strong>2, Erikarai St</strong> (Panchayat Main Road)<br />
                    Near Sunrise Pharmacy<br />
                    Kurinji Nagar, Perungudi<br />
                    Chennai, Tamil Nadu 600097
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#f4efe6] border border-[#ded5c5] flex items-center justify-center text-[#0f4c3a] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#11161b] block">
                    Consultation Hours
                  </span>
                  <p className="text-sm font-semibold text-[#0f4c3a]">
                    Open daily until 9:00 PM
                  </p>
                  <p className="text-xs text-[#5e6872]">
                    Monday to Sunday: 9:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-[#f4efe6] border border-[#ded5c5] flex items-center justify-center text-[#0f4c3a] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#11161b] block">
                    Direct Contact
                  </span>
                  <div className="space-y-0.5">
                    <a
                      href={`tel:${VETRI_DATA.phone}`}
                      className="text-sm font-semibold text-[#11161b] hover:text-[#0f4c3a] block"
                    >
                      {VETRI_DATA.phone} (Dr. Sandhiya. S)
                    </a>
                    <a
                      href={`tel:${VETRI_DATA.phoneSecondary.replace(/\s+/g, '')}`}
                      className="text-xs text-[#5e6872] hover:text-[#11161b] block"
                    >
                      {VETRI_DATA.phoneSecondary} (Dr. Ramu)
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#f0ebe1] space-y-2.5">
              <a
                href={VETRI_DATA.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f4c3a] hover:bg-[#165b4c] rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={VETRI_DATA.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 text-xs font-semibold text-center text-[#11161b] bg-white border border-[#ded5c5] hover:border-[#11161b] rounded-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#5e6872]" />
                  Google Maps
                </a>

                <a
                  href={`tel:${VETRI_DATA.phone}`}
                  className="py-2.5 text-xs font-semibold text-center text-[#11161b] bg-white border border-[#ded5c5] hover:border-[#11161b] rounded-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0f4c3a]" />
                  Call Vetri
                </a>
              </div>
            </div>

          </div>

          {/* Real Embedded Google Maps Iframe (Right Column) */}
          <div className="lg:col-span-7 rounded-sm overflow-hidden border border-[#ded5c5] shadow-editorial bg-[#e8e2d5] min-h-[420px] lg:min-h-full flex flex-col">
            <div className="bg-[#f4efe6] px-4 py-3 border-b border-[#ded5c5] flex items-center justify-between text-xs text-[#5e6872]">
              <div className="flex items-center gap-2 font-medium text-[#11161b]">
                <Compass className="w-4 h-4 text-[#0f4c3a]" />
                <span>Live Google Map Integration</span>
              </div>
              <span className="text-[11px] font-mono">Erikarai St · Kurinji Nagar</span>
            </div>

            <div className="relative flex-1 w-full h-full min-h-[380px]">
              <iframe
                title="Vetri Pet Clinic Google Map"
                src={VETRI_DATA.googleMaps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

        {/* SECTION 11 — "NEAR YOU" Subtle Local SEO Block */}
        <div className="mt-14 p-8 bg-[#f4efe6] border border-[#e2dacb] rounded-sm">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#0f4c3a] font-semibold">
              Local Veterinary Care
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#11161b]">
              Veterinary care in Perungudi
            </h3>
            <p className="text-sm text-[#5e6872] leading-relaxed">
              Conveniently located on Erikarai Street near Sunrise Pharmacy in Kurinji Nagar, Perungudi, Chennai. Welcoming pet parents from Perungudi, Kandanchavadi, Thoraipakkam, and the surrounding residential neighbourhoods seeking compassionate, unhurried veterinary attention.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
