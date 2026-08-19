"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./navigation/Navbar";
import Footer from "./Footer/Footer";
import GlassCursor from "./GlassCursor";
import TorchGlow from "./shared/TorchGlow";
import CommandPalette from "./shared/CommandPalette";
import SmoothScroll from "./SmoothScroll";
import useIsDesktop from "../hooks/useIsDesktop";
import { LoaderProvider } from "../context/LoaderContext";

export default function ClientLayout({ children }) {
  const isDesktop = useIsDesktop();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f3ef] selection:bg-[#ff5a1f] selection:text-white">
      {mounted && isDesktop && <GlassCursor />}
      {mounted && isDesktop && <TorchGlow />}

      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <main className="relative">{children}</main>

      <Footer />
    </div>
  );

  return (
    <LoaderProvider>
      {mounted && isDesktop ? <SmoothScroll>{content}</SmoothScroll> : content}
    </LoaderProvider>
  );
}
