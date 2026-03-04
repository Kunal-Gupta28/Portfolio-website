import HomeOutlined from "@mui/icons-material/HomeOutlined";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import WorkOutline from "@mui/icons-material/WorkOutline";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";

export const navItems = [
  { key: "home", label: "Index", path: "/", icon: HomeOutlined },
  { key: "about", label: "About", path: "/about", icon: InfoOutlined },
  { key: "projects", label: "Projects", path: "/projects", icon: WorkOutline },
  {
    key: "resume",
    label: "Resume",
    external: true,
    url: "https://drive.google.com/file/d/1ODGAaXqDFcsrd54DUlKb0rPeLdm7toPb/view",
    icon: DescriptionOutlined,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    external: true,
    url: "https://www.linkedin.com/in/kunal-gupta-b7bb7a216/",
    icon: LinkedIn,
  },
  {
    key: "github",
    label: "GitHub",
    external: true,
    url: "https://github.com/Kunal-Gupta28",
    icon: GitHub,
  },
];