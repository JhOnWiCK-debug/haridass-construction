"use client";

import React, { useState } from "react";
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviews = VETRI_DATA.reviews;

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#faf8f5] border-b border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
              Verified Google Testimonials
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#11161b]">
              Pet parents are talking.
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 p-4 rounded-sm bg-[#f4efe6] border border-[#ded5c5]">
            <div className="text-center pr-4 border-r border-[#ded5c5]">
              <span className="font-serif text-3xl font-bold text-[#11161b]">5.0</span>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#11161b]">
                6 Google Reviews
              </div>
              <a
                href={VETRI_DATA.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#0f4c3a] hover:underline inline-flex items-center gap-1"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Carousel & Cards Section */}
        {/* Desktop 3-Card Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ded5c5] rounded-sm p-8 flex flex-col justify-between hover:border-[#0f4c3a] hover:shadow-editorial transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 text-xs tracking-wider">
                    ★★★★★
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#5e6872] bg-[#f4efe6] px-2 py-0.5 rounded-xs">
                    {rev.petContext}
                  </span>
                </div>

                <blockquote className="text-sm text-[#11161b] leading-relaxed italic">
                  "{rev.text}"
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0ebe1] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-[#11161b]">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-[#5e6872]">{rev.source}</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#0f4c3a]/10 text-[#0f4c3a] flex items-center justify-center text-xs font-bold">
                  {rev.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Carousel */}
        <div className="block lg:hidden">
          <div className="bg-white border border-[#ded5c5] rounded-sm p-6 sm:p-8 relative shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500 text-sm tracking-wider">
                  ★★★★★
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#5e6872] bg-[#f4efe6] px-2 py-0.5 rounded-xs">
                  {reviews[activeIndex].petContext}
                </span>
              </div>

              <blockquote className="text-base text-[#11161b] leading-relaxed italic min-h-[120px]">
                "{reviews[activeIndex].text}"
              </blockquote>

              <div className="pt-4 border-t border-[#f0ebe1] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#11161b]">
                    {reviews[activeIndex].author}
                  </h4>
                  <p className="text-xs text-[#5e6872]">{reviews[activeIndex].source}</p>
                </div>
                <span className="text-xs text-[#0f4c3a] font-medium">
                  Review {activeIndex + 1} of {reviews.length}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === i ? "bg-[#0f4c3a] w-6" : "bg-[#ded5c5]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevReview}
                className="p-2 rounded-sm border border-[#ded5c5] bg-white text-[#11161b] hover:bg-[#f4efe6]"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                className="p-2 rounded-sm border border-[#ded5c5] bg-white text-[#11161b] hover:bg-[#f4efe6]"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Integrity Disclaimer */}
        <div className="mt-12 text-center text-xs text-[#5e6872] max-w-xl mx-auto">
          Reviews quoted are unedited testimonials submitted by real pet parents on Vetri's Google Business Profile.
        </div>

      </div>
    </section>
  );
}
