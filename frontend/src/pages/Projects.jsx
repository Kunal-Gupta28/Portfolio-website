import { useState, useMemo, lazy, Suspense, useCallback } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

// components
import CategoryFilter from "../components/projects/CategoryFilter";
import ProjectGrid from "../components/projects/ProjectGrid";
import { projects } from "../data/projectsData";
import useDocumentTitle from "../hooks/useDocumentTitle";

// lazy components
const ComingSoonCard = lazy(() =>import("../components/projects/ComingSoonCard"));
const ProjectDialog = lazy(() =>import("../components/projects/ProjectDialog"));

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useDocumentTitle("Projects | Kunal Gupta");

  const handleCloseDialog = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;

    const category = selectedCategory.toLowerCase();

    return projects.filter(
      (project) => project.category.toLowerCase() === category
    );
  }, [selectedCategory]);

   const loader = useMemo(
    () => (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    ),
    []
  );

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        pt: { xs: 12, md: 16 },
        backgroundColor: "#000",
      }}
    >
      <Container maxWidth="xl">
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProjectGrid
          projects={filteredProjects}
          onViewProject={setSelectedProject}
        />

        {/* No projects state */}
        {filteredProjects.length === 0 && (
          <Suspense fallback={loader}>
            <Box sx={{ mt: 6 }}>
              <ComingSoonCard title={`${selectedCategory} Projects`} />
            </Box>
          </Suspense>
        )}

        {/* Project details dialog */}
        {selectedProject && (
          <Suspense fallback={null}>
            <ProjectDialog
              project={selectedProject}
              onClose={handleCloseDialog}
            />
          </Suspense>
        )}
      </Container>
    </Box>
  );
}