import { memo } from "react";
import { motion } from "framer-motion";
import ActionIcon from "./ActionIcon";
import TechPills from "./TechPills";

// Native SVG Icons
const GithubSvg = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalLinkSvg = () => (
  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const InfoSvg = () => (
  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const VideoSvg = () => (
  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="7" y1="2" x2="7" y2="22"></line>
    <line x1="17" y1="2" x2="17" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="2" y1="7" x2="7" y2="7"></line>
    <line x1="2" y1="17" x2="7" y2="17"></line>
    <line x1="17" y1="17" x2="22" y2="17"></line>
    <line x1="17" y1="7" x2="22" y2="7"></line>
  </svg>
);

const ProjectCard = ({ project, onView }) => {
  const { title, description, technologies, github, live, videoDemo } = project;

  const actions = [
    github && { title: "GitHub", icon: <GithubSvg />, href: github },
    live && { title: "Live Demo", icon: <ExternalLinkSvg />, href: live },
    { title: "Details", icon: <InfoSvg />, onClick: () => onView(project), accent: true },
    videoDemo && {
      title: "Video Demo",
      icon: <VideoSvg />,
      href: videoDemo,
    },
  ].filter(Boolean);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        flex
        h-full
        min-h-[340px]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/15
        bg-gradient-to-b
        from-white/10
        to-white/5
        p-6
        backdrop-blur-md
        transition-all
        hover:border-white/30
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]
      "
    >
      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_circle_at_top_left,rgba(250,90,41,0.12),transparent_60%)]" />

      {/* Title */}
      <h3 className="text-center text-xl font-bold text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="my-2 text-center text-sm leading-relaxed text-white/70">
        {description}
      </p>

      {/* Tech stack */}
      <div className="mb-4">
        <TechPills technologies={technologies} />
      </div>

      {/* Divider */}
      <div className="mb-4 h-px w-full bg-white/10" />

      {/* Actions */}
      <div className="mt-auto flex justify-center gap-3">
        {actions.map((action, i) => (
          <ActionIcon key={i} {...action} />
        ))}
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);