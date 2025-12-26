import { Box, Typography, Paper, IconButton } from "@mui/material";
import { contactInfo, socialLinks } from "../../data/contactData";

export default function ContactInfo() {
  return (
    <Paper
      sx={{
        p: {xs:2,md:4},
        height: "100%",
        borderRadius: "20px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >

      {/* heading */}
      <Typography variant="h5" sx={{ mb: {xs:1,md:2}, fontWeight: 600, color: "#fff" }}>
        Get in Touch
      </Typography>

      {/* paragraph */}
      <Typography sx={{ mb:4, color: "rgba(255,255,255,0.65)",fontSize:{ xs:14 , md:19} }}>
        Feel free to reach out for opportunities, collaborations, or just a
        friendly hello.
      </Typography>

      {/* location , email */}
      {contactInfo.map(({ label, value, icon: Icon }) => (
        <Box
          key={label}
          sx={{ display: "flex", alignItems: "center", gap: {xs:1,md:2}, mb: 2 }}
        >
          <Icon sx={{ color: "#fa5a29" }} />
          <Typography sx={{ color: "rgba(255,255,255,0.7)",fontSize:{ xs:14 , md:19} }}>
            {value}
          </Typography>
        </Box>
      ))}

      {/* social media links */}
      <Box sx={{ display: "flex",  gap: 2, mt: 3 }}>
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <IconButton
            key={label}
            href={href}
            target="_blank"
            sx={{
              color: "rgba(255,255,255,0.6)",
              "&:hover": {
                color: "#fa5a29",
                transform: "translateY(-2px)",
              },
            }}
          >
            <Icon />
          </IconButton>
        ))}
      </Box>
    </Paper>
  );
}