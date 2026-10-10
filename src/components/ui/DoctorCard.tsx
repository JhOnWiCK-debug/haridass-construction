"use client";

import React from "react";
import Image from "next/image";
import { TeamMember } from "@/data/doctors";
import { Award, Shield, Check } from "lucide-react";

interface DoctorCardProps {
  member: TeamMember;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ member }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl border border-[#D9E6DE] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#5F9B82] hover:shadow-xs">
      
      {/* Photo Frame or Refined Typographic Header */}
      <div className="relative aspect-4/5 w-full bg-[#EEF5EF]/60 overflow-hidden">
        {member.hasPhoto && member.image ? (
          <Image
            src={member.image}
            alt={`${member.name} - ${member.specialty} at Jaksh's Dental Junction`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-500 hover:scale-102"
          />
        ) : (
          /* Neutral, elegant portrait-free placeholder for members without supplied photo */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#EEF5EF]/60">
            <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border border-[#D9E6DE] flex items-center justify-center text-[#18332E] font-editorial text-2xl mb-3 shadow-xs">
              {member.name
                .replace("Dr. ", "")
                .replace("Mrs. ", "")
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span className="text-[11px] font-medium text-[#65756F] uppercase tracking-wider">
              {member.role}
            </span>
            <span className="text-xs font-serif text-[#18332E] mt-1">
              Consultant Profile
            </span>
          </div>
        )}

        {/* Role badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-medium tracking-wide ${
              member.role === "Chief Dentist"
                ? "bg-[#176B57] text-white shadow-xs"
                : "bg-[#FFFFFF]/95 text-[#18332E] border border-[#D9E6DE]"
            }`}
          >
            {member.role}
          </span>
        </div>
      </div>

      {/* Member Details */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          <div>
            <h3 className="font-editorial text-xl text-[#18332E] font-normal tracking-tight">
              {member.name}
            </h3>
            <p className="text-xs font-medium text-[#176B57] mt-0.5">
              {member.specialty}
            </p>
          </div>

          {/* Verified Qualifications / Experience if supplied */}
          {member.experience && (
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#EEF5EF] text-[#18332E] text-[11px] font-medium border border-[#D9E6DE]">
              <Shield className="w-3 h-3 text-[#176B57]" />
              <span>{member.experience}</span>
            </div>
          )}

          {member.qualifications && (
            <p className="text-[11px] text-[#65756F] bg-[#F7F5EF] p-2 rounded border border-[#D9E6DE]">
              {member.qualifications}
            </p>
          )}

          {member.awards && member.awards.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {member.awards.map((award, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#EEF5EF] text-[#18332E] text-[10px] font-medium border border-[#D9E6DE]"
                >
                  <Award className="w-3 h-3 text-[#C5A56A]" />
                  {award}
                </span>
              ))}
            </div>
          )}

          <p className="text-xs text-[#65756F] leading-relaxed pt-1">
            {member.bioSummary}
          </p>
        </div>

        {/* Note: Individual appointment buttons removed as explicitly requested by client */}
      </div>

    </div>
  );
};
