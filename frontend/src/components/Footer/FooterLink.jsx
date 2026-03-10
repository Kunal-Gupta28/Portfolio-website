import { motion } from "framer-motion";

const FooterLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 6 }}
      className="inline-block cursor-pointer text-[#fa5a29]"
    >
      {children}
    </motion.a>
  );
};

export default FooterLink;