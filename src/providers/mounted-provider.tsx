"use client";

import useMounted from "@/hooks/use-mounted";
import PreLoader from "@/components/loaders/preloader";
import { AdminProvider } from "@/context/admin-context";

function MountedProvider({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();
  if (!mounted) {
    return <PreLoader />;
  }
  return <AdminProvider>{children}</AdminProvider>;
}

export default MountedProvider;
