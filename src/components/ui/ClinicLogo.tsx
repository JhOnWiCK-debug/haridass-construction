"use client";

import React from "react";
import Image from "next/image";

interface ClinicLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "wordmark" | "emblem";
  invert?: boolean;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  className = "",
  size = "md",
  variant = "full",
  invert = false,
}) => {
  const emblemSizes = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const titleSizes = {
    sm: "text-base font-normal",
    md: "text-lg font-normal",
    lg: "text-2xl font-normal",
  };

  const junctionSizes = {
    sm: "text-[9px] tracking-[0.2em]",
    md: "text-[10.5px] tracking-[0.24em]",
    lg: "text-xs tracking-[0.28em]",
  };

  const taglineSizes = {
    sm: "text-[9px]",
    md: "text-[10px]",
    lg: "text-xs",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Authentic Emblem */}
      {variant !== "wordmark" && (
        <div
          className={`${emblemSizes[size]} relative rounded-full overflow-hidden shrink-0 border ${
            invert ? "border-white/20" : "border-[#DCE5D8]"
          } bg-white shadow-xs`}
        >
          <Image
            src="/images/dental/clinic-official-logo.jpg"
            alt="Jaksh's Dental Junction Official Emblem"
            fill
            sizes="56px"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Refined Editorial Typographic Wordmark */}
      {variant !== "emblem" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-editorial ${titleSizes[size]} ${
                invert ? "text-white" : "text-[#203B2F]"
              } tracking-normal`}
            >
              Jaksh&apos;s
            </span>
            <span
              className={`font-sans font-medium uppercase ${junctionSizes[size]} ${
                invert ? "text-[#E7EEE4]" : "text-[#29483A]"
              }`}
            >
              Dental Junction
            </span>
          </div>
          <span
            className={`font-sans ${taglineSizes[size]} ${
              invert ? "text-[#B8CBB8]" : "text-[#737B73]"
            } mt-1 tracking-wider uppercase text-[9.5px]`}
          >
            Where dentistry & kindness meet
          </span>
        </div>
      )}
    </div>
  );
};
