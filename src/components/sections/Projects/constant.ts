export type TProjectCategory =
  | "all"
  | "dashboards"
  | "webapps"
  | "landing"
  | "ui";
export type TProject = {
  id: string | number;
  title: string;
  category: TProjectCategory;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  stats: { users: string; stars: number; commits: number };
};
export const projects: TProject[] = [
  {
    id: 1,
    title: "TaskFlow Dashboard",
    category: "dashboards",
    description:
      "A comprehensive project management dashboard with real-time collaboration, task tracking, and analytics.",
    image: "/images/projects/dashtail-dark.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/sakilanwar12/taskflow-dashboard",
    live: "https://taskflow-demo.vercel.app",
    stats: { users: "2.1k", stars: 156, commits: 89 },
  },
  {
    id: 2,
    title: "EcoShop Marketplace",
    category: "webapps",
    description:
      "A sustainable e-commerce platform with carbon footprint tracking, eco-friendly product filtering, and green delivery options.",
    image: "/images/projects/dashtail.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/sakilanwar12/ecoshop-marketplace",
    live: "https://ecoshop-demo.vercel.app",
    stats: { users: "1.8k", stars: 203, commits: 124 },
  },
  {
    id: 3,
    title: "DevPortfolio Landing",
    category: "landing",
    description:
      "A modern, responsive landing page for developers with smooth animations, dark mode, and contact integration.",
    image: "/images/projects/dashtail.jpg",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],
    github: "https://github.com/sakilanwar12/devportfolio-landing",
    live: "https://devportfolio-template.vercel.app",
    stats: { users: "3.2k", stars: 445, commits: 67 },
  },
  {
    id: 4,
    title: "UI Component Library",
    category: "ui",
    description:
      "A comprehensive React component library with 50+ reusable components, TypeScript support, and Storybook documentation.",
    image: "/images/projects/dashtail-dark.png",
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "Styled Components",
      "Rollup",
    ],
    github: "https://github.com/sakilanwar12/ui-component-library",
    live: "https://ui-components-demo.vercel.app",
    stats: { users: "1.5k", stars: 312, commits: 198 },
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    category: "dashboards",
    description:
      "Advanced analytics dashboard with real-time data visualization, custom reports, and export functionality.",
    image: "/images/projects/dashtail.jpg",
    technologies: ["Vue.js", "D3.js", "Express.js", "MySQL", "Socket.io"],
    github: "https://github.com/sakilanwar12/analytics-dashboard",
    live: "https://analytics-demo.vercel.app",
    stats: { users: "4.1k", stars: 567, commits: 234 },
  },
  {
    id: 6,
    title: "ChatApp Real-time",
    category: "webapps",
    description:
      "Real-time messaging application with group chats, file sharing, emoji reactions, and message encryption.",
    image: "/images/projects/dashtail-dark.png",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/sakilanwar12/chatapp-realtime",
    live: "https://chatapp-demo.vercel.app",
    stats: { users: "2.7k", stars: 389, commits: 156 },
  },
];
