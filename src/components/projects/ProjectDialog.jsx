import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechPills from "./TechPills";

export default function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // Save original overflow styles
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Intercept scroll events on the window to prevent Lenis/body scroll
    const preventBackgroundScroll = (e) => {
      const modal = document.getElementById("project-modal-container");
      if (modal && modal.contains(e.target)) {
        return; // Allow scrolling inside the modal card
      }
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventBackgroundScroll, { passive: false });
    window.addEventListener("touchmove", preventBackgroundScroll, { passive: false });

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener("wheel", preventBackgroundScroll);
      window.removeEventListener("touchmove", preventBackgroundScroll);
    };
  }, [project]);

  if (!project) return null;

  const { title, description, longDescription, technologies, category, github, live, videoDemo, hasApiDependency } = project;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      >
        {/* Modal Window */}
        <motion.div
          id="project-modal-container"
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            z-10
            w-full
            max-w-2xl
            max-h-[85vh]
            overflow-y-auto
            rounded-3xl
            border
            border-white/20
            bg-gradient-to-b
            from-zinc-900/95
            to-black/95
            p-6
            sm:p-8
            text-white
            shadow-2xl
            backdrop-blur-xl
            cursor-default
          "
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="close modal"
            className="
              absolute
              right-5
              top-5
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white/70
              transition-colors
              hover:border-white/30
              hover:bg-white/15
              hover:text-white
              cursor-pointer
            "
          >
            ✕
          </button>

          {/* Category Tag */}
          {category && (
            <span className="inline-block mb-2 rounded-full border border-[#fa5a29]/40 bg-[#fa5a29]/10 px-3 py-0.5 text-xs font-semibold text-[#fa5a29]">
              {category}
            </span>
          )}

          {/* Title */}
          <h2 className="mb-3 pr-10 text-2xl sm:text-3xl font-bold text-white">
            {title}
          </h2>

          {/* Short Description */}
          {description && (
            <p className="mb-4 text-sm sm:text-base text-white/70 font-medium">
              {description}
            </p>
          )}

          {/* Tech Stack Pills */}
          {technologies && (
            <div className="mb-5 flex flex-wrap gap-1.5">
              <TechPills technologies={technologies} className="justify-start" />
            </div>
          )}

          {/* API Info Banner */}
          {hasApiDependency && (
            <div className="mb-5 flex items-start gap-3 rounded-xl border border-sky-500/30 bg-sky-500/10 p-3.5 text-xs sm:text-sm text-sky-200">
              <span className="text-sky-400 font-bold text-base">ℹ️</span>
              <p className="leading-snug">
                This project integrates external cloud APIs. Live demo relies on active free-tier endpoints.
              </p>
            </div>
          )}

          <div className="mb-6 h-px w-full bg-white/10" />

          {/* Detailed Features / Long Description */}
          <div className="whitespace-pre-line leading-relaxed text-white/80 text-xs sm:text-sm mb-6">
            {longDescription}
          </div>

          {/* Action Link Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Repository ↗
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#fa5a29]/60 bg-[#fa5a29]/15 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#fa5a29] transition-all hover:bg-[#fa5a29]/25 shadow-[0_0_15px_rgba(250,90,41,0.25)]"
              >
                <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Preview ↗
              </a>
            )}

            {videoDemo && (
              <a
                href={videoDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-purple-300 transition-all hover:bg-purple-500/20"
              >
                ▶ Watch Video Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}