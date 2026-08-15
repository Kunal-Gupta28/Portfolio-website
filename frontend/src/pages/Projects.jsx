import { useState, useMemo, lazy, Suspense, useCallback } from "react";

// components
import CategoryFilter from "../components/projects/CategoryFilter";
import ProjectGrid from "../components/projects/ProjectGrid";
import { projects } from "../data/projectsData";
import useDocumentTitle from "../hooks/useDocumentTitle";

// lazy components
const ComingSoonCard = lazy(() => import("../components/projects/ComingSoonCard"));
const ProjectDialog = lazy(() => import("../components/projects/ProjectDialog"));

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

  const loader = (
    <div className="mt-8 flex justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#fa5a29] border-t-transparent" />
    </div>
  );

  return (
    <main className="min-h-svh bg-black pt-28 md:pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <div className="mt-12">
              <ComingSoonCard title={`${selectedCategory} Projects`} />
            </div>
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
      </div>
    </main>
  );
}