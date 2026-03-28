import { useState, useMemo } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

import Background from "../components/About/Background";
import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import PinSection from "../components/PinSection";
import CTAButton from "../components/CTAButton";
import Skills from "../components/About/Skills";
import Qualifications from "../components/About/Qualifications";
import Experience from "../components/About/Experience";
import Values from "../components/About/Values";
import Interests from "../components/About/Interests";

export default function About() {
  const [value, setValue] = useState("Image");
  
  // page title
  useDocumentTitle("About | Kunal Gupta");

  /* Prevent unnecessary rerenders */
  const backgroundValue = useMemo(() => value, [value]);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      {/* FIXED BACKGROUND (optimized) */}
      <section className="fixed inset-0 -z-10 min-h-svh w-screen">
        <Background value={backgroundValue} />
      </section>

      {/* hero section */}
      <Hero />

      {/* STORY (first pinned section → keep normal) */}
      <PinSection start="25% 15%" end="+=60%">
        <Story />
      </PinSection>

      {/* SKILLS */}
      <PinSection start="top 20%" end="+=60%">
        <Skills setValue={setValue} />
      </PinSection>

      {/* QUALIFICATIONS */}
      <PinSection start="top 20%" end="+=55%">
        <Qualifications />
      </PinSection>

      {/* EXPERIENCE */}
      <PinSection start="top 10%" end="+=55%">
        <Experience />
      </PinSection>

      {/* VALUES */}
      <PinSection start="top 20%" end="+=50%">
        <Values />
      </PinSection>

      {/* INTERESTS */}
      <PinSection start="top 20%" end="+=50%">
        <Interests />
      </PinSection>

      {/* CTA */}
      <section className="relative h-[70vh] lg:h-[60vh] w-full bg-black py-[45%] lg:py-[10%]  px-[8%] md:px-[25%]">
        <CTAButton position="right" heading="Let’s build meaningful systems" />
      </section>
    </main>
  );
}
