import { motion } from "framer-motion";
import {
  heroContainer,
  verticalReveal,
  verticalRevealWithBounce,
} from "./hero.variants";
import HeroAnimatedSubheading from "./HeroAnimatedSubheading";

export default function HeroLeft() {
  const titles = ["SOFTWARE", "ENGINEER"];

  return (
    <motion.div variants={heroContainer} initial="hidden" animate="show">
      {/* Hi, I'm */}
      <div className="overflow-hidden">
        <motion.p variants={verticalReveal} className="text-sm opacity-70">
          Hi, I’m
        </motion.p>
      </div>

      {/* Name */}
      <div className="mb-6 flex gap-2 text-4xl overflow-hidden">
        <motion.div variants={verticalReveal}>
          <span className="inline-block me-2 font-bold">Kunal</span>
          <span className="inline-block opacity-50 font-bold">Gupta</span>
          <span className="inline-block ml-2 text-sm font-bold opacity-50">
            (DTU)
          </span>
        </motion.div>
      </div>

      {/* TITLE */}
      {titles.map((title) => (
        <div key={title} className="overflow-hidden">
          <motion.h1
            variants={verticalReveal}
            className="font-black leading-[0.9] tracking-[-0.04em] text-[clamp(2.8rem,8.5vw,15rem)]"
          >
            {title}
          </motion.h1>
        </div>
      ))}

      <HeroAnimatedSubheading />

      {/* Scroll hint */}
      <div className="overflow-hidden">
        <motion.p
          variants={verticalRevealWithBounce}
          className="mt-6 text-xs lg:text-md font-bold text-[#fa5a29] opacity-60"
        >
          ( Scroll to explore )
        </motion.p>
      </div>
    </motion.div>
  );
}