const ComponentLoader = ({ note = "Loading...", variant = "full" }) => {
  const isFull = variant === "full";

  return (
    <div
      className={`
        absolute inset-0 flex items-center justify-center
        ${isFull ? "bg-black/90 backdrop-blur-sm z-10" : ""}
      `}
    >
      <div className="flex items-center justify-center relative">
        
        {/* Glow */}
        <div
          className={`
            absolute rounded-full bg-[#fa5a29]/20 blur-2xl
            ${isFull ? "h-28 w-28" : "h-8 w-8"}
          `}
        />

        {/* Spinner */}
        <div
          className={`
            relative
            ${isFull ? "h-14 w-14" : "h-12 w-12"}
          `}
        >
          <span className="absolute inset-0 rounded-full border border-white/10" />
          <span className="absolute inset-0 rounded-full border-t-2 border-[#fa5a29] animate-spin" />
        </div>
      </div>

      {/* Only show text in full mode */}
      {isFull && (
        <p className="absolute bottom-10 text-sm text-white/70 tracking-wide animate-pulse">
          {note}
        </p>
      )}
    </div>
  );
};

export default ComponentLoader;