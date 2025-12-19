import { delay } from "framer-motion";

// Controls stagger timing for hero text
export const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Masked vertical reveal (100% below → natural position)
export const verticalReveal = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Reveal + infinite micro-bounce 
export const verticalRevealWithBounce = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  show: {
    y: ["0%", "-12%", "0%"],
    opacity: 1,
    transition: {
      opacity: { duration: 0.4 },
      y: {
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.2,
      },
    },
  },
};

// vertical stack container
const STACK_ITEM_COUNT = 24;
const ITEM_HEIGHT = 1.2;

export const verticalStackContainer = {
  initial: {
    y: "0em",
  },
  animate: {
    y: `-${STACK_ITEM_COUNT * ITEM_HEIGHT}em`,
    transition: {
      delay: 1,
      duration: STACK_ITEM_COUNT * 2,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};
