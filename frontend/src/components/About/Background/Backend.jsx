import { motion } from "framer-motion";

export default function Backend() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black" />

      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute top-0 w-px h-full
                     bg-gradient-to-b from-transparent via-[#fa5a29]/40 to-transparent"
          style={{ left: `${i * 5.5}%` }}
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
}
