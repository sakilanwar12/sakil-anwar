import { create } from "zustand";
import { Section, Column, Block, PageLayout } from "@/types/builder";
import { arrayMove } from "@dnd-kit/sortable";

interface BuilderState {
  layout: PageLayout;
  selectedId: string | null;
  mode: "edit" | "preview";

  // Actions
  setLayout: (layout: PageLayout) => void;
  selectElement: (id: string | null) => void;
  setMode: (mode: "edit" | "preview") => void;

  addSection: () => void;
  updateSection: (id: string, updates: Partial<Section>) => void;
  removeSection: (id: string) => void;
  moveSection: (oldIndex: number, newIndex: number) => void;

  addColumn: (sectionId: string) => void;
  // Simplified for now, usually drag & drop handles complex moves

  addBlock: (parentId: string, type: Block["type"], index?: number) => void;
  updateBlock: (id: string, updates: Partial<Block>) => void;
  removeBlock: (id: string) => void;
  moveBlock: (blockId: string, overId: string) => void;
}

export const useBuilderStore = create<BuilderState>((set) => ({
  layout: [],
  selectedId: null,
  mode: "edit",

  setLayout: (layout) => set({ layout }),
  selectElement: (id) => set({ selectedId: id }),
  setMode: (mode) => set({ mode }),

  addSection: () =>
    set((state) => ({
      layout: [
        ...state.layout,
        {
          id: crypto.randomUUID(),
          type: "section",
          children: [{ id: crypto.randomUUID(), type: "column", children: [] }],
        },
      ],
    })),

  updateSection: (id, updates) =>
    set((state) => ({
      layout: state.layout.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    })),

  removeSection: (id) =>
    set((state) => ({
      layout: state.layout.filter((s) => s.id !== id),
    })),

  moveSection: (oldIndex, newIndex) =>
    set((state) => ({
      layout: arrayMove(state.layout, oldIndex, newIndex),
    })),

  addColumn: (sectionId) =>
    set((state) => ({
      layout: state.layout.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              children: [
                ...s.children,
                { id: crypto.randomUUID(), type: "column", children: [] },
              ],
            }
          : s,
      ),
    })),

  addBlock: (columnId, type, index) =>
    set((state) => {
      const newBlock: Block = {
        id: crypto.randomUUID(),
        type,
        content: getDefaultContent(type),
      };

      return {
        layout: state.layout.map((section) => ({
          ...section,
          children: section.children.map((col) => {
            if (col.id === columnId) {
              const newChildren = [...col.children];
              if (typeof index === "number") {
                newChildren.splice(index, 0, newBlock);
              } else {
                newChildren.push(newBlock);
              }
              return { ...col, children: newChildren };
            }
            return col;
          }),
        })),
      };
    }),

  updateBlock: (id, updates) =>
    set((state) => ({
      layout: state.layout.map((section) => ({
        ...section,
        children: section.children.map((col) => ({
          ...col,
          children: col.children.map((block) =>
            block.id === id ? { ...block, ...updates } : block,
          ),
        })),
      })),
    })),

  removeBlock: (id) =>
    set((state) => ({
      layout: state.layout.map((section) => ({
        ...section,
        children: section.children.map((col) => ({
          ...col,
          children: col.children.filter((block) => block.id !== id),
        })),
      })),
    })),

  moveBlock: (blockId, overId) =>
    set((state) => {
      // Find source and destination
      let sourceSectionIndex = -1;
      let sourceColIndex = -1;
      let sourceBlockIndex = -1;
      let sourceBlock: Block | null = null;

      let destSectionIndex = -1;
      let destColIndex = -1;
      let destBlockIndex = -1;

      // Locate source
      state.layout.forEach((section, sIdx) => {
        section.children.forEach((col, cIdx) => {
          const bIdx = col.children.findIndex((b) => b.id === blockId);
          if (bIdx !== -1) {
            sourceSectionIndex = sIdx;
            sourceColIndex = cIdx;
            sourceBlockIndex = bIdx;
            sourceBlock = col.children[bIdx];
          }
        });
      });

      if (!sourceBlock) return {};

      // Locate destination
      // We might be dropping over another BLOCK or into a COLUMN
      state.layout.forEach((section, sIdx) => {
        section.children.forEach((col, cIdx) => {
          // Check if dropped over a block
          const bIdx = col.children.findIndex((b) => b.id === overId);
          if (bIdx !== -1) {
            destSectionIndex = sIdx;
            destColIndex = cIdx;
            destBlockIndex = bIdx;
          }
        });
      });

      // If we didn't find a block match, it might be the column itself? (Not typical for SortableContext items)
      // dnd-kit usually passes item ID. If overId matches a block ID, we sort.

      // If same column
      if (
        sourceSectionIndex === destSectionIndex &&
        sourceColIndex === destColIndex &&
        destBlockIndex !== -1
      ) {
        const newLayout = [...state.layout];
        const section = newLayout[sourceSectionIndex];
        const col = section.children[sourceColIndex];
        col.children = arrayMove(
          col.children,
          sourceBlockIndex,
          destBlockIndex,
        );
        return { layout: newLayout };
      }

      // Cross column sorting is more complex, dnd-kit usually handles it via `onDragOver` strategies
      // but for simplicity let's support same-column reordering first or simple moves.
      // If moving to different column: remove from source, add to dest (at index)

      if (destSectionIndex !== -1 && destColIndex !== -1) {
        const newLayout = [...state.layout];
        const sourceCol =
          newLayout[sourceSectionIndex].children[sourceColIndex];
        const destCol = newLayout[destSectionIndex].children[destColIndex];

        sourceCol.children.splice(sourceBlockIndex, 1);
        destCol.children.splice(destBlockIndex, 0, sourceBlock);

        return { layout: newLayout };
      }

      return {};
    }),
}));

function getDefaultContent(type: Block["type"]) {
  switch (type) {
    case "text":
      return { text: "Lorem ipsum dolor sit amet" };
    case "heading":
      return { text: "Heading", level: 2 };
    case "button":
      return { text: "Click Me", href: "#" };
    case "image":
      return { src: "https://via.placeholder.com/300", alt: "Placeholder" };
    default:
      return {};
  }
}
