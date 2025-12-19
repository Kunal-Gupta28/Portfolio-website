import { useRef } from "react";
import SplineScene from "./intro/SplineScene";
import IntroContent from "./intro/IntroContent";

export default function Intro() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
    >
      <div className="mx-auto w-[90%]">
        <div className="grid h-full gap-24 lg:grid-cols-2">
          <SplineScene />
          <IntroContent />
        </div>
      </div>
    </section>
  );
}
