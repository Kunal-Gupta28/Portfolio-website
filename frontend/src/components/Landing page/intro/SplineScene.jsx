import { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SplineScene() {
  const ref = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "200% top",
        pin: true,
        onEnter: () => tl.play()
      },
    });

    tl.fromTo(
      ref.current,
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
      }
    );
  }, ref);

  return () => ctx.revert();
}, []);


  return (
    <div ref={ref} className="relative mx-auto w-full aspect-[1/1] overflow-hidden">
      <Spline
        scene="https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode"
        className="absolute inset-0 scale-[1.3]"
      />
    </div>
  );
}
