"use client";

import React from "react";
import AboutSection from "../components/About/AboutSection";
import EngineeringQuotes from "../components/About/EngineeringQuotes";

export default function About() {
  return (
    <main className="w-full bg-[#050505] pt-20">
      <AboutSection />
      <EngineeringQuotes />
    </main>
  );
}
