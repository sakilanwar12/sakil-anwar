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
import { Sidebar } from "./Sidebar";
import { EditorCanvas } from "./EditorCanvas";

export const BuilderDndWrapper = () => {
  const {
    layout,
    moveSection,
    addBlock,
    moveBlock,
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
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragOver={onDragover}
      onDragEnd={onDragEnd}
    >
      <Sidebar />
      <EditorCanvas />

      <DragOverlay dropAnimation={dropAnimation}>
        {activeId ? (
          activeItem?.fromSidebar ? (
            <div className="w-[100px] rounded bg-blue-500 p-2 text-center font-bold text-white opacity-80 shadow">
              {activeItem.type}
            </div>
          ) : (
            <div className="rounded border border-blue-500 bg-white p-4 opacity-90 shadow">
              Dragging...
            </div>
          )
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
