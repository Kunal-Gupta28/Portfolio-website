import { motion } from "framer-motion";

export default function CommonBackground({ skills = [] }) {

  // stream
  const streamCount = 14;
  const streamSpeed = 3;
  const streamColor = "rgba(250,90,41,0.7)";

  // boxes
  const COLS = 3;
  const BOX_W = 180;
  const BOX_H = 120;
  const GAP_X = 40;
  const GAP_Y = 40;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-black" />

      {/* Streams */}
      {[...Array(streamCount)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute top-0 w-px h-full"
          style={{
            left: `${(i * 100) / streamCount}%`,
            background: `linear-gradient(to bottom, transparent, ${streamColor}, transparent)`,
            opacity: 0.6,
          }}
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: streamSpeed,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Skill boxes (GRID LAYOUT) */}
      {skills.map((skill, i) => {
        const row = Math.floor(i / COLS);
        const col = i % COLS;

        return (
          <motion.div
            key={skill.name}
            className="
              absolute w-45 h-30
              rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-md
              flex flex-col items-center justify-center
              text-sm text-white/80
            "
            style={{
              left: `calc(6% + ${col * (BOX_W + GAP_X)}px)`,
              top: `calc(15% + ${row * (BOX_H + GAP_Y)}px)`,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + (i % COLS) * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="h-12 mb-2 object-contain"
            />
            <span className="text-center">{skill.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}