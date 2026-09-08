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
        Crafted with Spline, Next.js &amp; WebGL Shaders
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

    // ── Aggressively nuke every Spline branding element from shadow DOM ──
    const nukeBranding = () => {
      try {
        const root = viewer.shadowRoot;
        if (!root) return;

        // 1. Inject a <style> that kills everything brand-related
        if (!root.querySelector("#_spline_kill_style")) {
          const style = document.createElement("style");
          style.id = "_spline_kill_style";
          style.textContent = `
            #logo, #logo *,
            a, a *,
            [id*="logo"], [id*="watermark"], [id*="hint"], [id*="badge"],
            [class*="logo"], [class*="watermark"], [class*="badge"],
            #hint-drag, #hint-drag * {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
              width: 0 !important;
              height: 0 !important;
              max-width: 0 !important;
              max-height: 0 !important;
              overflow: hidden !important;
              position: absolute !important;
              top: -999999px !important;
              left: -999999px !important;
              z-index: -9999 !important;
              transform: scale(0) !important;
            }
          `;
          root.appendChild(style);
        }

        // 2. Directly remove any <a> tags (the Spline logo IS an anchor)
        root.querySelectorAll("a").forEach((el) => {
          try { el.remove(); } catch (_) {}
        });

        // 3. Kill by ID patterns
        ["#logo", "#watermark", "#hint-drag", "#badge"].forEach((sel) => {
          root.querySelectorAll(sel).forEach((el) => {
            try { el.remove(); } catch (_) {}
          });
        });

        // 4. Kill anything whose id/class contains brand keywords
        root.querySelectorAll("*").forEach((el) => {
          const id = (el.id || "").toLowerCase();
          const cls = (el.className || "").toLowerCase();
          if (
            id.includes("logo") || id.includes("watermark") ||
            id.includes("badge") || id.includes("hint") ||
            cls.includes("logo") || cls.includes("watermark") ||
            cls.includes("badge")
          ) {
            try { el.remove(); } catch (_) {}
          }
        });
      } catch (_) {}
    };

    // Run aggressively for the first 10 seconds, then cool down
    const interval = setInterval(nukeBranding, 30);
    const slowInterval = setTimeout(() => {
      clearInterval(interval);
      setInterval(nukeBranding, 500);
    }, 10000);

    // MutationObserver — re-run whenever shadow DOM mutates
    let observer = null;
    try {
      const waitForShadow = setInterval(() => {
        if (viewer.shadowRoot) {
          clearInterval(waitForShadow);
          observer = new MutationObserver(nukeBranding);
          observer.observe(viewer.shadowRoot, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: false,
          });
          nukeBranding();
        }
      }, 50);
    } catch (_) {}

    const handleLoad = () => {
      setLoaded(true);
      nukeBranding();
    };

    viewer.addEventListener("load-complete", handleLoad);
    viewer.addEventListener("load", handleLoad);
    viewer.addEventListener("error", () => setHasError(true));

    nukeBranding();

    const fallbackTimer = setTimeout(() => {
      setLoaded(true);
      nukeBranding();
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(slowInterval);
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

          {/* ── Solid paint-over mask — covers the FULL bottom strip ──
              The Spline "Built with Spline" logo sits at bottom-center.
              We paint over it with the exact same bg color as the card. */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "72px",
              background: "#0b0b0b",
              zIndex: 60,
              pointerEvents: "none",
              borderBottomLeftRadius: "1.5rem",
              borderBottomRightRadius: "1.5rem",
            }}
          />
        </div>
      )}
    </div>
  );
}