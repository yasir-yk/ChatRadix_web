import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Sleek SVG Monogram CR Logo */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-meta-blue to-cyan-500 p-[1.5px] shadow-[0_0_15px_rgba(6,104,225,0.3)]">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#030712] font-sans font-black tracking-tighter">
          <svg
            viewBox="0 0 100 100"
            className="h-6.5 w-6.5 fill-none"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0668E1" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            {/* The letter C */}
            <path
              d="M 46 28 A 20 20 0 1 0 46 72"
              stroke="url(#logo-grad)"
            />
            {/* The letter R */}
            <path
              d="M 52 28 H 68 A 11 11 0 0 1 68 50 H 52 M 62 50 L 74 72"
              stroke="url(#logo-grad)"
            />
          </svg>
        </div>
      </div>
      {!iconOnly && (
        <span className="font-sans text-xl font-extrabold tracking-tight text-white">
          Chat<span className="bg-gradient-to-r from-meta-blue to-cyan-400 bg-clip-text text-transparent">Radix</span>
        </span>
      )}
    </div>
  );
}
