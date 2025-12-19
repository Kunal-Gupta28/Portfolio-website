import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

import { fadeInUp } from "../data/animations";
import { projects, categories } from "../data/projectsData";

const MotionPaper = motion(Paper);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Web App");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <Box sx={{ minHeight: "100dvh", py: 10 }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: 800,
              background:
                "linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Projects
          </Typography>
        </motion.div>

        {/* Category Filter */}
        <Box
          sx={{
            mb: 6,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setSelectedCategory(cat)}
              sx={{
                px: 1.8,
                fontWeight: 500,
                backdropFilter: "blur(10px)",
                background:
                  selectedCategory === cat
                    ? "linear-gradient(45deg, #7C4DFF, #00E5FF)"
                    : "rgba(124,77,255,0.12)",
                color:
                  selectedCategory === cat
                    ? "#fff"
                    : "#7C4DFF",
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  background:
                    "linear-gradient(45deg, #7C4DFF, #00E5FF)",
                  color: "#fff",
                },
              }}
            />
          ))}
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <MotionPaper
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(124,77,255,0.18)",
                  boxShadow:
                    "0 30px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow:
                      "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.25)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontWeight: 600, textAlign: "center" }}
                >
                  {project.title}
                </Typography>

                <Typography sx={{ mb: 3, color: "text.secondary" }}>
                  {project.description}
                </Typography>

                {/* Tech stack */}
                <Box sx={{ mb: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(6px)",
                      }}
                    />
                  ))}
                </Box>

                {/* Actions */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1.5,
                  }}
                >
                  {[
                    { icon: <GitHubIcon />, link: project.github },
                    { icon: <LaunchIcon />, link: project.live },
                  ].map(
                    (item, i) =>
                      item.link && (
                        <IconButton
                          key={i}
                          component="a"
                          href={item.link}
                          target="_blank"
                          sx={{
                            color: "rgba(255,255,255,0.6)",
                            transition: "all 0.25s ease",
                            "&:hover": {
                              color: "#7C4DFF",
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          {item.icon}
                        </IconButton>
                      )
                  )}

                  <IconButton
                    onClick={() => setSelectedProject(project)}
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      "&:hover": {
                        color: "#00E5FF",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>

                  {project.videoDemo && (
                    <IconButton
                      component="a"
                      href={project.videoDemo}
                      target="_blank"
                      sx={{
                        color: "rgba(255,255,255,0.6)",
                        "&:hover": {
                          color: "#FF4081",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <VideoLibraryIcon />
                    </IconButton>
                  )}
                </Box>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        {/* Project Dialog */}
        <Dialog
          open={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              background:
                "linear-gradient(180deg, rgba(30,30,30,0.95), rgba(20,20,20,0.95))",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              border: "1px solid rgba(124,77,255,0.2)",
            },
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle>
                {selectedProject.title}
                <IconButton
                  onClick={() => setSelectedProject(null)}
                  sx={{ position: "absolute", right: 8, top: 8 }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <DialogContent>
                {selectedProject.hasApiDependency && (
                  <Alert severity="info" sx={{ mb: 2 }}>
                    This project uses external APIs. Demo may stop
                    working if free tier expires.
                  </Alert>
                )}

                <Typography sx={{ whiteSpace: "pre-line" }}>
                  {selectedProject.longDescription}
                </Typography>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
