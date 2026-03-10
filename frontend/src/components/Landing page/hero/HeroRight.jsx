import { motion } from "framer-motion";
import {
  heroContainer,
  verticalReveal,
  verticalRevealWithBounce,
} from "./hero.variants";
import { projects } from "../../../data/projectsData";
import { useNavigate } from "react-router-dom";

export default function HeroRight() {
  const services = [
    "Full-Stack Web Apps",
    "Real-Time & API Systems",
    "Startup MVPs",
  ];
  const projectCount = Math.max(projects.length - 1, 0);
  const navigate = useNavigate();
  const handleContactClick = () => navigate("/contact");
  return (
    <motion.div
      variants={heroContainer}
      initial="hidden"
      animate="show"
      className="relative h-full overflow-hidden"
    >
      <div className="ml-auto h-full flex w-[40%] md:w-[25%] lg:w-[50%] flex-col gap-8 opacity-80">
        {/* SERVICES */}
        <div className="space-y-1 text-[clamp(0.75rem,0.8vw,2rem)]">
          <motion.div
            variants={verticalReveal}
            className="h-px w-full bg-white/20"
          />

          {services.map((service) => (
            <p key={service} className="overflow-hidden">
              <motion.span variants={verticalReveal}>{service}</motion.span>
            </p>
          ))}

          <motion.div
            variants={verticalReveal}
            className="h-px w-full bg-white/20"
          />
        </div>

        {/* CTA + ARROW */}
        <div className="mb-auto font-bold transition hover:text-[#ff723f]">
          <motion.p
            variants={verticalReveal}
            className="flex justify-between text-[clamp(0.85rem,0.8vw,2rem)]"
          >
            <button
              type="button"
              onClick={handleContactClick}
              className="underline underline-offset-4 cursor-pointer"
            >
              Available for Opportunities
            </button>

            <motion.span
              variants={verticalRevealWithBounce}
              className="text-[#ff723f] text-[clamp(1rem,1vw,2rem)] me-5"
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
          I trust my ability to learn, adapt, and build what matters.
        </motion.p>

        {/* DIVIDER */}
        <motion.div
          variants={verticalReveal}
          className="h-px w-full bg-white/20"
        />

        {/* STATS */}
        <div className="flex gap-4 lg:gap-10">
          <motion.div variants={verticalReveal}>
            <p className="font-bold text-[clamp(1.5rem,2.5vw,4rem)]">
              {projectCount}+
            </p>
            <p className="opacity-60 text-[clamp(0.7rem,0.7vw,1rem)]">
              Deployed Projects Including real-time apps & APIs
            </p>
          </motion.div>

          <motion.div variants={verticalReveal}>
            <p className="font-bold text-[clamp(1.5rem,2.5vw,4rem)]">3+</p>
            <p className="opacity-60 text-[clamp(0.7rem,0.7vw,1rem)]">
              Years Building with MERN
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
