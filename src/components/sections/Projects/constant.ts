export type TProjectCategory = "all" | "dashboards" | "webapps" | "landing" | "ui";
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
    title: "E-Commerce Platform",
    category: "dashboards",
    description:
      "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/projects/dashtail.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    stats: { users: "1.2k", stars: 234, commits: 156 },
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "webapps",
    description:
      "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/projects/dashtail.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    stats: { users: "1.2k", stars: 234, commits: 156 },
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "landing",
    description:
      "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/projects/dashtail.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    stats: { users: "1.2k", stars: 234, commits: 156 },
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    category: "ui",
    description:
      "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/projects/dashtail.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    stats: { users: "1.2k", stars: 234, commits: 156 },
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "dashboards",
    description:
      "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/projects/dashtail.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    stats: { users: "1.2k", stars: 234, commits: 156 },
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    category: "dashboards",
    description:
      "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/projects/dashtail.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    github: "https://github.com/username/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    stats: { users: "1.2k", stars: 234, commits: 156 },
  },
];

