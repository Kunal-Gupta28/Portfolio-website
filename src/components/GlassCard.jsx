import { memo, useMemo } from "react";
import { motion } from "framer-motion";

function GlassCard({ children, hover = true }) {
  // Safe touch detection
  const isTouchDevice = useMemo(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window;
  }, []);

  const canHover = hover && !isTouchDevice;

  return (
    <motion.div
      whileHover={canHover ? { y: -6 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/18
        bg-gradient-to-b
        from-white/10
        to-white/5
        p-4
        md:p-6
        backdrop-blur-md
        transition-all
        ${canHover ? "hover:border-white/30 hover:shadow-[0_30px_70px_rgba(0,0,0,0.75)]" : ""}
      `}
    >
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_top_left,rgba(250,90,41,0.25),transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default memo(GlassCard);