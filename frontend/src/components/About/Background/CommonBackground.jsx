import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect, useState } from "react";
import SkillImage from "./SkillImage";

/* Responsive layout */
const LAYOUT = {
  mobile: { COLS: 3, BOX_W: 90, BOX_H: 70, GAP_X: 20, GAP_Y: 30 },
  tablet: { COLS: 3, BOX_W: 120, BOX_H: 90, GAP_X: 30, GAP_Y: 30 },
  desktop: { COLS: 4, BOX_W: 120, BOX_H: 100, GAP_X: 40, GAP_Y: 40 },
};

/* Breakpoint Hook */
function useBreakpoint() {
  const [bp, setBp] = useState("desktop");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    };

    update();

    let timeout;
    const resize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(update, 150);
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return bp;
}

export default function CommonBackground({ skills = [] }) {
  const breakpoint = useBreakpoint();
  const { COLS, BOX_W, BOX_H, GAP_X, GAP_Y } = LAYOUT[breakpoint];

  const streamCount = 14;
  const streamSpeed = 3;
  const streamColor = "rgba(250,90,41,0.7)";

  return (
    <LazyMotion features={domAnimation}>
      <div className="absolute inset-0 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0" />

        {/* Streams */}
        {Array.from({ length: streamCount }).map((_, i) => (
          <m.span
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

        {/* Skill Boxes */}
        {skills.map((skill, i) => {
          const row = Math.floor(i / COLS);
          const col = i % COLS;

          const x = col * (BOX_W + GAP_X);
          const y = row * (BOX_H + GAP_Y);

          return (
            <m.div
              key={skill.name}
              className="
                absolute rounded-2xl border border-white/10
                bg-white/5 backdrop-blur-md
                flex flex-col items-center justify-center
                text-white/80
              "
              style={{
                width: BOX_W,
                height: BOX_H,
                left: `calc(6% + ${x}px)`,
                top: `calc(15% + ${y}px)`,
                willChange: "transform",
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4 + (i % COLS) * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <SkillImage
                src={skill.image}
                alt={skill.name}
                name={skill.name}
              />
            </m.div>
          );
        })}
      </div>
    </LazyMotion>
  );
}
