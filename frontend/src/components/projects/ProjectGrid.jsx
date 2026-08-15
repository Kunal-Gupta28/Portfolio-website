import { memo } from "react";
import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects, onViewProject }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onView={onViewProject}
        />
      ))}
    </div>
  );
}

export default memo(ProjectGrid);