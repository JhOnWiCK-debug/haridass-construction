"use client";

import React, { useState } from "react";
import { POST_TREATMENT_CARE, PostCareTopic } from "@/data/postCare";
import { PostCareModal } from "@/components/ui/PostCareModal";
import {
  HeartPulse,
  Activity,
  Smile,
  Sparkles,
  Layers,
  ShieldCheck,
  ShieldAlert,
  Sun,
  CheckCircle2,
  ChevronRight,
  Clock,
  Ban,
  FileCheck2,
} from "lucide-react";

interface PostCareSectionProps {
  onOpenAppointment?: () => void;
}

export const PostCareSection: React.FC<PostCareSectionProps> = ({ onOpenAppointment }) => {
  const [selectedTopic, setSelectedTopic] = useState<PostCareTopic | null>(null);

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-emerald-600" />;
      case "Smile":
        return <Smile className="w-6 h-6 text-emerald-600" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-emerald-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-emerald-600" />;
      case "Sun":
        return <Sun className="w-6 h-6 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  const handleBook = () => {
    if (onOpenAppointment) {
      onOpenAppointment();
    } else {
      const target = document.querySelector("#appointment");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="post-treatment-care"
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-emerald-50/40 to-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
            Patient Recovery & Home Advice
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Post-Treatment Care
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Fast, comfortable recovery depends on proper post-operative care. Click on your specific procedure below to open interactive guidance covering what to expect, immediate aftercare, diet, and signs to watch for.
          </p>
        </div>

        {/* 8 Care Topic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POST_TREATMENT_CARE.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className="clinic-card-hover group bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs hover:border-emerald-400 cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTopic(topic);
                }
              }}
              aria-label={`Open post care instructions for ${topic.title}`}
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getTopicIcon(topic.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800">
                    {topic.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {topic.subtitle}
                </p>

                {/* Micro preview chips */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md">
                    <Clock className="w-3 h-3 text-emerald-600" /> First 24h
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md">
                    <Ban className="w-3 h-3 text-amber-600" /> Things to avoid
                  </span>
                </div>
              </div>

              {/* Tap to open action */}
              <div className="mt-5 pt-3 border-t border-emerald-50 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                <span>View Full Care Guide</span>
                <span className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-emerald-100/40 border border-emerald-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-950">
                Need Specific Personalized Aftercare Advice?
              </h4>
              <p className="text-xs text-emerald-800">
                Every patient heals uniquely. If you recently had a procedure done at Jaksh&apos;s Dental Junction and have questions, call us directly.
              </p>
            </div>
          </div>
          <button
            onClick={handleBook}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-900 bg-white hover:bg-emerald-50 border border-emerald-200 transition-colors shadow-2xs shrink-0"
          >
            Contact Clinic
          </button>
        </div>

      </div>

      {/* Interactive Modal */}
      <PostCareModal
        topic={selectedTopic}
        onClose={() => setSelectedTopic(null)}
        onBookAppointment={handleBook}
      />
    </section>
  );
};
