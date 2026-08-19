"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { bioData } from "../../data/portfolioData";

const commands = [
  { id: "home", label: "Go to Home", path: "/", icon: "🏠", category: "Navigation" },
  { id: "about", label: "Read Story & Engineering Philosophy", path: "/about", icon: "👤", category: "Navigation" },
  { id: "skills", label: "Explore Capability Map & Tech Stack", path: "/skills", icon: "⚡", category: "Navigation" },
  { id: "projects", label: "View All 10 Projects & Case Studies", path: "/projects", icon: "💻", category: "Navigation" },
  { id: "experience", label: "View TA & DTU Experience Timeline", path: "/experience", icon: "📄", category: "Navigation" },
  { id: "contact", label: "Get in Touch / Send Message", path: "/contact", icon: "💬", category: "Actions" },
  { id: "resume", label: "Download / View Resume", action: "resume", icon: "📥", category: "Actions" },
  { id: "email", label: "Copy Email Address", action: "email", icon: "✉️", category: "Actions" },
];

export default function CommandPalette({ isOpen, onClose }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd) => {
    if (cmd.path) {
      router.push(cmd.path);
      onClose();
    } else if (cmd.action === "resume") {
      window.open(bioData.resumeUrl, "_blank");
      onClose();
    } else if (cmd.action === "email") {
      navigator.clipboard.writeText(bioData.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1200);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="absolute inset-0 z-0" onClick={onClose} />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative z-10 w-full max-w-xl rounded-2xl bg-[#0b0b0b] border border-white/15 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Input Search Header */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <span className="text-[#ff5a1f] text-lg font-mono">⌘</span>
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search sections..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-[#f5f3ef] placeholder-[#71717a] text-sm focus:outline-none font-mono"
              />
              <span className="text-[10px] font-mono text-[#8b8b8b] border border-white/10 px-2 py-0.5 rounded">
                ESC
              </span>
            </div>

            {/* Notification Toast */}
            {copied && (
              <div className="bg-[#ff5a1f]/20 border-b border-[#ff5a1f]/40 p-2 text-center text-xs font-mono text-[#ff7a3d]">
                ✓ Email copied to clipboard!
              </div>
            )}

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd)}
                    className="w-full p-3 rounded-xl hover:bg-white/[0.06] flex items-center justify-between text-left transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{cmd.icon}</span>
                      <span className="text-sm font-medium text-[#f5f3ef] group-hover:text-[#ff5a1f] transition-colors">
                        {cmd.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#8b8b8b] uppercase tracking-wider">
                      {cmd.category}
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-xs font-mono text-[#8b8b8b]">
                  No matching commands found.
                </div>
              )}
            </div>

            {/* Footer Status Bar */}
            <div className="p-3 border-t border-white/10 bg-[#050505] flex items-center justify-between text-[10px] font-mono text-[#8b8b8b]">
              <span>Navigation & Shortcuts</span>
              <span>Press <strong className="text-[#ff5a1f]">↵</strong> to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
