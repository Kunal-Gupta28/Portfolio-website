// components/About/Experience.jsx
import { experienceData } from "../../data/aboutdata/experienceData";

export default function Experience() {
  return (
    <section
      className="
        min-h-screen
        px-[clamp(1.25rem,5vw,5rem)]
        py-[clamp(4rem,10vw,6rem)]
        max-w-5xl
        ml-auto
        relative
      "
    >
      {/* Heading */}
      <h2
        className="
          font-bold
          mb-[clamp(1rem,6vw,1.5rem)]
          text-[#fa5a29]
          text-[clamp(1.5rem,2vw,4rem)] 
        "
      >
        {experienceData.heading}
      </h2>

      {/* Experience Cards */}
      <div className="space-y-[clamp(2rem,5vw,2.5rem)]">
        {experienceData.items.map((exp, i) => (
          <div
            key={i}
            className="
              rounded-2xl
              border border-white/10
              bg-gradient-to-br from-white/5 to-transparent
              p-[clamp(1.25rem,2vw,1.75rem)]
            "
          >
            {/* Position */}
            <h3
              className="
                font-semibold
                text-white
                text-[clamp(1.125rem,2.5vw,1.5rem)]
              "
            >
              {exp.position}
            </h3>

            {/* Company & Duration */}
            <p
              className="
                mt-1
                text-white/50
                text-[clamp(0.8rem,1vw,0.9rem)]
              "
            >
              {exp.company} • {exp.duration}
            </p>

            {/* Description */}
            <p
              className="
                mt-4
                text-white/70
                leading-relaxed
                text-[clamp(0.9rem,2vw,1.3rem)]
              "
            >
              {exp.description}
            </p>

            {/* Responsibilities */}
            <ul
              className="
                mt-4
                space-y-[clamp(0.25rem,1vw,0.5rem)]
                text-white/70
                text-[clamp(0.85rem,1vw,1rem)]
              "
            >
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-[clamp(0.4rem,1vw,0.5rem)] mt-5">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="
                    rounded-full
                    bg-[#fa5a29]/10
                    text-[#fa5a29]
                    px-[clamp(0.6rem,1.5vw,0.75rem)]
                    py-[clamp(0.2rem,0.8vw,0.25rem)]
                    text-[clamp(0.7rem,1.5vw,0.8rem)]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
