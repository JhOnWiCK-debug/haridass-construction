"use client";

import React from "react";
import { TEAM_MEMBERS } from "@/data/doctors";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { ArrowRight, Calendar } from "lucide-react";

interface DoctorsSectionProps {
  onOpenAppointmentModal?: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onOpenAppointmentModal,
}) => {
  const handleGeneralBook = () => {
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
    <section id="team" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#DCE5D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EEE4] border border-[#B8CBB8] text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#29483A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#203B2F]">
              Clinical Practitioners & Staff
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#203B2F] font-normal tracking-tight mt-1 leading-tight">
            Meet Your Dental Care Team
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#344139] leading-relaxed font-normal">
            Led by Founder & Chief Dentist Dr. Krishnapriya G alongside multidisciplinary consultant specialists and dedicated clinical nursing support, providing comprehensive dental care for Mogappair East.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <DoctorCard key={member.id} member={member} />
          ))}
        </div>

        {/* General Appointment CTA After Whole Team Section */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#E7EEE4]/70 border border-[#DCE5D8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-editorial text-xl sm:text-2xl text-[#203B2F] font-normal">
              Consult with our dental team
            </h4>
            <p className="text-xs sm:text-sm text-[#344139] mt-1 max-w-xl">
              Specialist consultations in endodontics, oral surgery, orthodontics, periodontics, and pediatric care are available by scheduled appointment.
            </p>
          </div>

          <button
            onClick={handleGeneralBook}
            className="px-6 py-3 rounded-lg text-xs sm:text-sm font-medium tracking-wide text-white bg-[#29483A] hover:bg-[#203B2F] transition-all shrink-0 flex items-center gap-2 shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            Book an Appointment
          </button>
        </div>

      </div>
    </section>
  );
};
