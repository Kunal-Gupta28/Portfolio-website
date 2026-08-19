"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import InteractiveQuoteCard from "./InteractiveQuoteCard";

const engineeringQuotes = [
  {
    id: "01",
    tag: "STATE & CACHING",
    question: "Why Redis in-memory caching for Socket.io state distribution?",
    quote: "When multi-user web applications scale across multiple worker threads, in-memory caching turns O(N) database queries into instant microsecond lookups.",
    principle: "ARCHITECTURAL PRINCIPLE 01",
    deepInsight: [
      "Sub-millisecond latency for concurrent user session tracking",
      "Pub/Sub Redis channels synchronizing real-time WebSocket state",
      "Preventing database connection exhaustion under burst load",
    ],
    flowNodes: ["Client Action", "WebSocket Event", "Redis Pub/Sub", "State Broadcast"],
    codeSnippet: `const redisClient = createClient();
await redisClient.publish("room:update", JSON.stringify({ roomId, data }));`,
  },
  {
    id: "02",
    tag: "UI MOTION PHYSICS",
    question: "Why 60FPS GSAP ScrollTrigger & spring physics over static UI?",
    quote: "Interfaces should feel like physical objects with mass, friction, and momentum. Scroll-driven animation elevates visual feedback into pure spatial intuition.",
    principle: "ARCHITECTURAL PRINCIPLE 02",
    deepInsight: [
      "GPU-accelerated transform lerping for zero frame drops",
      "Dynamic ScrollTrigger pinning for immersive case study reveals",
      "Interruptible spring physics reacting instantly to cursor vectors",
    ],
    flowNodes: ["User Scroll", "GSAP Ticker", "GPU Layer Lerp", "60FPS Render"],
    codeSnippet: `gsap.to(".card-hero", {
  scrollTrigger: { trigger: ".section", scrub: 0.5, pin: true },
  scale: 1.05, opacity: 1
});`,
  },
  {
    id: "03",
    tag: "AI API INTEGRATION",
    question: "How do you handle contextual Gemini AI prompt pipelines?",
    quote: "AI integration isn't just about calling an endpoint; it's about structuring robust prompt context, stream handling, and graceful API fallback boundaries.",
    principle: "ARCHITECTURAL PRINCIPLE 03",
    deepInsight: [
      "Structured JSON schema response constraints for predictive UI state",
      "Streaming chunk parser for instant real-time typewriter output",
      "Token rate limiting and exponential backoff retry strategies",
    ],
    flowNodes: ["User Prompt", "Context Injector", "Gemini API Stream", "Reactive Render"],
    codeSnippet: `const response = await model.generateContentStream({
  contents: [{ role: 'user', parts: [{ text: enrichedPrompt }] }]
});`,
  },
  {
    id: "04",
    tag: "SEO & PRODUCTION CMS",
    question: "How does dynamic Payload CMS architecture scale SEO landing pages?",
    quote: "Automated SEO page generation relies on dynamic spatial hierarchy (Country → State → City) coupled with SSR page caching for Core Web Vitals score of 100.",
    principle: "ARCHITECTURAL PRINCIPLE 04",
    deepInsight: [
      "Hierarchical relational database templates for instant SEO page generation",
      "Payload CMS role-based admin self-service for non-technical teams",
      "Edge rendering & Gzip/Brotli response compression for ultra-fast TTFB",
    ],
    flowNodes: ["CMS Data", "Dynamic Route [city]", "Payload Query", "Edge SSR Render"],
    codeSnippet: `export async function generateMetadata({ params }) {
  const page = await payload.find({ collection: 'locations', where: { slug: params.city } });
  return { title: page.title, description: page.seoDescription };
}`,
  },
  {
    id: "05",
    tag: "SYSTEM RELIABILITY",
    question: "What is your approach to full-stack error recovery & sanitization?",
    quote: "Resilient systems treat every input as untrusted and every network call as potentially failing. Defensive programming prevents silent cascading failures.",
    principle: "ARCHITECTURAL PRINCIPLE 05",
    deepInsight: [
      "Strict XSS input sanitization and parameter validation on API routes",
      "Global Error Boundaries preserving application state on uncaught exceptions",
      "Automatic fallback fallbacks for external API rate limits and network drops",
    ],
    flowNodes: ["HTTP Request", "Helmet + Sanitize", "Express Validator", "Secure Controller"],
    codeSnippet: `app.use(helmet());
app.post("/api/contact", contactLimiter, validateInput, createContact);`,
  },
];

export default function EngineeringQuotes() {
  const [selectedTag, setSelectedTag] = useState("ALL QUESTIONS");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const shiftLeft = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const shiftRight = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const categories = [
    "ALL QUESTIONS",
    "STATE & CACHING",
    "UI MOTION PHYSICS",
    "AI API INTEGRATION",
    "SEO & PRODUCTION CMS",
    "SYSTEM RELIABILITY",
  ];

  const filteredQuotes =
    selectedTag === "ALL QUESTIONS"
      ? engineeringQuotes
      : engineeringQuotes.filter((q) => q.tag === selectedTag);

  return (
    <section ref={containerRef} className="relative w-full max-w-none py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#ff5e24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-none mx-auto relative z-10">
        <ScrollReveal>
          <SectionHeading
            number="04"
            title="Architectural Philosophy & Engineering Questions"
            subtitle="Core technical decisions, system design patterns, and engineering principles behind my full-stack work."
          />
        </ScrollReveal>

        {/* Category Filter Pills */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer active:scale-95 ${
                  selectedTag === tag
                    ? "bg-[#ff5e24] text-white font-bold shadow-lg shadow-[#ff5e24]/30"
                    : "bg-white/[0.04] text-[#a1a1aa] border border-white/10 hover:border-[#ff5e24]/50 hover:text-[#f5f3ef]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredQuotes.map((item, index) => {
            const shiftStyle = index % 2 === 0 ? shiftLeft : shiftRight;
            return (
              <InteractiveQuoteCard
                key={item.id}
                item={item}
                index={index}
                shiftStyle={shiftStyle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
