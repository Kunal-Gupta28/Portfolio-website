import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <Box sx={{ minHeight: "100dvh", backgroundColor: "#000" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            py: 8,
          }}
        >
          {/* 404 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "7rem", md: "11rem" },
                fontWeight: 900,
                color: "#fa5a29",
                lineHeight: 1,
                mb: 2,
              }}
            >
              404
            </Typography>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: "#fff",
              }}
            >
              Page Not Found
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                mb: 5,
                maxWidth: "520px",
              }}
            >
              The page you’re looking for doesn’t exist or may have been moved.
              Let’s get you back on track.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
