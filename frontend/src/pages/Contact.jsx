import { Box, Container, Grid, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, lazy, Suspense, useEffect } from "react";

import useDocumentTitle from "../hooks/useDocumentTitle";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import GlassCard from "../components/GlassCard";

const Spline = lazy(() => import("@splinetool/react-spline"));
const ACCENT = "#fa5a29";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  useDocumentTitle("Contact | Kunal Gupta");
  useEffect(() => {
    if (showForm) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showForm]);

  const ctaStyle = {
    borderRadius: "999px",
    border: "1px solid rgba(250,90,41,.6)",
    padding: "14px 40px",
    background: "transparent",
    color: ACCENT,
    fontWeight: 500,
    cursor: "pointer",
    display: "block",
    marginInline: "auto",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "100dvh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,106,0,0.08), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(255,255,255,0.04), transparent 40%),
          #000
        `,
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid container sx={{ height: "100%" }}>
          {/* LEFT — SPLINE */}
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Orange ambient glow */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, rgba(250,90,41,.12), transparent 60%)",
                }}
              />

              <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                <Suspense fallback={null}>
                  <Spline
                    scene="https://prod.spline.design/aUdDgmTe8yU833No/scene.splinecode"
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "scale(1.4)",
                    }}
                  />
                </Suspense>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT — CONTENT */}
          <Grid item xs={12} md={6} sx={{ height: "100%" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, md: 6 },
              }}
            >
              <AnimatePresence mode="wait">
                {/* GET IN TOUCH */}
                {!showForm && (
                  <motion.div
                    key="get-in-touch"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{ maxWidth: 480, width: "100%" }}
                  >
                    <GlassCard>
                      <ContactInfo />

                      <motion.button
                        onClick={() => setShowForm(true)}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        style={{ ...ctaStyle, marginTop: 24 }}
                      >
                        Send Message <span style={{ marginLeft: 24 }}>↗</span>
                      </motion.button>
                    </GlassCard>
                  </motion.div>
                )}

                {/* SEND MESSAGE */}
                {showForm && (
                  <motion.div
                    key="send-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{ maxWidth: 520, width: "100%", marginTop: 90 }}
                  >
                    <GlassCard hover={false}>
                      <Typography
                        variant="h5"
                        sx={{
                          textAlign: "center",
                          fontWeight: 700,
                          color: "#fff",
                          mb: 3,
                        }}
                      >
                        Send Message
                      </Typography>

                      <ContactForm />

                      <motion.button
                        onClick={() => setShowForm(false)}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        style={{ ...ctaStyle, marginTop: 24 }}
                      >
                        Back to Get in Touch{" "}
                        <span style={{ marginLeft: 24 }}>↗</span>
                      </motion.button>
                    </GlassCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
