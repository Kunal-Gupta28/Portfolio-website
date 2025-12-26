import { Box, Hidden } from "@mui/material";
import { lazy, Suspense, useEffect, useState } from "react";

// Lazy import 
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function ContactSpline() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isDesktop) return null;

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow:"Hidden",
      }}
    >
      {/* Glow background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background:
            "radial-gradient(circle at center, rgba(250,90,41,.12), transparent 60%)",
        }}
      />

      <Box sx={{ width: "100%", height: "100%" }}>
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
  );
}
