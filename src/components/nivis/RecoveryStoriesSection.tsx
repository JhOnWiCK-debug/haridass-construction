"use client";

import React from "react";
import Image from "next/image";
import { NIVIS_DATA } from "@/data/nivisData";
import { Star, Quote, Heart, AlertCircle, Sparkles } from "lucide-react";

export function RecoveryStoriesSection() {
  const storyCards = [
    {
      author: "Jaswinth Jawatg",
      pet: "Beloved Dog",
      highlight: "A dog's journey back to health",
      quote:
        "My dog is fully paralyzed. Dr. Karthika made my dog cured and now it's fully recovered. Thank u doctor. She is very caring and loving with pets, such a good human being. Once again thank u doctor, u give pet back.",
      image: "/images/nivis/indie-dog-happy.jpg",
      tag: "Paralysis Recovery",
    },
    {
      author: "Mathan Somu",
      pet: "Lara",
      highlight: "Lara's Parvo treatment & complete care",
      quote:
        "Doctor is care with my pet. My pet Lara is affected in paarvo, she cured my pet completely. Thank u doctor.",
      image: "/images/nivis/dog-wellness.jpg",
      tag: "Parvo Recovery",
    },
    {
      author: "Shanmugam",
      pet: "Puppy",
      highlight: "Dedicated treatment for a sick puppy",
      quote:
        "My dogs is affected in paarvo virus. Dr. Karthika saved my puppy's life. Thank u and grateful doctor. Continue your service madam keep it up.",
      image: "/images/nivis/puppy-recovery.jpg",
      tag: "Puppy Care",
    },
  ];

  return (
    <section id="stories" className="py-20 sm:py-28 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4efe6] text-[#153e35] text-[11px] font-semibold tracking-wider uppercase mb-3">
            <span>Real experiences. Real pet parents.</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.12] text-[#1e242b] font-medium tracking-tight mb-4">
            Stories that mean{" "}
            <span className="italic text-[#153e35] font-normal">everything.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed font-light">
            Real experiences shared by Nivis pet parents who entrusted their companions to
            compassionate, attentive veterinary hands.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#1e242b]">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold">5.0 ★ Google Rating</span>
            <span className="text-[#8fa89b]">•</span>
            <span className="text-[#5e6872]">5 Google Reviews</span>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyCards.map((story, idx) => (
            <div
              key={story.author}
              className="bg-white rounded-[2rem] border border-[#1e242b]/8 overflow-hidden shadow-editorial hover:shadow-editorial-lg transition-all duration-300 flex flex-col group"
            >
              {/* Pet Photograph Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e2d5]">
                <Image
                  src={story.image}
                  alt={`Atmospheric representation of a recovering pet`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#153e35] shadow-sm">
                    {story.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-medium">{story.pet}</span>
                  <div className="flex text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-300 text-amber-300" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Story Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-[#c86343]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{story.highlight}</span>
                  </div>

                  <blockquote className="font-serif text-lg sm:text-xl text-[#1e242b] leading-relaxed mb-6 font-normal">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#1e242b]/8 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#1e242b]">
                      — {story.author}
                    </div>
                    <div className="text-[11px] text-[#5e6872]">
                      Verified Google Review
                    </div>
                  </div>

                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#f4efe6] text-[#153e35]">
                    Customer experience
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Medical Transparency Disclaimer */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#f4efe6] border border-[#1e242b]/10 max-w-3xl mx-auto flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#8fa89b] shrink-0 mt-0.5" />
          <div className="text-xs text-[#5e6872] leading-relaxed">
            <strong className="text-[#1e242b] block mb-0.5">
              Customer Experience Notice & Medical Disclaimer:
            </strong>
            The stories above are authentic feedback shared by pet parents on Google Reviews. Each animal responds differently to veterinary therapy, and outcomes depend on disease stage, age, and timeliness of presentation. Nivis Pet Clinic provides attentive, evidence-based care and does not guarantee medical outcomes.
          </div>
        </div>
      </div>
    </section>
  );
}
