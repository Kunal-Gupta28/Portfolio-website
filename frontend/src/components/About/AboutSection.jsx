import React from "react";

export default function AboutSection({ title, children, className = "" }) {
  return (
    <section
      className={`
        min-h-screen
        px-[clamp(1.25rem,5vw,5rem)]
        pb-[clamp(2rem,10vw,6rem)]
        w-[90%] md:w-[70vw] lg:w-[50vw] xl:max-w-5xl
        ml-auto
        relative
        ${className}
      `}
    >
      {/* Heading */}
      <h2
        className="
          font-bold
          text-[#fa5a29]
          mb-[clamp(1rem,2vw,3rem)]
          text-[clamp(2rem,3vw,6rem)]
        "
      >
        {title}
      </h2>

      {children}
    </section>
  );
}
