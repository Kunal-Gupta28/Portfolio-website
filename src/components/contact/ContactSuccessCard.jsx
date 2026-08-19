"use client";

import React from "react";
import { motion } from "framer-motion";
import CanvasConfetti from "./CanvasConfetti";
import { bioData } from "../../data/portfolioData";

export default function ContactSuccessCard({ submittedDetails, onReset }) {
  return (
    <motion.div
      key="contact-success"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      className="p-8 md:p-10 rounded-3xl bg-[#0b0b0b] border border-emerald-500/30 flex flex-col gap-6 shadow-[0_20px_60px_rgba(16,185,129,0.12)] relative overflow-hidden group"
    >
      <CanvasConfetti />
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff5e24]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col items-center text-center pt-2 pb-1">
        <div className="relative mb-4 flex items-center justify-center">
          <span className="absolute h-16 w-16 rounded-full bg-emerald-500/20 animate-ping" />
          <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] z-10">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-widest mb-3">
          ✓ TRANSMISSION CONFIRMED
        </span>

        <h3 className="text-2xl md:text-3xl font-extrabold text-[#f6f5f2] tracking-tight">
          Thank You, {submittedDetails?.name || "Friend"}!
        </h3>
        <p className="text-sm text-[#a3a3a8] max-w-md mt-1.5 leading-relaxed">
          Your message has been recorded and routed directly to my inbox. I’ll review your details and get back to you shortly.
        </p>
      </div>

      <div className="p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4 text-xs font-mono">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-[#ff824d] font-bold tracking-wider uppercase flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current text-[#ff824d]" viewBox="0 0 24 24">
              <path d="M11 15H6l7-14v8h5l-7 14v-8z" />
            </svg>
            <span>DISPATCH RECEIPT</span>
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            RECORDED & QUEUED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#a3a3a8]">
          <div>
            <span className="text-[#73737c] block text-[10px] uppercase font-medium">SENDER NAME</span>
            <span className="text-[#f6f5f2] font-semibold truncate block mt-0.5">{submittedDetails?.name || "N/A"}</span>
          </div>
          <div>
            <span className="text-[#73737c] block text-[10px] uppercase font-medium">RETURN EMAIL</span>
            <span className="text-[#f6f5f2] font-semibold truncate block mt-0.5">{submittedDetails?.email || "N/A"}</span>
          </div>
          <div>
            <span className="text-[#73737c] block text-[10px] uppercase font-medium">SUBJECT</span>
            <span className="text-[#f6f5f2] font-semibold truncate block mt-0.5">{submittedDetails?.subject || "General Inquiry"}</span>
          </div>
          <div>
            <span className="text-[#73737c] block text-[10px] uppercase font-medium">TIMESTAMP</span>
            <span className="text-[#f6f5f2] font-semibold truncate block mt-0.5">{submittedDetails?.timestamp || "Just now"}</span>
          </div>
        </div>

        {submittedDetails?.message && (
          <div className="border-t border-white/10 pt-3">
            <span className="text-[#73737c] block text-[10px] uppercase font-medium mb-1">MESSAGE PREVIEW</span>
            <p className="text-[#d4d4d8] font-mono text-[11px] italic bg-black/40 p-3 rounded-xl border border-white/5 line-clamp-2">
              "{submittedDetails.message}"
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
        <button
          onClick={onReset}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.06] border border-white/10 hover:border-[#ff5e24] hover:bg-[#ff5e24]/10 text-xs font-mono text-[#f6f5f2] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2"
        >
          <span>↺ Send Another Message</span>
        </button>

        <a
          href={`mailto:${bioData.email}`}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#ff5e24] hover:bg-[#ff7a47] text-xs font-mono text-white font-bold transition-all shadow-[0_4px_20px_rgba(255,94,36,0.3)] cursor-pointer active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Open Direct Mail ↗</span>
        </a>
      </div>
    </motion.div>
  );
}
