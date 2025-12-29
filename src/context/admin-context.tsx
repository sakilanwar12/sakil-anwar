import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import { HomeSection } from "@/lib/types/portfolio";
import { useAdmin } from "@/hooks/useAdmin";

interface AdminContextType {
  isOpen: boolean;
  activeTab: string;
  openSidebar: (tab?: string) => void;
  closeSidebar: () => void;
  homeData: HomeSection | null;
  setHomeData: (data: HomeSection) => void;
  fetchHomeData: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const { isAdmin } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("hero");
  const [homeData, setHomeData] = useState<HomeSection | null>(null);

  const openSidebar = (tab: string = "hero") => {
    setActiveTab(tab);
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const fetchHomeData = useCallback(async () => {
    try {
      const res = await fetch("/api/home");
      const json = await res.json();
      if (json.success && json.data) {
        setHomeData(json.data);
      } else {
        // Initialize with default structure if empty
        setHomeData({
          hero: {
            title: "",
            subtitle: "",
            description: "",
            technologies: [],
            ctaText: "Explore My Projects",
            ctaLink: "#work",
          },
          about: {
            title: "",
            description: "",
            highlights: [],
          },
          updatedAt: new Date(),
        } as HomeSection);
      }
    } catch (error) {
      console.error("Failed to fetch home data", error);
    }
  }, []);

  useEffect(() => {
    if (isAdmin && !homeData) {
      fetchHomeData();
    }
  }, [isAdmin, homeData, fetchHomeData]);

  return (
    <AdminContext.Provider
      value={{
        isOpen,
        activeTab,
        openSidebar,
        closeSidebar,
        homeData,
        setHomeData,
        fetchHomeData,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdminContext() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdminContext must be used within an AdminProvider");
  }
  return context;
}
