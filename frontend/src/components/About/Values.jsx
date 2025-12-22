import { valuesData } from "../../data/aboutdata/aboutData";

export default function Values() {
  return (
    <section className="h-screen px-6 md:px-20 max-w-4xl ml-auto ">
      <h2 className="text-3xl font-bold mb-6 text-[#fa5a29]">
        {valuesData.heading}
      </h2>

      <div className="space-y-6 text-white/70">
        <div>
          <h3 className="text-white font-semibold mb-2">Core Focus</h3>
          <ul className="space-y-1">
            {valuesData.coreFocus.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">
            Currently Exploring
          </h3>
          <ul className="space-y-1">
            {valuesData.exploring.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
