"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../shared/ScrollReveal";

export default function InteractiveQuoteCard({ item, index, shiftStyle }) {
  const [activeTab, setActiveTab] = useState("quote");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div style={{ y: shiftStyle }} className="h-full">
      <ScrollReveal delay={0.08 * index}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{ perspective: 1000 }}
          className="relative h-full rounded-3xl p-7 md:p-9 bg-[#0a0a0c]/85 border border-white/10 hover:border-[#ff5e24]/60 backdrop-blur-2xl transition-colors duration-300 group overflow-hidden shadow-2xl flex flex-col justify-between"
        >
          {/* Cursor Spotlight Effect */}
          <div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 94, 36, 0.2), transparent 55%)`,
            }}
          />

          {/* Large Ambient Watermark Quote Mark */}
          <div className="absolute top-4 right-6 text-7xl md:text-9xl font-serif text-white/[0.03] select-none pointer-events-none group-hover:text-[#ff5e24]/12 transition-colors duration-500 font-extrabold leading-none">
            “
          </div>

          <div className="relative z-10">
            {/* Top Tag & Number */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono text-[#ff824d] bg-[#ff5e24]/10 border border-[#ff5e24]/20 font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5e24] animate-ping" />
                <span>{item.tag}</span>
              </div>
              <span className="text-xs font-mono text-[#73737c] font-bold">
                {item.id} / 05
              </span>
            </div>

            {/* Question Heading */}
            <h3 className="text-lg md:text-2xl font-extrabold text-[#f5f3ef] mb-4 group-hover:text-[#ff824d] transition-colors leading-snug tracking-tight">
              "{item.question}"
            </h3>

            {/* Interactive View Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-5 p-1 rounded-xl bg-white/[0.03] border border-white/10 w-fit">
              {[
                { id: "quote", label: "PHILOSOPHY" },
                { id: "insight", label: "HIGHLIGHTS" },
                { id: "nodes", label: "DATA FLOW" },
                { id: "code", label: "SNIPPET" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all duration-200 cursor-pointer active:scale-95 ${
                    activeTab === tab.id
                      ? "bg-[#ff5e24] text-white font-bold shadow-md shadow-[#ff5e24]/30"
                      : "text-[#8b8b8b] hover:text-[#f5f3ef]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Views */}
            <AnimatePresence mode="wait">
              {activeTab === "quote" && (
                <motion.div
                  key="quote"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="relative pl-4 border-l-2 border-[#ff5e24] my-4 bg-white/[0.01] py-2.5 rounded-r-xl"
                >
                  <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed italic font-normal">
                    {item.quote}
                  </p>
                </motion.div>
              )}

              {activeTab === "insight" && (
                <motion.div
                  key="insight"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="my-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10"
                >
                  <p className="text-[11px] font-mono text-[#ff5e24] font-bold uppercase tracking-wider mb-3">
                    TECHNICAL ARCHITECTURE SPECIFICATIONS:
                  </p>
                  <ul className="space-y-2">
                    {item.deepInsight.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#a1a1aa]">
                        <span className="text-[#ff5e24] font-bold mt-0.5">›</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === "nodes" && (
                <motion.div
                  key="nodes"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="my-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10"
                >
                  <p className="text-[11px] font-mono text-[#ff5e24] font-bold uppercase tracking-wider mb-3">
                    LIVE SYSTEM DATA PIPELINE:
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {item.flowNodes.map((node, i) => (
                      <React.Fragment key={i}>
                        <div className="px-3 py-1.5 rounded-lg bg-[#111115] border border-white/10 text-[11px] font-mono text-[#f5f3ef] flex items-center gap-1.5 shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{node}</span>
                        </div>
                        {i < item.flowNodes.length - 1 && (
                          <span className="text-[#ff5e24] font-bold text-xs font-mono">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "code" && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="my-4 p-4 rounded-2xl bg-[#050507] border border-white/10 font-mono text-[11px] text-[#a1a1aa] overflow-x-auto"
                >
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10 text-[10px] text-[#73737c]">
                    <span>// SYSTEM LOGIC SNIPPET</span>
                    <span className="text-emerald-400">ES6 / Node.js</span>
                  </div>
                  <pre className="text-emerald-300 leading-relaxed font-mono whitespace-pre">
                    <code>{item.codeSnippet}</code>
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Card Footer Actions */}
          <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#ff824d] font-semibold truncate">
              {item.principle}
            </span>
          </div>
        </motion.div>
      </ScrollReveal>
    </motion.div>
  );
}
