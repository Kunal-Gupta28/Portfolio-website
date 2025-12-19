import { Fade } from "@mui/material";

export default function HeroBackground() {
  return (
    <Fade in timeout={1200}>
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Kunal Gupta – Software Engineer"
          loading="eager"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/1 via-70% to-black" />
      </div>
    </Fade>
  );
}
