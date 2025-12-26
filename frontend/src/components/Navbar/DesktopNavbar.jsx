import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

// importing component
import NavCenter from "./NavCenter";

const MotionBox = motion.create(Box);

export default function DesktopNavbar({
  navItems,
  isActive,
  navigate,
  greeting,
  location,
}) {

  // state variable
  const [expanded, setExpanded] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);

  return (
    <MotionBox
      initial={{ opacity: 0, y: -24, width: "500px" }}
      animate={{ width: expanded ? "90%" : "500px", opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.11, 0.5, 0.18, 0.5] }}
      onMouseLeave={() => {
        setExpanded(false);
        setShowExpanded(false);
      }}
      onAnimationComplete={() => expanded && setShowExpanded(true)}
      sx={{
        position: "fixed",
        top: 24,
        left: 0,
        right: 0,
        mx: "auto",
        maxWidth: "1280px",
        zIndex: 1200,
        borderRadius: "999px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,.16), rgba(255,255,255,.06))",
        backdropFilter: "blur(28px) saturate(180%)",
        border: "1px solid rgba(255,255,255,.22)",
        boxShadow:
          "0 40px 80px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.35)",
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 5 } }}>
        <Box
          sx={{
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#fff",
          }}
        >

          {/* greeting  */}
          <Typography variant="body2" sx={{ opacity: 0.75 }}>
            {greeting}
          </Typography>

          <Box
            onMouseEnter={() => {
              setExpanded(true);
              setShowExpanded(true);
            }}
          >

            {/* icons and links */}
            <NavCenter
              navItems={navItems}
              expanded={expanded}
              showExpanded={showExpanded}
              isActive={isActive}
              navigate={navigate}
            />
          </Box>

          {/* contact route */}
          <Typography
            variant="body2"
            role="button"
            onClick={() => navigate("/contact")}
            sx={{
              px: "18px",
              py: "8px",
              borderRadius: "999px",
              cursor: "pointer",
              color: location.pathname === "/contact" ? "#fa5a29" : "#fff",
              background:
                location.pathname === "/contact"
                  ? "rgba(250,90,41,.08)"
                  : "rgba(255,255,255,.16)",
              transition: "all .25s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                background: "rgba(255,255,255,.22)",
              },
            }}
          >
            Let’s Talk
          </Typography>
        </Box>
      </Container>
    </MotionBox>
  );
}
