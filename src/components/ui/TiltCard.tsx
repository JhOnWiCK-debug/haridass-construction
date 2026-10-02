"use client";

import React, { useState, useRef, MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "green" | "cyan" | "emerald" | "amber";
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "green",
  maxTilt = 12,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalizing between -1 and 1
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    // Tilt values
    const rotX = -yPct * maxTilt;
    const rotY = xPct * maxTilt;

    setTilt({ x: rotX, y: rotY });
    setGlare({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowShadowMap = {
    green: "hover:shadow-[0_0_35px_-8px_rgba(0,255,136,0.3)] hover:border-emerald-500/50",
    cyan: "hover:shadow-[0_0_35px_-8px_rgba(0,240,255,0.3)] hover:border-cyan-500/50",
    emerald: "hover:shadow-[0_0_35px_-8px_rgba(16,185,129,0.3)] hover:border-emerald-400/50",
    amber: "hover:shadow-[0_0_35px_-8px_rgba(245,158,11,0.3)] hover:border-amber-400/50",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className="group relative"
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#070d1b]/80 backdrop-blur-xl transition-all duration-300 ${glowShadowMap[glowColor]} ${className}`}
      >
        {/* Dynamic Specular Glare / Flashlight following cursor */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(400px circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.18), transparent 70%)`,
          }}
        />

        {/* Ambient Corner Flare */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500" />

        {/* Content with 3D Depth */}
        <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
