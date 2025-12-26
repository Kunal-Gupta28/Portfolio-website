import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA({
  position = "left",
  heading = null,
}) {
  const navigate = useNavigate();

  return (
    <section
      className={`
        relative
        max-w-[50vw
        flex
        flex-col
        gap-[clamp(1rem,2vw,4rem)]
        ${
          position === "right"
            ? "self-end items-center ml-auto text-center"
            : position === "center"
            ? "self-center items-center text-center"
            : "self-start items-start text-left"
        }
      `}
    >
      {/* Heading */}
      {heading && (
        <h2
          className="
            font-bold
            text-white
            text-[clamp(1.25rem,2.5vw,4rem)]
          "
        >
          {heading}
        </h2>
      )}

      {/* CTA Button */}
      <motion.button
        onClick={() => navigate("/projects")}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="
          rounded-full
          border
          border-[#fa5a29]/60
          text-[#fa5a29]
          flex
          items-center
          gap-[clamp(1rem,2vw,1.25rem)]
          px-[clamp(1rem,2.5vw,5rem)]
          py-[clamp(0.5rem,1.2vw,1.5rem)]
          text-[clamp(0.7rem,1.2vw,2rem)]
        "
      >
        See What I’ve Built
        <span className="text-[clamp(1rem,3vw,1.25rem)]">↗</span>
      </motion.button>
    </section>
  );
}
