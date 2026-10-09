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
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFDF9] border-b border-[#E2E4DA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#737B73]">
            Location & Timings
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1E332A] font-normal tracking-tight mt-2 leading-tight">
            Find our clinic in Mogappair East.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#29342D]/80 leading-relaxed font-normal">
            Accessible on Valayapathi Salai (6th Block). Dedicated evening hours suited for families, students, and working professionals.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-[#E2E4DA] bg-[#F8F6F0]">
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
              <div className="absolute top-4 left-4 bg-[#FFFDF9]/95 backdrop-blur-xs p-3 rounded-lg border border-[#E2E4DA] max-w-xs shadow-xs pointer-events-none">
                <p className="text-xs font-medium text-[#1E332A]">
                  Jaksh&apos;s Dental Junction
                </p>
                <p className="text-[11px] text-[#737B73] mt-0.5">
                  Valayapathi Salai, Block 6, Mogappair East
                </p>
              </div>

              {/* Open in Google Maps */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FFFDF9] text-[#29483A] text-xs font-medium border border-[#E2E4DA] shadow-xs hover:bg-[#F0F3EC]"
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
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8F6F0] border border-[#E2E4DA] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E4DA]">
                <h3 className="font-editorial text-2xl text-[#1E332A] font-normal">
                  Clinic Details
                </h3>
                
                {/* Live Open / Closed Tag */}
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium ${
                    currentStatus.isOpen
                      ? "bg-[#E7EDE3] text-[#29483A]"
                      : "bg-[#F0F3EC] text-[#737B73]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      currentStatus.isOpen ? "bg-[#29483A]" : "bg-[#737B73]"
                    }`}
                  />
                  {currentStatus.label}
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#29342D]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#29483A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1E332A]">Address</p>
                    <p className="text-xs text-[#737B73] mt-0.5 leading-relaxed">
                      {CLINIC_INFO.address.street}, {CLINIC_INFO.address.block},<br />
                      {CLINIC_INFO.address.area}, {CLINIC_INFO.address.city},<br />
                      Tamil Nadu {CLINIC_INFO.address.pincode}
                    </p>
                    <p className="text-[11px] font-mono text-[#737B73] mt-1">
                      Plus Code: {CLINIC_INFO.plusCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone className="w-4 h-4 text-[#29483A] shrink-0" />
                  <div>
                    <p className="text-[11px] text-[#737B73]">Telephone for Enquiries</p>
                    <a
                      href={CLINIC_INFO.phone}
                      className="text-sm font-medium text-[#29483A] hover:underline"
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
                  className="px-4 py-2.5 rounded-lg text-xs font-medium text-white bg-[#29483A] hover:bg-[#1E332A] text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>

                <a
                  href={CLINIC_INFO.phone}
                  className="px-4 py-2.5 rounded-lg text-xs font-medium text-[#29483A] bg-[#FFFDF9] hover:bg-[#F0F3EC] border border-[#E2E4DA] text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Clinic
                </a>
              </div>
            </div>

            {/* Opening Hours Schedule Card */}
            <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#E2E4DA] space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#E2E4DA]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#29483A]" />
                  <h4 className="text-xs font-medium uppercase tracking-wider text-[#1E332A]">
                    Consultation Hours
                  </h4>
                </div>
                <span className="text-[11px] text-[#737B73]">
                  {currentStatus.sublabel}
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                {CLINIC_INFO.timings.schedule.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-1 px-2.5 rounded ${
                      !item.isOpen
                        ? "bg-[#FAF3F2] text-[#8F3E37] font-medium"
                        : "text-[#29342D]/85 hover:bg-[#F8F6F0]"
                    }`}
                  >
                    <span>{item.day}</span>
                    <span className={!item.isOpen ? "text-[#8F3E37]" : "font-medium text-[#29483A]"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-[#737B73] text-center">
                * Prior appointment enquiry is recommended to ensure dedicated time.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
