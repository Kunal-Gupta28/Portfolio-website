import { useState, useMemo } from "react";
import { Box, Container } from "@mui/material";

import CategoryFilter from "../components/projects/CategoryFilter";
import ProjectGrid from "../components/projects/ProjectGrid";
import ComingSoonCard from "../components/projects/ComingSoonCard";
import ProjectDialog from "../components/projects/ProjectDialog";
import Footer from "../components/Footer";
import { projects } from "../data/projectsData";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useDocumentTitle("Projects | Kunal Gupta");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter(
      (project) =>
        project.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <Box sx={{ minHeight: "100dvh", pt: 16, backgroundColor: "#000" }}>
      <Container maxWidth="lg">
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProjectGrid
          projects={filteredProjects}
          onViewProject={setSelectedProject}
        />

        {filteredProjects.length === 0 && (
          <Box
            sx={{
              mt: 6,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 4,
            }}
          >
            <ComingSoonCard title={`${selectedCategory} Projects`} />
          </Box>
        )}

        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
      <section className="mt-[10%]">
        <Footer />
      </section>
    </Box>
  );
}
