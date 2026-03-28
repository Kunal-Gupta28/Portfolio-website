import Fade from "@mui/material/Fade";

export default function HeroBackground() {
  return (
    <Fade in timeout={800}>
      <div className="pointer-events-none absolute inset-0">
        <picture>
          {/* Mobile */}
          <source
            media="(max-width: 640px)"
            alt="Kunal Gupta – Software Engineer"
            loading="eager"
            srcSet="/images/hero-mobile.jpg"
          />

          {/* Tablet */}
          <source
            media="(max-width: 1024px)"
            alt="Kunal Gupta – Software Engineer"
            loading="eager"
            srcSet="/images/hero-tablet.jpg"
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
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/1 via-70% to-black" />
      </div>
    </Fade>
  );
}
