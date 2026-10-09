"use client";

import React, { useState } from "react";
import { POST_TREATMENT_CARE, PostCareTopic } from "@/data/postCare";
import { PostCareModal } from "@/components/ui/PostCareModal";
import { ChevronRight, HeartPulse, Clock } from "lucide-react";

interface PostCareSectionProps {
  onOpenAppointment?: () => void;
}

export const PostCareSection: React.FC<PostCareSectionProps> = ({ onOpenAppointment }) => {
  const [selectedTopic, setSelectedTopic] = useState<PostCareTopic | null>(null);

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
      className="py-20 lg:py-28 bg-[#FFFDF9] border-b border-[#DCE5D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EEE4] border border-[#B8CBB8] text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#29483A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#203B2F]">
              Recovery & Patient Advice
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#203B2F] font-normal tracking-tight mt-1 leading-tight">
            Interactive post-treatment dental care.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#344139] leading-relaxed font-normal">
            Clear post-operative guidance helps protect healing tissue and ensures a smooth recovery. Select any procedure below to review aftercare instructions, diet advice, and warning signs.
          </p>
        </div>

        {/* 8 Care Topics — Calm Editorial Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POST_TREATMENT_CARE.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#DCE5D8] hover:border-[#A9C0A7] hover:bg-[#E7EEE4]/60 transition-all cursor-pointer flex flex-col justify-between group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTopic(topic);
                }
              }}
              aria-label={`Open care instructions for ${topic.title}`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#203B2F] bg-[#E7EEE4] px-2.5 py-0.5 rounded border border-[#DCE5D8]">
                  {topic.badge}
                </span>

                <h3 className="font-editorial text-xl text-[#203B2F] font-normal mt-3 group-hover:text-[#29483A] transition-colors leading-snug">
                  {topic.title}
                </h3>
                
                <p className="text-xs text-[#737B73] mt-1.5 line-clamp-2 leading-relaxed">
                  {topic.subtitle}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#DCE5D8] flex items-center justify-between text-xs font-medium text-[#29483A]">
                <span>Read care guide</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Advice callout */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F8F6F0] border border-[#DCE5D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#344139]">
          <div>
            <strong className="text-[#203B2F] font-medium">Recently visited our clinic?</strong>{" "}
            If you have questions about your healing or prescribed medication, please contact our front desk directly during evening hours.
          </div>
          <button
            onClick={handleBook}
            className="text-xs font-semibold text-[#29483A] hover:underline shrink-0"
          >
            Contact the clinic →
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
