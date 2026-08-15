import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// components
import Greeting from "./Greeting";
import NavCenter from "./NavCenter";

// loader context
import { useLoader } from "../../../context/LoaderContext";

export default function DesktopNavbar({ pathname }) {
  const [expanded, setExpanded] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);

  const navigate = useNavigate();
  const { setLoading } = useLoader();

  useEffect(() => {
    setShowExpanded(expanded);
  }, [expanded]);

  // navigation handler with loader
  const handleContactClick = () => {
    if (pathname === "/contact") return;
    setLoading(true);
    navigate("/contact");
  };

  const isContactActive = pathname === "/contact";

  return (
    <motion.div
      initial={{ opacity: 0, y: -24, width: "500px" }}
      animate={{ width: expanded ? "90%" : "500px", opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.11, 0.5, 0.18, 0.5] }}
      onMouseLeave={() => setExpanded(false)}
      onAnimationComplete={() => expanded && setShowExpanded(true)}
      className="
        fixed
        top-6
        left-0
        right-0
        z-50
        mx-auto
        max-w-7xl
        rounded-full
        border
        border-white/20
        bg-gradient-to-b
        from-white/16
        to-white/6
        px-6
        backdrop-blur-2xl
        shadow-[0_40px_80px_rgba(0,0,0,0.6)]
      "
    >
      <div className="flex h-16 items-center justify-between text-white">
        {/* Greeting */}
        <div className="text-xs text-white/75 font-medium">
          <Greeting />
        </div>

        {/* Nav center */}
        <div onMouseEnter={() => setExpanded(true)}>
          <NavCenter showExpanded={showExpanded} pathname={pathname} />
        </div>

        {/* Contact Button */}
        <button
          type="button"
          onClick={handleContactClick}
          className={`
            rounded-full
            px-4
            py-2
            text-xs
            font-medium
            transition-all
            duration-200
            cursor-pointer
            hover:-translate-y-0.5
            ${
              isContactActive
                ? "bg-[#fa5a29]/15 text-[#fa5a29] border border-[#fa5a29]/40"
                : "bg-white/15 text-white hover:bg-white/25"
            }
          `}
        >
          Let’s Talk
        </button>
      </div>
    </motion.div>
  );
}