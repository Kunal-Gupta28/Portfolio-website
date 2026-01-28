import { education } from "../../data/aboutdata/qualificationsData";

export default function Qualifications() {
  return (
    <section
      className="
        min-h-screen
        px-[clamp(1.25rem,5vw,5rem)]
        pb-[clamp(2rem,10vw,6rem)]
        w-[90%] md:w-[70vw] lg:w-[50vw] xl:max-w-5xl
        ml-auto
        relative
      "
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
        Qualifications
      </h2>

      {/* Cards */}
      <div className="space-y-[clamp(1.5rem,3vw,2rem)] text-white/70">
        {education.map((edu, index) => (
          <div
            key={index}
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
              {edu.degree}
            </h3>

            {/* Institution & Duration */}
            <p
              className="
                mt-1
                text-white/50
                text-[clamp(0.75rem,1.1vw,1.3rem)]
              "
            >
              {edu.institution} • {edu.duration}
            </p>

            {/* Description */}
            <p
              className="
                mt-4
                leading-relaxed
                text-[clamp(0.9rem,1.2vw,1.4rem)]
              "
            >
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
