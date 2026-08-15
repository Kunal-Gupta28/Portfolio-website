export default function HeroBackground() {
  return (
    <section className="relative h-full w-full inset-0">
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-1000 ease-out opacity-100">
        <picture>
          {/* Mobile */}
          <source
            media="(max-width: 640px)"
            srcSet="/images/about-mobile.webp"
            type="image/webp"
          />

          {/* Tablet */}
          <source
            media="(max-width: 1024px)"
            srcSet="/images/about-tablet.webp"
            type="image/webp"
          />

          {/* Desktop (fallback) */}
          <img
            src="/images/about.webp"
            alt="Kunal Gupta – Software Engineer"
            loading="eager"
            className="h-full w-full object-cover"
          />
        </picture>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/5 via-80% to-black" />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/5 via-85% to-black" />
      </div>
    </section>
  );
}