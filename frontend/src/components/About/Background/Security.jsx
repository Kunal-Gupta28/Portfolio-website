import { motion } from "framer-motion";

export default function Security() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#fa5a29]/40"
            style={{
              width: 220 + i * 160,
              height: 220 + i * 160,
            }}
            animate={{ scale: [0.4, 1.2], opacity: [0.6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
