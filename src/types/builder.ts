export type ElementType = "text" | "heading" | "image" | "button" | "container";

export interface BuilderElement {
  id: string;
  type: ElementType;
  content?: any; // Specific content for blocks (text, src, etc.)
  styles?: Record<string, string>; // Tailwind classes or inline styles
}

export interface Block extends BuilderElement {
  type: "text" | "heading" | "image" | "button";
}

export interface Column {
  id: string;
  type: "column";
  children: Block[];
  width?: string; // e.g., '1/2', '1/3'
}

export interface Section {
  id: string;
  type: "section";
  children: Column[];
  styles?: Record<string, string>;
}

export type PageLayout = Section[];
