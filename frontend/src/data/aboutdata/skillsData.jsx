const CodeIcon = ({ className = "", ...props }) => (
  <svg className={`w-5 h-5 stroke-current fill-none ${className}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const StorageIcon = ({ className = "", ...props }) => (
  <svg className={`w-5 h-5 stroke-current fill-none ${className}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const DevicesIcon = ({ className = "", ...props }) => (
  <svg className={`w-5 h-5 stroke-current fill-none ${className}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="12" rx="2" ry="2"></rect>
    <line x1="12" y1="16" x2="12" y2="20"></line>
    <line x1="8" y1="20" x2="16" y2="20"></line>
  </svg>
);

const SecurityIcon = ({ className = "", ...props }) => (
  <svg className={`w-5 h-5 stroke-current fill-none ${className}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const SpeedIcon = ({ className = "", ...props }) => (
  <svg className={`w-5 h-5 stroke-current fill-none ${className}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="M4.93 4.93l1.41 1.41"></path>
    <path d="M17.66 17.66l1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="M6.34 17.66l-1.41 1.41"></path>
    <path d="M19.07 4.93l-1.41 1.41"></path>
  </svg>
);

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
