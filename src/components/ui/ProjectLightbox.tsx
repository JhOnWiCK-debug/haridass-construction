"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin, Tag, MessageSquare, Phone } from "lucide-react";
import { ProjectItem, BUSINESS_INFO } from "@/data/constructionData";

interface ProjectLightboxProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: ProjectItem) => void;
  onInquire: (projectName: string) => void;
}

export default function ProjectLightbox({
  project,
  projects,
  isOpen,
  onClose,
  onSelectProject,
  onInquire,
}: ProjectLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, project, projects]);

  if (!isOpen || !project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    onSelectProject(projects[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    onSelectProject(projects[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-6 transition-all duration-300">
      <div 
        className="relative w-full max-w-5xl bg-[#111317] border border-white/15 rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 text-gray-300 hover:text-white bg-black/70 hover:bg-black rounded-full border border-white/10 transition-colors"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Container */}
        <div className="relative flex-1 bg-black min-h-[300px] sm:min-h-[440px] md:min-h-[540px] flex items-center justify-center overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black text-white rounded-full border border-white/15 transition-transform hover:scale-105"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black text-white rounded-full border border-white/15 transition-transform hover:scale-105"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 text-xs font-mono bg-black/70 px-2.5 py-1 rounded text-gray-300 border border-white/10">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>

        {/* Project Meta Sidebar */}
        <div className="w-full md:w-80 lg:w-96 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#111317]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 rounded-sm">
                {project.workType}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                {project.location}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif text-white mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="space-y-2 py-4 border-t border-b border-white/10 text-xs text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-400">Builder</span>
                <span className="text-white font-medium">HARIDASS CONSTRUCTION</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Location</span>
                <span className="text-white font-medium">{project.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Category</span>
                <span className="text-white font-medium capitalize">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status</span>
                <span className="text-[#c5a880] font-medium">Completed / Verified</span>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-2.5">
            <button
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="w-full py-3 px-4 bg-[#c5a880] hover:bg-[#dfbe99] text-[#090a0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Inquire About Similar Work
            </button>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
