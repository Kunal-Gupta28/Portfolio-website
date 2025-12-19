import { motion } from "framer-motion";
import { verticalReveal, verticalStackContainer } from "./hero.variants";

export default function HeroAnimatedSubheading() {
  return (
    <div className="mt-6 text-[clamp(2.4rem,4vw,6rem)] leading-[0.95] tracking-[-0.04em] opacity-80">
      {/* MAIN SUBHEADING */}
      <div className="overflow-hidden">
        <motion.span variants={verticalReveal} className="block text-white">
          Full-Stack MERN Developer
        </motion.span>
      </div>

      {/* CLIPPED VIEWPORT */}
      <div className="mt-2 flex h-[1em] overflow-hidden">
        {/* BUILDING */}
        <div className="overflow-hidden">
          <motion.span
            variants={verticalReveal}
            className="mr-3 block text-white"
          >
            building
          </motion.span>
        </div>

        {/* ANIMATED STACK (LOOPING) */}
        <motion.div
          className="flex flex-col font-bold text-[#fa5a29] will-change-transform"
          initial={{ y: "100%" }}
          variants={verticalStackContainer}
          animate="animate"
        >
          <span className="h-[1.2em] leading-[1.2em]">scalable</span>
          <span className="h-[1.2em] leading-[1.2em]">real-time</span>
          <span className="h-[1.2em] leading-[1.2em]">web applications</span>
          <span className="h-[1.2em] leading-[1.2em]">clean architecture</span>
          <span className="h-[1.2em] leading-[1.2em]">secure APIs</span>
          <span className="h-[1.2em] leading-[1.2em]">modern UI</span>
          <span className="h-[1.2em] leading-[1.2em]">scalable</span>
          <span className="h-[1.2em] leading-[1.2em]">real-time</span>
          <span className="h-[1.2em] leading-[1.2em]">web applications</span>
          <span className="h-[1.2em] leading-[1.2em]">clean architecture</span>
          <span className="h-[1.2em] leading-[1.2em]">secure APIs</span>
          <span className="h-[1.2em] leading-[1.2em]">modern UI</span>
          <span className="h-[1.2em] leading-[1.2em]">scalable</span>
          <span className="h-[1.2em] leading-[1.2em]">real-time</span>
          <span className="h-[1.2em] leading-[1.2em]">web applications</span>
          <span className="h-[1.2em] leading-[1.2em]">clean architecture</span>
          <span className="h-[1.2em] leading-[1.2em]">secure APIs</span>
          <span className="h-[1.2em] leading-[1.2em]">modern UI</span>
          <span className="h-[1.2em] leading-[1.2em]">scalable</span>
          <span className="h-[1.2em] leading-[1.2em]">real-time</span>
          <span className="h-[1.2em] leading-[1.2em]">web applications</span>
          <span className="h-[1.2em] leading-[1.2em]">clean architecture</span>
          <span className="h-[1.2em] leading-[1.2em]">secure APIs</span>
          <span className="h-[1.2em] leading-[1.2em]">modern UI</span>
        </motion.div>
      </div>
    </div>
  );
}
