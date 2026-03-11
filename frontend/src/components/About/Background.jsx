import React, { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillCategories } from "../../data/aboutdata/skillsData";
import CommonBackground from "./Background/CommonBackground";
import Image from "./Background/Image";

const Background = React.memo(function Background({ value }) {

  const skills = useMemo(() => {
    const category = skillCategories.find((c) => c.valueKey === value);
    return category?.skills ?? [];
  }, [value]);

  return (
    <AnimatePresence mode="wait" initial={false}>
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
          <CommonBackground skills={skills} />
        )}
      </motion.div>
    </AnimatePresence>
  );
});

export default Background;