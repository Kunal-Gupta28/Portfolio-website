import { lazy, Suspense } from "react";
import PinSection from "../PinSection";
import useIsDesktop from "../../hooks/useIsDesktop";
import IntroContent from "./intro/IntroContent";
import Loader from "../Loader";

const SplineScene = lazy(() => import("../SplineScene"));

export default function Intro() {
  const isDesktop = useIsDesktop();

  return (
    <PinSection end="+=100%">
      <div className="relative min-h-screen overflow-hidden pb-[20vh] text-white bg-black">
        <div className="mx-auto w-[90%]">
          <div className="grid min-h-screen gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Spline (only desktop) */}
            {isDesktop && (
              <Suspense fallback={<Loader />}>
                <SplineScene />
              </Suspense>
            )}

            {/* Content */}
            <IntroContent />
          </div>
        </div>
      </div>
    </PinSection>
  );
}