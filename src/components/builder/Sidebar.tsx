import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { Type, Heading, Image, MousePointerClick } from "lucide-react";
import { useBuilderStore } from "@/store/useBuilderStore";
import { PropertiesPanel } from "./PropertiesPanel";

export const Sidebar = () => {
  const { selectedId } = useBuilderStore();

  if (selectedId) {
    return <PropertiesPanel />;
  }

  return (
    <div className="sticky top-0 flex h-screen w-64 flex-col gap-4 overflow-y-auto border-r border-slate-700 bg-slate-900 p-4">
      <h2 className="mb-4 text-lg font-semibold text-white">Blocks</h2>
      <div className="flex flex-col gap-3">
        <SidebarItem type="text" icon={<Type size={20} />} label="Text" />
        <SidebarItem
          type="heading"
          icon={<Heading size={20} />}
          label="Heading"
        />
        <SidebarItem type="image" icon={<Image size={20} />} label="Image" />
        <SidebarItem
          type="button"
          icon={<MousePointerClick size={20} />}
          label="Button"
        />
      </div>

      <div className="mt-8 border-t border-slate-700 pt-4">
        <h3 className="mb-2 text-sm font-medium text-slate-400">Structure</h3>
        <SidebarItem
          type="section"
          icon={
            <div className="h-5 w-5 rounded border border-dashed border-slate-400" />
          }
          label="Section"
        />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  type: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ type, icon, label }) => {
  // We use dnd-kit's useDraggable here
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `sidebar-${type}`,
    data: {
      type: type,
      fromSidebar: true,
    },
  });

  // We rely on DragOverlay for the visual dragging
  // So we do not apply transform to this element to keep it in place
  const style = undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={cn(
        "flex cursor-grab items-center gap-3 rounded border border-slate-700 bg-slate-800 p-3 text-slate-200 transition-colors hover:bg-slate-700",
        "active:cursor-grabbing active:ring-2 active:ring-blue-500",
      )}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};
