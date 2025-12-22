import { Paper, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

export default function ComingSoonCard({ title }) {
  return (
    <MotionPaper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      sx={{
        p: 4,
        minHeight: 320,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background:
          "linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03))",
        border: "1px dashed rgba(255,255,255,.25)",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, color: "#fff", mb: 1 }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,.6)" }}>
          Projects coming soon 🚀
        </Typography>
      </Box>
    </MotionPaper>
  );
}
