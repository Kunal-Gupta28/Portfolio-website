import HeroBackground from "./hero/HeroBackground";
import HeroLeft from "./hero/HeroLeft";
import HeroRight from "./hero/HeroRight";

export default function Hero() {
  return (
    <section className="relative h-svh w-full overflow-hidden bg-black text-white">
      <HeroBackground />

      <div className="relative mx-auto grid w-[97.5%] lg:w-[90%] grid-cols-1 py-12 lg:min-h-svh lg:grid-cols-[1.65fr_1fr] lg:items-start">
        
        {/* HeroRight first on mobile, second on desktop */}
        <div className="order-1 lg:order-2">
          <HeroRight />
        </div>

        {/* HeroLeft second on mobile, first on desktop */}
        <div className="order-2 lg:order-1 mt-[15%] self-end">
          <HeroLeft />
        </div>

      </div>
    </section>
  );
}
