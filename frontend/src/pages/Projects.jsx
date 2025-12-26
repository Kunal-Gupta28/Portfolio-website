import { useState, useMemo, lazy, Suspense } from "react";
import { Box, Container } from "@mui/material";

// importing components
import CategoryFilter from "../components/projects/CategoryFilter";
import ProjectGrid from "../components/projects/ProjectGrid";
import Footer from "../components/Footer";
import { projects } from "../data/projectsData";
import useDocumentTitle from "../hooks/useDocumentTitle";

// lazy loading
const ComingSoonCard = lazy(() =>
  import("../components/projects/ComingSoonCard")
);

const ProjectDialog = lazy(() =>
  import("../components/projects/ProjectDialog")
);

export default function Projects() {
  // state variables
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // page title
  useDocumentTitle("Projects | Kunal Gupta");

  // memorize the filter value
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter(
      (project) =>
        project.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

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

        {/* shows when their is no proejct  */}
        {filteredProjects.length === 0 && (
          <Suspense fallback={<div style={{ color: "#fff" }}>Loading...</div>}>
            <Box sx={{ mt: 6 }}>
              <ComingSoonCard title={`${selectedCategory} Projects`} />
            </Box>
          </Suspense>
        )}

        {/* info about project */}
        <Suspense fallback={null}>
          {selectedProject && (
            <ProjectDialog
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </Suspense>
      </Container>

      {/* footer */}
      <section className="mt-[20vh] lg:mt-[10vh]">
        <Footer />
      </section>
    </Box>
  );
}
