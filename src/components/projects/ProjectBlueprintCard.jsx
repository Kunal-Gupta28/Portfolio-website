"use client";

import React from "react";

export default function ProjectBlueprintCard({ project, isProduction }) {
  return (
    <div className="lg:col-span-5 relative w-full h-full min-h-[220px] rounded-xl bg-white/[0.02] border border-white/10 p-6 flex flex-col justify-between font-mono text-xs shadow-inner">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <span className="text-[#ff824d] font-bold tracking-wider uppercase text-[11px] flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 fill-current text-[#ff824d]" viewBox="0 0 24 24">
            <path d="M11 15H6l7-14v8h5l-7 14v-8z" />
          </svg>
          <span>SYSTEM SPECIFICATION</span>
        </span>
        <span className="text-[10px] text-[#73737c]">
          {project.id.toUpperCase()}
        </span>
      </div>

      <div className="space-y-3 text-[#a3a3a8] text-[11px]">
        <div className="flex items-start gap-2">
          <span className="text-[#ff5e24] font-bold mt-0.5">›</span>
          <div>
            <span className="text-[#73737c] block text-[10px] uppercase">DEPLOYMENT CLOUD</span>
            <span className="text-[#f6f5f2] font-semibold">
              {isProduction
                ? project.id === "london-cert"
                  ? "Render Cloud + HostingRaja Windows VPS (Plesk)"
                  : "Render Cloud Infrastructure"
                : "Vercel / Render Edge"}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-[#ff5e24] font-bold mt-0.5">›</span>
          <div>
            <span className="text-[#73737c] block text-[10px] uppercase">FRONTEND FRAMEWORK</span>
            <span className="text-[#f6f5f2] font-semibold">
              {project.technologies[0]} + {project.technologies[1] || "Tailwind CSS"}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-[#ff5e24] font-bold mt-0.5">›</span>
          <div>
            <span className="text-[#73737c] block text-[10px] uppercase">BACKEND & RUNTIME</span>
            <span className="text-[#f6f5f2] font-semibold text-[#ff824d]">
              {project.id === "chatcraft"
                ? "Node.js + Express.js + Socket.io WebSockets"
                : project.id === "kubik-ride"
                ? "Node.js + Express.js + WebSockets + Razorpay APIs"
                : project.id === "london-cert"
                ? "Next.js Server Actions + Payload CMS (Node.js)"
                : project.id === "prime-success"
                ? "Node.js REST API + Scheduled News API Fetcher (12 PM)"
                : project.id === "qccertification"
                ? "Next.js App Router (Node.js Server Runtime)"
                : project.id === "wanderlust"
                ? "Node.js + Express.js + Passport Auth (MVC)"
                : project.id === "image-enhancer"
                ? "RESTful API Integration + PicWish Cloud API"
                : project.technologies.includes("Node.js")
                ? "Node.js + Express.js Engine"
                : "Client-Side SPA / Vercel Edge Runtime"}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-[#ff5e24] font-bold mt-0.5">›</span>
          <div>
            <span className="text-[#73737c] block text-[10px] uppercase">DATABASE / CMS</span>
            <span className="text-[#f6f5f2] font-semibold">
              {project.id === "london-cert"
                ? "Payload CMS + PostgreSQL (HostingRaja VPS)"
                : project.id === "prime-success"
                ? "Backend API + News API + Admin Video Portal"
                : project.id === "chatcraft"
                ? "MongoDB Atlas + Redis In-Memory Cache"
                : project.id === "kubik-ride" || project.id === "wanderlust"
                ? "MongoDB Atlas + Cloudinary Storage"
                : isProduction
                ? "Static Content / Render Edge Storage"
                : "MongoDB / Browser State / Local Cache"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
