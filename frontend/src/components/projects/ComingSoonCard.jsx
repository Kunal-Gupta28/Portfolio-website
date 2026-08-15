import { memo } from "react";
import { motion } from "framer-motion";

function ComingSoonCard({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        flex
        min-h-[320px]
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-white/25
        bg-gradient-to-b
        from-white/10
        to-white/5
        p-8
        text-center
        backdrop-blur-md
      "
    >
      <div>
        <h3 className="mb-2 text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="text-sm text-white/60">
          Projects coming soon 🚀
        </p>
      </div>
    </motion.div>
  );
}

export default memo(ComingSoonCard);