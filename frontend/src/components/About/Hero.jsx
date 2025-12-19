export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative z-10 flex justify-end text-right h-full items-center px-6 md:px-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Full-Stack <br />
            <span className="text-[#fa5a29]">Software Engineer</span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            Building scalable, real-time systems across frontend, backend, and
            beyond the browser.
          </p>
        </div>
      </div>
    </section>
  );
}
