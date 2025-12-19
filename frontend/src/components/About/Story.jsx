import { aboutContent } from "../../data/aboutData";

export default function Story() {
  return (
    <section className=" h-screen px-6 md:px-20 py-28 max-w-4xl ml-auto relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#fa5a29]">
        {aboutContent.heading}
      </h2>

      <div className="space-y-5 text-white/70 text-lg leading-relaxed">
        {aboutContent.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  );
}
