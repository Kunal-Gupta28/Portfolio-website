import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { bioData } from "../../data/portfolioData";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    name: "About",
    path: "/about",
    icon: (
      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  },
  {
    name: "Skills",
    path: "/skills",
    icon: (
      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
  },
  {
    name: "Projects",
    path: "/projects",
    icon: (
      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </svg>
    ),
  },
  {
    name: "Experience",
    path: "/experience",
    icon: (
      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState("Good Morning!");
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning!");
    else if (hour < 18) setGreeting("Good Afternoon!");
    else setGreeting("Good Evening!");

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Concept Header Navbar Capsule */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none w-full">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-5 rounded-full px-5 py-2.5 transition-all duration-300 border ${
            scrolled
              ? "bg-[#0b0b0b]/95 border-[#ff5a1f]/40 shadow-[0_0_30px_rgba(255,90,31,0.25)] backdrop-blur-xl"
              : "bg-[#0b0b0b]/80 border-white/10 backdrop-blur-md"
          } max-w-fit`}
        >
          {/* Left Greeting */}
          <div className="flex items-center gap-2 pr-3 border-r border-white/10 shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#ff5a1f] animate-pulse" />
            <span className="text-xs font-mono font-semibold text-[#f5f3ef] whitespace-nowrap">
              {greeting}
            </span>
          </div>

          {/* Center Route Links */}
          <div className="hidden sm:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const isHovered = hoveredNav === item.name;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                    isActive
                      ? "bg-[#ff5a1f] text-white font-bold shadow-[0_0_15px_rgba(255,90,31,0.6)]"
                      : isHovered
                      ? "bg-white/15 text-[#f5f3ef]"
                      : "text-[#a1a1aa] hover:text-[#f5f3ef]"
                  }`}
                >
                  {item.icon}

                  {/* Expand Name Label on Active or Hover */}
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="whitespace-nowrap overflow-hidden font-semibold"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </div>

          {/* Right Shortcuts: Resume, LinkedIn, GitHub, Let's Talk */}
          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-white/10">
            
            {/* Download Resume Icon */}
            <a
              href={bioData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredNav("Resume")}
              onMouseLeave={() => setHoveredNav(null)}
              className="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[#a1a1aa] hover:text-[#ff5a1f] hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <AnimatePresence>
                {hoveredNav === "Resume" && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="whitespace-nowrap overflow-hidden font-semibold text-xs font-mono text-[#ff7a3d]"
                  >
                    Resume ↗
                  </motion.span>
                )}
              </AnimatePresence>
            </a>

            {/* LinkedIn text */}
            <a
              href="https://linkedin.com/in/kunal-gupta28"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredNav("LinkedIn")}
              onMouseLeave={() => setHoveredNav(null)}
              className="relative flex items-center gap-1 px-2 py-1 rounded-full text-xs font-mono font-bold text-[#a1a1aa] hover:text-[#ff5a1f] hover:bg-white/10 transition-all duration-200"
            >
              <span>in</span>
              <AnimatePresence>
                {hoveredNav === "LinkedIn" && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="whitespace-nowrap overflow-hidden font-normal text-[#f5f3ef]"
                  >
                    LinkedIn ↗
                  </motion.span>
                )}
              </AnimatePresence>
            </a>

            {/* GitHub text */}
            <a
              href="https://github.com/Kunal-Gupta28"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredNav("GitHub")}
              onMouseLeave={() => setHoveredNav(null)}
              className="relative flex items-center gap-1 px-2 py-1 rounded-full text-xs font-mono font-bold text-[#a1a1aa] hover:text-[#ff5a1f] hover:bg-white/10 transition-all duration-200"
            >
              <span>gh</span>
              <AnimatePresence>
                {hoveredNav === "GitHub" && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="whitespace-nowrap overflow-hidden font-normal text-[#f5f3ef]"
                  >
                    GitHub ↗
                  </motion.span>
                )}
              </AnimatePresence>
            </a>

            {/* LET'S TALK Button */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full bg-[#ff5a1f] text-white hover:bg-[#ff7a3d] transition-all duration-200 shadow-md shadow-[#ff5a1f]/30 active:scale-95 whitespace-nowrap ml-1"
            >
              LET'S TALK
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-1.5 text-[#f5f3ef] hover:text-[#ff5a1f] transition-colors"
          >
            <div className="w-4 h-3.5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl sm:hidden flex flex-col justify-between px-6 pt-28 pb-10"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-[#ff5a1f] font-bold">ROUTES</span>
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Skills", path: "/skills" },
                { name: "Projects", path: "/projects" },
                { name: "Experience", path: "/experience" },
                { name: "Contact", path: "/contact" },
              ].map((item, idx) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-2xl font-bold text-[#f5f3ef] hover:text-[#ff5a1f] transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs font-mono text-[#8b8b8b]">0{idx + 1}</span>
                </Link>
              ))}

              <a
                href={bioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 p-4 rounded-xl bg-[#ff5a1f]/10 border border-[#ff5a1f]/30 text-[#ff7a3d] font-bold text-lg flex items-center justify-between"
              >
                <span>Download Resume</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
