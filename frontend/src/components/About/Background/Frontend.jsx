import { motion } from "framer-motion";

export default function Frontend() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#fa5a29]/20 via-black to-black" />
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          style={{
            width: 180,
            height: 120,
            top: `${15 + i * 10}%`,
            right: `${6 + (i % 2) * 14}%`,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}