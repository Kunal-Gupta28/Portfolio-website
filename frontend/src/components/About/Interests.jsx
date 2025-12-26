import { interestsData } from "../../data/aboutdata/aboutData";

export default function Interests() {
  return (
    <section
      className="
        min-h-screen
        px-[clamp(1.25rem,5vw,5rem)]
        py-[clamp(4rem,4vw,6rem)]
        max-w-4xl
        ml-auto
      "
    >
      {/* Heading */}
      <h2
        className="
          font-bold
          mb-[clamp(1rem,1.5vw,1.5rem)]
          text-[#fa5a29]
          text-[clamp(1.75rem,3vw,3rem)]
        "
      >
        {interestsData.heading}
      </h2>

      {/* Interest Cards */}
      <div className="space-y-[clamp(1rem,4vw,2rem)]">
        {interestsData.items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="
                rounded-2xl
                border border-white/10
                bg-gradient-to-br from-white/5 to-transparent
                p-[clamp(1rem,3vw,1.75rem)]
              "
            >
              {/* Title Row */}
              <div
                className="
                  flex
                  items-center
                  gap-[clamp(0.75rem,3vw,1rem)]
                  mb-[clamp(0.5rem,2vw,0.75rem)]
                "
              >
                <div
                  className="
                    rounded-xl
                    bg-[#fa5a29]/10
                    p-[clamp(0.4rem,1.5vw,0.6rem)]
                  "
                >
                  <Icon
                    className="
                      text-[#fa5a29]
                      text-[clamp(1rem,2.5vw,1.25rem)]
                    "
                  />
                </div>

                <h3
                  className="
                    font-semibold
                    text-white
                    text-[clamp(1.125rem,2.5vw,1.375rem)]
                  "
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="
                  text-white/70
                  leading-relaxed
                  text-[clamp(0.9rem,2.2vw,1rem)]
                "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
