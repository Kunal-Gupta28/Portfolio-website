import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import GlassCard from "../shared/GlassCard";
import TechPill from "../shared/TechPill";
import ScrollReveal from "../shared/ScrollReveal";
import MagneticButton from "../shared/MagneticButton";
import ProjectModal from "./ProjectModal";
import { projects, categories } from "../../data/projectsData";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Flagship");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        (selectedCategory === "Flagship"
          ? project.isFlagship || project.category.toLowerCase() === "flagship"
          : project.category.toLowerCase() === selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="relative w-full max-w-none bg-[#050505] text-[#f5f3ef] py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)]">
      <div className="w-full max-w-none mx-auto">

        {/* Page Header */}
        <ScrollReveal>
          <SectionHeading
            title="Featured Projects & Case Studies"
            subtitle="Production applications, full-stack CMS architectures, real-time WebSocket platforms, and AI API integrations."
          />
        </ScrollReveal>

        {/* Filter & Search Bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-16 p-3 rounded-2xl bg-[#0b0b0b] border border-white/10 shadow-2xl backdrop-blur-xl">

            {/* Category Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = projects.filter(
                  (p) =>
                    cat === "All" ||
                    (cat === "Flagship"
                      ? p.isFlagship || p.category.toLowerCase() === "flagship"
                      : p.category.toLowerCase() === cat.toLowerCase())
                ).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 select-none cursor-pointer active:scale-95 flex items-center gap-2 ${
                      isActive
                        ? cat === "Flagship"
                          ? "bg-amber-500 text-black font-extrabold shadow-md shadow-amber-500/30"
                          : "bg-[#ff5e24] text-white font-bold shadow-md shadow-[#ff5e24]/30"
                        : "bg-white/[0.04] text-[#8b8b8b] hover:text-[#f5f3ef] hover:bg-white/[0.08] border border-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {cat === "Flagship" && (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      )}
                      <span>{cat === "Flagship" ? "FLAGSHIP" : cat}</span>
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? cat === "Flagship"
                            ? "bg-black/20 text-black"
                            : "bg-white/20 text-white"
                          : "bg-white/5 text-[#8b8b8b]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[240px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech stack or title..."
                className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-[#f5f3ef] placeholder-[#73737c] focus:outline-none focus:border-[#ff5e24] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-[#73737c] hover:text-white"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
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
                      {/* Ambient Glow Accent */}
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

                              <span className="text-xs font-mono text-[#73737c] ml-auto">
                                0{idx + 1}
                              </span>
                            </div>

                            {/* Project Title */}
                            <h3 className="text-2xl md:text-4xl font-extrabold text-[#f6f5f2] mb-3 tracking-tight group-hover:text-[#ff5e24] transition-colors">
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
                                className="px-4 py-2.5 rounded-full text-xs font-mono text-[#a3a3a8] hover:text-[#f6f5f2] border border-white/10 hover:border-white/30 transition-all flex items-center gap-1.5"
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
                        <div className="lg:col-span-5 relative w-full h-full min-h-[220px] rounded-xl bg-white/[0.02] border border-white/10 p-6 flex flex-col justify-between font-mono text-xs shadow-inner">
                          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                            <span className="text-[#ff824d] font-bold tracking-wider uppercase text-[11px] flex items-center gap-1.5">
                              <svg className="w-3.5 h-3.5 fill-current text-[#ff824d]" viewBox="0 0 24 24">
                                <path d="M11 15H6l7-14v8h5l-7 14v-8z" />
                              </svg>
                              <span>SYSTEM SPECIFICATION</span>
                            </span>
                            <span className="text-[10px] text-[#73737c]">
                              {project.id.toUpperCase()}
                            </span>
                          </div>

                          <div className="space-y-3 text-[#a3a3a8] text-[11px]">
                            <div className="flex items-start gap-2">
                              <span className="text-[#ff5e24] font-bold mt-0.5">›</span>
                              <div>
                                <span className="text-[#73737c] block text-[10px] uppercase">DEPLOYMENT CLOUD</span>
                                <span className="text-[#f6f5f2] font-semibold">
                                  {isProduction
                                    ? project.id === "london-cert"
                                      ? "Render Cloud + HostingRaja Windows VPS (Plesk)"
                                      : "Render Cloud Infrastructure"
                                    : "Vercel / Render Edge"}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-start gap-2">
                              <span className="text-[#ff5e24] font-bold mt-0.5">›</span>
                              <div>
                                <span className="text-[#73737c] block text-[10px] uppercase">FRONTEND FRAMEWORK</span>
                                <span className="text-[#f6f5f2] font-semibold">
                                  {project.technologies[0]} + {project.technologies[1] || "Tailwind CSS"}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-start gap-2">
                              <span className="text-[#ff5e24] font-bold mt-0.5">›</span>
                              <div>
                                <span className="text-[#73737c] block text-[10px] uppercase">BACKEND & RUNTIME</span>
                                <span className="text-[#f6f5f2] font-semibold text-[#ff824d]">
                                  {project.id === "chatcraft"
                                    ? "Node.js + Express.js + Socket.io WebSockets"
                                    : project.id === "kubik-ride"
                                    ? "Node.js + Express.js + WebSockets + Razorpay APIs"
                                    : project.id === "london-cert"
                                    ? "Next.js Server Actions + Payload CMS (Node.js)"
                                    : project.id === "prime-success"
                                    ? "Node.js REST API + Scheduled News API Fetcher (12 PM)"
                                    : project.id === "qccertification"
                                    ? "Next.js App Router (Node.js Server Runtime)"
                                    : project.id === "wanderlust"
                                    ? "Node.js + Express.js + Passport Auth (MVC)"
                                    : project.id === "image-enhancer"
                                    ? "RESTful API Integration + PicWish Cloud API"
                                    : project.technologies.includes("Node.js")
                                    ? "Node.js + Express.js Engine"
                                    : "Client-Side SPA / Vercel Edge Runtime"}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-start gap-2">
                              <span className="text-[#ff5e24] font-bold mt-0.5">›</span>
                              <div>
                                <span className="text-[#73737c] block text-[10px] uppercase">DATABASE / CMS</span>
                                <span className="text-[#f6f5f2] font-semibold">
                                  {project.id === "london-cert"
                                    ? "Payload CMS + PostgreSQL (HostingRaja VPS)"
                                    : project.id === "prime-success"
                                    ? "Backend API + News API + Admin Video Portal"
                                    : project.id === "chatcraft"
                                    ? "MongoDB Atlas + Redis In-Memory Cache"
                                    : project.id === "kubik-ride" || project.id === "wanderlust"
                                    ? "MongoDB Atlas + Cloudinary Storage"
                                    : isProduction
                                    ? "Static Content / Render Edge Storage"
                                    : "MongoDB / Browser State / Local Cache"}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px]">
                            <span className="text-[#73737c]">STATUS:</span>
                            <span className="text-emerald-400 font-bold">
                              {isProduction ? "VERIFIED PRODUCTION" : "VERIFIED APP"}
                            </span>
                          </div>
                        </div>

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
