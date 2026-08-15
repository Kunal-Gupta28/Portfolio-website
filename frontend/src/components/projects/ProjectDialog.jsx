import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDialog({ project, onClose }) {
  if (!project) return null;

  const { title, longDescription, hasApiDependency } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25 }}
          className="
            relative
            z-10
            w-full
            max-w-2xl
            max-h-[85vh]
            overflow-y-auto
            rounded-3xl
            border
            border-white/20
            bg-gradient-to-b
            from-zinc-900/95
            to-black/95
            p-6
            sm:p-8
            text-white
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="close modal"
            className="
              absolute
              right-5
              top-5
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white/70
              transition-colors
              hover:border-white/30
              hover:bg-white/15
              hover:text-white
              cursor-pointer
            "
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="mb-4 pr-10 text-2xl sm:text-3xl font-bold text-white">
            {title}
          </h2>

          {/* API Info Banner */}
          {hasApiDependency && (
            <div className="mb-5 flex items-start gap-3 rounded-xl border border-sky-500/30 bg-sky-500/10 p-3.5 text-sm text-sky-200">
              <span className="text-sky-400 font-bold">ℹ️</span>
              <p className="leading-snug">
                This project uses external APIs. Demo may stop working if free tier expires.
              </p>
            </div>
          )}

          {/* Long Description */}
          <div className="whitespace-pre-line leading-relaxed text-white/80 text-sm sm:text-base">
            {longDescription}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}