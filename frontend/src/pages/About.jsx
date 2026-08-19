import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import AboutSection from "../components/About/AboutSection";
import EngineeringQuotes from "../components/About/EngineeringQuotes";

export default function About() {
  useDocumentTitle("About | Kunal Gupta — Software Engineer & DTU Graduate");

  return (
    <main className="w-full bg-[#050505] pt-20">
      <AboutSection />
      <EngineeringQuotes />
    </main>
  );
}
