import { useRef, useCallback, useState } from "react";
import { skillCategories, skillIconMap } from "../../data/aboutdata/skillsData";
import useIsDesktop from "../../hooks/useIsDesktop";

export default function Skills({ setValue }) {
  const [showCategory, setShowCategory] = useState(false);
  const timeoutRef = useRef(null);
  const isDesktop = useIsDesktop();

  // hover enter handler
  const handleEnter = useCallback(
    (key) => {
      if (!isDesktop) return;
      setValue((prev) => (prev === key ? prev : key));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setValue("Image");
      }, 6000);
    },
    [setValue, isDesktop],
  );

  // hover leave handler
  const handleLeave = useCallback(() => {
    if (!isDesktop) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setValue("Image");
  }, [setValue, isDesktop]);

  // click handler
  const handleClick = (key) => {
    if (isDesktop) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowCategory(true)
    setValue(key);
    timeoutRef.current = setTimeout(() => {
      setValue("Image");
      setShowCategory(false);
    }, 4000);
  };

  return (
    <section className="h-svh px-6 md:px-20 pb-24 relative">
      <div className="text-right">
        <h2 className={`font-bold text-[#fa5a29] mb-[clamp(1rem,2vw,3rem)] text-[clamp(2rem,3vw,6rem)] leading-none ${showCategory?"hidden":"block"}`}>
          Skills & Technologies
        </h2>

        <p className={`text-xs text-gray-400 block lg:hidden ${showCategory?"hidden":"block"}`}>
          ( tap to reveal technologies )
        </p>

        <p className="text-[clamp(1rem,1vw,1.5rem)] text-gray-400 hidden lg:block">
          ( hover for 2s to reveal technologies )
        </p>

        <div className="mt-[clamp(0.7rem,1vw,1.5rem)] grid gap-3 lg:gap-8">
          {skillCategories.map((category) => {
            const Icon = skillIconMap[category.icon];

            return (
              <div
                key={category.valueKey}
                onMouseEnter={() => handleEnter(category.valueKey)}
                onMouseLeave={handleLeave}
                onClick={() => handleClick(category.valueKey)}
                className={`w-[65vw] md:w-[35vw] lg:w-[30vw] xl:w-[20vw]
                  rounded-2xl border border-white/10 cursor-pointer
                  bg-linear-to-br from-white/5 to-transparent 
                  p-[clamp(0.3rem,1vw,2rem)]
                  transition-all duration-300 ml-auto
                  hover:border-white/20
                  flex items-center justify-end gap-4 ${showCategory?"hidden":"block"}`}
              >
                {/* title */}
                <h3 className="text-[clamp(1rem,1.1vw,2rem)] font-semibold">
                  {category.title}
                </h3>

                {/* icon */}
                <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#fa5a29]/10">
                  <Icon aria-hidden="true" className="text-[#fa5a29]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
