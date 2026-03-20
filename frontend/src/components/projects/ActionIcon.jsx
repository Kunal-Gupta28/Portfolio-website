import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";

const MotionIcon = motion(IconButton);

const ACCENT = "#fa5a29";

const iconSx = {
  color: "rgba(255,255,255,.85)",
  "&:hover": { color: ACCENT },
};

export default function ActionIcon({
  title,
  icon,
  href,
  onClick,
  accent = false,
}) {
  const sx = accent ? { color: ACCENT } : iconSx;

  const props = href
    ? {
        component: "a",
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { onClick };

  return (
    <Tooltip title={title}>
      <MotionIcon whileHover={{ scale: 1.15 }} sx={sx} {...props}>
        {icon}
      </MotionIcon>
    </Tooltip>
  );
}