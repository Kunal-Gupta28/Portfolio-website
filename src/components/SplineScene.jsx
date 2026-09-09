"use client";

import dynamic from "next/dynamic";
import React, { Component } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineLoadingSkeleton />,
});

const SCENE_URL =
  "https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode";

function SplineLoadingSkeleton() {
  return (
    <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-3xl bg-[#0b0b0b]">
      <div className="relative mb-4 flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-white/10 border-t-[#ff5e24]" />
        <div className="absolute h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-b-[#ff824d] [animation-direction:reverse] [animation-duration:1.5s]" />
        <span className="absolute h-3 w-3 animate-pulse rounded-full bg-[#ff5e24]" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#f6f5f2]">
          INITIALIZING 3D CANVAS
        </span>
        <span className="text-[10px] font-mono text-[#73737c]">
          Rendering Real-Time 3D Shaders...
        </span>
      </div>
    </div>
  );
}

function SplineFallback() {
  return (
    <div className="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff5e24]/20 bg-[#ff5e24]/10 text-[#ff5e24]">
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>

      <h4 className="mb-1 text-sm font-mono font-bold uppercase tracking-wider text-[#f5f3ef]">
        Interactive 3D Engineering Model
      </h4>
      <p className="max-w-xs text-xs font-mono text-[#a1a1aa]">
        Crafted with Spline, Next.js & WebGL
      </p>
    </div>
  );
}

class SplineErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <SplineFallback />;
    }

    return this.props.children;
  }
}

export default function SplineScene({ className = "" }) {
  return (
    <div
      className={`relative h-[350px] min-h-[350px] w-full overflow-hidden rounded-3xl bg-[#0b0b0b] md:h-[500px] md:min-h-[500px] ${className}`}
    >
      <SplineErrorBoundary>
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-3xl">
          <div className="absolute inset-[-15%] h-[130%] w-[130%]">
            <Spline scene={SCENE_URL} className="h-full w-full">
              <SplineLoadingSkeleton />
            </Spline>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 z-10 h-16 w-44 bg-[#0b0b0b]"
          />
        </div>
      </SplineErrorBoundary>
    </div>
  );
}
