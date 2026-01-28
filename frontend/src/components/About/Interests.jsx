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
          font-bold text-right
          text-[#fa5a29]
          mb-[clamp(1rem,2.5vw,3rem)]
          text-[clamp(2rem,3vw,6rem)]
          leading-none
        "
      >
        {interestsData.heading}
      </h2>

      {/* Interest Cards */}
      <div className="mt-[clamp(0.7rem,1vw,1.5rem)] grid gap-3 lg:gap-8">
        {interestsData.items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="
                 w-[80vw] md:w-[35vw] xl:w-[30vw] rounded-2xl border border-white/10 cursor-pointer
                  bg-gradient-to-br from-white/5 to-transparent 
                  p-[clamp(0.8rem,1vw,2rem)] transition-all duration-300 ml-auto
                  hover:border-white/20 
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

                {/* icon */}
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#fa5a29]/10">
                  <Icon className="text-[#fa5a29]" />
                </div>

                {/* item title */}
                <h3
                  className="
                    font-semibold
                    text-white
                    text-[clamp(1.1rem,1.1vw,2rem)]
                  "
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="
                  text-white/70
                  text-[clamp(0.9rem,2vw,1rem)]
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
