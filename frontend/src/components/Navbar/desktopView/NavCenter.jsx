import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { navItems } from "../../../data/navData";
import NavItem from "./NavItem";
import { useLoader } from "../../../context/LoaderContext";

const NavCenter = memo(({ showExpanded, pathname }) => {
  const { setLoading } = useLoader();
  const navigate = useNavigate();

  // handle nav link click
  const handleNavClick = useCallback(
    (item) => {
      
      if (item.external) {
        window.open(item.url, "_blank", "noopener,noreferrer");
      } else {
        setLoading(true);
        navigate(item.path);
      }
    },
    [navigate, setLoading],
  );

  return (
    <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
      <Stack direction="row" spacing={2}>
        {navItems.filter((item) => item.key !== "contact").map((item) => {
          const active =
            pathname === item.path ||
            (item.path !== "/" && pathname.startsWith(item.path));

          return (
            <NavItem
              key={item.key}
              item={item}
              active={active}
              showExpanded={showExpanded}
              onClick={() => handleNavClick(item)}
            />
          );
        })}
      </Stack>
    </Box>
  );
});

export default NavCenter;
