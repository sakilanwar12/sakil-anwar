export type TProjectCategory = "all" | "dashboard" | "website" | "package";
import { Zap, Globe, Smartphone, Package } from "lucide-react";
export type TProject = {
  id: string | number;
  title: string;
  category: TProjectCategory;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
};

export const categories = [
  { id: "all", name: "All Projects", icon: Globe },
  { id: "dashboard", name: "Dashboards", icon: Zap },
  { id: "website", name: "Website", icon: Smartphone },
  { id: "package", name: "Packages", icon: Package },
];
export const projects: TProject[] = [
  {
    id: crypto.randomUUID(),
    title: "Fennec Admin Management",
    category: "dashboard",
    description:
      "Fennec Admin Management is a modern and responsive dashboard for managing organizations, event companies, nightclubs, promoters, and more.",
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "#",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Fennec Night Club",
    category: "dashboard",
    description:
      "Fennec Night Club is a modern and responsive platform for managing nightclub events, inventory,tickets, discount,challenge,promotion, promoters, guests, and more.",
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "#",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Fennec Event Company",
    category: "dashboard",
    description:
      "Fennec Event Company is a modern and responsive platform for managing events, clients, organizers, vendors,host event, and more.",
    image: "/images/projects/fennec-event-company.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Fennec Promoter Management",
    category: "dashboard",
    description:
      "Fennec Promoter Management is a modern and responsive platform where promoters can manage their promoted events, track earnings, view associated organizations, and more.",
    image: "/images/projects/fennec-promoter.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Toinpark user management",
    category: "dashboard",
    description:
      "Toinpark User Management is a modern and responsive platform for managing users, accounts, transactions, activity, and more in a cryptocurrency project.",
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Dashtail Next.js Admin Template",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/dashtail.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Dashtail Alpine.js Admin Template",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/dashtail.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "DashCode Next.js Admin Template",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/dashcode.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Transco React Template",
    category: "website",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/transco.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Payquad Website Template",
    category: "website",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/payquad.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "NPM PACKAGE: js-utility-method",
    category: "package",
    description:
      "A lightweight utility library that provides essential JavaScript helper methods like generateCode, pickKeys, omitKeys, and more — designed to simplify everyday development tasks.",
    image: "/images/projects/js-utility-method.png",
    technologies: ["TypeScript", "NPM", "Node.js", "Utilities"],
    github: "https://github.com/sakilanwar12/js-utility-method",
    live: "https://www.npmjs.com/package/js-utility-method",
  },
];
