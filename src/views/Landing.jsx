"use client";

import React from "react";
import { useRouter } from "next/navigation";
import HeroSection from "../components/hero/HeroSection";
import SectionHeading from "../components/shared/SectionHeading";
import GlassCard from "../components/shared/GlassCard";
import TechPill from "../components/shared/TechPill";
import MagneticButton from "../components/shared/MagneticButton";
import ScrollReveal from "../components/shared/ScrollReveal";
import SignatureShowcase from "../components/projects/SignatureShowcase";
import ProjectModal from "../components/projects/ProjectModal";
import { bioData } from "../data/portfolioData";
import { skillCategories } from "../data/skillsData";

export default function Landing() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <main className="w-full max-w-none bg-[#050505] overflow-x-hidden text-[#f5f3ef]">
      {/* 1. Cinematic Hero */}
      <HeroSection />

      {/* 2. About Overview Snippet */}
      <section className="py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] border-t border-white/[0.06] bg-[#0b0b0b] w-full max-w-none">
        <div className="w-full max-w-none mx-auto">
          <ScrollReveal>
            <SectionHeading
              number="01"
              title="Building real-world systems, with clarity and purpose."
              subtitle="I care deeply about the boundary between interface quality and system reliability."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <ScrollReveal delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
              <p className="text-[#a1a1aa] text-base md:text-xl leading-relaxed">
                As an Electronics & Communication Engineering graduate from Delhi Technological University (DTU), I combine low-level hardware understanding with high-level web architecture. From real-time WebSocket workspaces to AI API prompt pipelines and 60FPS motion physics, I focus on engineering precision.
              </p>
              <div>
                <MagneticButton
                  variant="outline"
                  onClick={() => router.push("/about")}
                >
                  <span>Read Full Story & Philosophy</span>
                  <span>→</span>
                </MagneticButton>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#050505] border border-white/10 flex flex-col gap-4">
                <span className="text-xs font-mono text-[#ff5a1f] uppercase tracking-wider font-semibold">
                  CORE HIGHLIGHTS
                </span>
                <ul className="space-y-2 text-xs md:text-sm text-[#a1a1aa]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#ff5a1f]">✓</span> B.Tech in Electronics & Communication Engineering (DTU)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ff5a1f]">✓</span> Full-Stack MERN & Real-Time WebSockets
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ff5a1f]">✓</span> 60FPS GSAP Motion & Smooth Inertia Physics
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Signature Pinned Scroll Showcase (Featured Projects Scrub) */}
      <SignatureShowcase onSelectProject={(p) => setSelectedProject(p)} />

      <div className="py-12 bg-[#050505] text-center border-b border-white/[0.06] w-full max-w-none">
        <MagneticButton
          variant="primary"
          onClick={() => router.push("/projects")}
        >
          <span>Explore All 10 Projects & Case Studies</span>
          <span>→</span>
        </MagneticButton>
      </div>

      {/* 4. Skills Capability Teaser */}
      <section className="py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#0b0b0b] w-full max-w-none">
        <div className="w-full max-w-none mx-auto">
          <ScrollReveal>
            <SectionHeading
              number="02"
              title="Engineering Capability Map"
              subtitle="Overview of core competencies across frontend, backend, databases, and CS fundamentals."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {skillCategories.slice(0, 3).map((cat, idx) => (
              <ScrollReveal key={cat.id} delay={idx * 0.1}>
                <GlassCard className="h-full flex flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-mono text-[#ff5a1f] font-semibold uppercase tracking-wider block mb-2">
                      0{idx + 1} / {cat.title}
                    </span>
                    <p className="text-xs text-[#8b8b8b] mb-4">{cat.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.slice(0, 4).map((s) => (
                        <TechPill key={s.name} className="text-[10px]">
                          {s.name}
                        </TechPill>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <MagneticButton
              variant="outline"
              onClick={() => router.push("/skills")}
            >
              <span>View Detailed Capability Map</span>
              <span>→</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 5. Contact Call-To-Action Banner */}
      <section className="py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#050505] bg-ambient-contact text-center border-t border-white/[0.06] w-full max-w-none">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="text-xs font-mono text-[#ff5a1f] uppercase tracking-widest font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#f5f3ef] tracking-tight">
            Have an opportunity or project in mind?
          </h2>
          <p className="text-base md:text-lg text-[#a1a1aa] max-w-xl">
            I am available for software engineering roles, full-stack projects, and technical collaborations.
          </p>
          <div className="pt-2">
            <MagneticButton
              variant="primary"
              onClick={() => router.push("/contact")}
            >
              <span>Send a Message / Start Conversation</span>
              <span>→</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
