"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#18332E]/92 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#EEF5EF] bg-white/10 px-2.5 py-1 rounded border border-white/10">
            {item.category}
          </span>
          <span className="text-xs text-white/70">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div
        className="relative max-w-4xl w-full max-h-[75vh] aspect-4/3 sm:aspect-16/10 rounded-lg overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center"
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

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption */}
      <div
        className="absolute bottom-4 left-4 right-4 max-w-xl mx-auto p-3.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-center text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 id="lightbox-title" className="text-sm font-medium text-white">
          {item.title}
        </h4>
        <p className="text-xs text-white/75 mt-0.5 line-clamp-2">
          {item.description}
        </p>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center justify-center gap-6 mt-2 pt-2 border-t border-white/10 text-xs">
          <button onClick={handlePrev} className="text-[#EEF5EF] underline">
            Previous
          </button>
          <span>{currentIndex + 1} / {items.length}</span>
          <button onClick={handleNext} className="text-[#EEF5EF] underline">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
