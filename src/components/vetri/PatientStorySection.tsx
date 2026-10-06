"use client";

import React from "react";
import Image from "next/image";
import { MessageSquareQuote, Heart, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

interface PatientStorySectionProps {
  onOpenAppointment: () => void;
}

export function PatientStorySection({ onOpenAppointment }: PatientStorySectionProps) {
  const story = VETRI_DATA.featuredStory;

  return (
    <section id="stories" className="py-20 lg:py-28 bg-[#f4efe6] border-b border-[#e2dacb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
            Senior Pet Spotlight
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#11161b] mt-2">
            Real care. Real stories.
          </h2>
        </div>

        {/* Featured Story Editorial Card */}
        <div className="bg-[#faf8f5] border border-[#ded5c5] rounded-sm shadow-editorial-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual: Senior Pet Imagery */}
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] bg-[#e8e2d5]">
              <Image
                src="/images/vetri/senior-dog-care.jpg"
                alt="Gentle senior dog receiving loving veterinary care"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />

              {/* Gentle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Verified Pet Tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-sm text-xs font-semibold text-[#11161b] border border-white/40 shadow-xs flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-[#b85433] text-[#b85433]" />
                <span>Patient Note</span>
              </div>

              {/* Image Transparency Label */}
              <div className="absolute bottom-4 left-4 right-4 text-[10px] text-zinc-300 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-sm">
                *General veterinary care photograph shown for supportive care illustration.
              </div>
            </div>

            {/* Narrative Editorial Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                
                {/* Pet Name & Age Header */}
                <div className="flex items-baseline justify-between border-b border-[#e8e2d5] pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#5e6872] block">
                      Case Study
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#11161b] tracking-tight">
                      {story.petName}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-[#0f4c3a]/10 text-[#0f4c3a] text-xs font-semibold uppercase tracking-wider rounded-sm">
                      {story.age}
                    </span>
                    <span className="block text-[11px] text-[#5e6872] mt-0.5">
                      {story.condition}
                    </span>
                  </div>
                </div>

                {/* Actual Unedited Review Quote */}
                <div className="relative pl-6 border-l-2 border-[#0f4c3a] space-y-3">
                  <blockquote className="font-serif text-xl sm:text-2xl text-[#11161b] font-normal leading-relaxed italic">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-amber-500 text-sm">★★★★★</span>
                    <span className="text-xs font-semibold text-[#11161b]">
                      {story.author}
                    </span>
                    <span className="text-xs text-[#5e6872]">· {story.source}</span>
                  </div>
                </div>

                {/* Responsible Editorial Perspective */}
                <p className="text-sm text-[#5e6872] leading-relaxed">
                  {story.note}
                </p>

                {/* What supportive care means at Vetri */}
                <div className="bg-[#f4efe6] p-4 rounded-sm border border-[#e2dacb] text-xs text-[#374151] space-y-2">
                  <div className="font-semibold text-[#11161b] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0f4c3a]" />
                    Supportive Care Principles at Vetri:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#5e6872]">
                    <li>Gentle IV and subcutaneous fluid therapy in a quiet setting</li>
                    <li>Close monitoring of vital signs and hydration levels</li>
                    <li>Stress-reduction techniques tailored to older, sensitive companions</li>
                  </ul>
                </div>

              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f4c3a] hover:bg-[#165b4c] rounded-sm transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </button>

                <a
                  href={VETRI_DATA.whatsappLinks.seniorPet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#11161b] bg-white border border-[#ded5c5] hover:border-[#11161b] rounded-sm transition-colors"
                >
                  <span>Inquire About Supportive Care</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
