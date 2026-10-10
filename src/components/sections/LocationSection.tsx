"use client";

import React, { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/data/clinicInfo";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  Calendar,
} from "lucide-react";

interface LocationSectionProps {
  onOpenAppointmentModal?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const [currentStatus, setCurrentStatus] = useState<{
    isOpen: boolean;
    label: string;
    sublabel: string;
  }>({
    isOpen: false,
    label: "Checking Hours...",
    sublabel: "",
  });

  useEffect(() => {
    const checkClinicHours = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);

      const dayOfWeek = istDate.getDay();
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;

      const openTime = 17 * 60; // 5:00 PM
      const closeTime = 20 * 60 + 30; // 8:30 PM

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
          sublabel: "Consultations active until 8:30 PM",
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
          label: "Closed for Today",
          sublabel: dayOfWeek === 6 ? "Opens Monday at 5:00 PM" : "Opens tomorrow at 5:00 PM",
        });
      }
    };

    checkClinicHours();
    const interval = setInterval(checkClinicHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleBook = () => {
    if (onOpenAppointmentModal) {
      onOpenAppointmentModal();
    } else {
      const target = document.querySelector("#appointment");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F7F5EF] border-b border-[#D9E6DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF5EF] border border-[#D9E6DE] text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#176B57]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#18332E]">
              Location & Timings
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#18332E] font-normal tracking-tight mt-1 leading-tight">
            Find our clinic in Mogappair East.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#65756F] leading-relaxed font-normal">
            Accessible on Valayapathi Salai (6th Block). Dedicated evening hours suited for families, students, and working professionals.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-[#D9E6DE] bg-[#FFFFFF] shadow-xs">
              <iframe
                title="Jaksh's Dental Junction Mogappair East Google Map"
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
              <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 backdrop-blur-xs p-3 rounded-xl border border-[#D9E6DE] max-w-xs shadow-xs pointer-events-none">
                <p className="text-xs font-medium text-[#18332E]">
                  Jaksh&apos;s Dental Junction
                </p>
                <p className="text-[11px] text-[#65756F] mt-0.5">
                  Valayapathi Salai, Block 6, Mogappair East
                </p>
              </div>

              {/* Open in Google Maps */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#176B57] text-xs font-medium border border-[#D9E6DE] shadow-xs hover:bg-[#EEF5EF]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Hours, Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Details */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#D9E6DE] shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9E6DE]">
                <h3 className="font-editorial text-2xl text-[#18332E] font-normal">
                  Clinic Details
                </h3>
                
                {/* Live Open / Closed Tag */}
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    currentStatus.isOpen
                      ? "bg-[#EEF5EF] text-[#176B57]"
                      : "bg-[#F7F5EF] text-[#65756F]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      currentStatus.isOpen ? "bg-[#176B57]" : "bg-[#65756F]"
                    }`}
                  />
                  {currentStatus.label}
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#18332E]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#176B57] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#18332E]">Address</p>
                    <p className="text-xs text-[#65756F] mt-0.5 leading-relaxed">
                      {CLINIC_INFO.address.street}, {CLINIC_INFO.address.block},<br />
                      {CLINIC_INFO.address.area}, {CLINIC_INFO.address.city},<br />
                      Tamil Nadu {CLINIC_INFO.address.pincode}
                    </p>
                    <p className="text-[11px] font-mono text-[#65756F] mt-1">
                      Plus Code: {CLINIC_INFO.plusCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone className="w-4 h-4 text-[#176B57] shrink-0" />
                  <div>
                    <p className="text-[11px] text-[#65756F]">Telephone for Enquiries</p>
                    <a
                      href={CLINIC_INFO.phone}
                      className="text-sm font-medium text-[#176B57] hover:underline"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs font-medium text-white bg-[#176B57] hover:bg-[#125544] text-center flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>

                <a
                  href={CLINIC_INFO.phone}
                  className="px-4 py-2.5 rounded-full text-xs font-medium text-[#18332E] bg-[#EEF5EF] hover:bg-[#D9E6DE] border border-[#D9E6DE] text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#176B57]" />
                  Call Clinic
                </a>
              </div>
            </div>

            {/* Opening Hours Schedule Card */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#D9E6DE] shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#D9E6DE]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#176B57]" />
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[#18332E]">
                    Consultation Hours
                  </h4>
                </div>
                <span className="text-[11px] text-[#65756F]">
                  {currentStatus.sublabel}
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                {CLINIC_INFO.timings.schedule.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-1 px-2.5 rounded-lg ${
                      !item.isOpen
                        ? "bg-[#FAF3F2] text-[#8F3E37] font-medium"
                        : "text-[#18332E] hover:bg-[#EEF5EF]"
                    }`}
                  >
                    <span>{item.day}</span>
                    <span className={!item.isOpen ? "text-[#8F3E37]" : "font-medium text-[#176B57]"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-[#65756F] text-center">
                * Prior appointment enquiry is recommended to ensure dedicated time.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
