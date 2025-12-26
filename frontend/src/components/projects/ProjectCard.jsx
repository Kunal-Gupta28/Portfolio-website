import { Box, Typography, Paper, Chip, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import InfoIcon from "@mui/icons-material/Info";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

const MotionPaper = motion(Paper);
const MotionIcon = motion(IconButton);

const ACCENT = "#fa5a29";

export default function ProjectCard({ project, onView }) {
  return (
    <MotionPaper
      whileHover={{ y: -6, boxShadow: "0 30px 70px rgba(0,0,0,.75)" }}
      transition={{ duration: 0.3 }}
      sx={{
        py: {xs:2,md:3},
        px: {xs:1,md:3},
        height: "100%",
        minHeight: {xs:300, md:380},
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
        {project.title}
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
        {project.description}
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
        {project.technologies.map((t) => (
          <Chip
            key={t}
            label={t}
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
        ))}
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: 1,
          width: "100%",
          mb: 2,
        }}
      />

      {/* Actions: github , project links with project info and video link*/}
      <Box
        sx={{
          mt: "auto",
          display: "flex",
          justifyContent: "center",
          gap: 1.4,
        }}
      >

        {/* github icon : project repo */}
        {project.github && (
          <Tooltip title="GitHub">
            <MotionIcon
              whileHover={{ scale: 1.15 }}
              component="a"
              href={project.github}
              target="_blank"
              sx={{ color: "rgba(255,255,255,.85)", "&:hover": { color: ACCENT } }}
            >
              <GitHubIcon />
            </MotionIcon>
          </Tooltip>
        )}

        {/* project link */}
        {project.live && (
          <Tooltip title="Live Demo">
            <MotionIcon
              whileHover={{ scale: 1.15 }}
              component="a"
              href={project.live}
              target="_blank"
              sx={{ color: "rgba(255,255,255,.85)", "&:hover": { color: ACCENT } }}
            >
              <LaunchIcon />
            </MotionIcon>
          </Tooltip>
        )}

        {/* project info */}
        <Tooltip title="Details">
          <MotionIcon
            whileHover={{ scale: 1.15 }}
            onClick={onView}
            sx={{ color: ACCENT }}
          >
            <InfoIcon />
          </MotionIcon>
        </Tooltip>

        {/* video Demo link */}
        {project.videoDemo && (
          <Tooltip title="Video Demo">
            <MotionIcon
              whileHover={{ scale: 1.15 }}
              component="a"
              href={project.videoDemo}
              target="_blank"
              sx={{ color: "rgba(255,255,255,.85)", "&:hover": { color: ACCENT } }}
            >
              <VideoLibraryIcon />
            </MotionIcon>
          </Tooltip>
        )}
      </Box>
    </MotionPaper>
  );
}
