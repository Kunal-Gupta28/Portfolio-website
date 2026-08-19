import React from "react";

export default function GlassCard({ children, className = "", onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl bg-[#0b0b0b]/80 border border-white/[0.08] p-6 md:p-8 backdrop-blur-md transition-all duration-300 ease-out hover:border-[#ff5a1f]/40 hover:shadow-xl hover:shadow-[#ff5a1f]/10 active:scale-[0.99] ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
