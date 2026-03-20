import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Spline = lazy(() => import("@splinetool/react-spline"));

gsap.registerPlugin(ScrollTrigger);

export default function SplineScene() {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  // Intersection + Idle load
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const load = () => setShouldRender(true);

          if ("requestIdleCallback" in window) {
            requestIdleCallback(load);
          } else {
            setTimeout(load, 200);
          }

          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full aspect-square overflow-hidden"
    >
      {shouldRender && (
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center text-white">
              Loading 3D...
            </div>
          }
        >
          <Spline
            scene="https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode"
            className="absolute inset-0 scale-[1.3] will-change-transform"
          />
        </Suspense>
      )}
    </div>
  );
}