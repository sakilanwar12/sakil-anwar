export type TProjectCategory = "all" | "dashboard" | "website";

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
export const projects: TProject[] = [
  {
    id: crypto.randomUUID(),
    title: "Fennec Admin Management",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Fennec Night Club",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Fennec Event Company",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Fennec Promoter Management",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Toinpark user management",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
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
    image: "/images/projects/fennec-admin.png",
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
    image: "/images/projects/fennec-admin.png",
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
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Transco React Template",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
  {
    id: crypto.randomUUID(),
    title: "Payquad Website Template",
    category: "dashboard",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/fennec-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
  },
];
