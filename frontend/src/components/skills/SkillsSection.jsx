import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import { skillCategories } from "../../data/skillsData";

const allSkillsList = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => s.name)
);

function AnimatedSkillCard({ skill, index }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl p-5 md:p-6 bg-[#0a0a0c]/85 border border-white/10 hover:border-[#ff5e24]/60 backdrop-blur-xl transition-all duration-300 group overflow-hidden shadow-xl flex flex-col justify-between"
    >
      {/* Spotlight Glow Effect on Hover */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 94, 36, 0.15), transparent 45%)`,
        }}
      />

      <div className="relative z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-3 gap-2">
          <h4 className="text-base md:text-lg font-bold text-[#f5f3ef] group-hover:text-[#ff824d] transition-colors leading-snug">
            {skill.name}
          </h4>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#ff824d] bg-[#ff5e24]/10 border border-[#ff5e24]/20 font-bold tracking-wider shrink-0">
            {skill.level}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-[#a1a1aa] leading-relaxed font-normal">
          {skill.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgOrbY1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const bgOrbY2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  // Filter skills if search query is typed
  const displayedSkills = searchQuery.trim()
    ? skillCategories.flatMap((c) => c.skills).filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCategory.skills;

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative w-full max-w-none py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#0b0b0b] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Giant Parallax Watermark Text */}
      <motion.div
        style={{ x: watermarkX }}
        className="absolute top-12 left-0 text-[clamp(5rem,15vw,18rem)] font-extrabold font-mono text-white/[0.015] select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter"
      >
        CAPABILITY MAP & STACK
      </motion.div>

      {/* Parallax Background Glowing Orbs */}
      <motion.div
        style={{ y: bgOrbY1 }}
        className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-[#ff5e24]/10 blur-[130px] pointer-events-none z-0"
      />
      <motion.div
        style={{ y: bgOrbY2 }}
        className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-[#ff7a3d]/10 blur-[150px] pointer-events-none z-0"
      />

      <div className="relative z-10 w-full max-w-none mx-auto">
        {/* Category Options Animated Marquee Ribbon */}
        <div className="mb-12 overflow-hidden py-3 border-y border-white/10 bg-white/[0.02] backdrop-blur-md">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }}
            className="flex whitespace-nowrap gap-8 font-mono text-xs text-[#a1a1aa]"
          >
            {[...skillCategories, ...skillCategories].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(cat.id);
                  setSearchQuery("");
                }}
                className="flex items-center gap-3 cursor-pointer group hover:text-white transition-colors"
              >
                <span className="text-[#ff5e24] font-bold text-sm">✦</span>
                <span className="font-bold text-[#f5f3ef] group-hover:text-[#ff824d] uppercase tracking-wider">
                  {cat.title}
                </span>
                <span className="text-[11px] text-[#73737c] group-hover:text-[#a1a1aa]">
                  ({cat.subtitle})
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Section Heading */}
        <ScrollReveal>
          <SectionHeading
            number="02"
            title="Engineering Capability Map"
            subtitle="A structured breakdown of core competencies, frameworks, systems, and theoretical foundations."
          />
        </ScrollReveal>

        {/* Search & Category Filter Toolbar */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 md:gap-2.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-full overflow-x-auto">
              {skillCategories.map((cat) => {
                const isActive = activeTab === cat.id && !searchQuery.trim();
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveTab(cat.id);
                      setSearchQuery("");
                    }}
                    className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-mono tracking-wide transition-all duration-200 select-none cursor-pointer active:scale-[0.97] ${
                      isActive ? "text-[#f5f3ef] font-semibold" : "text-[#8b8b8b] hover:text-[#f5f3ef]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 rounded-xl bg-[#ff5e24] shadow-lg shadow-[#ff5e24]/25"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{cat.title}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? "bg-white/20 text-white" : "bg-white/5 text-[#8b8b8b]"}`}>
                        {cat.skills.length}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input Bar */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-9 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-[#f5f3ef] placeholder-[#73737c] focus:outline-none focus:border-[#ff5e24] transition-colors"
              />
              <svg className="absolute left-3 top-3 w-3.5 h-3.5 text-[#73737c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-[#73737c] hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={searchQuery ? "search" : activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Category Subtitle Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-white/10 gap-2">
              <h3 className="text-xl md:text-3xl font-bold text-[#f5f3ef]">
                {searchQuery ? `Search Results (${displayedSkills.length})` : currentCategory.title}
              </h3>
              <p className="text-xs md:text-sm font-mono text-[#ff5e24]">
                {searchQuery ? `Matching "${searchQuery}"` : currentCategory.subtitle}
              </p>
            </div>

            {/* Skills Grid with Animated Cards */}
            {displayedSkills.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {displayedSkills.map((skill, idx) => (
                  <AnimatedSkillCard key={skill.name} skill={skill} index={idx} />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/10 font-mono text-xs text-[#8b8b8b]">
                No skills matching "{searchQuery}". Try searching for React, Node, SQL, or Systems.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Ultra-Premium Motivational Mindset Banner (Placed Right Above Footer) */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#0c0c0e]/90 via-[#131317]/95 to-[#0c0c0e]/90 border border-white/10 hover:border-[#ff5e24]/50 backdrop-blur-2xl transition-all duration-500 shadow-2xl relative overflow-hidden group">
            {/* Ambient Glow Accent */}
            <div className="absolute -right-12 -bottom-12 w-56 h-56 bg-[#ff5e24]/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute top-2 right-6 text-7xl md:text-8xl font-serif text-white/[0.03] select-none pointer-events-none font-extrabold">
              “
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-4xl">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-pulse" />
                  <span className="text-xs font-mono text-[#ff824d] font-bold uppercase tracking-widest">
                    ENGINEERING DEDICATION & MINDSET
                  </span>
                </div>
                <blockquote className="text-lg md:text-2xl font-extrabold text-[#f5f3ef] leading-snug tracking-tight">
                  "Driven by curiosity, engineered with precision. Committed to building clean, resilient systems and intuitive digital experiences."
                </blockquote>
              </div>

              <div className="shrink-0 flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="text-xs font-mono text-[#a1a1aa] font-medium">
                  ✦ Kunal Gupta • DTU Graduate
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
