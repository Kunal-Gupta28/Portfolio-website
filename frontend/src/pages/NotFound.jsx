import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page Not Found");

  return (
    <main className="min-h-dvh bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl text-center flex flex-col items-center justify-center">
        {/* 404 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[7rem] md:text-[11rem] font-black text-[#fa5a29] leading-none mb-2 select-none">
            404
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-3">
            Page Not Found
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-white/65 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            The page you’re looking for doesn’t exist or may have been moved.
            Let’s get you back on track.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
