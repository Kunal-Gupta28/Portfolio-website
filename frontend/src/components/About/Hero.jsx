import { heroData } from "../../data/aboutdata/aboutData";

export default function Hero() {
  return (
    <section className="relative h-svh w-full">
      <div className="flex justify-end items-end lg:items-center h-full px-3 py-28 md:px-10 lg:px-20 text-right">
        <h1
          className="font-bold leading-tight"
          style={{
            fontSize: "clamp(2rem, 6vw, 14rem)",
          }}
        >
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
