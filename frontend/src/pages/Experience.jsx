import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ExperienceSection from "../components/experience/ExperienceSection";

export default function Experience() {
  useDocumentTitle("Experience & Education | Kunal Gupta");

  return (
    <main className="w-full bg-[#050505] pt-16 min-h-screen">
      <ExperienceSection />
    </main>
  );
}
