import { useState } from "react";
import SmoothScroll from "../components/SmoothScroll";
import PinSection from "../components/About/PinSection";

import Background from "../components/About/Background";
import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import Skills from "../components/About/Skills";
import Values from "../components/About/Values";
import CTAButton from "../components/CTAButton";

export default function About() {
  const [value, setValue] = useState("Image");
  // const [value, setValue] = useState("Frontend");
  return (
    <SmoothScroll>
      <main className="bg-black text-white pb-[50vh]">
        <div className=" fixed inset-0">
          <Background value={value} />
        </div>
        <Hero />

        <PinSection start="top 15%" end="+=80%">
          <Story />
        </PinSection>

        <PinSection start="top 20%" end="+=90%">
          <Skills setValue={setValue} />
        </PinSection>

        <PinSection start="top 20%" end="+=70%">
          <Values />
        </PinSection>

        <CTAButton position="right" heading="Let’s build meaningful systems" />
      </main>
    </SmoothScroll>
  );
}
