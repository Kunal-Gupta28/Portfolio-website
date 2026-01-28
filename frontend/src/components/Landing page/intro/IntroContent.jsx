import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedWords from "./AnimatedWords";
import CTAButton from "../../CTAButton";

gsap.registerPlugin(ScrollTrigger);

export default function IntroContent() {
  const pinRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin section
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top 12%",
        end: "200% top",
        pin: true,
        pinSpacing: true,
      });

      // CTA reveal on scroll
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
            start: "300% top",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative pt-28 pb-4">
      <div ref={pinRef}>
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

        {/* CTA hidden initially, revealed on scroll */}
        <div ref={ctaRef} className="opacity-0">
          <CTAButton />
        </div>
      </div>
    </div>
  );
}
