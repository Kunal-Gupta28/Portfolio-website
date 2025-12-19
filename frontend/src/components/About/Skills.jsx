import { skillCategories, skillIconMap } from "../../data/skillsData";

export default function Skills({ setValue }) {
  return (
    <section className="h-screen px-6 md:px-20 pb-24 relative">
      {/* Right-aligned container */}
      <div className="max-w-sm ml-auto text-right">
        <h2 className="text-3xl font-bold mb-12 text-[#fa5a29]">
          Skills & Technologies
        </h2>

        <div className="grid gap-8">
          {skillCategories.map((category) => {
            const Icon = skillIconMap[category.icon];

            return (
              <div
                key={category.title}
                onMouseEnter={() => setValue(category.title)}
                onMouseLeave={() => setValue("Image")}
                className="
                  rounded-2xl border border-white/10 cursor-pointer
                  bg-gradient-to-br from-white/5 to-transparent 
                  p-2
                "
              >
                {/* Card header */}
                <div className="flex items-center justify-end gap-4">
                  <h3 className="text-xl font-semibold ">{category.title}</h3>

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
