import React from "react";
import { useBuilderStore } from "@/store/useBuilderStore";
import { Block } from "@/types/builder";
import { X, Type, Palette, Layout } from "lucide-react";

export const PropertiesPanel = () => {
  const { selectedId, selectElement, layout, updateBlock } = useBuilderStore();

  const selectedBlock = React.useMemo(() => {
    if (!selectedId) return null;

    // Search for block in layout
    for (const section of layout) {
      for (const col of section.children) {
        const block = col.children.find((b) => b.id === selectedId);
        if (block) return block;
      }
    }
    return null;
  }, [layout, selectedId]);

  if (!selectedBlock) {
    if (selectedId) {
      // Selection might be a section or column, handling those later or just clearing
      // For now, if not found (or implemented), show nothing or clear
      // functionality for sections to come later
      return (
        <div className="p-4 text-center text-slate-400">
          Element properties coming soon
          <button
            onClick={() => selectElement(null)}
            className="mx-auto mt-2 block text-blue-500 hover:underline"
          >
            Close
          </button>
        </div>
      );
    }
    return null;
  }

  const styles = selectedBlock.styles || {};

  const handleStyleChange = (key: string, value: string) => {
    updateBlock(selectedBlock.id, {
      styles: {
        ...styles,
        [key]: value,
      },
    });
  };

  return (
    <div className="flex h-full w-64 flex-col border-r border-slate-200 bg-slate-50">
      <div className="flex items-center justify-between border-b border-slate-200 bg-white p-4">
        <h2 className="font-semibold text-slate-700">Properties</h2>
        <button
          onClick={() => selectElement(null)}
          className="text-slate-400 hover:text-slate-600"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto p-4">
        {/* Typography Section */}
        {(selectedBlock.type === "text" ||
          selectedBlock.type === "heading" ||
          selectedBlock.type === "button") && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-1 text-sm font-medium text-slate-500">
              <Type size={16} /> Typography
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase">
                Input Text Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={styles.color || "#000000"}
                  onChange={(e) => handleStyleChange("color", e.target.value)}
                  className="h-8 w-8 cursor-pointer rounded border border-slate-300 p-0.5"
                />
                <input
                  type="text"
                  value={styles.color || "#000000"}
                  onChange={(e) => handleStyleChange("color", e.target.value)}
                  className="flex-1 rounded border border-slate-300 px-2 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase">
                Font Size (px)
              </label>
              <input
                type="number"
                value={parseInt(styles.fontSize || "16")}
                onChange={(e) =>
                  handleStyleChange("fontSize", `${e.target.value}px`)
                }
                className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="16"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase">
                Text Align
              </label>
              <div className="flex overflow-hidden rounded border border-slate-300">
                {["left", "center", "right"].map((align) => (
                  <button
                    key={align}
                    onClick={() => handleStyleChange("textAlign", align)}
                    className={`flex-1 py-1 text-xs capitalize hover:bg-slate-100 ${styles.textAlign === align ? "bg-slate-200 font-medium" : ""}`}
                  >
                    {align}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Spacing & Layout */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-1 text-sm font-medium text-slate-500">
            <Layout size={16} /> Layout & Spacing
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500 uppercase">
              Padding (px)
            </label>
            <input
              type="text"
              value={styles.padding || ""}
              onChange={(e) => handleStyleChange("padding", e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 10px or 10px 20px"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500 uppercase">
              Margin (px)
            </label>
            <input
              type="text"
              value={styles.margin || ""}
              onChange={(e) => handleStyleChange("margin", e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 10px or 10px 20px"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-500 uppercase">
              Background Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={styles.backgroundColor || "#ffffff"}
                onChange={(e) =>
                  handleStyleChange("backgroundColor", e.target.value)
                }
                className="h-8 w-8 cursor-pointer rounded border border-slate-300 p-0.5"
              />
              <input
                type="text"
                value={styles.backgroundColor || ""}
                onChange={(e) =>
                  handleStyleChange("backgroundColor", e.target.value)
                }
                className="flex-1 rounded border border-slate-300 px-2 text-sm"
                placeholder="transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
