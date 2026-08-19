"use client";

import React, { useState } from "react";
import SplineScene from "../SplineScene";
import { bioData, socialLinks } from "../../data/portfolioData";

export default function ContactDirectChannels() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(bioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* 1. TOP: Interactive Spline 3D Scene Canvas */}
      <div className="relative w-full h-[360px] md:h-[420px] rounded-3xl border border-white/15 bg-[#0b0b0b] shadow-2xl overflow-hidden group">
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#050505]/80 border border-white/10 text-[10px] font-mono text-[#ff824d] flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-ping" />
          <span>INTERACTIVE 3D SPLINE CANVAS</span>
        </div>
        <SplineScene className="w-full h-full" />
      </div>

      {/* 2. BOTTOM: Direct Contact & Email Card */}
      <div className="p-8 rounded-3xl bg-[#0b0b0b] border border-white/10 flex flex-col gap-6 relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5e24]/10 rounded-full blur-2xl group-hover:bg-[#ff5e24]/20 transition-colors pointer-events-none" />

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#ff5e24] uppercase tracking-widest font-bold">
              DIRECT EMAIL
            </span>
            <button
              onClick={handleCopyEmail}
              className="text-[10px] font-mono text-[#a3a3a8] hover:text-[#ff5e24] transition-colors cursor-pointer active:scale-95"
            >
              {copied ? "✓ COPIED" : "COPY EMAIL"}
            </button>
          </div>
          <a
            href={`mailto:${bioData.email}`}
            className="text-xl md:text-3xl font-bold text-[#f6f5f2] hover:text-[#ff5e24] transition-colors break-all"
          >
            {bioData.email}
          </a>
        </div>

        <div>
          <span className="text-xs font-mono text-[#73737c] uppercase tracking-widest block mb-1">
            CURRENT LOCATION
          </span>
          <p className="text-sm md:text-base font-semibold text-[#f6f5f2]">
            {bioData.location} (DTU Campus)
          </p>
        </div>

        <div>
          <span className="text-xs font-mono text-[#73737c] uppercase tracking-widest block mb-2">
            SOCIAL SHORTCUTS
          </span>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-colors active:scale-95 ${
                  link.name === "WhatsApp"
                    ? "bg-[#ff5e24]/10 text-[#ff824d] border-[#ff5e24]/30 hover:bg-[#ff5e24] hover:text-white"
                    : "bg-white/[0.04] text-[#a3a3a8] border-white/10 hover:border-[#ff5e24] hover:text-[#f6f5f2]"
                }`}
              >
                {link.name} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Status Indicator Badge */}
      <div className="p-6 rounded-2xl bg-[#0b0b0b]/70 border border-white/10 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5e24] animate-pulse" />
          <span className="text-xs font-mono text-[#f6f5f2] uppercase tracking-wider font-medium">
            {bioData.status}
          </span>
        </div>
        <span className="text-xs font-mono text-[#73737c]">2026 Edition</span>
      </div>
    </div>
  );
}
