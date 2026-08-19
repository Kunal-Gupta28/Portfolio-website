import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import GlassCard from "../shared/GlassCard";
import ScrollReveal from "../shared/ScrollReveal";
import { skillCategories } from "../../data/skillsData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend");

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="relative w-full max-w-none py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#0b0b0b] border-t border-white/[0.06]">
      <div className="w-full max-w-none mx-auto">
        <ScrollReveal>
          <SectionHeading
            number="02"
            title="Engineering Capability Map"
            subtitle="A structured breakdown of core competencies, frameworks, systems, and theoretical foundations."
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap gap-2 md:gap-3 mb-12 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-full overflow-x-auto">
            {skillCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-mono tracking-wide transition-all duration-200 select-none cursor-pointer active:scale-[0.97] ${
                    isActive ? "text-[#f5f3ef] font-semibold" : "text-[#8b8b8b] hover:text-[#f5f3ef]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 rounded-xl bg-[#ff5a1f] shadow-lg shadow-[#ff5a1f]/25"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
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
        </ScrollReveal>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Category Subtitle Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-white/10 gap-2">
              <h3 className="text-xl md:text-3xl font-bold text-[#f5f3ef]">
                {currentCategory.title}
              </h3>
              <p className="text-xs md:text-sm font-mono text-[#ff5a1f]">
                {currentCategory.subtitle}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {currentCategory.skills.map((skill) => (
                <GlassCard
                  key={skill.name}
                  className="flex flex-col justify-between group p-5 bg-[#050505]/60 hover:bg-[#111111]/80"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-base font-bold text-[#f5f3ef] group-hover:text-[#ff5a1f] transition-colors">
                        {skill.name}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#ff7a3d] bg-[#ff5a1f]/10 border border-[#ff5a1f]/20 font-semibold">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-[#a1a1aa] leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
