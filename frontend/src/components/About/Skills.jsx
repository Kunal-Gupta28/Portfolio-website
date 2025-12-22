import { skillCategories, skillIconMap, skillsMeta } from "../../data/aboutdata/skillsData";

export default function Skills({ setValue }) {
  const handleEnter = (key) => {
    setValue((prev) => (prev === key ? prev : key));
  };

  const handleLeave = () => {
    setValue((prev) => (prev === "Image" ? prev : "Image"));
  };

  return (
    <section className="h-screen px-6 md:px-20 pb-24 relative">
      <div className="max-w-sm ml-auto text-right">
        <h2 className="text-3xl font-bold text-[#fa5a29]">
          {skillsMeta.heading}
        </h2>

        <p className="text-sm mt-3 mb-6 text-gray-400">
          {skillsMeta.helperText}
        </p>

        <div className="grid gap-8">
          {skillCategories.map((category) => {
            const Icon = skillIconMap[category.icon];

            return (
              <div
                key={category.valueKey}
                onMouseEnter={() => handleEnter(category.valueKey)}
                onMouseLeave={handleLeave}
                className="
                  rounded-2xl border border-white/10 cursor-pointer
                  bg-gradient-to-br from-white/5 to-transparent
                  p-4 transition-all duration-300
                  hover:border-white/20
                "
              >
                <div className="flex items-center justify-end gap-4">
                  <h3 className="text-xl font-semibold">
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
