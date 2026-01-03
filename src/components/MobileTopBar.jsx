import { useEffect, useState } from "react";

export default function MobileTopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 px-4 py-2 text-xs font-mono text-gray-400">
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
