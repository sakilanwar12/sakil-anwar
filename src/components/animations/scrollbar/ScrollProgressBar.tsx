"use client";

import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "./ScrollContext"; // import context

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scroll = useLocomotiveScroll();

  useEffect(() => {
    if (!scroll) return;

    scroll.on("scroll", (obj) => {
      const progress = (obj.scroll.y / obj.limit.y) * 100;
      setScrollProgress(progress);
    });

    return () => {
     scroll.destroy();
    };
  }, [scroll]);

  return (
    <div className="fixed top-4 left-4 w-[200px] h-2 bg-gray-300 rounded-full overflow-hidden z-50">
      <div
        className="h-full bg-green-500 transition-all duration-200 rounded-full"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
