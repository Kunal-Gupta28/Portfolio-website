import { memo } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

const animation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const paperStyle = {
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
};

const titleStyle = {
  fontWeight: 700,
  color: "#fff",
  mb: 1,
};

const textStyle = {
  color: "rgba(255,255,255,.6)",
};

function ComingSoonCard({ title }) {
  return (
    <MotionPaper {...animation} sx={paperStyle}>
      <Box>
        {/* title  */}
        <Typography variant="h5" sx={titleStyle}>
          {title}
        </Typography>

        {/* text */}
        <Typography sx={textStyle}>
          Projects coming soon 🚀
        </Typography>
      </Box>
    </MotionPaper>
  );
}

export default memo(ComingSoonCard);