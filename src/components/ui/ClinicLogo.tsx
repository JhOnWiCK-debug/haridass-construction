import React from "react";

interface ClinicLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon" | "stacked";
  invert?: boolean;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  className = "",
  size = "md",
  variant = "full",
  invert = false,
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const titleSizes = {
    sm: "text-base font-bold",
    md: "text-lg font-bold tracking-tight",
    lg: "text-2xl font-bold tracking-tight",
  };

  const subtitleSizes = {
    sm: "text-[10px]",
    md: "text-xs",
    lg: "text-sm",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Caring Hand & Sparkle Tooth Emblem inspired by clinic signboard */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-2xl ${
          invert
            ? "bg-white/10 text-white border border-white/20"
            : "bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-sm"
        } transition-transform duration-300 group-hover:scale-105 shrink-0`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4"
        >
          {/* Supportive Caring Hand Palm */}
          <path
            d="M8 26C11 28 15 31 20 31C26 31 31 27 33 24C31 22 27 21 24 23C22 24.3 19 25 16 24C12 22.7 9 24 8 26Z"
            fill={invert ? "#ffffff" : "#16a34a"}
            opacity="0.85"
          />
          {/* Gentle Supporting Fingers Curve */}
          <path
            d="M6 22C7 20 10 19 13 21C16 23 20 23 23 21C25 19.5 28 19 31 20"
            stroke={invert ? "#ffffff" : "#15803d"}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Stylized Tooth Molar */}
          <path
            d="M14 13C14 9.5 16.5 8 20 8C23.5 8 26 9.5 26 13C26 16.5 24.8 19.5 24 22C23.3 24 22 24 21 21C20.5 19.5 19.5 19.5 19 21C18 24 16.7 24 16 22C15.2 19.5 14 16.5 14 13Z"
            fill={invert ? "#ffffff" : "#22c55e"}
          />
          {/* Sparkle of Health */}
          <path
            d="M27 9L28 7L29 9L31 10L29 11L28 13L27 11L25 10L27 9Z"
            fill={invert ? "#86efac" : "#15803d"}
          />
        </svg>
      </div>

      {variant !== "icon" && (
        <div className="flex flex-col leading-tight">
          <span
            className={`${titleSizes[size]} ${
              invert ? "text-white" : "text-emerald-950 font-extrabold"
            } tracking-tight`}
          >
            JAKSH&apos;S <span className="text-emerald-600 font-extrabold">DENTAL</span> JUNCTION
          </span>
          <span
            className={`${subtitleSizes[size]} ${
              invert ? "text-emerald-100/80" : "text-slate-500 font-medium"
            } italic tracking-wide`}
          >
            Where dentistry & kindness meet
          </span>
        </div>
      )}
    </div>
  );
};
