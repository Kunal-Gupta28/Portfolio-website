import { Grid } from "@mui/material";

// importing component
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, onViewProject }) {
  return (
    // show 1,2,3 coloums on small, medium and larger device
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item xs={12} md={6} lg={4} key={project.id}>

          {/* project card */}
          <ProjectCard
            project={project}
            onView={() => onViewProject(project)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
