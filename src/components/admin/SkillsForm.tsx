"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Skill } from "@/lib/types/portfolio";
import { Loader2, Plus, Trash, Save } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SkillsForm() {
  const router = useRouter();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await fetch("/api/skills");
      const json = await res.json();
      if (json.success) {
        setSkills(json.data);
      }
    } catch (error) {
      toast.error("Failed to load skills");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (skill: Partial<Skill>, index: number) => {
    setSavingId(skill._id?.toString() || "new-" + index);
    try {
      const res = await fetch("/api/skills", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(skill),
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Skill saved");
        router.refresh(); // Refresh server components
        fetchSkills(); // Reload local list
      } else {
        toast.error("Failed to save");
      }
    } catch (error) {
      toast.error("Error saving skill");
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this skill?")) return;
    try {
      const res = await fetch(`/api/skills?id=${id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Skill deleted");
        router.refresh();
        setSkills(skills.filter((s) => s._id?.toString() !== id));
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      toast.error("Error deleting skill");
    }
  };

  const addNew = () => {
    setSkills([
      ...skills,
      {
        name: "",
        category: "Frontend",
        level: 50,
        order: skills.length + 1,
      } as Skill,
    ]);
  };

  if (loading) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Manage Skills</h3>
        <Button size="sm" onClick={addNew}>
          <Plus className="mr-2 h-4 w-4" /> Add Skill
        </Button>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => {
          const isNew = !skill._id;
          const id = skill._id?.toString() || "new-" + index;
          return (
            <div key={id} className="bg-card space-y-3 rounded-lg border p-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Name</Label>
                  <Input
                    value={skill.name}
                    onChange={(e) => {
                      const newSkills = [...skills];
                      newSkills[index].name = e.target.value;
                      setSkills(newSkills);
                    }}
                    placeholder="e.g. React"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Category</Label>
                  <Input
                    value={skill.category}
                    onChange={(e) => {
                      const newSkills = [...skills];
                      newSkills[index].category = e.target.value;
                      setSkills(newSkills);
                    }}
                    placeholder="e.g. Frontend"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Level (1-100)</Label>
                  <Input
                    type="number"
                    value={skill.level}
                    onChange={(e) => {
                      const newSkills = [...skills];
                      newSkills[index].level = parseInt(e.target.value);
                      setSkills(newSkills);
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Order</Label>
                  <Input
                    type="number"
                    value={skill.order}
                    onChange={(e) => {
                      const newSkills = [...skills];
                      newSkills[index].order = parseInt(e.target.value);
                      setSkills(newSkills);
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
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
                  onClick={() => handleSave(skill, index)}
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
