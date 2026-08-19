import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ScrollReveal from "../shared/ScrollReveal";

const quotesData = [
  {
    id: "01",
    question: "How do you scale real-time WebSockets without state race conditions?",
    quote:
      "True concurrency is not about handling 100,000 connections—it is about ensuring that state transitions remain predictable, idempotent, and deterministic under peak distributed load.",
    principle: "Real-Time System Design & Pub/Sub Architecture",
    tag: "SCALE & CONCURRENCY",
    deepInsight: [
      "Socket.io Redis adapter for multi-node event distribution.",
      "Optimistic UI state updates backed by server validation queues.",
      "Event deduplication & strict sequence ordering protocols."
    ],
    flowNodes: ["Client WS", "Express Gateway", "Redis Pub/Sub", "State Synced"],
    codeSnippet: `// Redis Pub/Sub Adapter Event Stream
const io = new Server(httpServer);
io.adapter(createAdapter(pubClient, subClient));

io.on("connection", (socket) => {
  socket.on("code-change", async (payload) => {
    const verified = await validateSequence(payload);
    if (verified) socket.broadcast.to(room).emit("sync", payload);
  });
});`,
  },
  {
    id: "02",
    question: "Why does 60FPS UI motion matter more than visual embellishments?",
    quote:
      "Animation is not decorative ornament; it is cognitive feedback. Smooth 60FPS micro-interactions reduce user latency perception and transform software into an extension of thought.",
    principle: "Interface Motion & Perception Physics",
    tag: "UI PRECISION",
    deepInsight: [
      "Hardware-accelerated CSS transform & opacity GPU compositing.",
      "GSAP ticker lagSmoothing(0) for jitter-free scroll scrubbing.",
      "Lenis smooth scroll inertia normalized across high-refresh monitors."
    ],
    flowNodes: ["User Wheel", "Lenis Physics", "GSAP Ticker", "GPU Frame Render"],
    codeSnippet: `// 60FPS Inertia Scroll & GSAP Sync
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);`,
  },
  {
    id: "03",
    question: "When should a system be decoupled into microservices?",
    quote:
      "Premature abstraction is the root of technical debt. Build simple, explicit monolithic modules first; extract decoupled microservices only when domain boundaries demand independent scaling.",
    principle: "Architectural Restraint & Clean Engineering",
    tag: "SYSTEM ARCHITECTURE",
    deepInsight: [
      "Modular monolith design with strict domain-driven boundaries.",
      "Decoupled RESTful API contracts with Zod runtime validation.",
      "Targeted service extraction based on empirical CPU/Memory bottlenecks."
    ],
    flowNodes: ["Domain Request", "Modular Core", "Zod Validation", "Decoupled Service"],
    codeSnippet: `// Explicit Domain Boundaries & Schema Contracts
const RequestContract = zod.object({
  entityId: zod.string().uuid(),
  payload: zod.record(zod.unknown()),
});

export const processModule = async (rawInput) => {
  const cleanData = RequestContract.parse(rawInput);
  return await executeDomainLogic(cleanData);
};`,
  },
  {
    id: "04",
    question: "How do you balance high-throughput DB queries with zero-stale caching?",
    quote:
      "There are only two hard things in Computer Science: cache invalidation and naming things. A well-engineered Redis layer turns complex database aggregations into sub-millisecond lookups.",
    principle: "High-Performance Caching & Data Integrity",
    tag: "DATABASE & CACHING",
    deepInsight: [
      "TTL-based cache invalidation combined with event-driven purges.",
      "PostgreSQL & MongoDB pipeline indexing for fast fallback execution.",
      "In-memory Redis pub/sub for real-time cache sync across processes."
    ],
    flowNodes: ["HTTP GET", "Redis Hit? (<2ms)", "PostgreSQL Query", "Cache Inval."],
    codeSnippet: `// High-Speed Cache Pipeline
export const getAggregatedStats = async (key) => {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);
  
  const fresh = await db.collection.aggregate(pipeline).toArray();
  await redis.setex(key, 300, JSON.stringify(fresh));
  return fresh;
};`,
  },
  {
    id: "05",
    question: "What defines a production-ready system versus a prototype?",
    quote:
      "Prototypes work on happy paths; production applications handle network timeouts, rate-limiting, unhandled exceptions, and edge cases with zero downtime and graceful fallbacks.",
    principle: "Systems Hardening & Fault Tolerance",
    tag: "PRODUCTION RESILIENCE",
    deepInsight: [
      "Global Express.js error boundary pipelines & structured logging.",
      "Rate-limiting with express-rate-limit & CORS origin hardening.",
      "Payload CMS location-based dynamic SEO & Plesk VPS deployment."
    ],
    flowNodes: ["Client Request", "Rate Limiter", "Auth Check", "Resilient Output"],
    codeSnippet: `// Global Production Error Boundary Middleware
app.use((err, req, res, next) => {
  logger.error({ message: err.message, stack: err.stack, path: req.path });
  const status = err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: isProd ? "Internal Server Error" : err.message
  });
});`,
  },
];

const categoryTags = [
  "ALL QUESTIONS",
  "SCALE & CONCURRENCY",
  "UI PRECISION",
  "SYSTEM ARCHITECTURE",
  "DATABASE & CACHING",
  "PRODUCTION RESILIENCE",
];

function InteractiveQuoteCard({ item, index, shiftStyle }) {
  const [activeTab, setActiveTab] = useState("quote"); // "quote" | "insight" | "nodes" | "code"
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Calculate 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
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
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 94, 36, 0.15), transparent 45%)`,
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
            <span className="text-xs font-mono text-[#73737c] group-hover:text-[#ff5e24] group-hover:translate-x-1 transform transition-all">
              EXPLORE →
            </span>
          </div>
        </motion.div>
      </ScrollReveal>
    </motion.div>
  );
}

export default function EngineeringQuotes() {
  const [selectedTag, setSelectedTag] = useState("ALL QUESTIONS");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Scroll Motions
  const bgOrbY1 = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const bgOrbY2 = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const cardShiftOdd = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const cardShiftEven = useTransform(scrollYProgress, [0, 1], [45, -45]);

  const filteredQuotes =
    selectedTag === "ALL QUESTIONS"
      ? quotesData
      : quotesData.filter((q) => q.tag === selectedTag);

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-none py-[clamp(5rem,10vh,12vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#050505] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Giant Parallax Watermark Text */}
      <motion.div
        style={{ x: watermarkX }}
        className="absolute top-10 left-0 text-[clamp(5rem,15vw,20rem)] font-extrabold font-mono text-white/[0.015] select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter"
      >
        ARCHITECTURE & PRECISION
      </motion.div>

      {/* Parallax Background Ambient Orbs */}
      <motion.div
        style={{ y: bgOrbY1 }}
        className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-[#ff5e24]/12 blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        style={{ y: bgOrbY2 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-[#ff7a3d]/10 blur-[160px] pointer-events-none z-0"
      />

      <div className="relative z-10 w-full max-w-none mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-pulse" />
              <span className="text-xs font-mono text-[#ff5e24] uppercase tracking-widest font-bold">
                02 / ARCHITECTURAL PHILOSOPHY & INQUIRY
              </span>
            </div>

            <h2 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-[#f5f3ef] tracking-tight max-w-5xl leading-[1.08]">
              Questions that dictate my{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5f3ef] via-[#ff7a3d] to-[#ff5e24]">
                engineering standards.
              </span>
            </h2>

            <p className="mt-5 text-base md:text-xl text-[#a1a1aa] max-w-3xl font-normal leading-relaxed">
              Great software isn't built by accident. It is constructed through relentless inquiry into system limits, cognitive user feedback, and trade-off optimization.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tag Filter Playground */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-14 p-2 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md w-fit">
            {categoryTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer active:scale-95 ${
                    isSelected
                      ? "bg-[#ff5e24] text-white font-bold shadow-lg shadow-[#ff5e24]/30"
                      : "text-[#8b8b8b] hover:text-[#f5f3ef]"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Parallax Quotes Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredQuotes.map((item, idx) => {
              const isOdd = idx % 2 !== 0;
              const shiftStyle = isOdd ? cardShiftOdd : cardShiftEven;

              return (
                <InteractiveQuoteCard
                  key={item.id}
                  item={item}
                  index={idx}
                  shiftStyle={shiftStyle}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Ultra-Premium Glassmorphism Banner Quote */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 p-8 md:p-14 rounded-3xl bg-gradient-to-br from-[#0c0c0e] via-[#121215] to-[#0c0c0e] border border-white/10 relative overflow-hidden text-center shadow-2xl group hover:border-[#ff5e24]/40 transition-all duration-700">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#ff5e24]/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono text-[#ff5e24] bg-[#ff5e24]/10 border border-[#ff5e24]/30 font-bold uppercase tracking-widest mb-6">
                THE ULTIMATE BENCHMARK
              </span>

              <blockquote className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#f5f3ef] leading-tight tracking-tight">
                "Great engineering is when complex distributed logic produces an interface that feels{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff824d] to-[#ff5e24]">
                  completely effortless.
                </span>"
              </blockquote>

              <div className="mt-8 flex items-center justify-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#ff5e24]" />
                <span className="text-xs md:text-sm font-mono text-[#a1a1aa]">
                  Kunal Gupta • Full-Stack Systems Engineer & DTU Graduate
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
