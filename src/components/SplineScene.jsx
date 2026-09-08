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
          Rendering Real-Time 3D Shaders...
        </span>
      </div>
    </div>
  );
}

// Fallback card if WebGL context is not supported or encountered an issue
function SplineFallback() {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#0b0b0b] rounded-3xl p-6 text-center border border-white/10">
      <div className="w-16 h-16 rounded-2xl bg-[#ff5e24]/10 border border-[#ff5e24]/20 flex items-center justify-center mb-4 text-[#ff5e24]">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>
      <h4 className="text-sm font-mono font-bold text-[#f5f3ef] uppercase tracking-wider mb-1">
        Interactive 3D Engineering Model
      </h4>
      <p className="text-xs text-[#a1a1aa] font-mono max-w-xs">
        Crafted with Spline, Next.js & WebGL Shaders
      </p>
    </div>
  );
}

export default function SplineScene({ className = "" }) {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSplineLoad = (splineApp) => {
    setLoaded(true);
    try {
      if (splineApp && splineApp.canvas) {
        // Prevent default browser behavior on context loss to allow WebGL recovery
        splineApp.canvas.addEventListener(
          "webglcontextlost",
          (e) => {
            e.preventDefault();
          },
          false
        );
      }
    } catch (e) {
      // safe fallback
    }
  };

  const handleSplineError = () => {
    setHasError(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[350px] md:min-h-[500px] overflow-hidden rounded-3xl bg-[#0b0b0b] ${className}`}
    >
      {!loaded && !hasError && <SplineLoadingSkeleton />}
      {hasError && <SplineFallback />}

      {mounted && !hasError && (
        <div className="w-full h-full relative overflow-hidden rounded-3xl bg-[#0b0b0b]">
          <Spline
            scene="https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode"
            onLoad={handleSplineLoad}
            onError={handleSplineError}
            className="w-full h-full scale-[1.08] origin-center will-change-transform pointer-events-auto"
          />
          {/* Solid Background Mask Overlay to cover the bottom-right watermark badge non-destructively */}
          <div className="absolute bottom-0 right-0 w-44 h-12 bg-[#0b0b0b] pointer-events-none z-50 rounded-br-3xl" />
        </div>
      )}
    </div>
  );
}