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

  // Continuous DOM & Shadow DOM Purger for Spline Watermark
  useEffect(() => {
    if (!shouldRender) return;

    const purgeWatermark = () => {
      const container = containerRef.current;
      if (!container) return;

      // 1. Regular DOM Purge
      const elements = container.querySelectorAll("a, div, span, img, iframe, spline-viewer");
      elements.forEach((el) => {
        const text = (el.textContent || "").toLowerCase();
        const href = (el.getAttribute("href") || "").toLowerCase();
        const id = (el.id || "").toLowerCase();
        const className = (el.className || "").toString().toLowerCase();

        if (
          href.includes("spline") ||
          text.includes("built with spline") ||
          id.includes("watermark") ||
          id.includes("logo") ||
          className.includes("watermark") ||
          className.includes("logo")
        ) {
          el.style.display = "none";
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
          el.style.visibility = "hidden";
          try { el.remove(); } catch (e) {}
        }
      });

      // 2. Shadow DOM Purge (for <spline-viewer>)
      const splineViewers = container.querySelectorAll("spline-viewer");
      splineViewers.forEach((viewer) => {
        if (viewer.shadowRoot) {
          const shadowElements = viewer.shadowRoot.querySelectorAll("a, #logo, #watermark, .watermark, div");
          shadowElements.forEach((el) => {
            const text = (el.textContent || "").toLowerCase();
            const href = (el.getAttribute("href") || "").toLowerCase();
            if (href.includes("spline") || text.includes("built with spline") || el.id === "logo" || el.id === "watermark") {
              el.style.display = "none";
              el.style.opacity = "0";
              el.style.pointerEvents = "none";
              try { el.remove(); } catch (e) {}
            }
          });
        }
      });
    };

    const interval = setInterval(purgeWatermark, 80);
    const timeout = setTimeout(() => clearInterval(interval), 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [shouldRender]);

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
          <div className="w-full h-full relative overflow-hidden rounded-3xl bg-[#0b0b0b]">
            <Spline
              scene="https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode"
              className="w-full h-full scale-[1.08] origin-center will-change-transform pointer-events-auto"
            />
            {/* Solid Background Mask Overlay to permanently cover the bottom-right corner where "Built with Spline" badge resides */}
            <div className="absolute bottom-0 right-0 w-44 h-12 bg-[#0b0b0b] pointer-events-none z-50 rounded-br-3xl" />
          </div>
        </Suspense>
      ) : (
        <div className="w-full h-full min-h-[350px] flex items-center justify-center bg-[#0b0b0b]/40 rounded-3xl text-xs font-mono text-[#73737c]">
          <span>Preparing 3D Canvas...</span>
        </div>
      )}
    </div>
  );
}