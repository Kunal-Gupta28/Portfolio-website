import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projectsData";
import MagneticButton from "../shared/MagneticButton";

const featuredProjects = projects.filter((p) =>
  ["chatcraft", "kubik-ride"].includes(p.id)
);

const projectImages = {
  chatcraft: "/images/chatcraft.webp",
  "kubik-ride": "/images/kubik.webp",
};

function ProjectCard({ project, index, onSelectProject }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="group"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden border border-white/[0.06] bg-[#0a0a0a] hover:border-white/[0.12] transition-colors duration-500`}
      >
        {/* Image Side */}
        <div
          className={`relative aspect-[16/11] lg:aspect-auto lg:min-h-[480px] overflow-hidden ${
            !isEven ? "lg:order-2" : ""
          }`}
        >
          {/* Number Watermark */}
          <div className="absolute top-6 left-6 z-20">
            <span className="text-[8rem] md:text-[10rem] font-black font-mono leading-none text-white/[0.04] select-none pointer-events-none">
              0{index + 1}
            </span>
          </div>

          {/* Image */}
          <img
            src={projectImages[project.id] || "/images/hero.webp"}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent z-10" />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              isEven
                ? "from-transparent to-[#0a0a0a]/60"
                : "from-[#0a0a0a]/60 to-transparent"
            } z-10 hidden lg:block`}
          />

          {/* Category badge on image */}
          <div className="absolute top-6 right-6 z-20">
            <span className="px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-[#0a0a0a]/70 text-[#ff5a1f] border border-[#ff5a1f]/20 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Bottom title on image (mobile) */}
          <div className="absolute bottom-6 left-6 right-6 z-20 lg:hidden">
            <h3 className="text-2xl font-bold text-[#f5f3ef] tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Side */}
        <div
          className={`flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 ${
            !isEven ? "lg:order-1" : ""
          }`}
        >
          {/* Index + Category */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-5xl md:text-7xl font-black font-mono text-[#ff5a1f]/20">
              0{index + 1}
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#ff5a1f]/30 to-transparent" />
          </div>

          {/* Title (desktop) */}
          <h3 className="hidden lg:block text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#f5f3ef] mb-5 tracking-tight leading-[1.1]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-[#8b8b8b] leading-relaxed mb-8 max-w-lg">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[11px] font-mono rounded-lg bg-white/[0.03] text-[#a1a1aa] border border-white/[0.06] transition-colors duration-200 hover:border-[#ff5a1f]/30 hover:text-[#f5f3ef]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <MagneticButton
              variant="primary"
              onClick={() => onSelectProject(project)}
            >
              <span>View Case Study</span>
              <span>→</span>
            </MagneticButton>
            {project.live && (
              <MagneticButton
                variant="outline"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </MagneticButton>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#8b8b8b] hover:text-[#ff5a1f] transition-colors duration-200 underline underline-offset-4 decoration-white/10 hover:decoration-[#ff5a1f]/40"
              >
                Source Code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SignatureShowcase({ onSelectProject }) {
  return (
    <section className="w-full max-w-none bg-[#050505] py-[clamp(4rem,8dvh,10dvh)] px-[clamp(1.25rem,5dvw,6rem)] border-t border-white/[0.06]">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className="w-full max-w-none mx-auto mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono tracking-widest text-[#ff5a1f] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#ff5a1f]/10 border border-[#ff5a1f]/20">
            FEATURED WORK
          </span>
          <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-[#ff5a1f]/40 to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f5f3ef] tracking-tight">
          Signature Projects
        </h2>
        <p className="text-sm md:text-base text-[#8b8b8b] mt-3 max-w-xl">
          End-to-end systems built with real-time architecture, AI integration,
          and production-grade performance.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="w-full max-w-none mx-auto flex flex-col gap-12 md:gap-16">
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
}
