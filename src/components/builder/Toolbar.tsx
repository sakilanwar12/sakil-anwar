import { Eye, LayoutTemplate, Save, ArrowLeft } from "lucide-react";
import { useBuilderStore } from "@/store/useBuilderStore";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export const Toolbar = () => {
  const { mode, setMode, layout } = useBuilderStore();
  const [saving, setSaving] = useState(false);
  const params = useParams();
  const pageId = params?.id as string;

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/pages/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: layout,
          status: status,
        }),
      });

      const data = await res.json();
      if (data.success) {
        if (status === "published") toast.success("Page published!");
        else toast.success("Draft saved");
      } else {
        toast.error("Failed to save");
      }
    } catch (error) {
      toast.error("Error saving page");
    } finally {
      setSaving(false);
      setPublishing(false);
    }
  };

  return (
    <div className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/pages"
          className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800"
        >
          <ArrowLeft size={16} /> Dashboard
        </Link>
        <div className="h-6 w-px bg-slate-200" />
        <h1 className="text-sm font-semibold text-slate-900">Page Builder</h1>
      </div>

      <div className="flex items-center gap-2">
        <div className="mr-2 flex rounded-lg bg-slate-100 p-1">
          <button
            onClick={() => setMode("edit")}
            className={cn(
              "flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium transition-colors",
              mode === "edit"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700",
            )}
          >
            <LayoutTemplate size={16} />
            Edit
          </button>
          <button
            onClick={() => setMode("preview")}
            className={cn(
              "flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium transition-colors",
              mode === "preview"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700",
            )}
          >
            <Eye size={16} />
            Preview
          </button>
        </div>

        <button
          onClick={() => handleSave("draft")}
          disabled={saving || publishing}
          className="flex items-center gap-2 rounded px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50"
        >
          <Save size={16} />
          {saving ? "Saving..." : "Save Draft"}
        </button>

        <button
          onClick={() => handleSave("published")}
          disabled={saving || publishing}
          className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {publishing ? "Publishing..." : "Publish"}
        </button>
      </div>
    </div>
  );
};
