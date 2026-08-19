import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Spline = lazy(() => import("@splinetool/react-spline"));

gsap.registerPlugin(ScrollTrigger);

export default function SplineScene({ className = "" }) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[350px] md:min-h-[500px] overflow-hidden rounded-3xl ${className}`}
    >
      {shouldRender ? (
        <Suspense
          fallback={
            <div className="w-full h-full min-h-[350px] flex items-center justify-center bg-[#0b0b0b]/60 border border-white/10 rounded-3xl text-[#ff5e24] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-ping" />
                <span>Loading 3D Spline Scene...</span>
              </div>
            </div>
          }
        >
          <Spline
            scene="https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode"
            className="w-full h-full will-change-transform pointer-events-auto"
          />
        </Suspense>
      ) : (
        <div className="w-full h-full min-h-[350px] flex items-center justify-center bg-[#0b0b0b]/40 rounded-3xl text-xs font-mono text-[#73737c]">
          <span>Preparing 3D Canvas...</span>
        </div>
      )}
    </div>
  );
}