import { useEffect, useState } from "react";

export default function MobileTopBar() {
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  // Update time
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        px-4 py-3 text-xs font-mono text-gray-300
        transition-all duration-300
        ${scrolled
          ? "backdrop-blur-md bg-black/60 border-b border-gray-800 shadow-sm"
          : "bg-transparent"
        }
      `}
    >
      IST{" "}
      {time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      })}
    </div>
  );
}
