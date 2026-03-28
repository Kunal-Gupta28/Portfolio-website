import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsDesktop from "../../../hooks/useIsDesktop";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedWords({ text }) {
  const containerRef = useRef(null);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".word");

    // device-based config
    const start = isDesktop ? "top 35%" : "top 85%";
    const end = isDesktop ? "top -20%" : "top 20%";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          y: 24,
          opacity: 0,
        },
        {
          y: 0,
          marginTop: 6,
          opacity: 1,
          ease: "none",
          stagger: isDesktop ? 0.08 : 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            end,
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <span ref={containerRef} className="block">
      {text.split(/\s+/).map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-2"
          style={{ height: "1.2em" }}
        >
          <span className="word inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
