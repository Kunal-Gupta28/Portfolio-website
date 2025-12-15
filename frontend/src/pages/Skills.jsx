import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  LinearProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "../data/animations";
import {
  skillCategories,
  skillIconMap,
} from "../data/skillsData";

const Skills = () => {
  return (
    <Box sx={{ minHeight: "100dvh", maxWidth: "100dvw", py: 8 }}>

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
            Skills & Expertise
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => {
            const Icon = skillIconMap[category.icon];

            return (
              <Grid item xs={12} md={6} key={category.title}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: "100%",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        borderColor: "primary.main",
                        boxShadow:
                          "0 0 20px rgba(144,202,249,0.2)",
                      },
                    }}
                  >
                    {/* Category Header */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          color: "primary.main",
                          p: 1,
                          borderRadius: "50%",
                          backgroundColor:
                            "rgba(144,202,249,0.1)",
                        }}
                      >
                        <Icon sx={{ fontSize: 40 }} />
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{ color: "primary.main" }}
                      >
                        {category.title}
                      </Typography>
                    </Box>

                    {/* Skills */}
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        <Box sx={{ mb: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 1,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ color: "text.secondary" }}
                            >
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: "primary.main" }}
                            >
                              {skill.level}%
                            </Typography>
                          </Box>

                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor:
                                "rgba(144,202,249,0.1)",
                              "& .MuiLinearProgress-bar": {
                                backgroundColor:
                                  "primary.main",
                                borderRadius: 4,
                              },
                            }}
                          />
                        </Box>
                      </motion.div>
                    ))}
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
