"use client";

import React from "react";
import { Star, Quote, CheckCircle, ExternalLink } from "lucide-react";
import { CUSTOMER_REVIEWS, BUSINESS_INFO } from "@/data/constructionData";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#090a0c] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Google Overall Score Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
              <span className="w-2 h-0.5 bg-[#c5a880]" />
              Client Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Feedback Built on Real Experiences
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
              Authentic review sentiments from clients who trusted Haridass Construction with their property projects in Chennai.
            </p>
          </div>

          {/* Google Rating Box */}
          <div className="p-6 bg-[#111317] border border-white/10 rounded-sm flex items-center gap-6 shrink-0">
            <div className="text-center border-r border-white/10 pr-6">
              <div className="text-3xl font-serif font-bold text-white leading-none">
                4.8
              </div>
              <div className="flex items-center gap-1 text-amber-400 justify-center my-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <div className="text-[11px] text-gray-400 font-mono">out of 5.0</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">Google Reviews</span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 rounded">
                  Verified
                </span>
              </div>
              <p className="text-xs text-gray-400">21 Customer Ratings</p>
              <div className="text-[11px] text-[#c5a880] font-medium pt-0.5">
                Ambattur, Chennai Location
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative bg-[#111317] border border-white/10 hover:border-[#c5a880]/40 p-8 rounded-sm transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Quote icon accent */}
              <div className="text-[#c5a880]/30 group-hover:text-[#c5a880]/60 transition-colors mb-4">
                <Quote className="w-8 h-8" />
              </div>

              {/* Review Text */}
              <div className="flex-1">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-lg font-serif text-white group-hover:text-[#dfbe99] transition-colors leading-relaxed italic mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#c5a880]">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {review.author}
                    </div>
                    <div className="text-[11px] text-gray-400">
                      {review.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note compliant with instructions */}
        <div className="mt-8 text-center text-xs text-gray-400">
          Reviews aggregated from authentic customer ratings on Google for Haridass Construction, Ambattur.
        </div>
      </div>
    </section>
  );
}
