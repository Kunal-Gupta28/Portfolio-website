import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import axiosInstance from "../config/axios";

import { fadeInUp } from "../data/animations";
import { contactInfo, socialLinks } from "../data/contactData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await axiosInstance.post("/contact", formData);

      if (response.status === 201) {
        setSuccess("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 4,
              fontWeight: "bold",
              background: "linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)",
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
                <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
                  Get in Touch
                </Typography>

                <Typography sx={{ mb: 4, color: "text.secondary" }}>
                  Feel free to reach out for opportunities, collaborations,
                  or just a friendly hello.
                </Typography>

                {contactInfo.map(({ label, value, icon: Icon }) => (
                  <Box
                    key={label}
                    sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
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
                <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
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
                          error={Boolean(errors[field])}
                          helperText={errors[field]}
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
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                      />
                    </Grid>

                    {success && (
                      <Grid item xs={12}>
                        <Typography color="success.main">{success}</Typography>
                      </Grid>
                    )}

                    {error && (
                      <Grid item xs={12}>
                        <Typography color="error.main">{error}</Typography>
                      </Grid>
                    )}

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                        disabled={loading}
                        sx={{
                          mt: 2,
                          background:
                            "linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)",
                        }}
                      >
                        {loading ? (
                          <CircularProgress size={24} sx={{ color: "#fff" }} />
                        ) : (
                          "Send Message"
                        )}
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
