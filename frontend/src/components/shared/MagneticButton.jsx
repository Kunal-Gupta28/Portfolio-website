import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary", // "primary" | "secondary" | "outline"
  className = "",
  type = "button",
  target,
  rel,
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.18, y: middleY * 0.18 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-[#ff5a1f] text-white hover:bg-[#ff7a3d] border-transparent shadow-lg shadow-[#ff5a1f]/25 hover:shadow-[#ff5a1f]/40";
      case "secondary":
        return "bg-[#111111] text-[#f5f3ef] border-white/10 hover:border-[#ff5a1f]/50 hover:bg-[#181818]";
      case "outline":
        return "bg-transparent text-[#f5f3ef] border border-white/15 hover:border-[#ff5a1f] hover:text-[#ff5a1f] hover:bg-[#ff5a1f]/5";
      default:
        return "bg-[#ff5a1f] text-white";
    }
  };

  const baseClasses = `relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm md:text-base font-medium transition-all duration-200 ease-out backdrop-blur-sm cursor-pointer select-none active:scale-[0.97] ${getVariantStyles()} ${className}`;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 14, mass: 0.1 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
}
