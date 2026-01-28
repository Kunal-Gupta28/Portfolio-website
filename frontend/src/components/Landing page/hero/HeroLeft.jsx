import { motion } from "framer-motion";
import {
  heroContainer,
  verticalReveal,
  verticalRevealWithBounce,
} from "./hero.variants";
import HeroAnimatedSubheading from "./HeroAnimatedSubheading";

export default function HeroLeft() {
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
          <span className="inline-block me-2">
            <b>Kunal </b>
          </span>
          <span className="inline-block opacity-50">
            <b> Gupta</b>
          </span>
          <span className="inline-block ml-2 text-sm font-bold opacity-50">
            (DTU)
          </span>
        </motion.div>
      </div>

      {/* TITLE */}
      <div className="overflow-hidden">
        <motion.h1
          variants={verticalReveal}
          className="font-black leading-[0.9] tracking-[-0.04em] text-[clamp(2.8rem,8.5vw,15rem)]"
        >
          SOFTWARE
        </motion.h1>
      </div>

      <div className="overflow-hidden">
        <motion.h1
          variants={verticalReveal}
          className="font-black leading-[0.9] tracking-[-0.04em] text-[clamp(2.8rem,8.5vw,15rem)]"
        >
          ENGINEER
        </motion.h1>
      </div>

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