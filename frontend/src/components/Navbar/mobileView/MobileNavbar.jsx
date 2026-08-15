import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { navItems } from "../../../data/navData";
import { useLoader } from "../../../context/LoaderContext";

export default function MobileNavbar({ pathname }) {
  const { setLoading } = useLoader();
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  // Active item
  const activeItem = useMemo(() => {
    return (
      navItems.find((item) => item.path && pathname === item.path) ||
      navItems[0]
    );
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    if (!expanded) return;

    const handler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [expanded]);

  // Navigation handler
  const handleClick = (item) => {
    if (item.external) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      setLoading(true);
      navigate(item.path);
    }

    setExpanded(false);
  };

  return (
    <motion.div
      ref={ref}
      animate={{ width: expanded ? "92vw" : "48px" }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      onClick={() => {
        if (!expanded) setExpanded(true);
      }}
      className={`
        fixed
        top-3.5
        left-1/2
        -translate-x-1/2
        z-50
        flex
        h-12
        items-center
        rounded-full
        border
        border-white/20
        bg-gradient-to-b
        from-white/18
        to-white/6
        backdrop-blur-xl
        shadow-[0_8px_24px_rgba(0,0,0,0.45)]
        overflow-hidden
        ${expanded ? "justify-between px-3" : "justify-center cursor-pointer"}
      `}
    >
      <div className="flex w-full items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.key === activeItem.key;
          const visible = expanded || isActive;

          if (!visible) return null;

          return (
            <button
              key={item.key}
              type="button"
              onClick={(e) => {
                e.stopPropagation();

                if (!expanded) {
                  setExpanded(true);
                  return;
                }

                handleClick(item);
              }}
              className="
                flex
                w-11
                flex-col
                items-center
                justify-center
                cursor-pointer
              "
            >
              {/* Icon */}
              <div
                className={`
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "text-[#fa5a29] opacity-100 scale-110"
                      : "text-white opacity-60 hover:opacity-100"
                  }
                `}
              >
                <Icon />
              </div>

              {/* Label */}
              {expanded && (
                <span className="mt-0.5 text-[0.6rem] font-medium text-white/75">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}