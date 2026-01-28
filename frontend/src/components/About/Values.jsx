import { valuesData } from "../../data/aboutdata/aboutData";

export default function Values() {
  return (
    <section
      className="
        min-h-screen
        px-[clamp(1.25rem,5vw,5rem)]
        py-[clamp(4rem,10vw,6rem)]
        max-w-4xl
        ml-auto
      "
    >
      {/* Heading */}
      <h2
        className="
          font-bold
          mb-[clamp(1rem,4vw,2rem)]
          text-[#fa5a29] leading-[2rem]
          text-[clamp(2rem,4vw,2.5rem)]
        "
      >
        {valuesData.heading}
      </h2>

      {/* Content */}
      <div className="space-y-[clamp(1.25rem,2vw,2rem)] text-white/70">
        {/* Core Focus */}
        <div>
          <h3
            className="
              text-white
              font-semibold
              mb-[clamp(0.5rem,2vw,0.75rem)]
              text-[clamp(1.05rem,2vw,1.4rem)]
            "
          >
            Core Focus
          </h3>

          <ul
            className="
              space-y-[clamp(0.25rem,1vw,0.4rem)]
              text-[clamp(0.9rem,2.2vw,1rem)]
            "
          >
            {valuesData.coreFocus.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Currently Exploring */}
        <div>
          <h3
            className="
              text-white
              font-semibold
              mb-[clamp(0.5rem,2vw,0.75rem)]
              text-[clamp(1.05rem,2vw,1.4rem)]
            "
          >
            Currently Exploring
          </h3>

          <ul
            className="
              space-y-[clamp(0.25rem,1vw,0.4rem)]
              text-[clamp(0.9rem,2.2vw,1rem)]
            "
          >
            {valuesData.exploring.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
