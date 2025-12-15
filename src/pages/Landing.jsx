import { Box, Typography, Button, Container, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";
import {
  containerVariants,
  itemVariants,
  buttonVariants,
  profileBounce,
} from "../data/animations";
import {socialLinks}  from "../data/contactData";

const Landing = () => {
  const { mode } = useTheme();

  const glow =
    mode === "dark"
      ? "rgba(124, 77, 255, 0.5)"
      : "rgba(69, 39, 160, 0.5)";

  return (
    <Box sx={{ height: "100dvh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Box textAlign="center">
            {/* Avatar */}
            <motion.div variants={itemVariants}>
              <Box sx={{ width: { xs: 200, md: 300 }, mx: "auto", mb: 4 }}>
                <motion.div variants={profileBounce} animate="bounce">
                  <Avatar
                    src="/images/non-bg2.png"
                    sx={{
                      width: "100%",
                      height: "100%",
                      border: "4px solid",
                      borderColor: "primary.main",
                      boxShadow: `0 0 30px ${glow}`,
                    }}
                  />
                </motion.div>
              </Box>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "5rem" },
                  fontWeight: "bold",
                  background:
                    "linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Kunal Gupta
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <Typography variant="h4" color="text.secondary" mb={4}>
                Crafting Digital Experiences Through Code
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants}>
              <Box display="flex" gap={2} justifyContent="center" mb={5}>
                {[
                  {
                    label: "Explore My Work",
                    to: "/projects",
                    variant: "contained",
                    icon: <ArrowForward />,
                  },
                  {
                    label: "Get in Touch",
                    to: "/contact",
                    variant: "outlined",
                  },
                ].map((btn) => (
                  <motion.div
                    key={btn.label}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button
                      component={Link}
                      to={btn.to}
                      variant={btn.variant}
                      endIcon={btn.icon}
                    >
                      {btn.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <Box display="flex" gap={2} justifyContent="center">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <motion.div key={label} whileHover={{ y: -5, scale: 1.1 }}>
                    <Button
                      component="a"
                      href={href}
                      target="_blank"
                      startIcon={<Icon />}
                      sx={{
                        backgroundColor: "rgba(124,77,255,0.1)",
                        border: "1px solid rgba(124,77,255,0.2)",
                      }}
                    >
                      {label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Landing;
