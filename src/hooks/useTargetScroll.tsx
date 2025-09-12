import { animate } from "motion";
import { useCallback } from "react";

const useTargetScroll = () => {
  const scrollToTarget = useCallback((targetId: string, offset = 0) => {
    const target = document.querySelector(targetId);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY - offset;

    animate(window.scrollY, targetY, {
      duration: 1.2,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  }, []);

  return scrollToTarget;
};

export default useTargetScroll;
