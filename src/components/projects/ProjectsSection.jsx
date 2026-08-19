"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import MagneticButton from "../shared/MagneticButton";
import ScrollReveal from "../shared/ScrollReveal";
import ProjectModal from "./ProjectModal";
import ProjectBlueprintCard from "./ProjectBlueprintCard";
import { projects, categories } from "../../data/projectsData";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filter projects by category & search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative w-full max-w-none py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#050505] border-t border-white/[0.06]">
      <div className="w-full max-w-none mx-auto">
        <ScrollReveal>
          <SectionHeading
            number="03"
            title="Projects & Technical Case Studies"
            subtitle="Deep dive into real-world applications, production systems, and full-stack software architecture."
          />
        </ScrollReveal>

        {/* Filter Controls Bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 select-none cursor-pointer active:scale-95 flex items-center gap-2 ${
                      selectedCategory === cat
                        ? "bg-[#ff5e24] text-white font-bold shadow-lg shadow-[#ff5e24]/30"
                        : "bg-white/[0.03] text-[#a3a3a8] border border-white/10 hover:border-[#ff5e24]/40 hover:text-[#f6f5f2]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        selectedCategory === cat
                          ? "bg-white/20 text-white"
                          : "bg-white/5 text-[#73737c]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative min-w-[260px]">
              <input
                type="text"
                placeholder="Search tech stack or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-9 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-[#f6f5f2] placeholder-[#73737c] focus:outline-none focus:border-[#ff5e24] transition-colors"
              />
              <svg className="w-3.5 h-3.5 fill-current text-[#73737c] absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#73737c] hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Display Feed */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-[#73737c] font-mono text-sm">
            No projects found matching "{searchQuery}".
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isProduction = project.category === "Production";

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="p-8 md:p-10 rounded-2xl bg-[#0b0b0b] border border-white/10 hover:border-[#ff5e24]/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff5e24]/4 group-hover:bg-[#ff5e24]/8 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Left Column: Metadata & Core Details */}
                        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                          <div>
                            {/* Badges Row */}
                            <div className="flex items-center gap-3 mb-4 flex-wrap">
                              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#ff5e24]/10 text-[#ff824d] border border-[#ff5e24]/30">
                                {project.category}
                              </span>

                              {project.isFlagship && (
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 font-bold shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                                  <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                  FLAGSHIP PROJECT
                                </span>
                              )}

                              {isProduction && (
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 font-semibold">
                                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                  LIVE PRODUCTION APP
                                </span>
                              )}

                              {project.company && (
                                <span className="text-xs font-mono text-[#a3a3a8]">
                                  via <strong className="text-[#f6f5f2]">{project.company}</strong>
                                </span>
                              )}
                            </div>

                            {/* Project Title */}
                            <h3 className="text-2xl md:text-4xl font-extrabold text-[#f6f5f2] mb-3 group-hover:text-[#ff824d] transition-colors tracking-tight">
                              {project.title}
                            </h3>

                            {/* Short Description */}
                            <p className="text-sm md:text-base text-[#a3a3a8] leading-relaxed mb-6 font-normal">
                              {project.description}
                            </p>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-xs font-mono rounded-full bg-white/[0.04] text-[#f5f3ef] border border-white/10 hover:border-[#ff5e24]/40 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-4 flex-wrap pt-2 border-t border-white/10">
                            <MagneticButton
                              variant="primary"
                              onClick={() => setActiveModalProject(project)}
                            >
                              <span>Read Full Case Study</span>
                              <span>→</span>
                            </MagneticButton>

                            {project.live ? (
                              <MagneticButton
                                variant="outline"
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span>Live Demo</span>
                                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-8.5 8.5M6 18h12" />
                                </svg>
                              </MagneticButton>
                            ) : project.github ? (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2.5 rounded-full text-xs font-mono text-[#a3a3a8] hover:text-[#f6f5f2] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all flex items-center gap-2"
                              >
                                <span>GitHub Repository</span>
                                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-8.5 8.5M6 18h12" />
                                </svg>
                              </a>
                            ) : (
                              <span className="px-4 py-2.5 rounded-full text-xs font-mono text-[#73737c] bg-white/[0.03] border border-white/10 select-none flex items-center gap-2">
                                <svg className="w-3.5 h-3.5 fill-current text-[#73737c]" viewBox="0 0 24 24">
                                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                </svg>
                                <span>Proprietary Codebase (Office)</span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right Column: Architectural Blueprint Card */}
                        <ProjectBlueprintCard
                          project={project}
                          isProduction={isProduction}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
