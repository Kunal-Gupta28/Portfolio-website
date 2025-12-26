import { Box, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

// importing component
import NavItemIcon from "./NavItemIcon";

const MotionBox = motion.create(Box);

// animation stats
const containerVariants = {
  collapsed: {
    width: 48,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
  expanded: {
    width: "92vw",
    maxWidth: 580, 
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 20,
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  collapsed: {
    opacity: 0,
    y: 10,
    scale: 0.9,
  },
  expanded: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function MobileNavbar({ navItems = [], isActive, navigate }) {

  // state variable
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);

  // adding contact route details in nav options and links
  navItems = [...navItems,{ key: "contact", label: "Talk", path: "/contact" },]

  const currentItem =
    navItems.find((item) => !item.external && isActive(item.path)) ??
    navItems[0];

  const closeMenu = useCallback(() => setExpanded(false), []);

  // if external link present then open in new tab otherwise nagivate
  const handleItemClick = useCallback(
    (item) => {
      if (item.external) {
        window.open(item.url, "_blank", "noopener,noreferrer");
      } else {
        navigate(item.path);
      }
      closeMenu();
    },
    [navigate, closeMenu]
  );

  // close navbar when clicked outside
  useEffect(() => {
    if (!expanded) return;

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [expanded, closeMenu]);

  return (
    <MotionBox
      ref={containerRef}
      variants={containerVariants}
      animate={expanded ? "expanded" : "collapsed"}
      initial={false}
      role="navigation"
      aria-expanded={expanded}
      sx={{
        position: "fixed",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        height: 52,
        zIndex: 1300,
        overflow: "hidden",
        borderRadius: "999px",
        display: "flex",
        alignItems: "center",
        transformOrigin: "center",
        background:
          "linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.06))",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,.22)",
        boxShadow: "0 8px 24px rgba(0,0,0,.45)",
      }}
    >
      {/* Collapsed State : only show current route icon */}
      <AnimatePresence initial={false}>
        {!expanded && (
          <MotionBox
            key="collapsed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setExpanded(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setExpanded(true)
            }
            sx={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {/* icons */}
            <NavItemIcon type={currentItem?.key} active sx={{ fontSize: 20 }} />
          </MotionBox>
        )}
      </AnimatePresence>

      {/* Expanded State: shows all nav optoin */}
      <AnimatePresence>
        {expanded && (
          <Stack
            component={motion.div}
            key="expanded"
            direction="row"
            sx={{
              px: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {navItems.map((item) => (
              <MotionBox
                key={item.key}
                variants={itemVariants}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleItemClick(item)}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0.2,
                  minWidth: 44,
                }}
              >

                {/* icons */}
                <NavItemIcon
                  type={item.key}
                  active={!item.external && isActive(item.path)}
                  sx={{ fontSize: 18 }}
                />

                {/* routes name */}
                <Typography
                  sx={{
                    fontSize: "0.55rem",
                    lineHeight: 1,
                    opacity: 0.75,
                    color: "#fff",
                  }}
                >
                  {item.label}
                </Typography>
              </MotionBox>
            ))}

          
          </Stack>
        )}
      </AnimatePresence>
    </MotionBox>
  );
}
