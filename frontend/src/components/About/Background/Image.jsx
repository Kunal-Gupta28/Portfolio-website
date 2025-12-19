import { Fade } from "@mui/material";

export default function HeroBackgroudn() {
  return (
    <setion className="h-full w-full fixed inset-0">
      <Fade in timeout={1200}>
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/about.png"
            alt="Kunal Gupta – Software Engineer"
            loading="eager"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/1 via-75% to-black" />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/1 via-85% to-black" />
        </div>
      </Fade>
    </setion>
  );
}
