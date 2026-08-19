import React from "react";
import SectionHeading from "../shared/SectionHeading";
import GlassCard from "../shared/GlassCard";
import ScrollReveal from "../shared/ScrollReveal";
import { bioData } from "../../data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full max-w-none py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#050505] border-t border-white/[0.06]">
      <div className="w-full max-w-none mx-auto">
        <ScrollReveal>
          <SectionHeading
            number="01"
            title="Building real-world systems, with clarity and purpose."
            subtitle="I care deeply about the boundary between interface quality and system reliability."
          />
        </ScrollReveal>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Main Story Column */}
          <ScrollReveal delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
            <div className="prose prose-invert max-w-none text-[#a1a1aa] text-base md:text-xl leading-relaxed font-normal space-y-4">
              <p>
                My approach to software engineering starts with a fundamental question:{" "}
                <span className="text-[#f5f3ef] font-semibold">
                  "Does this system solve a real problem efficiently, intuitively, and reliably?"
                </span>
              </p>
              <p>
                As an Electronics & Communication Engineering graduate from Delhi Technological University (DTU), I combine low-level hardware understanding with high-level web architecture. Whether it's orchestrating real-time WebSocket events for collaborative editors like <span className="text-[#ff5a1f] font-mono font-semibold">ChatCraft</span>, building dynamic payment pipelines for <span className="text-[#ff5a1f] font-mono font-semibold">Kubik</span>, or crafting 60FPS canvas physics, I focus on engineering precision over visual noise.
              </p>
              <p>
                I don't just write React components—I build resilient frontend architectures, implement Redis caching strategies, optimize critical render paths, and ensure server-side security.
              </p>
            </div>

            {/* Core Badges */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {[
                "System Reliability",
                "60FPS Motion Physics",
                "WebSocket Architecture",
                "Redis Caching",
                "Responsive Clamp Layouts",
                "Clean Code Standards",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-[#f5f3ef] bg-white/[0.04] border border-white/10 transition-colors hover:border-[#ff5a1f]/40"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Aesthetic Philosophy Card Accent */}
          <ScrollReveal delay={0.25} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#0b0b0b] group shadow-2xl">
              <img
                src="/images/about.webp"
                alt="Engineering Philosophy & Workflow"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-[#0b0b0b]/90 border border-white/10 backdrop-blur-md">
                <p className="text-[10px] font-mono text-[#ff5a1f] uppercase tracking-widest mb-1.5 font-bold">
                  CORE PHILOSOPHY
                </p>
                <p className="text-xs md:text-sm text-[#f5f3ef] leading-snug font-medium">
                  "Simplicity is prerequisite for reliability. Great interfaces feel invisible because the underlying architecture works effortlessly."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 3 Pillars of Engineering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bioData.philosophies.map((item, index) => (
            <ScrollReveal key={item.number} delay={0.1 * (index + 1)}>
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono tracking-widest text-[#ff5a1f] font-bold px-2.5 py-0.5 rounded-full bg-[#ff5a1f]/10 border border-[#ff5a1f]/20">
                      {item.number}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-[#ff5a1f]/40 group-hover:bg-[#ff5a1f] transition-colors" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#f5f3ef] mb-3 group-hover:text-[#ff5a1f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
