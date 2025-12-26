import { Paper, Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

export default function GlassCard({ children, hover = true }) {
  return (

    // outer box
    <MotionPaper
      whileHover={
        hover && !("ontouchstart" in window)
          ? { y: -6, boxShadow: "0 30px 70px rgba(0,0,0,.75)" }
          : {}
      }
      transition={{ duration: 0.3 }}
      sx={{
        p: {xs:1.5, md:3},
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(14px)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04))",
        border: "1px solid rgba(255,255,255,.18)",
      }}
    >

      {/* Orange gradient on top left corner */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(700px circle at top left, rgba(250,90,41,.25), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* inner box */}
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </MotionPaper>
  );
}
