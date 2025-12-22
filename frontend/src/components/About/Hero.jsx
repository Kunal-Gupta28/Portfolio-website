import { heroData } from "../../data/aboutdata/aboutData";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="flex justify-end items-center h-full px-6 md:px-20 text-right">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          {heroData.lines.map((line, i) => (
            <span
              key={i}
              className={
                i === heroData.highlightIndex
                  ? "text-[#fa5a29] block"
                  : "text-white/70 block"
              }
            >
              {line}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
