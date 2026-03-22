import PinSection from "../PinSection";
import useIsDesktop from "../../hooks/useIsDesktop";
import SplineScene from "../SplineScene";
import IntroContent from "./intro/IntroContent";

export default function Intro() {
  const isDesktop = useIsDesktop();

  return (
    <PinSection end="+=100%">
      <div className="relative min-h-screen overflow-hidden text-white bg-black">
        <div className="mx-auto w-[90%]">
          <div className="grid min-h-screen gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Spline (only desktop) */}
            {isDesktop && <SplineScene />}

            {/* Content */}
            <IntroContent />
          </div>
        </div>
      </div>
    </PinSection>
  );
}