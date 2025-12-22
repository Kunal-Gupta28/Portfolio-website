import { useState } from "react";

import PinSection from "../components/About/PinSection";
import Background from "../components/About/Background";
import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import Skills from "../components/About/Skills";
import Qualifications from "../components/About/Qualifications";
import Values from "../components/About/Values";
import CTAButton from "../components/CTAButton";
import Footer from "../components/Footer";

export default function About() {
  const [value, setValue] = useState("Image");

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      {/* GLOBAL FIXED BACKGROUND */}
      <section className="fixed inset-0 -z-10">
        <Background value={value} />
      </section>

      {/* HERO */}
      <Hero />

      {/* STORY */}
      <PinSection start="top 15%" end="+=80%">
        <Story />
      </PinSection>

      {/* SKILLS */}
      <PinSection start="top 20%" end="+=90%">
        <Skills setValue={setValue} />
      </PinSection>

      {/* QUALIFICATIONS */}
      <PinSection start="top 20%" end="+=80%">
        <Qualifications />
      </PinSection>

      {/* VALUES */}
      <PinSection start="top 20%" end="+=70%">
        <Values />
      </PinSection>

      {/* CTA */}
      <section className="relative w-full bg-black py-[12%] px-[8%] md:px-[25%]">
        <CTAButton
          position="right"
          heading="Let’s build meaningful systems"
        />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}