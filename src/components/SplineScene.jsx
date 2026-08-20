"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import with SSR disabled for optimal Next.js bundle performance
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineLoadingSkeleton />,
});

// Sleek glassmorphic animated loading skeleton shown while Spline loads
function SplineLoadingSkeleton() {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#0b0b0b] rounded-3xl z-10">
      <div className="relative flex items-center justify-center mb-4">
        {/* Rotating Neon Ring Loader */}
        <div className="w-16 h-16 rounded-full border-2 border-white/10 border-t-[#ff5e24] animate-spin" />
        <div className="absolute w-10 h-10 rounded-full border-2 border-white/10 border-b-[#ff824d] animate-spin [animation-duration:1.5s] [animation-direction:reverse]" />
        <span className="absolute h-3 w-3 rounded-full bg-[#ff5e24] animate-pulse" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-mono text-[#f6f5f2] font-semibold tracking-wider uppercase flex items-center gap-2">
          <span>INITIALIZING 3D CANVAS</span>
        </span>
        <span className="text-[10px] font-mono text-[#73737c]">
          Fetching 3D Mesh & Shader Shards...
        </span>
      </div>
    </div>
  );
}

export default function SplineScene({ className = "" }) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Render immediately on mount for zero-delay download start
    setShouldRender(true);
  }, []);

  // Watermark remover
  useEffect(() => {
    if (!shouldRender) return;

    const purgeWatermark = () => {
      const container = containerRef.current;
      if (!container) return;

      const elements = container.querySelectorAll("a, div, span, img, iframe, spline-viewer");
      elements.forEach((el) => {
        const text = (el.textContent || "").toLowerCase();
        const href = (el.getAttribute("href") || "").toLowerCase();
        const id = (el.id || "").toLowerCase();

        if (
          href.includes("spline") ||
          text.includes("built with spline") ||
          id.includes("watermark") ||
          id.includes("logo")
        ) {
          el.style.display = "none";
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
          try { el.remove(); } catch (e) {}
        }
      });
    };

    const interval = setInterval(purgeWatermark, 60);
    const timeout = setTimeout(() => clearInterval(interval), 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [shouldRender]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[350px] md:min-h-[500px] overflow-hidden rounded-3xl bg-[#0b0b0b] ${className}`}
    >
      {!loaded && <SplineLoadingSkeleton />}

      {shouldRender && (
        <div className="w-full h-full relative overflow-hidden rounded-3xl bg-[#0b0b0b]">
          <Spline
            scene="https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode"
            onLoad={() => setLoaded(true)}
            className="w-full h-full scale-[1.08] origin-center will-change-transform pointer-events-auto"
          />
          {/* Solid Background Mask Overlay to permanently cover the bottom-right corner where "Built with Spline" badge resides */}
          <div className="absolute bottom-0 right-0 w-44 h-12 bg-[#0b0b0b] pointer-events-none z-50 rounded-br-3xl" />
        </div>
      )}
    </div>
  );
}