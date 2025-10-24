import { Code, Palette, Zap, Frame } from "lucide-react";
export type TSkill = {
  category: string;
  icon: React.ReactNode;
  items: {
    name: string;
    level: number;
  }[];
 };
export const skills: TSkill[] = [
  {
    category: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "Markdown", level: 85 },
    ],
  },
  {
    category: "Frameworks",
    icon: <Frame className="h-5 w-5" />,
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 90 },
      { name: "Nuxt.js", level: 85 },
      { name: "Angular", level: 80 },
    ],
  },
  {
    category: "CSS Libraries",
    icon: <Palette className="h-5 w-5" />,
    items: [
      { name: "Bootstrap", level: 75 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Material UI", level: 70 },
      { name: "Ant Design", level: 70 },
      { name: "Radix UI", level: 70 },
    ],
  },
  {
    category: "State Management Tools",
    icon: <Zap className="h-5 w-5" />,
    items: [
      { name: "Redux", level: 85 },
      { name: "RTK Query", level: 80 },
      { name: "React Query", level: 85 },
      { name: "Zustand", level: 80 },
      { name: "Pinia", level: 75 },
    ],
  },
  {
    category: "UI / Products",
    icon: <Palette className="h-5 w-5" />,
    items: [
      { name: "Custom Dashboard Templates", level: 95 },
      { name: "Landing Pages", level: 90 },
      { name: "Web Applications", level: 90 },
      { name: "API-Connected Interfaces", level: 95 },
      { name: "Responsive & Mobile-First Designs", level: 90 },
    ],
  },
  {
    category: "Development Tools",
    icon: <Zap className="h-5 w-5" />,
    items: [
      { name: "VS Code", level: 95 },
      { name: "Cursor", level: 90 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Chrome DevTools", level: 95 },
    ],
  },
];
