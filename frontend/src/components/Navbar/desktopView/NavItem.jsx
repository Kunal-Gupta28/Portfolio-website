import { memo } from "react";
import Box from "@mui/material/Box";

const navItemStyles = (active) => ({
  fontSize: "small",
  cursor: "pointer",
  color: active ? "#fa5a29" : "#fff",
  opacity: active ? 1 : 0.6,
  transform: active ? "scale(1.08)" : "scale(1)",
  transition: "all 0.25s ease",
  "&:hover": { opacity: 1 },
});

const NavItem = memo(({ item, active, showExpanded, onClick }) => {
  return (
    <Box onClick={onClick} sx={navItemStyles(active)}>
      {showExpanded ? item.label : <item.icon sx={{ fontSize: 18 }} />}
    </Box>
  );
});

export default NavItem;