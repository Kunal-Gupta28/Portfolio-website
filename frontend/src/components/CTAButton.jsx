import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom"

export default function CTA({
  position = "left",
  heading = null,
}) {
  const navigate = useNavigate();

  return (
    <section
      className={`relative max-w-4xl flex flex-col
        ${
          position === "right"
            ? "self-end items-center ml-auto"
            : position === "center"
            ? "self-center items-center text-center"
            : "self-start items-start text-left"
        }
      `}
    >
      <h2 className="text-3xl font-bold mb-6">
        {heading}
      </h2>

      <motion.button
        onClick={() => navigate("/projects")}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="mt-4 rounded-full border border-[#fa5a29]/60 px-10 py-4 text-[#fa5a29]"
      >
        See What I’ve Built <span className="ms-8">↗</span>
      </motion.button>
    </section>
  );
}
