import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const mm = gsap.matchMedia();

    // ✅ Desktop only (1024px and above)
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start,
        end,
        pin: true,
        pinSpacing,
        anticipatePin: 1,
      });
    });

    return () => mm.revert(); // cleanup
  }, [start, end, pinSpacing]);

  return <section ref={sectionRef}>{children}</section>;
}
