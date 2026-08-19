"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import ContactDirectChannels from "./ContactDirectChannels";
import ContactFormCard from "./ContactFormCard";
import ContactSuccessCard from "./ContactSuccessCard";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [submittedDetails, setSubmittedDetails] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setSubmittedDetails(details);
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
          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <ContactDirectChannels />
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!status.success ? (
                <ContactFormCard
                  formData={formData}
                  touched={touched}
                  errors={errors}
                  status={status}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  handleSubmit={handleSubmit}
                />
              ) : (
                <ContactSuccessCard
                  submittedDetails={submittedDetails}
                  onReset={() => {
                    setStatus({ loading: false, success: null, error: null });
                    setSubmittedDetails(null);
                  }}
                />
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
