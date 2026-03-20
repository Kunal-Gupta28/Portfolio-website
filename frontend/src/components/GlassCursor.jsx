import { useEffect, useRef } from "react";

const isBrowser = typeof window !== "undefined";

// Detect once (outside component)
const isTouchDevice = isBrowser
  ? "ontouchstart" in window || navigator.maxTouchPoints > 0
  : false;

const isSafari = isBrowser
  ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  : false;

const GlassCursor = () => {
  const cursorRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (isTouchDevice) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      // smoother easing
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      const el = cursorRef.current;
      if (el) {
        el.style.transform = `translate3d(${currentX - 9}px, ${currentY - 9}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      style={styles.cursor}
    />
  );
};

export default GlassCursor;


// Extracted styles (no recreation per render)
const styles = {
  cursor: {
    position: "fixed",
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    borderRadius: "50%",

    // glass effect
    background: "rgba(255, 255, 255, 0.22)",
    backdropFilter: isSafari ? "blur(3px)" : "blur(8px)",
    WebkitBackdropFilter: isSafari ? "blur(3px)" : "blur(8px)",

    // depth
    border: "1px solid rgba(255, 255, 255, 0.35)",
    boxShadow: isSafari
      ? "0 2px 6px rgba(255,255,255,0.2)"
      : "0 4px 10px rgba(255,255,255,0.25), inset 0 0 5px rgba(255,255,255,0.5)",

    // performance
    willChange: "transform",
    transform: "translate3d(-100px, -100px, 0)",

    pointerEvents: "none",
    zIndex: 9999,
  },
};