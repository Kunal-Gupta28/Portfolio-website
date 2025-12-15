

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// bounce effect 
export const bounce = {
  bounce: {
    y: [0, -15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* Container animation */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

/* Item fade-in */
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

/* Button interactions */
export const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 32px rgba(124, 77, 255, 0.3)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: {
    scale: 0.95,
  },
};

/* Profile avatar bounce */
export const profileBounce = {
  bounce: {
    y: [0, -15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
