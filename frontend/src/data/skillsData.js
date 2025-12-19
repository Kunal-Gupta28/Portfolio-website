import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";

export const skillIconMap = {
  frontend: CodeIcon,
  backend: StorageIcon,
  mobile: DevicesIcon,
  security: SecurityIcon,
  devops: SpeedIcon,
};

export const skillCategories = [
  {
    icon: "frontend",
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Material UI"],
  },
  {
    icon: "backend",
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Socket.io", "REST APIs"],
  },
  {
    icon: "devops",
    title: "DevOps & Systems",
    skills: ["Docker", "Git", "Linux", "CI/CD"],
  },
  {
    icon: "mobile",
    title: "Mobile & Future Focus",
    skills: ["React Native", "App Deployment"],
  },
  {
    icon: "security",
    title: "Security & Exploration",
    skills: ["Security Best Practices", "Ethical Hacking Basics"],
  },
];
