"use client";

import { useEffect, useState } from "react";
import { useAdmin } from "@/hooks/useAdmin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Settings, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SkillsForm from "./SkillsForm";
import ProjectsForm from "./ProjectsForm";
import { LogOut } from "lucide-react";

import { useAdminContext } from "@/context/admin-context";

export default function AdminSidebar() {
  const { isAdmin, loading } = useAdmin();
  const {
    isOpen,
    closeSidebar,
    openSidebar,
    activeTab,
    homeData,
    setHomeData,
  } = useAdminContext();
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const data = homeData;

  const handleSave = async () => {
    if (!data) return;
    setIsSaving(true);
    try {
      const res = await fetch("/api/home", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Updated successfully");
        router.refresh();
        closeSidebar();
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error saving data");
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      toast.success("Logged out successfully");
      window.location.reload(); // Hard reload to clear client state
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  if (loading || !isAdmin) return null;

  return (
    <>
      <Button
        color="default"
        size="icon"
        className={cn(
          "fixed right-4 bottom-4 z-[9999] h-12 w-12 rounded-full shadow-2xl transition-all duration-300 hover:scale-105",
          isOpen && "scale-0 rotate-90",
        )}
        onClick={() => openSidebar()}
      >
        <Settings className="h-6 w-6" />
      </Button>

      {/* Overlay to close on click outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => closeSidebar()}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={cn(
          "fixed top-0 left-0 z-[10000] h-screen w-full border-r border-[#333] bg-[#1e1e1e] text-white shadow-2xl transition-transform duration-300 ease-in-out sm:w-[500px]",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between border-b border-[#333] pb-6">
            <div className="flex items-center gap-2">
              <Settings className="text-primary h-5 w-5" />
              <h2 className="text-xl font-bold tracking-tight">
                Portfolio Editor
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Button
                color="ghost"
                size="icon"
                onClick={handleLogout}
                title="Logout"
                className="text-gray-400 hover:bg-red-500/10 hover:text-red-500"
              >
                <LogOut className="h-5 w-5" />
              </Button>
              <Button
                color="ghost"
                size="icon"
                onClick={() => closeSidebar()}
                className="hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {data ? (
              <Tabs
                value={activeTab}
                onValueChange={(val) => openSidebar(val)}
                className="w-full"
              >
                <TabsList className="mb-4">
                  <TabsTrigger value="hero">Hero</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

                <TabsContent value="hero" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={data.hero?.title || ""}
                      onChange={(e) =>
                        setHomeData({
                          ...data,
                          hero: { ...data.hero!, title: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Subtitle</Label>
                    <Input
                      value={data.hero?.subtitle || ""}
                      onChange={(e) =>
                        setHomeData({
                          ...data,
                          hero: { ...data.hero!, subtitle: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={data.hero?.description || ""}
                      onChange={(e) =>
                        setHomeData({
                          ...data,
                          hero: { ...data.hero!, description: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Technologies (comma separated)</Label>
                    <Input
                      value={data.hero?.technologies?.join(", ") || ""}
                      onChange={(e) =>
                        setHomeData({
                          ...data,
                          hero: {
                            ...data.hero!,
                            technologies: e.target.value
                              .split(",")
                              .map((s) => s.trim()),
                          },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>CTA Text</Label>
                    <Input
                      value={data.hero?.ctaText || ""}
                      onChange={(e) =>
                        setHomeData({
                          ...data,
                          hero: { ...data.hero!, ctaText: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>CTA Link</Label>
                    <Input
                      value={data.hero?.ctaLink || ""}
                      onChange={(e) =>
                        setHomeData({
                          ...data,
                          hero: { ...data.hero!, ctaLink: e.target.value },
                        })
                      }
                    />
                  </div>

                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="mt-4 w-full"
                  >
                    {isSaving && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Save Changes
                  </Button>
                </TabsContent>

                <TabsContent value="skills">
                  <SkillsForm />
                </TabsContent>

                <TabsContent value="projects">
                  <ProjectsForm />
                </TabsContent>
              </Tabs>
            ) : (
              <div className="flex justify-center p-4">
                <Loader2 className="animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
