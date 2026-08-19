"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bioData } from "../../data/portfolioData";
import MagneticButton from "../shared/MagneticButton";
import HeroShowcaseCard from "./HeroShowcaseCard";

gsap.registerPlugin(ScrollTrigger);

const tickerItems = [
  "SCALABLE APIS +",
  "MODERN UI +",
  "60FPS MOTION +",
  "CLEAN ARCHITECTURE +",
  "REAL-TIME SYSTEMS +",
];

export default function HeroSection() {
  const router = useRouter();
  const heroRef = useRef(null);
  const portraitBgRef = useRef(null);
  const contentRef = useRef(null);

  // View Mode: 'spline' (default 3D model) vs 'portrait'
  const [viewMode, setViewMode] = useState("spline");

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!portraitBgRef.current || !heroRef.current) return;

      if (viewMode === "portrait") {
        gsap.to(portraitBgRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 0.22,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      } else {
        gsap.to(portraitBgRef.current, {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          opacity: 0,
          scale: 1.04,
          duration: 0.6,
          ease: "power3.in",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [viewMode]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100vh] min-h-[100svh] min-h-[100dvh] w-full max-w-none bg-[#050505] flex flex-col justify-between pt-24 pb-12 px-[clamp(1.25rem,5vw,6rem)] overflow-hidden"
    >
      {/* Background Cinematic Curtain Split Reveal Image */}
      <div
        ref={portraitBgRef}
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-[78%_20%] opacity-0 filter grayscale contrast-125"
        style={{
          backgroundImage: `url('/images/hero.webp')`,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-[#050505]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Grid Lines Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Main Grid Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-none mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto"
      >
        {/* Left Column: Hero Text & Information */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Top Pill Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6 flex-wrap"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e24]/10 border border-[#ff5e24]/30 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-ping" />
              <span className="text-xs font-mono text-[#ff824d] font-bold tracking-wider">
                SOFTWARE ENGINEER • DTU
              </span>
            </div>

            {/* View Mode Toggle Switcher */}
            <div className="flex items-center p-1 rounded-full bg-[#0b0b0b] border border-white/10 shadow-inner">
              <button
                onClick={() => setViewMode("spline")}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "spline"
                    ? "bg-[#ff5e24] text-white font-bold shadow-md shadow-[#ff5e24]/30"
                    : "text-[#73737c] hover:text-[#f5f3ef]"
                }`}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
                </svg>
                <span className="text-[11px] font-mono">3D Spline</span>
              </button>

              <button
                onClick={() => setViewMode("portrait")}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "portrait"
                    ? "bg-[#ff5e24] text-white font-bold shadow-md shadow-[#ff5e24]/30"
                    : "text-[#73737c] hover:text-[#f5f3ef]"
                }`}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM4 6V18H20V6H4ZM12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5Z" />
                </svg>
                <span className="text-[11px] font-mono">Portrait</span>
              </button>
            </div>
          </motion.div>

          {/* Main Title Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="fluid-hero-title font-extrabold text-[#f6f5f2] tracking-tight leading-[0.88]">
              KUNAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f6f5f2] via-[#ff824d] to-[#ff5e24] text-glow">
                GUPTA.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle & Role Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="fluid-body text-[#a3a3a8] mb-8 max-w-2xl font-normal leading-relaxed"
          >
            Full-Stack Software Engineer & DTU Alumnus (ECE) crafting resilient distributed systems, real-time WebSocket applications, and 60FPS user interfaces.
          </motion.p>

          {/* Ticker Ribbon Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-xl overflow-hidden py-2 mb-8 border-y border-white/10 bg-white/[0.02]"
          >
            <div className="animate-marquee-slow flex whitespace-nowrap gap-6 text-xs font-mono text-[#ff824d] tracking-widest uppercase font-semibold">
              {tickerItems.concat(tickerItems).map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          </motion.div>

          {/* Glassmorphic Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 mb-10 w-full max-w-2xl p-5 rounded-3xl bg-[#0b0b0b]/80 border border-white/10 backdrop-blur-xl shadow-2xl hover:border-[#ff5e24]/40 transition-colors duration-300"
          >
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl md:text-3xl font-extrabold text-[#f6f5f2] font-mono">10+</span>
                <span className="h-2 w-2 rounded-full bg-[#ff5e24]" />
              </div>
              <span className="text-[11px] font-mono text-[#73737c] uppercase tracking-wider font-semibold">
                PRODUCTION PROJECTS
              </span>
            </div>

            <div className="border-x border-white/10 px-4 flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl md:text-3xl font-extrabold text-[#ff5e24] font-mono">DTU</span>
              </div>
              <span className="text-[11px] font-mono text-[#73737c] uppercase tracking-wider font-semibold">
                ECE ENGINEERING
              </span>
            </div>

            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl md:text-3xl font-extrabold text-[#f6f5f2] font-mono">MERN</span>
              </div>
              <span className="text-[11px] font-mono text-[#73737c] uppercase tracking-wider font-semibold">
                FULL-STACK & SYSTEMS
              </span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              variant="primary"
              onClick={() => router.push("/projects")}
            >
              <span>View Selected Work</span>
              <span className="text-lg">→</span>
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              onClick={() => router.push("/contact")}
            >
              <span>Let's Talk</span>
              <span className="text-lg">→</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: 3D Spline Interactive Model Showcase vs Cinematic Dual-Curtain Split Portrait */}
        <HeroShowcaseCard viewMode={viewMode} />
      </div>

      {/* Bottom Center Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-xs font-mono text-[#73737c] pointer-events-none hidden md:flex"
      >
        <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex justify-center pt-1">
          <div className="w-1 h-2 bg-[#ff5e24] rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
