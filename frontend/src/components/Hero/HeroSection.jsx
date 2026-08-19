import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bioData } from "../../data/portfolioData";
import MagneticButton from "../shared/MagneticButton";
import SplineScene from "../SplineScene";

gsap.registerPlugin(ScrollTrigger);

const tickerItems = [
  "SCALABLE APIS +",
  "MODERN UI +",
  "60FPS MOTION +",
  "CLEAN ARCHITECTURE +",
  "REAL-TIME SYSTEMS +",
];

export default function HeroSection() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const portraitBgRef = useRef(null);
  const contentRef = useRef(null);

  // View Mode: 'spline' (default 3D model) vs 'portrait'
  const [viewMode, setViewMode] = useState("spline");

  // 3D Mouse Physics Tilt & Spotlight State for Portrait Mode
  const [portraitTilt, setPortraitTilt] = useState({ x: 0, y: 0 });
  const [portraitMousePos, setPortraitMousePos] = useState({ x: 0, y: 0 });

  const handlePortraitMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setPortraitTilt({ x: rotateX, y: rotateY });
    setPortraitMousePos({ x, y });
  };

  const handlePortraitMouseLeave = () => {
    setPortraitTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (portraitBgRef.current && contentRef.current && heroRef.current) {
        gsap.to(portraitBgRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(contentRef.current, {
          yPercent: -10,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100vh] min-h-[100svh] min-h-[100dvh] w-full max-w-none flex items-center overflow-hidden pt-28 pb-16 px-[clamp(1.25rem,5vw,6rem)] bg-[#050505]"
    >
      {/* 1. Background Backdrop (Portrait or 3D Lighting) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AnimatePresence>
          {viewMode === "portrait" && (
            <motion.div
              key="hero-bg-portrait"
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 0.92 }}
              exit={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", opacity: 0 }}
              transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
              className="absolute top-0 right-0 w-full lg:w-[65vw] h-full overflow-hidden pointer-events-none"
            >
              <img
                ref={portraitBgRef}
                src="/images/hero.webp"
                alt="Kunal Gupta Portrait"
                className="w-full h-full object-cover object-[78%_20%]"
                loading="eager"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Soft Left Side Linear Fade Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent lg:via-[#050505]/65" />
        
        {/* Bottom Soft Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      </div>

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-none mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
        
        {/* Left Primary Content Column */}
        <div ref={contentRef} className="lg:col-span-7 flex flex-col items-start">
          
          {/* Top Badges & 3D Switcher */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-pulse shadow-[0_0_10px_#ff5e24]" />
              <span className="text-xs font-mono tracking-widest text-[#f6f5f2] uppercase font-semibold">
                {bioData.status}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e24]/10 border border-[#ff5e24]/30"
            >
              <span className="text-xs font-mono text-[#ff824d] font-bold tracking-wider uppercase">
                HI, I'M {bioData.name.toUpperCase()}
              </span>
            </motion.div>

            {/* 3D / Portrait Mode Switcher */}
            <div className="inline-flex items-center p-1 rounded-full bg-[#0b0b0b] border border-white/10 text-xs font-mono">
              <button
                onClick={() => setViewMode("spline")}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "spline"
                    ? "bg-[#ff5e24] text-white font-bold shadow-[0_0_10px_rgba(255,94,36,0.5)]"
                    : "text-[#a3a3a8] hover:text-white"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>3D Spline</span>
              </button>
              <button
                onClick={() => setViewMode("portrait")}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  viewMode === "portrait"
                    ? "bg-[#ff5e24] text-white font-bold shadow-[0_0_10px_rgba(255,94,36,0.5)]"
                    : "text-[#a3a3a8] hover:text-white"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Portrait</span>
              </button>
            </div>
          </div>

          {/* Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fluid-hero-title text-[#f6f5f2] tracking-tighter mb-6 font-extrabold uppercase leading-none select-none"
          >
            SOFTWARE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff824d] to-[#ff5e24] drop-shadow-[0_0_35px_rgba(255,94,36,0.45)]">
              ENGINEER
            </span>
          </motion.h1>

          {/* Subtitle Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="fluid-body text-[#a3a3a8] max-w-2xl mb-6 font-normal leading-relaxed"
          >
            <span className="text-[#f6f5f2] font-semibold">Full-Stack MERN Developer</span> building real-world systems. I design and build scalable web experiences where <span className="text-[#ff5e24] font-semibold">engineering precision</span> meets thoughtful interaction.
          </motion.p>

          {/* Capsule Horizontal Marquee Ticker Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="w-full max-w-2xl overflow-hidden rounded-xl bg-[#0b0b0b]/90 border border-white/10 py-2.5 px-4 mb-8 backdrop-blur-md"
          >
            <div className="animate-marquee-slow flex items-center gap-6 text-xs md:text-sm font-mono font-bold text-[#ff5e24] tracking-widest uppercase">
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
                <span key={`${item}-${idx}`} className="whitespace-nowrap">
                  {item}
                </span>
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
              onClick={() => navigate("/projects")}
            >
              <span>View Selected Work</span>
              <span className="text-lg">→</span>
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              onClick={() => navigate("/contact")}
            >
              <span>Let's Talk</span>
              <span className="text-lg">→</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: 3D Spline Interactive Model Showcase vs Cinematic Dual-Curtain Split Portrait */}
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
                  {/* Subtle Cursor Spotlight Follow */}
                  <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-20"
                    style={{
                      background: `radial-gradient(450px circle at ${portraitMousePos.x}px ${portraitMousePos.y}px, rgba(255, 94, 36, 0.18), transparent 50%)`,
                    }}
                  />

                  {/* Top Left Clean Pill Badge */}
                  <div className="absolute top-4 left-4 z-30 px-3.5 py-1.5 rounded-full bg-[#050505]/85 border border-white/10 text-[10px] font-mono text-[#ff824d] flex items-center gap-2 backdrop-blur-md shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-pulse" />
                    <span className="font-semibold tracking-wider uppercase">PORTRAIT • DTU ALUMNUS</span>
                  </div>

                  {/* Image Container with Subtle Hover Zoom */}
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src="/images/hero.webp"
                      alt="Kunal Gupta Portrait"
                      className="w-full h-full object-cover object-[78%_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Soft Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30 opacity-90 pointer-events-none z-10" />

                    {/* Floating Bottom Info Card */}
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
