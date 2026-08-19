"use client";

import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "../shared/MagneticButton";

export default function ContactFormCard({
  formData,
  touched,
  errors,
  status,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  return (
    <motion.form
      key="contact-form"
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      onSubmit={handleSubmit}
      noValidate
      className="p-8 md:p-10 rounded-3xl bg-[#0b0b0b] border border-white/10 flex flex-col gap-6 shadow-2xl"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-[#f6f5f2] tracking-tight">
          Send a Message
        </h3>
        <span className="text-xs font-mono text-[#73737c]">
          * Required fields
        </span>
      </div>

      {status.error && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-rose-950/70 border border-rose-500/40 text-rose-300 text-xs font-mono flex items-center gap-2"
        >
          <span className="text-base">⚠️</span>
          <span>{status.error}</span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <label htmlFor="name" className="text-xs font-mono text-[#a3a3a8] uppercase tracking-wider font-medium">
              YOUR NAME *
            </label>
            {touched.name && !errors.name && formData.name.trim() && (
              <span className="text-[10px] font-mono text-emerald-400">✓ Valid</span>
            )}
          </div>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Jane Doe"
            className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-[#f6f5f2] placeholder-[#73737c] text-sm focus:outline-none transition-all duration-200 ${
              touched.name && errors.name
                ? "border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                : touched.name && !errors.name && formData.name.trim()
                ? "border-emerald-500/50 focus:border-emerald-500"
                : "border-white/10 focus:border-[#ff5e24] focus:ring-1 focus:ring-[#ff5e24]"
            }`}
          />
          {touched.name && errors.name && (
            <span className="text-xs font-mono text-rose-400 flex items-center gap-1 mt-0.5">
              ⚠️ {errors.name}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="text-xs font-mono text-[#a3a3a8] uppercase tracking-wider font-medium">
              YOUR EMAIL *
            </label>
            {touched.email && !errors.email && formData.email.trim() && (
              <span className="text-[10px] font-mono text-emerald-400">✓ Valid</span>
            )}
          </div>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="jane@company.com"
            className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-[#f6f5f2] placeholder-[#73737c] text-sm focus:outline-none transition-all duration-200 ${
              touched.email && errors.email
                ? "border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                : touched.email && !errors.email && formData.email.trim()
                ? "border-emerald-500/50 focus:border-emerald-500"
                : "border-white/10 focus:border-[#ff5e24] focus:ring-1 focus:ring-[#ff5e24]"
            }`}
          />
          {touched.email && errors.email && (
            <span className="text-xs font-mono text-rose-400 flex items-center gap-1 mt-0.5">
              ⚠️ {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-mono text-[#a3a3a8] uppercase tracking-wider font-medium">
          SUBJECT / PURPOSE (OPTIONAL)
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Software Engineering Opportunity / Technical Inquiry"
          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#f6f5f2] placeholder-[#73737c] text-sm focus:outline-none focus:border-[#ff5e24] focus:ring-1 focus:ring-[#ff5e24] transition-all duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center">
          <label htmlFor="message" className="text-xs font-mono text-[#a3a3a8] uppercase tracking-wider font-medium">
            MESSAGE *
          </label>
          <span className={`text-[10px] font-mono ${formData.message.trim().length < 10 && touched.message ? "text-rose-400" : "text-[#73737c]"}`}>
            {formData.message.trim().length} / 10 min chars
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Tell me about your organization, role details, or project goals..."
          className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-[#f6f5f2] placeholder-[#73737c] text-sm focus:outline-none transition-all duration-200 resize-none ${
            touched.message && errors.message
              ? "border-rose-500/70 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
              : touched.message && !errors.message && formData.message.trim()
              ? "border-emerald-500/50 focus:border-emerald-500"
              : "border-white/10 focus:border-[#ff5e24] focus:ring-1 focus:ring-[#ff5e24]"
          }`}
        />
        {touched.message && errors.message && (
          <span className="text-xs font-mono text-rose-400 flex items-center gap-1 mt-0.5">
            ⚠️ {errors.message}
          </span>
        )}
      </div>

      <div className="pt-2 flex justify-end">
        <MagneticButton
          type="submit"
          variant="primary"
          className="w-full sm:w-auto"
        >
          {status.loading ? (
            <span>Sending Message...</span>
          ) : (
            <>
              <span>Send Message</span>
              <span>→</span>
            </>
          )}
        </MagneticButton>
      </div>
    </motion.form>
  );
}
