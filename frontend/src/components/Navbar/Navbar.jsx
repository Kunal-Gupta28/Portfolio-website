import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useMemo, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavCenter from "./NavCenter";

const MotionBox = motion.create(Box);

const navItems = [
  { key: "home", label: "Index", path: "/" },
  { key: "about", label: "About", path: "/about" },
  { key: "projects", label: "Projects", path: "/projects" },

  {
    key: "resume",
    label: "Resume",
    external: true,
    url: "https://drive.google.com/file/d/1ODGAaXqDFcsrd54DUlKb0rPeLdm7toPb/view?usp=share_link",
  },

  {
    key: "linkedin",
    label: "LinkedIn",
    external: true,
    url: "https://www.linkedin.com/in/kunal-gupta-b7bb7a216/",
  },
  {
    key: "github",
    label: "GitHub",
    external: true,
    url: "https://github.com/Kunal-Gupta28",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [expanded, setExpanded] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);

  const greeting = useMemo(() => {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return "Good Morning!";
    if (h >= 12 && h < 16) return "Good Afternoon!";
    if (h >= 16 && h < 20) return "Good Evening!";
    return "Good Night!";
  }, []);

  const isActive = (path) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(path));

  return (
    <MotionBox
      initial={{ opacity: 0, y: -24, width: "30%" }}
      animate={{ width: expanded ? "90%" : "30%", opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.11, 0.5, 0.18, 0.5] }}
      onMouseEnter={() => {
        setExpanded(true);
        setShowExpanded(true);
      }}
      onMouseLeave={() => {
        setExpanded(false);
        setShowExpanded(false); // hide immediately
      }}
      onAnimationComplete={() => expanded && setShowExpanded(true)}
      sx={{
        position: "fixed",
        top: 24,
        left: 0,
        right: 0,
        mx: "auto",
        maxWidth: "1280px",
        zIndex: 1000,
        borderRadius: "999px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06))",
        backdropFilter: "blur(28px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.22)",
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.35)",
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
          {/* Greeting */}
          <Typography variant="body2" sx={{ opacity: 0.75 }}>
            {greeting}
          </Typography>

          {/* Center navigation */}
          <NavCenter
            navItems={navItems}
            expanded={expanded}
            showExpanded={showExpanded}
            isActive={isActive}
            navigate={navigate}
          />

          {/* CTA */}
          <Typography
            variant="body2"
            role="button"
            tabIndex={0}
            onClick={() => navigate("/contact")}
            onKeyDown={(e) => e.key === "Enter" && navigate("/contact")}
            sx={{
              px: "18px",
              py: "8px",
              borderRadius: "999px",
              cursor: "pointer",

              color: location.pathname === "/contact" ? "#fa5a29" : "#fff",
              background:
                location.pathname === "/contact"
                  ? "rgba(250,90,41,0.08)"
                  : "rgba(255,255,255,0.16)",

              opacity: location.pathname === "/contact" ? 1 : 0.9,
              transition: "all 0.25s ease",

              // 👇 hover ONLY when not on /contact
              ...(location.pathname !== "/contact" && {
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(-2px)",
                  background: "rgba(255,255,255,0.22)",
                },
              }),
            }}
          >
            Let’s Talk
          </Typography>
        </Box>
      </Container>
    </MotionBox>
  );
};

export default Navbar;
