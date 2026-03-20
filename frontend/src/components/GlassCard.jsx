import { memo, useMemo } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

function GlassCard({ children, hover = true }) {
  // Safe touch detection (SSR-friendly)
  const isTouchDevice = useMemo(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window;
  }, []);

  const hoverAnimation = useMemo(() => {
    if (!hover || isTouchDevice) return {};
    return {
      y: -6,
      boxShadow: "0 30px 70px rgba(0,0,0,.75)",
    };
  }, [hover, isTouchDevice]);

  return (
    <MotionPaper
      whileHover={hoverAnimation}
      transition={{ duration: 0.3 }}
      sx={styles.paper}
    >
      {/* Gradient overlay */}
      <Box sx={styles.gradientOverlay} />

      {/* Content */}
      <Box sx={styles.content}>{children}</Box>
    </MotionPaper>
  );
}

export default memo(GlassCard);


// Styles extracted (prevents re-creation on every render)
const styles = {
  paper: {
    p: { xs: 1.5, md: 3 },
    borderRadius: 3,
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(14px)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04))",
    border: "1px solid rgba(255,255,255,.18)",
  },
  gradientOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(700px circle at top left, rgba(250,90,41,.25), transparent 50%)",
    pointerEvents: "none",
  },
  content: {
    position: "relative",
    zIndex: 1,
  },
};