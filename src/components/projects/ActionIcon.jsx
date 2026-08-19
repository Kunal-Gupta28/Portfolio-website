import { motion } from "framer-motion";

export default function ActionIcon({
  title,
  icon,
  href,
  onClick,
  accent = false,
}) {
  const Component = href ? motion.a : motion.button;
  const props = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { onClick, type: "button" };

  return (
    <Component
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      title={title}
      aria-label={title}
      className={`
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        p-2
        transition-colors
        duration-200
        cursor-pointer
        ${
          accent
            ? "text-[#fa5a29] border-[#fa5a29]/30 bg-[#fa5a29]/10 hover:border-[#fa5a29] hover:bg-[#fa5a29]/20"
            : "text-white/85 hover:border-white/30 hover:bg-white/10 hover:text-[#fa5a29]"
        }
      `}
      {...props}
    >
      {icon}
    </Component>
  );
}