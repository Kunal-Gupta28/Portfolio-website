import { skillCategories, skillIconMap } from "../../data/aboutdata/skillsData";

export default function Skills({ setValue }) {
  const handleEnter = (key) => {
    setValue((prev) => (prev === key ? prev : key));
  };

  const handleLeave = () => {
    setValue((prev) => (prev === "Image" ? prev : "Image"));
  };

  return (
    <section className="h-svh px-6 md:px-20 pb-24 relative">
      <div className="text-right">
        <h2 className="
          text-[clamp(1.5rem,3vw,10rem)] font-bold text-[#fa5a29]">
          Skills & Technologies
        </h2>

        <p className="text-xs text-gray-400 block lg:hidden">
          ( click to reveal technologies )
        </p>
        <p className="text-[clamp(1rem,1vw,1.5rem)] text-gray-400 d-none hidden lg:block">
          ( Hover for 2s to reveal technologies )
        </p>

        <div className="mt-[clamp(0.7rem,1vw,1.5rem)] grid gap-3 lg:gap-8">
          {skillCategories.map((category) => {
            const Icon = skillIconMap[category.icon];

            return (
              <div
                key={category.valueKey}
                onMouseEnter={() => handleEnter(category.valueKey)}
                onMouseLeave={handleLeave}
                className="
                  w-[65vw] md:w-[35vw] lg:w-[30vw] xl:w-[20vw] rounded-2xl border border-white/10 cursor-pointer
                  bg-gradient-to-br from-white/5 to-transparent 
                  p-[clamp(0.3rem,1vw,2rem)] transition-all duration-300 ml-auto
                  hover:border-white/20 
                "
              >
                <div className="flex items-center justify-end gap-4">
                  <h3 className="text-[clamp(0.8rem,1.1vw,2rem)] font-semibold">
                    {category.title}
                  </h3>

                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#fa5a29]/10">
                    <Icon className="text-[#fa5a29]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
