"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplineScene from "../SplineScene";

export default function HeroShowcaseCard({ viewMode }) {
  const [portraitTilt, setPortraitTilt] = useState({ x: 0, y: 0 });
  const [portraitMousePos, setPortraitMousePos] = useState({ x: 0, y: 0 });

  const handlePortraitMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPortraitMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setPortraitTilt({ x: rotateX, y: rotateY });
  };

  const handlePortraitMouseLeave = () => {
    setPortraitTilt({ x: 0, y: 0 });
  };

  return (
    <div className="lg:col-span-5 relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        {viewMode === "spline" ? (
          <motion.div
            key="spline"
            initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0%)", opacity: 1 }}
            exit={{ clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
            className="relative w-full h-[450px] md:h-[550px] rounded-3xl border border-white/15 bg-[#0b0b0b] shadow-2xl overflow-hidden group"
          >
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#050505]/80 border border-white/10 text-[10px] font-mono text-[#ff824d] flex items-center gap-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-ping" />
              <span>INTERACTIVE 3D SPLINE SCENE</span>
            </div>
            <SplineScene className="w-full h-full" />
          </motion.div>
        ) : (
          <motion.div
            key="portrait"
            initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0%)", opacity: 1 }}
            exit={{ clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            onMouseMove={handlePortraitMouseMove}
            onMouseLeave={handlePortraitMouseLeave}
            className="relative w-full h-[450px] md:h-[550px] rounded-3xl"
          >
            <motion.div
              animate={{ rotateX: portraitTilt.x, rotateY: portraitTilt.y }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="w-full h-full rounded-3xl border border-white/15 bg-[#0b0b0b] overflow-hidden shadow-2xl relative group hover:border-[#ff5e24]/50 transition-colors duration-300"
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-20"
                style={{
                  background: `radial-gradient(130px circle at ${portraitMousePos.x}px ${portraitMousePos.y}px, rgba(255, 94, 36, 0.22), transparent 60%)`,
                }}
              />

              <div className="absolute top-4 left-4 z-30 px-3.5 py-1.5 rounded-full bg-[#050505]/85 border border-white/10 text-[10px] font-mono text-[#ff824d] flex items-center gap-2 backdrop-blur-md shadow-lg">
                <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-pulse" />
                <span className="font-semibold tracking-wider uppercase">PORTRAIT • DTU ALUMNUS</span>
              </div>

              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="/images/hero.webp"
                  alt="Kunal Gupta Portrait"
                  className="w-full h-full object-cover object-[78%_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30 opacity-90 pointer-events-none z-10" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0b0b0b]/90 border border-white/10 backdrop-blur-2xl z-30 transition-all duration-300 group-hover:border-[#ff5e24]/30 flex items-center justify-between gap-3 shadow-2xl">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono text-[#ff5e24] font-bold uppercase tracking-wider">
                      KUNAL GUPTA
                    </span>
                    <span className="text-sm font-bold text-[#f5f3ef]">
                      Software Engineer
                    </span>
                    <span className="text-[11px] text-[#a1a1aa] font-mono">
                      Full-Stack MERN • DTU ECE Graduate
                    </span>
                  </div>

                  <div className="shrink-0 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-[10px] text-[#ff824d]">
                    <span>✦ DTU</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
