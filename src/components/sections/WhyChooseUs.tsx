"use client";

import React from "react";
import {
  HeartHandshake,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  Smile,
  CheckCircle,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
      title: "Patient-Focused Care",
      description:
        "Every treatment plan is personalized. We take the time to listen, explain clinical options transparently, and proceed only with your informed comfort.",
    },
    {
      icon: <Smile className="w-6 h-6 text-emerald-600" />,
      title: "Gentle & Comfortable Environment",
      description:
        "Designed to alleviate dental anxiety with relaxing interiors, soothing ambient lighting, and friendly pediatric decor to put all ages at ease.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Multidisciplinary Specialist Team",
      description:
        "From root canals by Chief Dentist Dr. Krishnapriya G to consultant oral surgeons, orthodontists, periodontists, and pedodontists.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      title: "Convenient Mogappair East Location",
      description:
        "Easily accessible on Valayapathi Salai (Block 6) with landmark Plus Code 35HP+8F, serving families across Mogappair and surrounding Chennai areas.",
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "Dedicated Evening Consultation Hours",
      description:
        "Open Monday through Saturday from 5:00 PM to 8:30 PM, making it convenient to attend appointments after work or school without disrupting daytime routines.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      title: "Women-Owned, Ethical Healthcare",
      description:
        "Founded on genuine clinical integrity and kindness. Strict sterilization, unhurried consultations, and patient-first medical ethics.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/60">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            Why Jaksh&apos;s Dental Junction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Caring Dentistry Backed by Clinical Dedication
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            We believe dental visits should be calm, transparent, and gentle. Here is why patients in Mogappair East trust our team.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="clinic-card-hover p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-6">
                  {pt.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Jaksh&apos;s Clinical Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
