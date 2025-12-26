import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Footer = () => {

  return (
    <footer className="relative h-[85svh] lg:h-[120svh] w-full overflow-hidden bg-white">
      {/* Background image */}
      <img
        src="/images/Footer.avif"
        alt=""
        className="absolute inset-0 w-full object-cover pointer-events-none"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex h-[80%] lg:h-full w-full flex-col justify-between
                   px-[clamp(0.5rem,3vw,6rem)] lg:px-[clamp(1.5rem,7vw,6rem)]
                   pt-[clamp(2rem,2vh,20rem)] lg:pt-[clamp(6rem,30vh,35rem)]
                   pb-[clamp(0.2rem,2vh,20rem)] lg:pb-[clamp(12rem,25vh,30rem)]"
      >
        {/* Middle content */}
        <div className="grid grid-cols-2 gap-[clamp(1rem,6vw,5rem)] mt-[13vh] text-black">
          {/* Left */}
          <motion.div variants={item} className="space-y-6 lg:space-y-24 text-xs lg:text-sm font-light">
            <div>
              <p>Find me online</p>

              <motion.a
                href="https://www.linkedin.com/in/kunal-gupta-b7bb7a216/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="inline-block cursor-pointer text-[#fa5a29]"
              >
                LinkedIn
              </motion.a>
              <br />
              <motion.a
                href="https://github.com/Kunal-Gupta28"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="inline-block cursor-pointer text-[#fa5a29]"
              >
                GitHub
              </motion.a>
            </div>

            <div>
              <p>Get in touch</p>
              <motion.a
                href="mailto:kunal.gupta.91165@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="inline-block cursor-pointer text-[#fa5a29]"
              >
                Email
              </motion.a>
              <br />
              <motion.a
                href="https://wa.me/919818479466"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="inline-block cursor-pointer text-[#fa5a29]"
              >
                What's app
              </motion.a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={item}
            className="max-w-[clamp(22rem,40vw,32rem)]
                       text-[clamp(1rem,3.4vw,2rem)]
                       leading-[1.2] lg:leading-[1.6] justify-self-end"
          >
            <p className="mb-3 lg:mb-6">
              I enjoy building clean, responsive interfaces and turning ideas
              into real products on the web.
            </p>
            <p className="text-black/70">
              My focus is on writing simple, maintainable code and creating
              experiences that feel smooth, intuitive, and purposeful.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div variants={item}>
          <p className="text-black/60 text-xs lg:text-sm">Have an idea or opportunity?</p>
          <h2 className="text-[clamp(1.4rem,2.5vw,3.5rem)] leading-[1.1] text-black">
            Let’s build something <br /> meaningful together
          </h2>
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap text-[clamp(2.2rem,6vw,9rem)] gap-4 lg:gap-8"
          animate={{ x: ["0%", "-79%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 18,
            ease: "linear",
          }}
        >
            <p className="text-black ">
              kunal.gupta.91165<span className="text-[#fa5a29]">@</span>gmail.com kunal.gupta.91165<span className="text-[#fa5a29]">@</span>gmail.com kunal.gupta.91165<span className="text-[#fa5a29]">@</span>gmail.com 
            </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
