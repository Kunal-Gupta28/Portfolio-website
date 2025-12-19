import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import PsychologyIcon from "@mui/icons-material/Psychology";

export const iconMap = {
  code: CodeIcon,
  brush: BrushIcon,
  psychology: PsychologyIcon,
};

export const aboutContent = {
  heading: "About Me",
  paragraphs: [
    "I’m Kunal Gupta, a final-year DTU student and Full-Stack Software Engineer focused on building scalable, real-time web applications.",
    "My work spans frontend engineering with React, backend APIs with Node.js and Express, real-time systems using Socket.io, and data modeling with MongoDB.",
    "Beyond core web development, I’m actively exploring Docker, Kubernetes, mobile app development, machine learning, and cybersecurity to broaden my systems understanding."
  ],
};

export const interests = [
  {
    title: "Full-Stack Development",
    description:
      "Passionate about building scalable MERN stack applications with clean architecture.",
    icon: "code",
  },
  {
    title: "Mobile & AI Development",
    description:
      "Exploring cross-platform mobile apps and practical AI solutions.",
    icon: "psychology",
  },
  {
    title: "Cybersecurity & Problem Solving",
    description:
      "Interested in security best practices and solving complex technical challenges.",
    icon: "brush",
  },
];
