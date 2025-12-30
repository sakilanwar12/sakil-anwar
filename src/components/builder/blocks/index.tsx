import React from "react";
import { cn } from "@/lib/utils";
import { BuilderElement } from "@/types/builder";

// Common props for all blocks
export interface BlockProps {
  element: BuilderElement;
  readOnly?: boolean;
  className?: string; // For Tailwind classes from parent (layout)
  // Edit mode handlers
  onContentChange?: (content: any) => void;
}

export const TextBlock: React.FC<BlockProps> = ({
  element,
  readOnly,
  className,
  onContentChange,
}) => {
  const { content, styles } = element;

  if (!readOnly) {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) =>
          onContentChange?.({ ...content, text: e.currentTarget.innerText })
        }
        className={cn("p-2 outline-none", className)}
        style={styles as any}
      >
        {content?.text || "Text block"}
      </div>
    );
  }

  return (
    <p className={cn("p-2", className)} style={styles as any}>
      {content?.text}
    </p>
  );
};

export const HeadingBlock: React.FC<BlockProps> = ({
  element,
  readOnly,
  className,
  onContentChange,
}) => {
  const { content, styles } = element;
  const Tag = `h${content?.level || 2}` as keyof JSX.IntrinsicElements;

  if (!readOnly) {
    return (
      <Tag
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) =>
          onContentChange?.({ ...content, text: e.currentTarget.innerText })
        }
        className={cn("p-2 font-bold outline-none", className)}
        style={styles as any}
      >
        {content?.text || "Heading"}
      </Tag>
    );
  }

  return (
    <Tag className={cn("p-2 font-bold", className)} style={styles as any}>
      {content?.text}
    </Tag>
  );
};

export const ImageBlock: React.FC<BlockProps> = ({
  element,
  readOnly,
  className,
  onContentChange,
}) => {
  const { content, styles } = element;

  return (
    <div className={cn("relative", className)} style={styles as any}>
      <img
        src={content?.src || "https://via.placeholder.com/300"}
        alt={content?.alt || "Image"}
        className="h-auto max-w-full"
      />
      {!readOnly && (
        <div className="absolute top-0 right-0 bg-black/50 p-1 text-xs text-white">
          {/* Fallback for image editing UI (just a placeholder for now) */}
          Click to edit settings
        </div>
      )}
    </div>
  );
};

export const ButtonBlock: React.FC<BlockProps> = ({
  element,
  readOnly,
  className,
  onContentChange,
}) => {
  const { content, styles } = element;

  if (!readOnly) {
    return (
      <button
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) =>
          onContentChange?.({ ...content, text: e.currentTarget.innerText })
        }
        className={cn("rounded bg-blue-600 px-4 py-2 text-white", className)}
        style={styles as any}
      >
        {content?.text || "Button"}
      </button>
    );
  }

  return (
    <a
      href={content?.href || "#"}
      className={cn(
        "inline-block rounded bg-blue-600 px-4 py-2 text-white",
        className,
      )}
      style={styles as any}
    >
      {content?.text || "Button"}
    </a>
  );
};
