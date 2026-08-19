import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechPill from "../shared/TechPill";
import MagneticButton from "../shared/MagneticButton";

export default function ProjectModal({ project, onClose }) {
  // Lock background scroll and handle Escape key
  useEffect(() => {
    if (!project) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Intercept wheel and touchmove to prevent background scroll leakage
    const preventBackgroundScroll = (e) => {
      const modal = document.getElementById("project-modal-card");
      if (modal && modal.contains(e.target)) {
        return; // Allow scrolling inside modal content
      }
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventBackgroundScroll, { passive: false });
    window.addEventListener("touchmove", preventBackgroundScroll, { passive: false });

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener("wheel", preventBackgroundScroll);
      window.removeEventListener("touchmove", preventBackgroundScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl cursor-pointer"
      >
        <motion.div
          id="project-modal-card"
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b0b0b] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/90 scrollbar-thin scrollbar-thumb-zinc-800 cursor-default"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-[#f5f3ef] hover:bg-[#ff5a1f] hover:border-transparent transition-all duration-200 active:scale-95 z-20 cursor-pointer"
            aria-label="Close Case Study Modal"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>

          {/* Modal Header */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-mono text-[#ff5a1f] uppercase tracking-widest px-3 py-1 rounded-full bg-[#ff5a1f]/10 border border-[#ff5a1f]/20 font-bold">
                {project.category}
              </span>
              {project.isFlagship && (
                <span className="text-xs font-mono text-amber-300 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 font-bold shadow-[0_0_12px_rgba(245,158,11,0.2)] flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span>FLAGSHIP SYSTEM</span>
                </span>
              )}
              {project.hasApiDependency && (
                <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider font-medium flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
                  <span>Real-Time API System</span>
                </span>
              )}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#f5f3ef] tracking-tight">
              {project.title}
            </h2>
            <p className="text-base md:text-lg text-[#a1a1aa] font-normal leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Links Bar */}
          <div className="flex flex-wrap gap-4 pb-8 mb-8 border-b border-white/10">
            {project.live && (
              <MagneticButton
                variant="primary"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <span>Live Application</span>
                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-8.5 8.5M6 18h12" />
                </svg>
              </MagneticButton>
            )}
            {project.github && (
              <MagneticButton
                variant="secondary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <span>Source Code</span>
                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-8.5 8.5M6 18h12" />
                </svg>
              </MagneticButton>
            )}
            {project.isProprietary && (
              <div className="px-4.5 py-2.5 rounded-full text-xs font-mono text-[#a3a3a8] bg-white/[0.04] border border-white/10 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 fill-current text-[#ff824d]" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
                <span>Proprietary Production Codebase</span>
                <span className="text-[#ff824d] font-bold">• Quality Control Certification</span>
              </div>
            )}
          </div>

          {/* Case Study Content */}
          <div className="flex flex-col gap-8 text-[#a1a1aa] text-sm md:text-base leading-relaxed">
            {/* Long Description & Highlights */}
            <div>
              <h3 className="text-lg font-bold text-[#f5f3ef] mb-3 font-mono uppercase tracking-wider text-[#ff5a1f] flex items-center gap-2">
                <span>01 — Overview & Highlights</span>
              </h3>
              <div className="whitespace-pre-line text-[#a1a1aa] bg-white/[0.02] p-6 rounded-2xl border border-white/5 font-normal leading-relaxed">
                {project.longDescription}
              </div>
            </div>

            {/* Tech Stack Breakdown */}
            <div>
              <h3 className="text-lg font-bold text-[#f5f3ef] mb-3 font-mono uppercase tracking-wider text-[#ff5a1f]">
                02 — Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechPill key={tech} className="py-1.5 px-3.5 text-xs font-semibold">
                    {tech}
                  </TechPill>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

