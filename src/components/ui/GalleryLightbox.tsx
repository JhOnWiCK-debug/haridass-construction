"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      const currentIndex = items.findIndex((i) => i.id === item.id);
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(prevIndex);
      }
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(nextIndex);
      }
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      {/* Top action controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-emerald-300 border border-white/10">
            {item.category}
          </span>
          <span className="text-xs text-slate-300">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Previous Button */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 z-20"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[80vh] aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-black/40 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Navigation Next Button */}
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 z-20"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption */}
      <div
        className="absolute bottom-4 left-4 right-4 max-w-2xl mx-auto p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-center text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 id="lightbox-title" className="text-base font-bold text-white mb-1">
          {item.title}
        </h4>
        <p className="text-xs text-slate-300 line-clamp-2">
          {item.description}
        </p>

        {/* Mobile touch controls */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-3 pt-2 border-t border-white/10">
          <button
            onClick={handlePrev}
            className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold text-white"
          >
            Previous
          </button>
          <span className="text-xs text-slate-400">
            {currentIndex + 1} of {items.length}
          </span>
          <button
            onClick={handleNext}
            className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
