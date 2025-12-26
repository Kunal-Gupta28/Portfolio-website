import { useLocation, useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";

// importing components
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

// nav options and links
const navItems = [
  { key: "home", label: "Index", path: "/" },
  { key: "about", label: "About", path: "/about" },
  { key: "projects", label: "Projects", path: "/projects" },
  {
    key: "resume",
    label: "Resume",
    external: true,
    url: "https://drive.google.com/file/d/1ODGAaXqDFcsrd54DUlKb0rPeLdm7toPb/view",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    external: true,
    url: "https://www.linkedin.com/in/kunal-gupta-b7bb7a216/",
  },
  {
    key: "github",
    label: "GitHub",
    external: true,
    url: "https://github.com/Kunal-Gupta28",
  },
];

export default function Navbar() {

  //  hooks
  const location = useLocation();
  const navigate = useNavigate();
  
  // theme
  const theme = useTheme();

  // checking for the mobile
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // finding current route
  const isActive = (path) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(path));

    // greeting logic
  const greeting = useMemo(() => {
    const h = new Date().getHours();
    if (h >= 5 && h < 12) return "Good Morning!";
    if (h >= 12 && h < 16) return "Good Afternoon!";
    if (h >= 16 && h < 20) return "Good Evening!";
    return "Good Night!";
  }, []);

  // mobile view
  if (isMobile) {
    return (
      <MobileNavbar
        navItems={navItems}
        isActive={isActive}
        navigate={navigate}
      />
    );
  }

  return (

    // desktop view
    <DesktopNavbar
      navItems={navItems}
      isActive={isActive}
      navigate={navigate}
      greeting={greeting}
      location={location}
    />
  );
}
