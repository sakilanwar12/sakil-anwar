import React from "react";
import { useBuilderStore } from "@/store/useBuilderStore";
import { Save, Eye, Edit2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

export const Toolbar = () => {
  const { mode, setMode, layout } = useBuilderStore();
  const [saving, setSaving] = React.useState(false);
  const params = useParams();
  const pageId = params?.id as string;

  const handleSave = async () => {
    setSaving(true);
    try {
      const method = pageId ? "PUT" : "POST";
      const url = pageId ? `/api/pages/${pageId}` : "/api/pages";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "My Page", // In a real app this would be editable
          slug: pageId ? undefined : `page-${Date.now()}`,
          content: layout,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Layout saved!");
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error("Failed to save layout");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      <div className="flex items-center px-2">
        <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-xl font-bold text-transparent">
          Page Builder
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex rounded-lg border border-slate-200 bg-slate-100 p-1">
          <button
            onClick={() => setMode("edit")}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all",
              mode === "edit"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700",
            )}
          >
            <Edit2 size={16} /> Edit
          </button>
          <button
            onClick={() => setMode("preview")}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-all",
              mode === "preview"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700",
            )}
          >
            <Eye size={16} /> Preview
          </button>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-blue-700 active:translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Save size={18} />
          )}
          Save
        </button>
      </div>
    </div>
  );
};
