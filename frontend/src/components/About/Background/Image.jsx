import { Fade } from "@mui/material";

export default function HeroBackgroudn() {
  return (
    <setion className="h-full w-full inset-0">
      <Fade in timeout={1200}>
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/about.webp"
            alt="Kunal Gupta – Software Engineer"
            loading="eager"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/5 via-50% to-black" />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/5 via-85% to-black" />
        </div>
      </Fade>
    </setion>
  );
}
