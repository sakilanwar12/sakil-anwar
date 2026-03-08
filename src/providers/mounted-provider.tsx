"use client";

import useMounted from "@/hooks/use-mounted";
import { AnimatePresence } from "motion/react";
import PreLoader from "@/components/loaders/preloader";

function MountedProvider({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();

  return (
    <AnimatePresence mode="wait">
      {!mounted ? (
        <PreLoader key="preloader" />
      ) : (
        <Fragment key="content">{children}</Fragment>
      )}
    </AnimatePresence>
  );
}

const Fragment = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

export default MountedProvider;
