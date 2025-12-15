import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { fadeInUp, bounce } from "../data/animations";
import { iconMap, aboutContent, interests } from "../data/aboutData";

const About = () => {
  const { mode } = useTheme();

  return (
    <Box sx={{ minHeight: "100dvh" }}>

      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              my: 6,
              fontWeight: "bold",
              background: "linear-gradient(45deg, #90CAF9, #64B5F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {aboutContent.heading}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Paper
                sx={{
                  p: 4,
                  backgroundColor:
                    mode === "dark"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.03)",
                }}
              >
                {/* Avatar */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <motion.div variants={bounce} animate="bounce">
                    <Avatar
                      src="/images/non-bg2.png"
                      alt="Kunal Gupta"
                      sx={{
                        width: 220,
                        height: 220,
                        border: "4px solid",
                        borderColor: "primary.main",
                        boxShadow:
                          mode === "dark"
                            ? "0 0 30px rgba(124,77,255,0.5)"
                            : "0 0 30px rgba(69,39,160,0.5)",
                      }}
                    />
                  </motion.div>
                </Box>

                <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
                  {aboutContent.journeyTitle}
                </Typography>

                {aboutContent.paragraphs.map((text, i) => (
                  <Typography key={i} sx={{ mb: 2, color: "text.secondary" }}>
                    {text}
                  </Typography>
                ))}
              </Paper>
            </motion.div>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Paper
                sx={{
                  p: 4,
                  backgroundColor:
                    mode === "dark"
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.03)",
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
                  My Interests
                </Typography>

                <Grid container spacing={3}>
                  {interests.map((item) => {
                    const Icon = iconMap[item.icon];

                    return (
                      <Grid item xs={12} key={item.title}>
                        <Paper sx={{ p: 3 }}>
                          <Box sx={{ display: "flex", gap: 2 }}>
                            <Box sx={{ color: "primary.main" }}>
                              <Icon fontSize="large" />
                            </Box>

                            <Box>
                              <Typography
                                variant="h6"
                                sx={{ color: "primary.main" }}
                              >
                                {item.title}
                              </Typography>
                              <Typography sx={{ color: "text.secondary" }}>
                                {item.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
