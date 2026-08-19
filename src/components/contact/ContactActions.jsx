import React, { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import GlassCard from "../GlassCard";

const fadeAnimation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 16 },
  transition: { duration: 0.28 },
};

function ContactActions({ showForm, onShowForm, onHideForm }) {
  return (
    <div className="flex min-h-full items-center justify-center px-4 sm:px-6 md:px-12">
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div key="info" {...fadeAnimation} className="relative mx-auto w-full max-w-[520px]">
            <GlassCard>
              <ContactInfo />

              <motion.button
                onClick={onShowForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                  mx-auto
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#fa5a29]/60
                  bg-[#fa5a29]/10
                  px-7
                  py-3
                  font-semibold
                  text-[#fa5a29]
                  transition-colors
                  hover:bg-[#fa5a29]/20
                  cursor-pointer
                "
              >
                Send Message ↗
              </motion.button>
            </GlassCard>
          </motion.div>
        ) : (
          <motion.div key="form" {...fadeAnimation} className="relative mx-auto w-full max-w-[520px]">
            <GlassCard hover={false}>
              <motion.button
                onClick={onHideForm}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="
                  absolute
                  right-3
                  top-3
                  z-10
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  text-white
                  cursor-pointer
                  hover:border-white/40
                  hover:bg-white/15
                "
              >
                ✕
              </motion.button>

              {/* Instant render */}
              <ContactForm />
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(ContactActions);