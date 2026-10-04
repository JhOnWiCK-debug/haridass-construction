"use client";

import React from "react";
import Image from "next/image";
import { Doctor } from "@/data/doctors";
import { Calendar, Award, CheckCircle2, Shield, User, MapPin } from "lucide-react";

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctorName: string) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBook }) => {
  return (
    <div className="clinic-card-hover flex flex-col h-full bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden group">
      
      {/* Top Image or Avatar Header */}
      <div className="relative aspect-4/3 w-full bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100/40 overflow-hidden">
        {doctor.hasPhoto && doctor.image ? (
          <Image
            src={doctor.image}
            alt={`${doctor.name} - ${doctor.specialty} at Jaksh's Dental Junction`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-104"
          />
        ) : (
          /* Respectful placeholder for doctors without photo */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-emerald-50 to-emerald-100/50">
            <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-2xl mb-2">
              {doctor.name
                .replace("Dr. ", "")
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
              {doctor.specialty}
            </span>
          </div>
        )}

        {/* Role badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold shadow-xs ${
              doctor.role === "founder"
                ? "bg-emerald-600 text-white"
                : "bg-white/95 text-slate-800 border border-slate-200"
            }`}
          >
            {doctor.role === "founder" && <Award className="w-3.5 h-3.5 text-amber-300" />}
            {doctor.title}
          </span>
        </div>

        {/* Location tag */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 text-slate-700 shadow-2xs">
            <MapPin className="w-3 h-3 text-emerald-600" />
            {doctor.location}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
              {doctor.name}
            </h3>
            <p className="text-sm font-semibold text-emerald-700 mt-0.5">
              {doctor.specialty}
            </p>
          </div>

          {/* Experience & Verified Credentials if provided */}
          {doctor.experience && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/60">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              {doctor.experience}
            </div>
          )}

          {doctor.qualifications && (
            <p className="text-xs font-medium text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100">
              {doctor.qualifications}
            </p>
          )}

          {doctor.awards && doctor.awards.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {doctor.awards.map((award, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200/70"
                >
                  <Award className="w-3 h-3 text-amber-600" />
                  {award}
                </span>
              ))}
            </div>
          )}

          <p className="text-xs text-slate-500 leading-relaxed pt-1">
            {doctor.bioSummary}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-6 mt-4 border-t border-slate-100">
          <button
            onClick={() => onBook(doctor.name)}
            className="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200/80 transition-all duration-200 flex items-center justify-center gap-2 group-hover:border-emerald-500"
          >
            <Calendar className="w-4 h-4" />
            Book with {doctor.name.split(" ")[1]}
          </button>
        </div>

      </div>

    </div>
  );
};
