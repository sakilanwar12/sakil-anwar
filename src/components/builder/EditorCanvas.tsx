import React from "react";
import { useBuilderStore } from "@/store/useBuilderStore";
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  DragStartEvent,
  DragEndEvent,
  DragOverEvent,
  defaultDropAnimationSideEffects,
  DropAnimation,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import { Section, Column, Block } from "@/types/builder";
import { TextBlock, HeadingBlock, ImageBlock, ButtonBlock } from "./blocks";
import { Trash2, GripVertical } from "lucide-react";

export const EditorCanvas = () => {
  const {
    layout,
    moveSection,
    addBlock,
    removeBlock,
    removeSection,
    updateBlock,
    updateSection,
    addSection,
  } = useBuilderStore();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [activeItem, setActiveItem] = React.useState<any>(null);

  const onDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    setActiveItem(event.active.data.current);
  };

  const onDragover = (event: DragOverEvent) => {
    // Handle cross-container dragging (blocks between columns)
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    setActiveItem(null);

    if (!over) return;

    // Handle Sidebar Drop
    if (active.data.current?.fromSidebar) {
      // Logic for dropping sidebar item
      const type = active.data.current.type;

      // If dropped over a column or a block inside a column
      let targetColumnId = null;
      let index = undefined;

      if (over.data.current?.type === "column") {
        targetColumnId = over.id;
      } else if (over.data.current?.sortable?.containerId) {
        // Dropped over a block
        targetColumnId = over.data.current.sortable.containerId;
        index = over.data.current.sortable.index;
      }

      if (targetColumnId) {
        addBlock(targetColumnId as string, type, index);
      } else if (
        over.id === "canvas-droppable" ||
        over.data.current?.type === "section"
      ) {
        // Maybe add a new section with that block? or just ignore
      }
      return;
    }

    // Handle Reordering
    if (active.id !== over.id) {
      // Check if section
      const activeType = active.data.current?.type;
      if (activeType === "section") {
        const oldIndex = layout.findIndex((s) => s.id === active.id);
        const newIndex = layout.findIndex((s) => s.id === over.id);
        moveSection(oldIndex, newIndex);
      }
      // Blocks reordering handled by store logic usually
    }
  };

  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <div className="min-h-screen flex-1 overflow-y-auto bg-slate-100 p-8">
      <div className="mx-auto min-h-[500px] max-w-4xl rounded-lg bg-white p-8 pb-32 shadow-sm">
        {layout.length === 0 && (
          <div className="rounded-lg border-2 border-dashed border-slate-300 py-20 text-center text-slate-400">
            Drag blocks here or add a section
            <br />
            <button
              onClick={addSection}
              className="mt-4 rounded bg-blue-100 px-4 py-2 text-blue-600"
            >
              Add First Section
            </button>
          </div>
        )}

        <SortableContext
          items={layout.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {layout.map((section) => (
            <SortableSection key={section.id} section={section} />
          ))}
        </SortableContext>

        {layout.length > 0 && (
          <button
            onClick={addSection}
            className="mt-4 w-full rounded border-2 border-dashed border-slate-300 py-3 text-slate-500 transition-colors hover:bg-slate-50"
          >
            + Add Section
          </button>
        )}
      </div>
    </div>
  );
};

// Sortable Components

const SortableSection = ({ section }: { section: Section }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: section.id,
    data: { type: "section", section },
  });

  const { removeSection, updateSection, addColumn } = useBuilderStore();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "group relative mb-4 rounded border border-transparent p-2 transition-all hover:border-blue-300",
        isDragging && "z-50 border-blue-500 bg-white shadow-xl",
      )}
    >
      {/* Section Controls */}
      <div className="absolute -top-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-0.5 opacity-0 shadow transition-opacity group-hover:opacity-100">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab rounded p-1 text-slate-500 hover:bg-slate-100 active:cursor-grabbing"
        >
          <GripVertical size={14} />
        </button>
        <div className="h-3 w-px bg-slate-200" />
        <button
          onClick={() => removeSection(section.id)}
          className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"
        >
          <Trash2 size={14} />
        </button>
      </div>

      <div className="-mx-2 flex flex-wrap">
        {section.children.map((column) => (
          <SortableColumn key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
};

const SortableColumn = ({ column }: { column: Column }) => {
  // Columns are not sortable for now, but they are droppable
  const { setNodeRef } = useSortable({
    id: column.id,
    data: { type: "column", column },
    disabled: true, // Disable sorting of columns for simplicity
  });

  const { addBlock } = useBuilderStore();

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "relative min-h-[50px] px-2 transition-colors",
        column.width ? `w-${column.width}` : "flex-1",
      )}
    >
      <div className="h-full rounded border border-dashed border-slate-200 p-2 hover:border-blue-200">
        <SortableContext
          items={column.children.map((b) => b.id)}
          strategy={verticalListSortingStrategy}
        >
          {column.children.map((block) => (
            <SortableBlock key={block.id} block={block} />
          ))}
        </SortableContext>
        {column.children.length === 0 && (
          <div className="pointer-events-none flex h-full items-center justify-center text-xs text-slate-300">
            Drop blocks here
          </div>
        )}
      </div>
    </div>
  );
};

const SortableBlock = ({ block }: { block: Block }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: block.id,
    data: { type: "block", block },
  });

  const { removeBlock, updateBlock, selectElement, selectedId } =
    useBuilderStore();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  const BLOCK_COMPONENTS: Record<string, React.FC<any>> = {
    text: TextBlock,
    heading: HeadingBlock,
    image: ImageBlock,
    button: ButtonBlock,
  };

  const Component = BLOCK_COMPONENTS[block.type];

  const handleBlockClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectElement(block.id);
  };

  const isSelected = selectedId === block.id;

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={handleBlockClick}
      className={cn(
        "group/block relative mb-2 rounded last:mb-0 hover:ring-1 hover:ring-blue-400",
        isDragging && "bg-blue-50 ring-2 ring-blue-500",
        isSelected && "z-10 ring-2 ring-blue-500",
      )}
    >
      {/* Block Controls */}
      <div
        className={cn(
          "absolute top-0 right-0 z-20 ml-1 flex translate-x-full transform flex-col gap-1 transition-opacity",
          isSelected
            ? "opacity-100"
            : "opacity-0 group-hover/block:opacity-100",
        )}
      >
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab rounded bg-white p-1 text-slate-500 shadow hover:bg-slate-50"
        >
          <GripVertical size={14} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeBlock(block.id);
          }}
          className="rounded bg-white p-1 text-red-500 shadow hover:bg-red-50"
        >
          <Trash2 size={14} />
        </button>
      </div>

      <div className={cn("relative", !isDragging && "cursor-text")}>
        {Component ? (
          <Component
            element={block}
            readOnly={false}
            onContentChange={(content: any) =>
              updateBlock(block.id, { content })
            }
          />
        ) : (
          "Unknown Block"
        )}
      </div>
    </div>
  );
};
