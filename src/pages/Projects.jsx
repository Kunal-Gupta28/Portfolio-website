import React, { useState } from "react";
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
import Navbar from "../components/Navbar";
import { fadeInUp } from "../data/animations";
import { projects, categories } from "../data/projectsData";

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
    <Box sx={{ minHeight: "100dvh", py: 8 }}>
      <Navbar />

      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: "bold",
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
            mb: 4,
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
                backgroundColor:
                  selectedCategory === cat
                    ? "primary.main"
                    : "rgba(124,77,255,0.1)",
                color:
                  selectedCategory === cat
                    ? "white"
                    : "primary.main",
              }}
            />
          ))}
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <Paper
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "rgba(20,20,20,0.8)",
                  border: "1px solid rgba(124,77,255,0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  {project.title}
                </Typography>

                <Typography
                  sx={{ mb: 3, color: "text.secondary" }}
                >
                  {project.description}
                </Typography>

                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} size="small" />
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    component="a"
                    href={project.github}
                    target="_blank"
                  >
                    <GitHubIcon />
                  </IconButton>

                  <IconButton
                    component="a"
                    href={project.live}
                    target="_blank"
                  >
                    <LaunchIcon />
                  </IconButton>

                  <IconButton
                    onClick={() => setSelectedProject(project)}
                  >
                    <VisibilityIcon />
                  </IconButton>

                  {project.videoDemo && (
                    <IconButton
                      component="a"
                      href={project.videoDemo}
                      target="_blank"
                    >
                      <VideoLibraryIcon />
                    </IconButton>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Dialog */}
        <Dialog
          open={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
          maxWidth="md"
          fullWidth
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

                <Typography
                  sx={{ whiteSpace: "pre-line" }}
                >
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
