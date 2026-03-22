const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-10">

        {/* Spinner */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full bg-[#fa5a29]/10 blur-3xl will-change-transform" />

          <div className="relative h-14 w-14">
            <span className="absolute inset-0 rounded-full border border-white/10" />
            <span className="absolute inset-0 rounded-full border-t-2 border-[#fa5a29] animate-spin will-change-transform" />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-2 text-center select-none">
          <h1 className="text-xs font-semibold tracking-[0.4em] uppercase text-[#fa5a29]">
            Kunal Gupta
          </h1>
          <p className="text-[11px] tracking-widest text-white/40">
            Engineering clean digital experiences
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
          <span className="absolute inset-y-0 left-0 w-1/3 animate-loader bg-[#fa5a29] will-change-transform" />
        </div>

      </div>
    </div>
  );
};

export default PageLoader;