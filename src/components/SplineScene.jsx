"use client";

import React, { useRef, useEffect, useState } from "react";

// Sleek glassmorphic animated loading skeleton shown while Spline loads
function SplineLoadingSkeleton({ isVisible }) {
  return (
    <div
      className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#0b0b0b] rounded-3xl z-10 transition-all duration-500 pointer-events-none ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none invisible"
      }`}
    >
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

// Fallback card if WebGL is unavailable
function SplineFallback() {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#0b0b0b] rounded-3xl p-6 text-center border border-white/10 z-10">
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
  const viewerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const viewer = viewerRef.current;
    if (!viewer) return;

    const purgeLogo = () => {
      try {
        if (viewer && viewer.shadowRoot) {
          const logo = viewer.shadowRoot.querySelector("#logo");
          if (logo) {
            logo.style.setProperty("display", "none", "important");
            logo.style.setProperty("visibility", "hidden", "important");
            logo.style.setProperty("opacity", "0", "important");
            logo.style.setProperty("pointer-events", "none", "important");
            logo.style.setProperty("transform", "scale(0)", "important");
            logo.style.setProperty("width", "0px", "important");
            logo.style.setProperty("height", "0px", "important");
            logo.style.setProperty("position", "absolute", "important");
            logo.style.setProperty("top", "-9999px", "important");
          }

          if (!viewer.shadowRoot.querySelector("#spline-hide-style")) {
            const style = document.createElement("style");
            style.id = "spline-hide-style";
            style.textContent = `
              #logo, #logo *, a[href*="spline.design"], #hint-drag {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                transform: scale(0) !important;
                width: 0px !important;
                height: 0px !important;
                position: absolute !important;
                top: -9999px !important;
                left: -9999px !important;
              }
            `;
            viewer.shadowRoot.appendChild(style);
          }
        }
      } catch (e) {}
    };

    let observer = null;
    try {
      if (viewer.shadowRoot) {
        observer = new MutationObserver(() => {
          purgeLogo();
        });
        observer.observe(viewer.shadowRoot, {
          childList: true,
          subtree: true,
          attributes: true,
        });
      }
    } catch (e) {}

    const handleLoad = () => {
      setLoaded(true);
      purgeLogo();
    };

    viewer.addEventListener("load-complete", handleLoad);
    viewer.addEventListener("load", handleLoad);
    viewer.addEventListener("error", () => setHasError(true));

    purgeLogo();
    const interval = setInterval(purgeLogo, 50);

    const fallbackTimer = setTimeout(() => {
      setLoaded(true);
      purgeLogo();
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
      if (observer) observer.disconnect();
      viewer.removeEventListener("load-complete", handleLoad);
      viewer.removeEventListener("load", handleLoad);
    };
  }, [mounted]);

  return (
    <div
      className={`relative w-full h-full min-h-[350px] md:min-h-[500px] overflow-hidden rounded-3xl bg-[#0b0b0b] ${className}`}
    >
      <SplineLoadingSkeleton isVisible={!loaded && !hasError} />
      {hasError && <SplineFallback />}

      {mounted && !hasError && (
        <div className="w-full h-full relative overflow-hidden rounded-3xl bg-[#0b0b0b]">
          <spline-viewer
            ref={viewerRef}
            url="https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode"
            loading-anim-type="none"
            className="w-full h-full block"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              transform: "scale(1.06)",
            }}
          />

          {/* Solid Background Mask Overlay permanently covering the entire bottom-right watermark area */}
          <div className="absolute bottom-0 right-0 w-60 h-20 bg-[#0b0b0b] pointer-events-none z-40 rounded-br-3xl" />
        </div>
      )}
    </div>
  );
}