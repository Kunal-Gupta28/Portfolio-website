import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedWords({ text }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".word");

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
          stagger: 0.08,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "top -40%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
