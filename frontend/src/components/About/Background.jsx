import { AnimatePresence, motion } from "framer-motion";
import { skillCategories } from "../../data/skillsData";
import CommonBackground from "./Background/CommonBackground";
import Image from "./Background/Image";

export default function Background({ value }) {
  const category = skillCategories.find((c) => c.title === value);
  const skills = category?.skills || [];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={value}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {value === "Image" ? (
          <Image />
        ) : (
          <CommonBackground
            skills={skills}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}