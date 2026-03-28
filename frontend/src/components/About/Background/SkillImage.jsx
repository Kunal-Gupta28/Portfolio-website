import { useState } from "react";
import Loader from "../../ComponentLoader";

export default function SkillImage({ src, alt, name }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      {/* Image Wrapper */}
      <div className="relative flex items-center justify-center mb-2">
        {/* Local Loader */}
        {!loaded && <Loader variant="small" />}

        {/* Image */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`
            h-6 sm:h-8 lg:h-8 object-contain transition-opacity duration-300
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        />
      </div>

      {/* Label */}
      <span
        className={`text-xs sm:text-sm lg:text-base text-center text-white/80 
                      ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {name}
      </span>
    </div>
  );
}
