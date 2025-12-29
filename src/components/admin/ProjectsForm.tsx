"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Project } from "@/lib/types/portfolio";
import { Loader2, Plus, Trash, Save } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProjectsForm() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const json = await res.json();
      if (json.success) {
        setProjects(json.data);
      }
    } catch (error) {
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (project: Partial<Project>, index: number) => {
    // Basic validation
    if (!project.title || !project.description) {
      toast.error("Title and description are required");
      return;
    }

    setSavingId(project._id?.toString() || "new-" + index);
    try {
      const res = await fetch("/api/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Project saved");
        router.refresh();
        fetchProjects();
      } else {
        toast.error("Failed to save");
      }
    } catch (error) {
      toast.error("Error saving project");
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Project deleted");
        router.refresh();
        setProjects(projects.filter((p) => p._id?.toString() !== id));
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      toast.error("Error deleting project");
    }
  };

  const addNew = () => {
    setProjects([
      {
        title: "",
        description: "",
        thumbnail: "/placeholder.png",
        technologies: [],
        featured: false,
        order: projects.length + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as unknown as Project,
      ...projects,
    ]);
  };

  if (loading) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Manage Projects</h3>
        <Button size="sm" onClick={addNew}>
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => {
          const isNew = !project._id;
          const id = project._id?.toString() || "new-" + index;
          return (
            <div key={id} className="bg-card space-y-4 rounded-lg border p-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={project.title}
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].title = e.target.value;
                    setProjects(newProjects);
                  }}
                  placeholder="Project Title"
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={project.description}
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].description = e.target.value;
                    setProjects(newProjects);
                  }}
                  placeholder="Short description"
                />
              </div>

              <div className="space-y-2">
                <Label>Technologies (comma separated)</Label>
                <Input
                  value={project.technologies?.join(", ") || ""}
                  onChange={(e) => {
                    const newProjects = [...projects];
                    newProjects[index].technologies = e.target.value
                      .split(",")
                      .map((s) => s.trim());
                    setProjects(newProjects);
                  }}
                  placeholder="React, Node.js, MongoDB"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Input
                    // @ts-ignore - 'category' missing from type but likely needed, using 'any' fallback logic or assuming extended type
                    value={(project as any).category || "Web App"}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      (newProjects[index] as any).category = e.target.value;
                      setProjects(newProjects);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Live URL</Label>
                  <Input
                    value={project.liveUrl || ""}
                    onChange={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].liveUrl = e.target.value;
                      setProjects(newProjects);
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`featured-${id}`}
                  checked={project.featured}
                  onCheckedChange={(checked: boolean | string) => {
                    const newProjects = [...projects];
                    newProjects[index].featured = checked === true;
                    setProjects(newProjects);
                  }}
                />
                <Label htmlFor={`featured-${id}`}>Featured Project</Label>
              </div>

              <div className="mt-2 flex justify-end gap-2 border-t pt-2">
                {!isNew && (
                  <Button
                    color="destructive"
                    size="sm"
                    onClick={() => handleDelete(id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  size="sm"
                  onClick={() => handleSave(project, index)}
                  disabled={savingId === id}
                >
                  {savingId === id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
