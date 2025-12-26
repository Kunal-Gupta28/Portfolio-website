import { Fade } from "@mui/material";

export default function HeroBackground() {
  return (
    <section className="relative h-full w-full inset-0">
      <Fade in timeout={1200}>
        <div className="pointer-events-none absolute inset-0">
          <picture>
            {/* Mobile */}
            <source
              media="(max-width: 640px)"
              srcSet="/images/about-mobile.webp"
            />

            {/* Tablet */}
            <source
              media="(max-width: 1024px)"
              srcSet="/images/about-tablet.webp"
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
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/5 via-50% to-black" />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/5 via-85% to-black" />
        </div>
      </Fade>
    </section>
  );
}
