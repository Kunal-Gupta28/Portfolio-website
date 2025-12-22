import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, onViewProject }) {
  return (
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item xs={12} md={6} lg={4} key={project.id}>
          <ProjectCard
            project={project}
            onView={() => onViewProject(project)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
