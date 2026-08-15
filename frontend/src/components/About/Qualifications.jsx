import React from "react";
import { education } from "../../data/aboutdata/qualificationsData";
import AboutSection from "./AboutSection";

const Qualifications = React.memo(function Qualifications() {
  return (
    <AboutSection title="Qualifications">
      {/* Cards */}
      <div className="space-y-[clamp(1.5rem,3vw,2rem)] text-white/70">
        {education.map(({ degree, institution, duration, description }) => (
          <div
            key={degree}
            className="
              rounded-2xl
              border border-white/10
              p-[clamp(1.25rem,3vw,1.75rem)]
              bg-gradient-to-br from-white/5 to-transparent
            "
          >
            {/* Degree */}
            <h3
              className="
                font-semibold
                text-white
                text-[clamp(1.15rem,1.5vw,1.7rem)]
              "
            >
              {degree}
            </h3>

            {/* Institution & Duration */}
            <p
              className="
                mt-1
                text-white/50
                text-[clamp(0.75rem,1.1vw,1.3rem)]
              "
            >
              {institution} • {duration}
            </p>

            {/* Description */}
            <p
              className="
                mt-4
                leading-relaxed
                text-[clamp(0.9rem,1.2vw,1.4rem)]
              "
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </AboutSection>
  );
});

export default Qualifications;
