import { interestsData } from "../../data/aboutdata/aboutData";

export default function Interests() {
  return (
    <section className="h-screen px-6 md:px-20 max-w-4xl ml-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#fa5a29]">
        {interestsData.heading}
      </h2>

      <div className="space-y-6">
        {interestsData.items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="rounded-2xl border border-white/10 p-5
                         bg-gradient-to-br from-white/5 to-transparent"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 rounded-xl bg-[#fa5a29]/10">
                  <Icon className="text-[#fa5a29]" />
                </div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <p className="text-white/70">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
