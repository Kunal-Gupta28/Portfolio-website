import { useState, lazy, Suspense, useMemo } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

import Background from "../components/About/Background";
import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import PinSection from "../components/About/PinSection";
import CTAButton from "../components/CTAButton";
import Footer from "../components/Footer";

const Skills = lazy(() => import("../components/About/Skills"));
const Qualifications = lazy(() => import("../components/About/Qualifications"));
const Experience = lazy(() => import("../components/About/Experience"));
const Values = lazy(() => import("../components/About/Values"));
const Interests = lazy(() => import("../components/About/Interests"));

export default function About() {
  const [value, setValue] = useState("Image");

  useDocumentTitle("About | Kunal Gupta");

  /* Prevent unnecessary rerenders */
  const backgroundValue = useMemo(() => value, [value]);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      {/* FIXED BACKGROUND (optimized) */}
      <section className="fixed inset-0 -z-10 min-h-svh w-screen">
        <Background value={backgroundValue} />
      </section>  

      <Hero /> 

      {/* STORY (first pinned section → keep normal) */}
      <PinSection start="25% 15%" end="+=60%">
        <Story />
      </PinSection>

      {/* SKILLS */}
      <Suspense fallback={ <div className="flex h-screen items-center justify-center text-white">
      Loading...
    </div>}>
        <PinSection start="top 20%" end="+=60%">
          <Skills setValue={setValue} />
        </PinSection>
      </Suspense>

      {/* QUALIFICATIONS */}
      <Suspense fallback={ <div className="flex h-screen items-center justify-center text-white">
      Loading...
    </div>}>
        <PinSection start="top 20%" end="+=55%">
          <Qualifications />
        </PinSection>
      </Suspense>

      {/* EXPERIENCE */}
      <Suspense fallback={ <div className="flex h-screen items-center justify-center text-white">
      Loading...
    </div>}>
        <PinSection start="top 10%" end="+=55%">
          <Experience />
        </PinSection>
      </Suspense>

      {/* VALUES */}
      <Suspense fallback={ <div className="flex h-screen items-center justify-center text-white">
      Loading...
    </div>}>
        <PinSection start="top 20%" end="+=50%">
          <Values />
        </PinSection>
      </Suspense>

      {/* INTERESTS */}
      <Suspense fallback={ <div className="flex h-screen items-center justify-center text-white">
      Loading...
    </div>}>
        <PinSection start="top 20%" end="+=50%">
          <Interests />
        </PinSection>
      </Suspense>

      {/* CTA */}
      <section className="relative h-[70vh] lg:h-[60vh] w-full bg-black py-[45%] lg:py-[10%]  px-[8%] md:px-[25%]">
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
