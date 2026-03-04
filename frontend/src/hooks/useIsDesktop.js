import { useEffect, useState } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.innerWidth >= 1024 &&
      window.matchMedia("(pointer: fine)").matches
    );
  });

  useEffect(() => {
    const checkDevice = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setIsDesktop(isLargeScreen && hasFinePointer);
    };

    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isDesktop;
};

export default useIsDesktop;