import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { navItems } from "../../../data/navData";
import { useLoader } from "../../../context/LoaderContext";

const MotionBox = motion.create(Box);

export default function MobileNavbar({ pathname }) {
  const { setLoading } = useLoader();
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  // Active item (safe for external links)
  const activeItem = useMemo(() => {
    return (
      navItems.find((item) => item.path && pathname === item.path) ||
      navItems[0]
    );
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    if (!expanded) return;

    const handler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [expanded]);

  // Navigation handler
  const handleClick = (item) => {
    if (item.external) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else {
      setLoading(true);
      navigate(item.path);
    }

    setExpanded(false);
  };

  return (
    <MotionBox
      ref={ref}
      animate={{ width: expanded ? "92vw" : 48 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      onClick={() => {
        if (!expanded) setExpanded(true);
      }}
      sx={{
        position: "fixed",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        height: 48,
        zIndex: 1300,
        borderRadius: "999px",
        display: "flex",
        alignItems: "center",
        justifyContent: expanded ? "space-evenly" : "center",
        background:
          "linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.06))",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,.22)",
        boxShadow: "0 8px 24px rgba(0,0,0,.45)",
        overflow: "hidden",
        cursor: expanded ? "default" : "pointer",
      }}
    >
      <Stack
        direction="row"
        sx={{ width: "100%", justifyContent: "space-evenly" }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.key === activeItem.key;
          const visible = expanded || isActive;

          if (!visible) return null;

          return (
            <Box
              key={item.key}
              onClick={(e) => {
                e.stopPropagation();

                // ✅ First tap = expand only
                if (!expanded) {
                  setExpanded(true);
                  return;
                }

                // ✅ Second tap = navigate
                handleClick(item);
              }}
              sx={{
                width: 44,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: expanded ? "pointer" : "default",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  height: 24,
                  width: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  color: isActive ? "#fa5a29" : "#fff",
                  opacity: isActive ? 1 : 0.6,
                  transform: isActive ? "scale(1.08)" : "scale(1)",
                  transition: "all .25s",
                }}
              >
                <Icon sx={{ fontSize: 18 }} />
              </Box>

              {/* Label */}
              {expanded && (
                <Typography
                  sx={{
                    fontSize: "0.55rem",
                    color: "#fff",
                    opacity: 0.75,
                    mt: 0.3,
                  }}
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