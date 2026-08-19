import React from "react";
import { bioData, socialLinks } from "../../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full max-w-none bg-[#050505] text-[#f5f3ef] pt-24 pb-12 px-[clamp(1.25rem,5vw,6rem)] overflow-hidden border-t border-white/[0.06]">
      {/* Warm Bottom Glow Accent */}
      <div className="absolute bottom-0 inset-x-0 h-[400px] bg-gradient-to-t from-[#ff5a1f]/20 via-[#ff6a00]/05 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-none mx-auto flex flex-col justify-between min-h-[400px]">
        {/* Upper CTA Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#ff5a1f] animate-pulse" />
            <span className="text-xs font-mono text-[#ff5a1f] uppercase tracking-widest font-bold">
              WORK TOGETHER
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#f5f3ef] max-w-6xl leading-[1.05]">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5f3ef] via-[#ff7a3d] to-[#ff5a1f]">
              meaningful together.
            </span>
          </h2>
        </div>

        {/* Oversized Responsive Email Link */}
        <div className="my-8 overflow-hidden">
          <a
            href={`mailto:${bioData.email}`}
            className="fluid-email text-[#f5f3ef] hover:text-[#ff5a1f] transition-colors duration-300 block tracking-tighter hover:translate-x-2 transform transition-transform"
          >
            {bioData.email}
          </a>
        </div>

        {/* Lower Bar: Copyright, Socials, Back to Top */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[#8b8b8b]">
            <span>© {new Date().getFullYear()} KUNAL GUPTA</span>
            <span>•</span>
            <span>DELHI TECHNOLOGICAL UNIVERSITY</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#a1a1aa]">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff5a1f] transition-colors active:scale-95 inline-block"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="text-xs font-mono text-[#f5f3ef] hover:text-[#ff5a1f] transition-colors flex items-center gap-2 group cursor-pointer active:scale-95"
          >
            <span>BACK TO TOP</span>
            <span className="group-hover:-translate-y-1 transform transition-transform">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
