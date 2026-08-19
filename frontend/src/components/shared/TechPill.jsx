import React from "react";

export default function TechPill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full bg-white/[0.04] text-[#a1a1aa] border border-white/[0.08] transition-all duration-200 hover:border-[#ff5a1f]/40 hover:text-[#f5f3ef] hover:bg-white/[0.06] select-none ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-[#ff5a1f]/60" />
      <span>{children}</span>
    </span>
  );
}
