import { Box } from "@mui/material";
import {
  HomeOutlined,
  InfoOutlined,
  WorkOutline,
  DescriptionOutlined,
  LinkedIn,
  GitHub
} from "@mui/icons-material";

const ICON_MAP = {
  home: HomeOutlined,
  about: InfoOutlined,
  projects: WorkOutline,
  resume: DescriptionOutlined,
  linkedin: LinkedIn,
  github: GitHub,
};


const NavItemIcon = ({ type, active, onClick }) => {
  const Icon = ICON_MAP[type];
  if (!Icon) return null;

  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        color: active ? "#fa5a29" : "#fff",
        opacity: active ? 1 : 0.6,
        transform: active ? "scale(1.08)" : "scale(1)",
        transition: "all 0.25s ease",
        "&:hover": { opacity: 1 },
      }}
    >
      <Icon fontSize="small" />
    </Box>
  );
};


export default NavItemIcon;
