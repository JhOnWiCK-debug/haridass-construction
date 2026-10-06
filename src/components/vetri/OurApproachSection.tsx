"use client";

import React from "react";
import { Ear, Search, HeartHandshake, RefreshCw, ArrowRight } from "lucide-react";
import { VETRI_DATA } from "@/data/vetriData";

export function OurApproachSection() {
  const steps = [
    {
      num: "01",
      title: "Listen",
      short: "Understand the pet & the concern",
      desc:
        "Every visit begins with a conversation. You know your pet's subtle habits best — changes in sleep, water intake, or temperament offer crucial diagnostic clues.",
      icon: Ear,
    },
    {
      num: "02",
      title: "Assess",
      short: "Evaluate the pet carefully",
      desc:
        "A gentle, respectful physical examination designed to reduce clinical stress. We assess eyes, ears, coat, heart, and abdomen at a pace your pet feels comfortable with.",
      icon: Search,
    },
    {
      num: "03",
      title: "Care",
      short: "Provide appropriate treatment",
      desc:
        "Targeted medical therapies and preventive actions that directly address the condition. No inflated product recommendations — just clear, sound veterinary care.",
      icon: HeartHandshake,
    },
    {
      num: "04",
      title: "Follow Up",
      short: "Clear guidance & reassurance",
      desc:
        "Step-by-step home nursing instructions, medication schedules, and direct accessibility via WhatsApp so you're never unsure during recovery.",
      icon: RefreshCw,
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#faf8f5] border-b border-[#e8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#b85433]">
            How We Practice
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#11161b]">
            A calmer approach to veterinary care.
          </h2>
          <p className="text-base sm:text-lg text-[#5e6872] leading-relaxed">
            We believe that veterinary visits shouldn't be stressful for your pet or rushed for you. Here is how we ensure every consultation is thoughtful and thorough.
          </p>
        </div>

        {/* Process Steps: Clean Horizontal / Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white border border-[#ded5c5] rounded-sm p-8 flex flex-col justify-between hover:border-[#0f4c3a] hover:shadow-editorial transition-all group"
              >
                <div>
                  {/* Step number and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-[#ded5c5] group-hover:text-[#0f4c3a] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-sm bg-[#f4efe6] border border-[#e2dacb] flex items-center justify-center text-[#0f4c3a] group-hover:bg-[#0f4c3a] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#11161b] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#b85433] uppercase tracking-wider mb-3">
                    {step.short}
                  </div>
                  
                  <p className="text-sm text-[#5e6872] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Subtitle bottom indicator */}
                <div className="pt-6 mt-6 border-t border-[#f0ebe1] flex items-center justify-between text-xs text-[#5e6872]">
                  <span className="font-mono text-[11px]">Step {idx + 1} of 4</span>
                  {idx < 3 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#ded5c5] group-hover:text-[#0f4c3a] transition-colors hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Principles Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#f4efe6] border border-[#e2dacb] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-semibold text-[#11161b]">
              The Vetri Standard: "Compassion • Care • Cure"
            </h4>
            <p className="text-xs text-[#5e6872]">
              Grounded in medical necessity, gentle handling, and ongoing pet parent support.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs font-semibold text-[#0f4c3a] uppercase tracking-wider">
            <span>Listen First</span>
            <span className="text-[#ded5c5]">/</span>
            <span>Assess Thoroughly</span>
            <span className="text-[#ded5c5]">/</span>
            <span>Care Always</span>
          </div>
        </div>

      </div>
    </section>
  );
}
