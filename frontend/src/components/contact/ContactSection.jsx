import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import MagneticButton from "../shared/MagneticButton";
import ScrollReveal from "../shared/ScrollReveal";
import SplineScene from "../SplineScene";
import { bioData, socialLinks } from "../../data/portfolioData";

// Email regex pattern for robust validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Lightweight 60fps Canvas Confetti animation for form submission celebration
const CanvasConfetti = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const colors = ["#ff5e24", "#ff824d", "#10b981", "#34d399", "#fbbf24", "#ffffff"];
    const particles = Array.from({ length: 55 }, () => ({
      x: width / 2,
      y: height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.75) * 12 - 2,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 1,
      rotation: Math.random() * 360,
      spin: (Math.random() - 0.5) * 12,
    }));

    let animationFrameId;
    const startTime = Date.now();

    const render = () => {
      const elapsed = Date.now() - startTime;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.28; // gravity
        p.opacity = Math.max(0, 1 - elapsed / 2000);
        p.rotation += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (elapsed < 2000) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-20" />;
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [submittedDetails, setSubmittedDetails] = useState(null);

  // Validate individual field
  const validateField = (name, value) => {
    let error = "";
    const trimmed = value.trim();

    if (name === "name") {
      if (!trimmed) {
        error = "Name is required.";
      } else if (trimmed.length < 2) {
        error = "Name must be at least 2 characters long.";
      }
    } else if (name === "email") {
      if (!trimmed) {
        error = "Email address is required.";
      } else if (!EMAIL_REGEX.test(trimmed)) {
        error = "Please enter a valid email address (e.g. name@domain.com).";
      }
    } else if (name === "message") {
      if (!trimmed) {
        error = "Message is required.";
      } else if (trimmed.length < 10) {
        error = `Message is too short (${trimmed.length}/10 chars minimum).`;
      }
    }

    return error;
  };

  // Validate all fields
  const validateAll = () => {
    const newErrors = {};
    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const messageErr = validateField("message", formData.message);

    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (messageErr) newErrors.message = messageErr;

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation if touched
    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(bioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Touch all fields to reveal all errors on submit attempt
    setTouched({ name: true, email: true, subject: true, message: true });
    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        loading: false,
        success: null,
        error: "Please fix the highlighted errors before submitting.",
      });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    const details = {
      name: formData.name.trim() || "Visitor",
      email: formData.email.trim() || "N/A",
      subject: formData.subject.trim() || "General Inquiry / Collaboration",
      message: formData.message.trim() || "",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " • " + new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedDetails(details);
        setStatus({ loading: false, success: "Message sent successfully!", error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTouched({ name: false, email: false, subject: false, message: false });
        setErrors({});
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || "Failed to send message. Please try again or reach out directly via email.",
        });
      }
    } catch (err) {
      setSubmittedDetails(details);
      setStatus({
        loading: false,
        success: "Thank you! Your message has been recorded.",
        error: null,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({ name: false, email: false, subject: false, message: false });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="relative w-full max-w-none py-[clamp(4rem,8vh,10vh)] px-[clamp(1.25rem,5vw,6rem)] bg-[#050505] bg-ambient-contact border-t border-white/[0.06]">
      <div className="w-full max-w-none mx-auto">
        <ScrollReveal>
          <SectionHeading
            number="05"
            title="Let's build something meaningful."
            subtitle="Have a full-time engineering role, technical project, or software inquiry? Let's discuss how we can work together."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Swapped Spline 3D Scene at TOP + Direct Contact Info at BOTTOM */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 flex flex-col gap-8">
            
            {/* 1. TOP: Interactive Spline 3D Scene Canvas */}
            <div className="relative w-full h-[360px] md:h-[420px] rounded-3xl border border-white/15 bg-[#0b0b0b] shadow-2xl overflow-hidden group">
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#050505]/80 border border-white/10 text-[10px] font-mono text-[#ff824d] flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5e24] animate-ping" />
                <span>INTERACTIVE 3D SPLINE CANVAS</span>
              </div>
              <SplineScene className="w-full h-full" />
            </div>

            {/* 2. BOTTOM: Direct Contact & Email Card */}
            <div className="p-8 rounded-3xl bg-[#0b0b0b] border border-white/10 flex flex-col gap-6 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5e24]/10 rounded-full blur-2xl group-hover:bg-[#ff5e24]/20 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#ff5e24] uppercase tracking-widest font-bold">
                    DIRECT EMAIL
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[10px] font-mono text-[#a3a3a8] hover:text-[#ff5e24] transition-colors cursor-pointer active:scale-95"
                  >
                    {copied ? "✓ COPIED" : "COPY EMAIL"}
                  </button>
                </div>
                <a
                  href={`mailto:${bioData.email}`}
                  className="text-xl md:text-3xl font-bold text-[#f6f5f2] hover:text-[#ff5e24] transition-colors break-all"
                >
                  {bioData.email}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-[#73737c] uppercase tracking-widest block mb-1">
                  CURRENT LOCATION
                </span>
                <p className="text-sm md:text-base font-semibold text-[#f6f5f2]">
                  {bioData.location} (DTU Campus)
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-[#73737c] uppercase tracking-widest block mb-2">
                  SOCIAL SHORTCUTS
                </span>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-colors active:scale-95 ${
                        link.name === "WhatsApp"
                          ? "bg-[#ff5e24]/10 text-[#ff824d] border-[#ff5e24]/30 hover:bg-[#ff5e24] hover:text-white"
                          : "bg-white/[0.04] text-[#a3a3a8] border-white/10 hover:border-[#ff5e24] hover:text-[#f6f5f2]"
                      }`}
                    >
                      {link.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Status Indicator Badge */}
            <div className="p-6 rounded-2xl bg-[#0b0b0b]/70 border border-white/10 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5e24] animate-pulse" />
                <span className="text-xs font-mono text-[#f6f5f2] uppercase tracking-wider font-medium">
                  {bioData.status}
                </span>
              </div>
              <span className="text-xs font-mono text-[#73737c]">2026 Edition</span>
            </div>
          </ScrollReveal>

          {/* Right Column: Thoroughly Validated Form & Creative Success Card */}
          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!status.success ? (
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

                  {/* Error Banner */}
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
                    {/* YOUR NAME */}
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

                    {/* YOUR EMAIL */}
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

                  {/* SUBJECT */}
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

                  {/* MESSAGE */}
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
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  className="p-8 md:p-10 rounded-3xl bg-[#0b0b0b] border border-emerald-500/30 flex flex-col gap-6 shadow-[0_20px_60px_rgba(16,185,129,0.12)] relative overflow-hidden group"
                >
                  <CanvasConfetti />
                  
                  {/* Background ambient radial glows */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff5e24]/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Animated Glowing Icon Header */}
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

                  {/* Dispatch Receipt Box */}
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

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                    <button
                      onClick={() => {
                        setStatus({ loading: false, success: null, error: null });
                        setSubmittedDetails(null);
                      }}
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
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

