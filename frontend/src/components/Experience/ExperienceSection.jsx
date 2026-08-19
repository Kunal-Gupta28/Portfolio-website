import React from "react";
import SectionHeading from "../shared/SectionHeading";
import GlassCard from "../shared/GlassCard";
import TechPill from "../shared/TechPill";
import ScrollReveal from "../shared/ScrollReveal";
import { experienceData, educationData } from "../../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full max-w-none py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#0b0b0b] border-t border-white/[0.06]">
      <div className="w-full max-w-none mx-auto">
        <ScrollReveal>
          <SectionHeading
            number="04"
            title="Experience & Qualifications"
            subtitle="Engineering roles, technical mentorship, and academic achievements at Delhi Technological University."
          />
        </ScrollReveal>

        {/* 1. Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-[#f5f3ef] mb-8 font-mono tracking-tight flex items-center gap-3">
            <span className="text-[#ff5a1f] font-bold">01 /</span>
            <span>ENGINEERING EXPERIENCE</span>
          </h3>

          <div className="relative border-l border-white/10 pl-6 md:pl-10 space-y-10">
            {experienceData.map((exp, idx) => (
              <ScrollReveal key={exp.role} delay={0.1 * idx}>
                <div className="relative">
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#ff5a1f] border-4 border-[#0b0b0b] shadow-lg shadow-[#ff5a1f]/40" />

                  <GlassCard className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-[#f5f3ef]">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-mono text-[#ff7a3d] font-semibold">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono text-[#a1a1aa] bg-white/[0.04] border border-white/10 w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-[#a1a1aa] mb-4 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-6 text-xs md:text-sm text-[#a1a1aa]">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#ff5a1f] font-bold mt-0.5">›</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {exp.technologies.map((t) => (
                        <TechPill key={t} className="text-[10px]">
                          {t}
                        </TechPill>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 2. Academic Qualification (DTU) */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#f5f3ef] mb-8 font-mono tracking-tight flex items-center gap-3">
            <span className="text-[#ff5a1f] font-bold">02 /</span>
            <span>EDUCATION & ACADEMIC CREDENTIALS</span>
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {educationData.map((edu) => (
              <ScrollReveal key={edu.degree}>
                <GlassCard className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-[#f5f3ef]">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-mono text-[#ff7a3d] font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-[#a1a1aa] bg-white/[0.04] border border-white/10 w-fit">
                      {edu.period}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] font-mono text-[#ff5a1f] uppercase tracking-widest block mb-1 font-bold">
                        ENGINEERING DISCIPLINE & BRANCH
                      </span>
                      <p className="text-xs md:text-sm font-semibold text-[#f5f3ef]">
                        {edu.major || "Electronics & Communication Engineering (ECE)"}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-base text-[#a1a1aa] mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs font-mono text-[#ff5a1f] uppercase tracking-widest block mb-3 font-semibold">
                      KEY CS & ENGINEERING COURSEWORK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((c) => (
                        <span
                          key={c}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-white/[0.04] text-[#f5f3ef] border border-white/10 hover:border-[#ff5a1f]/40 transition-colors"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
