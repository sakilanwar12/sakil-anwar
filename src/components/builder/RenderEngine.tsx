import React from "react";
import { PageLayout, Section, Column, Block } from "@/types/builder";
import { TextBlock, HeadingBlock, ImageBlock, ButtonBlock } from "./blocks";
import { cn } from "@/lib/utils";

// Map element types to components
const BLOCK_COMPONENTS: Record<string, React.FC<any>> = {
  text: TextBlock,
  heading: HeadingBlock,
  image: ImageBlock,
  button: ButtonBlock,
};

interface RenderEngineProps {
  layout: PageLayout;
  readOnly?: boolean;
}

export const RenderEngine: React.FC<RenderEngineProps> = ({
  layout,
  readOnly = true,
}) => {
  if (!layout || layout.length === 0) return null;

  return (
    <div className="min-h-screen w-full">
      {layout.map((section) => (
        <RenderSection key={section.id} section={section} readOnly={readOnly} />
      ))}
    </div>
  );
};

const RenderSection: React.FC<{ section: Section; readOnly: boolean }> = ({
  section,
  readOnly,
}) => {
  return (
    <section
      id={section.id}
      className="flex w-full flex-wrap px-4 py-10"
      style={section.styles as any}
    >
      {section.children.map((column) => (
        <RenderColumn key={column.id} column={column} readOnly={readOnly} />
      ))}
    </section>
  );
};

const RenderColumn: React.FC<{ column: Column; readOnly: boolean }> = ({
  column,
  readOnly,
}) => {
  // Simple grid system - if width is provided use it, else auto
  const widthClass = column.width ? `w-${column.width}` : "flex-1";

  return (
    <div className={cn("min-h-[50px] p-2", widthClass)}>
      {column.children.map((block) => (
        <RenderBlock key={block.id} block={block} readOnly={readOnly} />
      ))}
    </div>
  );
};

const RenderBlock: React.FC<{ block: Block; readOnly: boolean }> = ({
  block,
  readOnly,
}) => {
  const Component = BLOCK_COMPONENTS[block.type];

  if (!Component) {
    return <div>Unknown block type: {block.type}</div>;
  }

  return <Component element={block} readOnly={readOnly} />;
};
