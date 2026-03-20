import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedWords from "./AnimatedWords";
import CTAButton from "../../CTAButton";

export default function IntroContent() {
  const containerRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !ctaRef.current) return;

    const ctx = gsap.context(() => {
      // CTA reveal animation
      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative pt-36 pb-4">
      <span className="inline-block text-sm tracking-[0.35em] text-white/50">
        INTRO
      </span>

      <h2 className="mb-10 font-extrabold leading-none tracking-tight text-[#fa5a29] text-[clamp(2.25rem,4vw,10rem)]">
        Building real-world systems,
        <br />
        with clarity and purpose.
      </h2>

      <p className="my-3 text-[clamp(1.25rem,1.3vw,3rem)] leading-[0.6]">
        <AnimatedWords text="My work spans frontend engineering with React, backend APIs with Node.js and Express, real-time systems with Socket.io, and data modeling with MongoDB." />
      </p>

      <p className="text-[clamp(1.25rem,1.3vw,3rem)] mb-[clamp(2rem,2vw,4rem)] leading-[0.6]">
        <AnimatedWords text="Currently focused on growing as a software engineer by building production-ready projects and contributing to meaningful systems." />
      </p>

      {/* CTA */}
      <div ref={ctaRef} className="opacity-0">
        <CTAButton />
      </div>
    </div>
  );
}