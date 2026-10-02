"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, ShieldCheck, UserCheck, Flame } from "lucide-react";

export default function SolarAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(24);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 250);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="rounded-2xl border border-white/15 bg-[#050b16]/90 p-5 shadow-2xl backdrop-blur-xl space-y-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
            <Volume2 className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              REAL CALL RECORDING // POD #04 (CDMX)
            </div>
            <div className="text-[11px] text-gray-400 font-mono">
              Homeowner: Mark S. • San Diego, CA (SDG&amp;E NEM 3.0)
            </div>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
          QUALIFIED SIT
        </span>
      </div>

      {/* Simulated Waveform with Interactive Scrub */}
      <div className="flex items-center gap-1 h-10 px-2 py-1 bg-white/[0.02] rounded-xl border border-white/5 overflow-hidden">
        {Array.from({ length: 42 }).map((_, i) => {
          const height = Math.sin(i * 0.4) * 16 + 18 + (i % 3) * 5;
          const isPassed = (i / 42) * 100 <= progress;
          return (
            <div
              key={i}
              onClick={() => setProgress((i / 42) * 100)}
              style={{ height: `${height}px` }}
              className={`w-1.5 rounded-full cursor-pointer transition-all duration-150 ${
                isPassed
                  ? "bg-gradient-to-t from-emerald-500 to-cyan-400"
                  : "bg-white/15 hover:bg-white/30"
              }`}
            />
          );
        })}
      </div>

      {/* Player Controls & Time */}
      <div className="flex items-center justify-between text-xs font-mono text-gray-300">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)]"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
          </button>
          <div>
            <span className="text-white font-bold">
              {Math.floor((progress / 100) * 184 / 60)}:
              {String(Math.floor(((progress / 100) * 184) % 60)).padStart(2, "0")}
            </span>
            <span className="text-gray-500"> / 03:04</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-400">
          <UserCheck className="h-3.5 w-3.5 text-cyan-400" />
          <span>Caller: Andrea M. (Neutral Accent)</span>
        </div>
      </div>

      {/* Real-Time Transcript Snippet */}
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] font-mono text-gray-300 space-y-1.5">
        <div className="text-emerald-400">
          [01:14] Rep: &ldquo;Totally understand Mark, with SDG&amp;E pushing that 32% rate hike last January, your current $340 average is set to hit over $410 next summer. If we can lock you in at a flat $195 with battery backup and zero out of pocket, does Thursday at 5:30 work for both you and your wife?&rdquo;
        </div>
        <div className="text-cyan-300">
          [01:31] Homeowner: &ldquo;Yeah Thursday at 5:30 works. Put it on the calendar.&rdquo;
        </div>
      </div>
    </div>
  );
}
