const CodeIcon = ({ className = "", ...props }) => (
  <svg className={`w-5 h-5 stroke-current fill-none ${className}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const BrainIcon = ({ className = "", ...props }) => (
  <svg className={`w-5 h-5 stroke-current fill-none ${className}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z"></path>
  </svg>
);

const ShieldIcon = ({ className = "", ...props }) => (
  <svg className={`w-5 h-5 stroke-current fill-none ${className}`} viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

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
      icon: BrainIcon,
    },
    {
      title: "Cybersecurity & Problem Solving",
      description:
        "Security-first thinking and solving complex technical challenges.",
      icon: ShieldIcon,
    },
  ],
};
