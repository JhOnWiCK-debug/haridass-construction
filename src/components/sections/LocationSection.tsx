"use client";

import React, { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export const LocationSection: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<{
    isOpen: boolean;
    label: string;
    sublabel: string;
  }>({
    isOpen: false,
    label: "Checking Clinic Status...",
    sublabel: "",
  });

  useEffect(() => {
    // Calculate current open/closed status for Chennai (IST UTC+5:30)
    const checkClinicHours = () => {
      const now = new Date();
      // UTC time + 5.5 hours for IST
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);

      const dayOfWeek = istDate.getDay(); // 0 is Sunday
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;

      // 5:00 PM = 17 * 60 = 1020 mins
      // 8:30 PM = 20 * 60 + 30 = 1230 mins
      const openTime = 17 * 60;
      const closeTime = 20 * 60 + 30;

      if (dayOfWeek === 0) {
        setCurrentStatus({
          isOpen: false,
          label: "Closed Today (Sunday)",
          sublabel: "Opens Monday at 5:00 PM",
        });
      } else if (currentTimeInMinutes >= openTime && currentTimeInMinutes <= closeTime) {
        setCurrentStatus({
          isOpen: true,
          label: "Open Now",
          sublabel: "Consultations active until 8:30 PM today",
        });
      } else if (currentTimeInMinutes < openTime) {
        setCurrentStatus({
          isOpen: false,
          label: "Closed Now",
          sublabel: "Opens today at 5:00 PM",
        });
      } else {
        setCurrentStatus({
          isOpen: false,
          label: "Closed for the Day",
          sublabel: dayOfWeek === 6 ? "Opens Monday at 5:00 PM" : "Opens tomorrow at 5:00 PM",
        });
      }
    };

    checkClinicHours();
    const interval = setInterval(checkClinicHours, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/60">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            Clinic Location & Hours
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Our Clinic in Mogappair East
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Conveniently situated on Valayapathi Salai (6th Block). Visit us for professional evening dental care with easy parking and accessibility.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                title="Jaksh's Dental Junction Mogappair East Google Map Location"
                src={CLINIC_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Map Helper Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-md border border-slate-200/80 max-w-xs pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900">
                    Jaksh&apos;s Dental Junction
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Valayapathi Salai, Block 6, Mogappair East
                </p>
              </div>

              {/* Direct Open in Google Maps Overlay CTA on bottom right */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-emerald-800 text-xs font-bold shadow-md hover:bg-emerald-50 transition-colors border border-slate-200"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Clinic Details & Opening Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address & Contact Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 shadow-xs space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Clinic Details
                  </span>
                  
                  {/* Live Open / Closed Indicator */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      currentStatus.isOpen
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        currentStatus.isOpen ? "bg-white animate-pulse" : "bg-slate-500"
                      }`}
                    />
                    {currentStatus.label}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs italic text-emerald-800 mt-0.5 font-medium">
                  {CLINIC_INFO.tagline}
                </p>
              </div>

              {/* Address details */}
              <div className="space-y-3 text-sm text-slate-700 border-t border-emerald-200/60 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Address:</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {CLINIC_INFO.address.street},<br />
                      {CLINIC_INFO.address.block}, {CLINIC_INFO.address.area},<br />
                      {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.pincode}
                    </p>
                    <div className="mt-1.5 inline-block text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-emerald-200 text-slate-600">
                      Plus Code: <strong>{CLINIC_INFO.plusCode}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Phone for Appointments:</p>
                    <a
                      href={CLINIC_INFO.phone}
                      className="text-base sm:text-lg font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Get Directions & Call Clinic */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>

                <a
                  href={CLINIC_INFO.phone}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-900 bg-white hover:bg-emerald-100/80 border border-emerald-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Call Clinic
                </a>
              </div>
            </div>

            {/* Opening Hours Schedule Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Opening Hours
                  </h4>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">
                  {currentStatus.sublabel}
                </span>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm">
                {CLINIC_INFO.timings.schedule.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-1.5 px-3 rounded-xl ${
                      !item.isOpen
                        ? "bg-rose-50/70 text-rose-900 font-bold border border-rose-100"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="font-medium">{item.day}</span>
                    <span
                      className={`font-semibold ${
                        !item.isOpen ? "text-rose-700 uppercase tracking-wide text-xs" : "text-emerald-800"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-500 text-center">
                * Prior phone or WhatsApp appointment is recommended to minimize waiting time.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
