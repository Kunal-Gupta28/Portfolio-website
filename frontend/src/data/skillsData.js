import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";

/* Icon map (same pattern as About page) */
export const skillIconMap = {
  frontend: CodeIcon,
  backend: StorageIcon,
  design: BrushIcon,
  mobile: DevicesIcon,
  security: SecurityIcon,
  devops: SpeedIcon,
};

export const skillCategories = [
  {
    icon: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Material UI", level: 85 },
    ],
  },
  {
    icon: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Socket.io", level: 70 },
    ],
  },
  {
    icon: "design",
    title: "UI / UX Design",
    skills: [
      { name: "Figma", level: 80 },
      { name: "Adobe XD", level: 75 },
      { name: "Responsive Design", level: 90 },
      { name: "Wireframing", level: 85 },
    ],
  },
  {
    icon: "mobile",
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: 75 },
      { name: "Mobile UI Design", level: 80 },
      { name: "Cross-platform Apps", level: 70 },
      { name: "App Deployment", level: 65 },
    ],
  },
  {
    icon: "security",
    title: "Security & Testing",
    skills: [
      { name: "Jest", level: 80 },
      { name: "Cypress", level: 75 },
      { name: "API Testing", level: 80 },
      { name: "Security Best Practices", level: 85 },
    ],
  },
  {
    icon: "devops",
    title: "Performance & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Performance Optimization", level: 80 },
    ],
  },
];
