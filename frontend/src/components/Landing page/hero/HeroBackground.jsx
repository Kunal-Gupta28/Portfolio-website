export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out opacity-100">
      <picture>
        {/* Mobile */}
        <source
          media="(max-width: 640px)"
          srcSet="/images/hero-mobile.webp"
          type="image/webp"
        />

        {/* Tablet */}
        <source
          media="(max-width: 1024px)"
          srcSet="/images/hero-tablet.webp"
          type="image/webp"
        />

        {/* Desktop (fallback) */}
        <img
          src="/images/hero.webp"
          alt="Kunal Gupta – Software Engineer"
          loading="eager"
          className="h-full w-full object-cover"
        />
      </picture>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 via-70% to-black" />
    </div>
  );
}
