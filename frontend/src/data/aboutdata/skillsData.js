import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";

export const skillIconMap = {
  frontend: CodeIcon,
  backend: StorageIcon,
  devops: SpeedIcon,
  mobile: DevicesIcon,
  fundamentals: SecurityIcon,
};

export const skillCategories = [
  {
    valueKey: "frontend",
    icon: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML", image: "/skills/html.svg" },
      { name: "CSS", image: "/skills/css.png" },
      { name: "JavaScript", image: "/skills/javascript.svg" },
      { name: "Bootstrap", image: "/skills/bootstrap.svg" },
      { name: "Tailwind", image: "/skills/tailwind.svg" },
      { name: "React", image: "/skills/react.svg" },
      { name: "Material UI", image: "/skills/material-ui.svg" },
      { name: "Framer Motion", image: "/skills/framer-motion.svg" },
      { name: "GSAP", image: "/skills/gsap.svg" },
      { name: "Locomotive Scroll", image: "/skills/locomotive.avif" },
      { name: "Redux Toolkit", image: "/skills/redux.svg" },
      { name: "Zustand", image: "/skills/zustand.png" },
      { name: "Next.js", image: "/skills/Next.png" },
      { name: "shadcn/ui", image: "/skills/shadcn.png" },
    ],
  },

  {
    valueKey: "backend",
    icon: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", image: "/skills/node.svg" },
      { name: "Express", image: "/skills/express.webp" },
      { name: "MongoDB", image: "/skills/mongodb.svg" },
      { name: "MySQL", image: "/skills/mysql.svg" },
      { name: "Redis", image: "/skills/redis.svg" },
      { name: "Socket.io", image: "/skills/socketio.png" },
      { name: "REST APIs", image: "/skills/api.svg" },
    ],
  },

  {
    valueKey: "devops",
    icon: "devops",
    title: "DevOps & Systems",
    skills: [
      { name: "Docker", image: "/skills/docker.svg" },
      { name: "Git", image: "/skills/git.svg" },
      { name: "Linux", image: "/skills/linux.svg" },
      { name: "CI/CD", image: "/skills/cicd.svg" },
    ],
  },

  {
    valueKey: "mobile",
    icon: "mobile",
    title: "Future Focus",
    skills: [
      { name: "App Deployment", image: "/skills/deployment.png" },
      { name: "Machine Learning", image: "/skills/ml.png" },
    ],
  },

  {
    valueKey: "fundamentals",
    icon: "fundamentals",
    title: "CS Fundamentals",
    skills: [
      { name: "OOPS", image: "/skills/oops.svg" },
      { name: "Operating Systems", image: "/skills/os.svg" },
      { name: "DBMS", image: "/skills/dbms.svg" },
      { name: "Computer Networks", image: "/skills/networking.svg" },
      { name: "Compiler Design", image: "/skills/compiler.svg" },
    ],
  },
];
