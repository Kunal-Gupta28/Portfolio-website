import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../data/projectsData";
import MagneticButton from "../shared/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = projects.filter((p) =>
  ["chatcraft", "kubik-ride"].includes(p.id)
);

export default function SignatureShowcase({ onSelectProject }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || window.innerWidth < 768) return;

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          setProgress(self.progress);
          const index = Math.min(
            featuredProjects.length - 1,
            Math.floor(self.progress * featuredProjects.length)
          );
          setActiveIndex(index);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentProject = featuredProjects[activeIndex] || featuredProjects[0];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100vh] min-h-[100svh] min-h-[100dvh] w-full max-w-none bg-[#050505] flex flex-col justify-center py-16 px-[clamp(1.25rem,5vw,6rem)] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Title Header */}
      <div className="w-full max-w-none mx-auto mb-8 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono tracking-widest text-[#ff5a1f] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#ff5a1f]/10 border border-[#ff5a1f]/20">
            03 — FEATURED SHOWCASE
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-r from-[#ff5a1f]/40 to-transparent" />
        </div>

        {/* Clickable Index Buttons */}
        <div className="flex items-center gap-2">
          {featuredProjects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer active:scale-95 ${
                idx === activeIndex
                  ? "bg-[#ff5a1f] text-white font-bold shadow-md shadow-[#ff5a1f]/30"
                  : "bg-white/5 text-[#8b8b8b] hover:text-[#f5f3ef] hover:bg-white/10"
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Pinned Grid */}
      <div className="w-full max-w-none mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Metadata & Story */}
        <div className="lg:col-span-5 flex flex-col justify-between min-h-[380px]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl md:text-6xl font-extrabold font-mono text-[#ff5a1f]">
                0{activeIndex + 1}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-[#a1a1aa] border border-white/10 font-medium">
                {currentProject.category}
              </span>
            </div>

            <h3 className="text-3xl md:text-6xl font-extrabold text-[#f5f3ef] mb-4 tracking-tight">
              {currentProject.title}
            </h3>

            <p className="text-base md:text-xl text-[#a1a1aa] leading-relaxed mb-6 font-normal">
              {currentProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {currentProject.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-white/[0.03] text-[#f5f3ef] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton
              variant="primary"
              onClick={() => onSelectProject(currentProject)}
            >
              <span>Explore Case Study</span>
              <span>→</span>
            </MagneticButton>
            {currentProject.live && (
              <MagneticButton
                variant="outline"
                href={currentProject.live}
                target="_blank"
                rel="noreferrer"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Right Side: Visual Card */}
        <div className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-[#0b0b0b] shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
          
          {featuredProjects.map((p, idx) => (
            <img
              key={p.id}
              src={
                p.id === "chatcraft"
                  ? "/images/chatcraft.webp"
                  : p.id === "kubik-ride"
                  ? "/images/kubik.webp"
                  : "/images/hero.webp"
              }
              alt={p.title}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-out ${
                idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          ))}

          <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
            <div className="p-4 rounded-2xl bg-[#0b0b0b]/85 border border-white/10 backdrop-blur-md shadow-xl">
              <span className="text-[10px] font-mono text-[#ff5a1f] uppercase tracking-widest block mb-0.5 font-bold">
                SYSTEM ARCHITECTURE
              </span>
              <span className="text-xs font-bold text-[#f5f3ef]">
                {currentProject.title} Workspace
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-none mx-auto mt-12">
        <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#ff5a1f] to-[#ff7a3d] transition-all duration-150"
            style={{ width: `${Math.max(5, progress * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
