import React, { useEffect, useRef } from "react";

const isBrowser = typeof window !== "undefined";
const isTouchDevice = isBrowser
  ? "ontouchstart" in window || navigator.maxTouchPoints > 0
  : false;

export default function GlassCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(null);

  // Store continuous physics state in refs to avoid React re-renders on mousemove
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const scaleRef = useRef({ ring: 1, dot: 1 });
  const targetScaleRef = useRef({ ring: 1, dot: 1 });
  const isHoveredRef = useRef(false);
  const isPressedRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      // Detect interactive target elements
      const target = e.target;
      const isInteractive = Boolean(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.closest("[data-cursor-hover]") ||
        target.closest(".cursor-pointer")
      );

      isHoveredRef.current = isInteractive;

      // Update target scale multipliers (compact tight ranges)
      if (isPressedRef.current) {
        targetScaleRef.current = { ring: 0.8, dot: 0.7 };
      } else if (isHoveredRef.current) {
        targetScaleRef.current = { ring: 1.15, dot: 1.1 };
      } else {
        targetScaleRef.current = { ring: 1, dot: 1 };
      }
    };

    const handleMouseDown = () => {
      isPressedRef.current = true;
      targetScaleRef.current = { ring: 0.8, dot: 0.7 };
    };

    const handleMouseUp = () => {
      isPressedRef.current = false;
      targetScaleRef.current = isHoveredRef.current
        ? { ring: 1.15, dot: 1.1 }
        : { ring: 1, dot: 1 };
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    // 120FPS Hardware Accelerated RAF Loop
    const animate = () => {
      const { x: targetX, y: targetY } = mousePos.current;

      // Inner precision dot moves 1:1 with cursor
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${scaleRef.current.dot})`;
      }

      // Outer thin ring lerps smoothly (spring inertia)
      ringPos.current.x += (targetX - ringPos.current.x) * 0.22;
      ringPos.current.y += (targetY - ringPos.current.y) * 0.22;

      // Lerp scale transitions
      scaleRef.current.ring += (targetScaleRef.current.ring - scaleRef.current.ring) * 0.25;
      scaleRef.current.dot += (targetScaleRef.current.dot - scaleRef.current.dot) * 0.3;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${scaleRef.current.ring})`;

        // Clean transparent styling without giant glows or fills
        if (isHoveredRef.current) {
          ringRef.current.style.borderColor = "rgba(255, 94, 36, 0.8)";
          ringRef.current.style.boxShadow = "0 0 6px rgba(255, 94, 36, 0.2)";
          ringRef.current.style.backgroundColor = "transparent";
        } else {
          ringRef.current.style.borderColor = "rgba(255, 94, 36, 0.35)";
          ringRef.current.style.boxShadow = "none";
          ringRef.current.style.backgroundColor = "transparent";
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Sleek Ultra-Compact Outer Ring (14px Base Size) */}
      <div
        ref={ringRef}
        style={{ opacity: 0 }}
        className="fixed top-0 left-0 -mt-1.75 -ml-1.75 w-3.5 h-3.5 rounded-full border border-[#ff5e24]/40 pointer-events-none z-[99999] will-change-transform transition-opacity duration-300"
      />

      {/* Precision Core Orange Dot (6px Base Size) */}
      <div
        ref={dotRef}
        style={{ opacity: 0 }}
        className="fixed top-0 left-0 -mt-[3px] -ml-[3px] w-1.5 h-1.5 rounded-full bg-[#ff5e24] shadow-[0_0_6px_#ff5e24] pointer-events-none z-[100000] will-change-transform transition-opacity duration-300"
      />
    </>
  );
}