import React, { memo } from "react";
import Box from "@mui/material/Box";
import { motion, AnimatePresence } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import GlassCard from "../GlassCard";

const ACCENT = "#fa5a29";

const fadeAnimation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 16 },
  transition: { duration: 0.28 },
};

const hoverScale = { scale: 1.05 };
const tapScale = { scale: 0.96 };

function ContactActions({ showForm, onShowForm, onHideForm }) {
  return (
    <Box sx={containerStyle}>
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div key="info" {...fadeAnimation} style={wrapper}>
            <GlassCard>
              <ContactInfo />

              <motion.button
                onClick={onShowForm}
                whileHover={hoverScale}
                whileTap={tapScale}
                style={ctaStyle}
              >
                Send Message ↗
              </motion.button>
            </GlassCard>
          </motion.div>
        ) : (
          <motion.div key="form" {...fadeAnimation} style={wrapper}>
            <GlassCard hover={false}>
              <motion.button
                onClick={onHideForm}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                style={closeBtn}
              >
                ✕
              </motion.button>

              {/* Instant render, no loader */}
              <ContactForm />
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default memo(ContactActions);

// ---------------- STYLES ----------------

const containerStyle = {
  minHeight: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  px: { xs: 2, sm: 3, md: 6 },
};

const wrapper = {
  maxWidth: 520,
  width: "100%",
  position: "relative",
  margin: "0 auto",
};

const ctaStyle = {
  marginTop: 24,
  borderRadius: "999px",
  border: "1px solid rgba(250,90,41,.6)",
  padding: "12px 28px",
  background: "rgba(250,90,41,0.08)",
  color: ACCENT,
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  marginLeft: "auto",
  marginRight: "auto",
};

const closeBtn = {
  position: "absolute",
  top: 12,
  right: 12,
  zIndex: 10,
  width: 36,
  height: 36,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
  cursor: "pointer",
};