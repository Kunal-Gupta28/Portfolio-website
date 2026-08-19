import React, { useEffect, useState } from "react";

export default function TorchGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[2] transition-opacity duration-500"
      style={{
        background: `radial-gradient(160px circle at ${pos.x}px ${pos.y}px, rgba(255, 90, 31, 0.22), rgba(255, 122, 61, 0.05) 50%, transparent 80%)`,
      }}
    />
  );
}
