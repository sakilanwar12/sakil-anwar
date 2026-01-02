"use client";

import useMounted from "@/hooks/use-mounted";
import PreLoader from "@/components/loaders/preloader";
import { AdminProvider } from "@/context/admin-context";
import { QueryProvider } from "./query-provider";

function MountedProvider({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();
  if (!mounted) {
    return <PreLoader />;
  }
  return (
    <QueryProvider>
      <AdminProvider>{children}</AdminProvider>
    </QueryProvider>
  );
}

export default MountedProvider;
