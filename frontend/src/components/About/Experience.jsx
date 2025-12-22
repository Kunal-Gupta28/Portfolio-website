// components/About/Experience.jsx
import { experienceData } from "../../data/aboutdata/experienceData";

export default function Experience() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24 max-w-5xl ml-auto relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#fa5a29]">
        {experienceData.heading}
      </h2>

      <div className="space-y-10">
        {experienceData.items.map((exp, i) => (
          <div
            key={i}
            className="
              rounded-2xl border border-white/10
              bg-gradient-to-br from-white/5 to-transparent
              p-6
            "
          >
            <h3 className="text-xl font-semibold text-white">
              {exp.position}
            </h3>

            <p className="text-sm text-white/50 mt-1">
              {exp.company} • {exp.duration}
            </p>

            <p className="mt-4 text-white/70 leading-relaxed">
              {exp.description}
            </p>

            <ul className="mt-4 space-y-1 text-white/70">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-5">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-[#fa5a29]/10 text-[#fa5a29]"
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
