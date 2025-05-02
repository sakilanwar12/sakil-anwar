"use client";
import { memo } from "react";

import useMounted from "@/hooks/use-mounted";
import PreLoader from "@/components/loaders/preloader";

function MountedProvider({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();
  if (!mounted) {
    return <PreLoader />;
  }
  return children;
}

export default memo(MountedProvider);
