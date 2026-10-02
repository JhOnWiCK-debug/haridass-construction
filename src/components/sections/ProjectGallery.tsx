"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, MapPin, Tag, ArrowRight } from "lucide-react";
import { PROJECTS, ProjectItem } from "@/data/constructionData";

interface ProjectGalleryProps {
  onOpenLightbox: (project: ProjectItem) => void;
  onOpenConsultation: () => void;
}

export default function ProjectGallery({ onOpenLightbox, onOpenConsultation }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "structural", label: "Civil & Structural" },
    { id: "renovation", label: "Renovation" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#090a0c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880] mb-3">
              <span className="w-2 h-0.5 bg-[#c5a880]" />
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Our Work Speaks for Itself.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
              Explore residential builds, commercial developments, and structural civil execution across Chennai.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all rounded-sm cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#c5a880] text-[#090a0c] shadow-md"
                    : "bg-[#111317] hover:bg-white/10 text-gray-300 border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project: ProjectItem, index: number) => {
            // Give subtle asymmetric heights for an editorial masonry feel
            const isTall = index === 1 || index === 5;
            const isWide = index === 0;

            return (
              <div
                key={project.id}
                onClick={() => onOpenLightbox(project)}
                className={`group relative bg-[#111317] border border-white/10 hover:border-[#c5a880]/60 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 ${
                  isWide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    isTall ? "h-[450px]" : isWide ? "h-[360px] sm:h-[420px]" : "h-[340px]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes={
                      isWide
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-[#090a0c]/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                  {/* Top Bar inside Card */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#c5a880] border border-white/15 rounded-sm">
                      {project.workType}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    </div>
                  </div>

                  {/* Bottom Meta Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#dfbe99] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c5a880] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Project Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Action */}
        <div className="mt-14 p-8 bg-[#111317] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-serif text-white">
              Planning a construction project in Chennai?
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Discuss your plot or structure with Haridass Construction for quality execution.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 rounded-sm cursor-pointer"
          >
            Request Project Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
