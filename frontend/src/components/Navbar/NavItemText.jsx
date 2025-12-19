import { Typography } from "@mui/material";

const NavItemText = ({ label, active, onClick }) => {
  return (
    <Typography
      variant="body2"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      sx={{
        cursor: "pointer",
        position: "relative",
        color: active ? "#fa5a29" : "#fff",
        opacity: active ? 1 : 0.65,
        transition: "color 0.25s ease, opacity 0.25s ease",

        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: -6,
          width: "100%",
          height: "2px",
          background: "#fa5a29",
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.25s ease",
        },

        "&:hover": {
          opacity: 1,
        },
      }}
    >
      {label}
    </Typography>
  );
};

export default NavItemText;
