import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ProjectsSection from "../components/projects/ProjectsSection";

export default function Projects() {
  useDocumentTitle("Projects | Kunal Gupta — Software Engineer");

  return (
    <main className="w-full bg-[#050505] pt-16">
      <ProjectsSection />
    </main>
  );
}