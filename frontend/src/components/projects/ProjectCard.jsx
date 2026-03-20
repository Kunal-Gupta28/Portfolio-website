import { memo, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { motion } from "framer-motion";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import InfoIcon from "@mui/icons-material/Info";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

import ActionIcon from "./ActionIcon";

const MotionPaper = motion(Paper);

const ProjectCard = ({ project, onView }) => {
  const { title, description, technologies, github, live, videoDemo } = project;

  const techChips = useMemo(
    () =>
      technologies.map((tech) => (
        <Chip
          key={tech}
          label={tech}
          size="small"
          sx={{
            fontSize: ".75rem",
            background: "rgba(255,255,255,.1)",
            color: "rgba(255,255,255,.8)",
            "&:hover": {
              background: "rgba(250,90,41,.18)",
              color: "#fff",
            },
          }}
        />
      )),
    [technologies]
  );

  const actions = [
    github && { title: "GitHub", icon: <GitHubIcon />, href: github },
    live && { title: "Live Demo", icon: <LaunchIcon />, href: live },
    { title: "Details", icon: <InfoIcon />, onClick: onView, accent: true },
    videoDemo && {
      title: "Video Demo",
      icon: <VideoLibraryIcon />,
      href: videoDemo,
    },
  ].filter(Boolean);

  return (
    <MotionPaper
      whileHover={{ y: -6, boxShadow: "0 30px 70px rgba(0,0,0,.75)" }}
      transition={{ duration: 0.3 }}
      sx={{
        py: { xs: 2, md: 3 },
        px: { xs: 1, md: 3 },
        height: "100%",
        minHeight: { xs: 300, md: 380 },
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(14px)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04))",
        border: "1px solid rgba(255,255,255,.18)",
      }}
    >
      {/* Accent glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(500px circle at top left, rgba(250,90,41,.12), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Title */}
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: 700, color: "#fff" }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          my: 2,
          textAlign: "center",
          fontSize: ".95rem",
          lineHeight: 1.6,
          color: "rgba(255,255,255,.7)",
        }}
      >
        {description}
      </Typography>

      {/* Tech stack */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
          mb: 2,
        }}
      >
        {techChips}
      </Box>

      {/* Divider */}
      <Box sx={{ height: 1, width: "100%", mb: 2 }} />

      {/* Actions */}
      <Box
        sx={{
          mt: "auto",
          display: "flex",
          justifyContent: "center",
          gap: 1.4,
        }}
      >
        {actions.map((action, i) => (
          <ActionIcon key={i} {...action} />
        ))}
      </Box>
    </MotionPaper>
  );
};

export default memo(ProjectCard);