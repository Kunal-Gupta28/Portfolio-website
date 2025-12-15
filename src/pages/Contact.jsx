import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { fadeInUp } from "../data/animations";
import { contactInfo, socialLinks } from "../data/contactData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Navbar />

      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 4,
              fontWeight: "bold",
              background:
                "linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 3, color: "primary.main" }}
                >
                  Get in Touch
                </Typography>

                <Typography
                  sx={{ mb: 4, color: "text.secondary" }}
                >
                  Feel free to reach out for opportunities, collaborations,
                  or just a friendly hello.
                </Typography>

                {contactInfo.map(({ label, value, icon: Icon }) => (
                  <Box
                    key={label}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Icon sx={{ color: "primary.main" }} />
                    <Typography sx={{ color: "text.secondary" }}>
                      {value}
                    </Typography>
                  </Box>
                ))}

                <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <IconButton
                      key={label}
                      href={href}
                      target="_blank"
                      sx={{
                        color: "primary.main",
                        "&:hover": { color: "primary.light" },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 3, color: "primary.main" }}
                >
                  Send Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    {["name", "email", "subject"].map((field) => (
                      <Grid item xs={12} key={field}>
                        <TextField
                          fullWidth
                          label={field.charAt(0).toUpperCase() + field.slice(1)}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                    ))}

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                        sx={{
                          mt: 2,
                          background:
                            "linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)",
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
