import { storyData } from "../../data/aboutdata/aboutData";

export default function Story() {
  return (
    <section
      className="
        h-svh text-left
        flex flex-col justify-center
        px-5 lg:px-10 pt-36
        lg:max-w-[40%]
        ml-auto
      "
    >
      <h2
        className="
          font-bold
          text-[#fa5a29]
          mb-[clamp(1.5rem,2vw,3rem)]
          text-[clamp(2.5rem,3vw,6rem)]
          leading-none
        "
      >
        {storyData.heading}
      </h2>

      <div
        className="
          space-y-[clamp(0.5rem,2.5vw,2rem)]
          text-white/70
          text-[clamp(1.1rem,1.3vw,2rem)]
          leading-[1.3]
        "
      >
        {storyData.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  );
}
