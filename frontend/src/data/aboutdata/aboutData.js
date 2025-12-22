import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import PsychologyIcon from "@mui/icons-material/Psychology";

export const heroData = {
  lines: [
    "Do the work",
    "Learn from failure",
    "Repeat with intention",
  ],
  highlightIndex: 1,
};

export const storyData = {
  heading: "About Me",
  paragraphs: [
    "I’m Kunal Gupta, a Full-Stack Software Engineer focused on building scalable, real-time web applications.",
    "My work spans frontend engineering with React, backend APIs with Node.js and Express, real-time systems using Socket.io, and data modeling with MongoDB.",
    "Beyond core web development, I’m actively exploring Docker, Kubernetes, mobile app development, machine learning, and cybersecurity to broaden my systems understanding.",
  ],
};

export const skillsMeta = {
  heading: "Skills & Technologies",
  helperText: "( Hover for 2s to reveal technologies )",
};

export const valuesData = {
  heading: "How I Work & What I’m Exploring",
  coreFocus: [
    "Full-Stack Web Development (MERN)",
    "Real-time systems & APIs",
    "Clean, maintainable architecture",
  ],
  exploring: [
    "Docker & containerization",
    "Kubernetes fundamentals",
    "Mobile app development",
    "Machine learning basics",
    "Cybersecurity & ethical hacking",
  ],
};

export const interestsData = {
  heading: "Interests",
  items: [
    {
      title: "Full-Stack Development",
      description:
        "Building scalable MERN applications with clean architecture.",
      icon: CodeIcon,
    },
    {
      title: "Mobile & AI Development",
      description:
        "Exploring cross-platform mobile apps and practical AI solutions.",
      icon: PsychologyIcon,
    },
    {
      title: "Cybersecurity & Problem Solving",
      description:
        "Security-first thinking and solving complex technical challenges.",
      icon: BrushIcon,
    },
  ],
};
