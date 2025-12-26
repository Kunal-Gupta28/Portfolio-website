import { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SplineScene() {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  /* 1️⃣ Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "200px", // preload before visible
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* 2️⃣ GSAP animation (only after render) */
  useEffect(() => {
    if (!shouldRender) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "200% top",
            pin: true,
            pinSpacing: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [shouldRender]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full aspect-square overflow-hidden"
    >
      {/* 3️⃣ Conditional render */}
      {shouldRender && (
        <Spline
          scene="https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode"
          className="absolute inset-0 scale-[1.4]"
        />
      )}
    </div>
  );
}
