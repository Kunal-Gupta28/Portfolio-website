import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import NavItemIcon from "./NavItemIcon";
import NavItemText from "./NavItemText";

const NavCenter = ({
  navItems,
  expanded,
  showExpanded,
  isActive,
  navigate,
}) => {
  const handleClick = (item) => {
    if (item.external) {
      window.open(item.url, "_blank");
    } else {
      navigate(item.path);
    }
  };

  return (
    <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
      {/* Collapsed */}
      {!expanded && (
        <Stack direction="row" spacing={2} alignItems="center">
          {navItems.map((item) => (
            <NavItemIcon
              key={item.key}
              type={item.key}
              active={!item.external && isActive(item.path)}
              onClick={() => handleClick(item)}
            />
          ))}
        </Stack>
      )}

      {/* Expanded */}
      {showExpanded && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Stack direction="row" spacing={6} alignItems="center">
            {navItems.map((item) => (
              <NavItemText
                key={item.key}
                label={item.label}
                active={!item.external && isActive(item.path)}
                onClick={() => handleClick(item)}
              />
            ))}
          </Stack>
        </motion.div>
      )}
    </Box>
  );
};

export default NavCenter;
