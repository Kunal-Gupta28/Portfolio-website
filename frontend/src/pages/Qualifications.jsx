import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { fadeInUp } from "../data/animations";
import {
  education,
  experience,
} from "../data/qualificationsData";

const Qualifications = () => {
  return (
    <Box sx={{ minHeight: "100dvh", py: 8 }}>

      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              fontWeight: "bold",
              background:
                "linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Qualifications
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Education */}
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Paper
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <SchoolIcon /> Education
                </Typography>

                {education.map((edu) => (
                  <Box
                    key={edu.degree}
                    sx={{
                      mb: 3,
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      "&:hover": {
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "primary.main", mb: 1 }}
                    >
                      {edu.degree}
                    </Typography>

                    <Typography sx={{ color: "text.secondary" }}>
                      {edu.institution}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 1 }}
                    >
                      {edu.duration}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </Typography>

                    <Typography sx={{ color: "text.secondary" }}>
                      {edu.description}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>

          {/* Experience */}
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <Paper
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <WorkIcon /> Experience
                </Typography>

                {experience.map((exp) => (
                  <Box
                    key={exp.position}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "primary.main" }}
                    >
                      {exp.position}
                    </Typography>

                    <Typography sx={{ color: "text.secondary" }}>
                      {exp.company}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      {exp.duration}
                    </Typography>

                    <Typography sx={{ color: "text.secondary", mb: 2 }}>
                      {exp.description}
                    </Typography>

                    <Typography
                      sx={{ color: "primary.main", mb: 1 }}
                    >
                      Key Responsibilities
                    </Typography>

                    {exp.responsibilities.map((item) => (
                      <Typography
                        key={item}
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          pl: 2,
                          position: "relative",
                          mb: 1,
                          "&::before": {
                            content: '"•"',
                            position: "absolute",
                            left: 0,
                            color: "primary.main",
                          },
                        }}
                      >
                        {item}
                      </Typography>
                    ))}

                    <Box sx={{ mt: 3 }}>
                      <Typography
                        sx={{ color: "primary.main", mb: 2 }}
                      >
                        Technologies
                      </Typography>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fill, minmax(120px, 1fr))",
                          gap: 1.5,
                        }}
                      >
                        {exp.technologies.map((tech) => (
                          <Box
                            key={tech}
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              textAlign: "center",
                              backgroundColor:
                                "rgba(255,255,255,0.03)",
                              border:
                                "1px solid rgba(255,255,255,0.05)",
                              "&:hover": {
                                borderColor: "primary.main",
                                transform: "translateY(-2px)",
                              },
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ color: "text.secondary" }}
                            >
                              {tech}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Qualifications;
