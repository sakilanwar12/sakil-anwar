"use client";

import { createContext, useContext, useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const ScrollContext = createContext<LocomotiveScroll | null>(null);

export const useLocomotiveScroll = () => useContext(ScrollContext);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    const container = document.querySelector(
      "[data-scroll-container]"
    ) as HTMLElement;

    if (!container) {
      console.error("No [data-scroll-container] found!");
      return;
    }

    const locoScroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    setScroll(locoScroll);

    return () => {
      locoScroll.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>
  );
}
