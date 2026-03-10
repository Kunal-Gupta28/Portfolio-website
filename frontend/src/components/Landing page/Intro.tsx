import { lazy, Suspense, useRef } from "react";
import useIsDesktop from "../../hooks/useIsDesktop";
import IntroContent from "./intro/IntroContent";
import Loader from "../Loader";

// Lazy import (only loaded if rendered)
const SplineScene = lazy(() => import("./intro/SplineScene"));

export default function Intro() {
  const sectionRef = useRef(null);
  const isDesktop = useIsDesktop();

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black pb-[20vh] text-white"
    >
      <div className="mx-auto w-[90%]">
        <div className="grid min-h-screen gap-16 lg:grid-cols-2 lg:gap-24">

          {/* spline scene */}
          {isDesktop && (
            <Suspense fallback={<Loader />}>
              <SplineScene />
            </Suspense>
          )}

          {/* Content always visible */}
          <IntroContent />
        </div>
      </div>
    </section>
  );
}
