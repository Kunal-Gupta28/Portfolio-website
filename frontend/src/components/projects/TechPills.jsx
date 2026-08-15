import React from "react";

const TechPills = React.memo(function TechPills({ technologies, className = "" }) {
  if (!technologies || !technologies.length) return null;

  return (
    <div className={`flex flex-wrap gap-1.5 justify-center ${className}`}>
      {technologies.map((tech) => (
        <span
          key={tech}
          className="
            inline-block
            rounded-full
            border border-white/15
            bg-white/5
            px-3
            py-1
            text-[0.75rem]
            font-medium
            text-white/80
            transition-all
            duration-200
            hover:border-[#fa5a29]/50
            hover:bg-[#fa5a29]/15
            hover:text-white
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
});

export default TechPills;
