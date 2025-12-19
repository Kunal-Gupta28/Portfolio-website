import { motion } from "framer-motion";

export default function Mobile() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-[#fa5a29]/10" />

      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-40 w-24 rounded-3xl
                     border border-white/10 bg-white/5"
          style={{ left: `${10 + i * 12}%` }}
          animate={{ y: ["120%", "-120%"], opacity: [0, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.div>
  );
}
