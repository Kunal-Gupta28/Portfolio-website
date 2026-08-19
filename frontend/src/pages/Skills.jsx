import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import SkillsSection from "../components/skills/SkillsSection";

export default function Skills() {
  useDocumentTitle("Skills & Capability Map | Kunal Gupta");

  return (
    <main className="w-full bg-[#050505] pt-16 min-h-screen">
      <SkillsSection />
    </main>
  );
}
