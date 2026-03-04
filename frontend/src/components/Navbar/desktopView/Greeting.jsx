import { useMemo } from "react";

export default function Greeting() {
  const greeting = useMemo(() => {
    const h = new Date().getHours();

    if (h >= 5 && h < 12) return "Good Morning!";
    if (h >= 12 && h < 16) return "Good Afternoon!";
    if (h >= 16 && h < 20) return "Good Evening!";
    return "Good Night!";
  }, []);

  return <span>{greeting}</span>;
}