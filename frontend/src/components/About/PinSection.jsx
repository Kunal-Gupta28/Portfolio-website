import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinSection({
  children,
  start = "top top",
  end = "+=100%",
  pinSpacing = true,
}) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    // Scope GSAP to this component
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start,
          end,
          pin: true,
          pinSpacing,
          anticipatePin: 1,
        });

        // cleanup for this media query
        return () => {
          trigger.kill();
        };
      });

      // cleanup for matchMedia
      return () => {
        mm.revert();
      };
    }, sectionRef);

    // 🔥 Critical cleanup for React + StrictMode
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [start, end, pinSpacing]);

  return <section ref={sectionRef}>{children}</section>;
}
