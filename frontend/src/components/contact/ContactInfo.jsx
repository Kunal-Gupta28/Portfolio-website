import React, { memo } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { contactInfo, socialLinks } from "../../data/contactData";

const ACCENT = "#fa5a29";

// 🔹 Styles (stable references)

const paperStyle = {
  p: { xs: 2, md: 4 },
  height: "100%",
  borderRadius: "20px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const headingStyle = {
  mb: { xs: 1, md: 2 },
  fontWeight: 600,
  color: "#fff",
};

const paragraphStyle = {
  mb: 4,
  color: "rgba(255,255,255,0.65)",
  fontSize: { xs: 14, md: 19 },
};

const rowStyle = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 1, md: 2 },
  mb: 2,
};

const textStyle = {
  color: "rgba(255,255,255,0.7)",
  fontSize: { xs: 14, md: 19 },
};

const socialContainer = {
  display: "flex",
  gap: 2,
  mt: 3,
};

const iconButtonStyle = {
  color: "rgba(255,255,255,0.6)",
  transition: "all 0.2s ease",
  "&:hover": {
    color: ACCENT,
    transform: "translateY(-2px)",
  },
};

function ContactInfo() {
  return (
    <Paper sx={paperStyle}>
      {/* Heading */}
      <Typography variant="h5" sx={headingStyle}>
        Get in Touch
      </Typography>

      {/* Description */}
      <Typography sx={paragraphStyle}>
        Feel free to reach out for opportunities, collaborations, or just a
        friendly hello.
      </Typography>

      {/* Contact Info */}
      {contactInfo.map(({ label, value, icon: Icon }) => (
        <Box key={label} sx={rowStyle}>
          <Icon sx={{ color: ACCENT }} />
          <Typography sx={textStyle}>{value}</Typography>
        </Box>
      ))}

      {/* Social Links */}
      <Box sx={socialContainer}>
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <IconButton
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={iconButtonStyle}
          >
            <Icon />
          </IconButton>
        ))}
      </Box>
    </Paper>
  );
}

export default memo(ContactInfo);