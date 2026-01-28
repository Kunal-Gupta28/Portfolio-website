import { useEffect, useRef, useState } from 'react';

const GlassCursor = () => {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Hide on touch devices (mobile + tablet)
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const animate = () => {
      // easing / trailing effect
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', move, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', move);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  const isSafari =
    typeof window !== 'undefined' &&
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 18,
        height: 18,
        borderRadius: '50%',

        /* glass look */
        background: 'rgba(255, 255, 255, 0.22)',
        backdropFilter: isSafari ? 'blur(3px)' : 'blur(8px)',
        WebkitBackdropFilter: isSafari ? 'blur(3px)' : 'blur(8px)',

        /* depth */
        border: '1px solid rgba(255, 255, 255, 0.35)',
        boxShadow: isSafari
          ? '0 2px 6px rgba(255,255,255,0.2)'
          : `
            0 4px 10px rgba(255,255,255,0.25),
            inset 0 0 5px rgba(255,255,255,0.5)
          `,

        /* performance */
        willChange: 'transform',
        transform: 'translate(-100px, -100px)',

        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default GlassCursor;
