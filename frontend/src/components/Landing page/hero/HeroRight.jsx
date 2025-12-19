import { motion } from "framer-motion";
import {
  heroContainer,
  verticalReveal,
  verticalRevealWithBounce,
} from "./hero.variants";
import { useNavigate } from "react-router-dom";

export default function HeroRight() {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={heroContainer}
      initial="hidden"
      animate="show"
      className="relative h-full overflow-hidden"
    >
      <div className="ml-auto h-full pt-[20%] flex w-[50%] flex-col gap-8 opacity-80">

        {/* SERVICES */}
        <div className="space-y-1 text-[clamp(0.75rem,0.8vw,2rem)]">
          <motion.div
            variants={verticalReveal}
            className="h-px w-full bg-white/20"
          />

          <p className="overflow-hidden">
            <motion.span variants={verticalReveal}>
              Full-Stack Web Apps
            </motion.span>
          </p>

          <p className="overflow-hidden">
            <motion.span variants={verticalReveal}>
              Real-Time & API Systems
            </motion.span>
          </p>

          <p className="overflow-hidden">
            <motion.span variants={verticalReveal}>
              Startup MVPs
            </motion.span>
          </p>

          <motion.div
            variants={verticalReveal}
            className="h-px w-full bg-white/20"
          />
        </div>

        {/* CTA + ARROW */}
        <div className="mb-auto overflow-hidden font-bold transition hover:text-[#ff723f]">
          <motion.p
            variants={verticalReveal}
            className="flex justify-between text-[clamp(0.85rem,0.8vw,2rem)]"
          >
            <span 
             onClick={ ()=> navigate("/contact")} 
             className="underline underline-offset-4">
              Available for Opportunities
            </span>

            <motion.span
              variants={verticalRevealWithBounce}
              className="text-[#ff723f] text-[clamp(1rem,1vw,2rem)]"
            >
              ↗
            </motion.span>
          </motion.p>
        </div>

        {/* DESCRIPTION */}
        <motion.p
          variants={verticalReveal}
          className="leading-relaxed opacity-60 text-[clamp(0.75rem,0.9vw,2rem)]"
        >
          Final-year DTU student and Full-Stack Software Engineer with hands-on
          experience building production-ready applications using React,
          Node.js, MongoDB, and Socket.io.
        </motion.p>

        {/* DIVIDER */}
        <motion.div
          variants={verticalReveal}
          className="h-px w-full bg-white/20"
        />

        {/* STATS */}
        <div className="flex gap-10">
          <motion.div variants={verticalReveal}>
            <p className="font-bold text-[clamp(1.5rem,2.5vw,4rem)]">5+</p>
            <p className="opacity-60 text-[clamp(0.7rem,1vw,1rem)]">
              Deployed Projects
            </p>
          </motion.div>

          <motion.div variants={verticalReveal}>
            <p className="font-bold text-[clamp(1.5rem,2.5vw,4rem)]">2+</p>
            <p className="opacity-60 text-[clamp(0.7rem,1vw,1rem)]">
              Years Building with MERN
            </p>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
