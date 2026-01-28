import { Suspense } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// importing components
import ContactInfo from "./ContactInfo";
import GlassCard from "../GlassCard";
import ContactForm from  "./ContactForm";

const ACCENT = "#fa5a29";

// styling
const ctaStyle = {
  borderRadius: "999px",
  border: "1px solid rgba(250,90,41,.6)",
  padding: "10px 25px",
  minWidth: 200,
  background: "transparent",
  color: ACCENT,
  fontWeight: 500,
  cursor: "pointer",
  display: "block",
  marginInline: "auto",
};

export default function ContactActions({ showForm, onShowForm, onHideForm }) {
  
  // theme + checking for the tablet
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        alignItems: {
          xs: "center",
          sm: "flex-start",
          md: "center",
        },
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 6 },

        // padding for table only
        py: {
          xs: 0,
          sm: 16,
          md: 0,
        },
      }}
    >
      {/* tablet view */}
      {isTablet && (
        <Box
          sx={{
            width: "100%",
            maxWidth: 1100,
            display: "flex",
            gap: 4,
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          {/* left part — Get in Touch */}
          <Box sx={{ flex: 1 }}>
            <GlassCard>
              <ContactInfo />
            </GlassCard>
          </Box>

          {/* right part — Send Message */}
          <Box sx={{ flex: 1 }}>
            <GlassCard hover={false}>
              <Suspense fallback={<Box sx={{ height: 260 }} />}>
                <ContactForm />
              </Suspense>
            </GlassCard>
          </Box>
        </Box>
      )}

      {/* mobile + desktop */}
      {!isTablet && (
        <AnimatePresence mode="wait">
          {!showForm && (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{ maxWidth: 480, width: "100%" }}
            >
              <GlassCard>
                <ContactInfo />

                {/* message : opens form  */}
                <motion.button
                  onClick={onShowForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ ...ctaStyle, marginTop: 24 }}
                >
                  Send Message Directly <span className="text-[clamp(1.2rem,3vw,1.2rem)] ms-2 font-bold">↗</span>
                </motion.button>
              </GlassCard>
            </motion.div>
          )}

          {/* message box */}
          {showForm && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{ maxWidth: 520, width: "100%" }}
            >
              <GlassCard hover={false}>

                <Suspense fallback={<Box sx={{ height: 260 }} />}>
                  <ContactForm />
                </Suspense>

                {/* close button : close from */}
                <motion.button
                  onClick={onHideForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ ...ctaStyle, marginTop: 24 }}
                >
                  Back to Get in Touch <span style={{ marginLeft: 12 }}>↗</span>
                </motion.button>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </Box>
  );
}
