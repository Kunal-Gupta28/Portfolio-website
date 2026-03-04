import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import { navItems } from "../../../data/navData";

const MotionBox = motion.create(Box);

const containerVariants = {
  collapsed: {
    width: 48,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
  expanded: {
    width: "92vw",
    maxWidth: 580,
    transition: { type: "spring", stiffness: 180, damping: 20 },
  },
};

export default function MobileNavbar({ isActive }) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const mobileNavItems = useMemo(
    () => [
      ...navItems,
      {
        key: "contact",
        label: "Talk",
        path: "/contact",
        icon: ChatBubbleOutline,
      },
    ],
    [],
  );

  const currentItem = useMemo(
    () =>
      mobileNavItems.find((item) => !item.external && isActive(item.path)) ??
      mobileNavItems[0],
    [mobileNavItems, isActive],
  );

  const handleItemClick = useCallback(
    (item) => {
      if (item.external) window.open(item.url, "_blank", "noopener,noreferrer");
      else navigate(item.path);
      setExpanded(false);
    },
    [navigate],
  );

  // close when clicking outside
  useEffect(() => {
    if (!expanded) return;
    const handler = (e) =>
      !containerRef.current?.contains(e.target) && setExpanded(false);
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [expanded]);

  return (
    <MotionBox
      ref={containerRef}
      variants={containerVariants}
      animate={expanded ? "expanded" : "collapsed"}
      initial={false}
      role="navigation"
      aria-expanded={expanded}
      onClick={() => !expanded && setExpanded(true)}
      sx={{
        position: "fixed",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        height: 48,
        zIndex: 1300,
        overflow: "hidden",
        borderRadius: "999px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.06))",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,.22)",
        boxShadow: "0 8px 24px rgba(0,0,0,.45)",
        cursor: expanded ? "default" : "pointer",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: expanded ? "space-evenly" : "center",
        }}
      >
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isCurrent = item.key === currentItem.key;
          const visible = expanded || isCurrent;

          return (
            <Box
              key={item.key}
              component={motion.div}
              animate={{
                opacity: visible ? 1 : 0,
                scale: visible ? 1 : 0.6,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={expanded ? () => handleItemClick(item) : undefined}
              sx={{
                width: 44,
                display: visible ? "flex" : "none",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pointerEvents: expanded ? "auto" : "none",
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  height: 24,
                  width: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  color: isCurrent ? "#fa5a29" : "#fff",
                  opacity: isCurrent ? 1 : 0.6,
                  transform: isCurrent ? "scale(1.08)" : "scale(1)",
                  transition: "all .25s",
                }}
              >
                <Icon sx={{fontSize: 18}} />
              </Box>

              {/* LABEL */}
              {expanded && (
                <Typography
                  component={motion.span}
                  animate={{ opacity: expanded ? 0.75 : 0 }}
                  transition={{ duration: 0.15 }}
                  sx={{ fontSize: "0.55rem", lineHeight: 1, color: "#fff" }}
                >
                  {item.label}
                </Typography>
              )}
            </Box>
          );
        })}
      </Stack>
    </MotionBox>
  );
}
