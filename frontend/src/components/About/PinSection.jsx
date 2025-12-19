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
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start,
        end,
        pin: true,
        pinSpacing,
        anticipatePin: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [start, end, pinSpacing]);

  return (
    <section ref={sectionRef}>
      {children}
    </section>
  );
}
