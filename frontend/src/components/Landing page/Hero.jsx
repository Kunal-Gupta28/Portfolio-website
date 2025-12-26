import HeroBackground from "./hero/HeroBackground";
import HeroLeft from "./hero/HeroLeft";
import HeroRight from "./hero/HeroRight";

export default function Hero() {
  return (
    <section className="relative h-svh w-full overflow-hidden bg-black text-white">
      <HeroBackground />

      <div className="relative mx-auto grid w-[90%] grid-cols-1 py-12 lg:min-h-svh lg:grid-cols-[1.65fr_1fr] lg:items-end">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}
