import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { navItems } from "../../../data/navData";
import NavItem from "./NavItem";

const NavCenter = memo(({ showExpanded, isActive }) => {
  const navigate = useNavigate();

  const handleNavClick = useCallback(
    (e) => {
      const index = Number(e.currentTarget.dataset.index);
      const item = navItems[index];

      if (item.external) {
        window.open(item.url, "_blank", "noopener,noreferrer");
      } else {
        navigate(item.path);
      }
    },
    [navigate],
  );

  return (
    <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
      <Stack direction="row" spacing={2} alignItems="center">
        {navItems.map((item, index) => (
          <NavItem
            key={item.key}
            item={item}
            index={index}
            active={isActive(item.path)}
            showExpanded={showExpanded}
            onClick={handleNavClick}
          />
        ))}
      </Stack>
    </Box>
  );
});

export default NavCenter;
