"use client";

import React, { useState } from "react";
import { DOCTORS } from "@/data/doctors";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { Stethoscope, Award, Users, ShieldCheck } from "lucide-react";

interface DoctorsSectionProps {
  onSelectDoctor?: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctor }) => {
  const [filter, setFilter] = useState<"all" | "founder" | "consultant">("all");

  const filteredDoctors = DOCTORS.filter((doc) => {
    if (filter === "founder") return doc.role === "founder";
    if (filter === "consultant") return doc.role === "consultant";
    return true;
  });

  const handleBook = (doctorName: string) => {
    if (onSelectDoctor) {
      onSelectDoctor(doctorName);
    }
    const target = document.querySelector("#appointment");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-emerald-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
            Our Clinical Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Doctors & Specialists
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Led by Founder & Chief Dentist Dr. Krishnapriya G alongside a multidisciplinary panel of consultant specialists in Mogappair East, Chennai.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === "all"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200"
              }`}
            >
              All Specialists ({DOCTORS.length})
            </button>
            <button
              onClick={() => setFilter("founder")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === "founder"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200"
              }`}
            >
              Founder & Chief Dentist
            </button>
            <button
              onClick={() => setFilter("consultant")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === "consultant"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-emerald-50 border border-slate-200"
              }`}
            >
              Consultant Specialists
            </button>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} onBook={handleBook} />
          ))}
        </div>

        {/* Bottom Specialist Consultation Note */}
        <div className="mt-14 p-6 rounded-3xl bg-white border border-emerald-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Multidisciplinary Dental Consultations
              </h4>
              <p className="text-xs text-slate-500">
                Consultant surgeons, orthodontists, periodontists, and pedodontists available by scheduled appointment.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleBook("Specialist Consultation")}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shrink-0 shadow-xs"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
