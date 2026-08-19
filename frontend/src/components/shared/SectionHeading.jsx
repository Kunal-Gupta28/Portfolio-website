import React from "react";

export default function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`mb-12 md:mb-20 ${className}`}>
      <h2 className="fluid-section-title text-[#f5f3ef] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#a1a1aa] text-base md:text-xl max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}


