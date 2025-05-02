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
    <div className="fixed top-1/2 -translate-y-1/2 end-4 h-[100px] w-2 bg-default-50 rounded-full overflow-hidden z-50">
      <div
        className="h-full bg-green-500 transition-all duration-200 rounded-full"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
}
