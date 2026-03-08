export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
  achievements: string[];
  techStack: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Fennec AI",
    role: "Senior Frontend Web Developer",
    duration: "2024 - Present",
    description:
      "Developing multi-role dashboards and AI tools for a global event management platform. Translating complex business needs into high-performance MVP solutions.",
    logo: "/images/experience/fennec.svg",
    achievements: [
      "Built real-time inventory management dashboards using Next.js and WebSockets.",
      "Optimized frontend performance, achieving a 40% reduction in initial load time.",
      "Implemented a modular UI system with shared component libraries.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
    ],
  },
  {
    company: "Codeshaper",
    role: "Senior Frontend Web Developer",
    duration: "2023 - Present",
    description:
      "Designing and building reusable UI systems and admin dashboards. Leading the transition to modern React architectures and type-safe systems.",
    logo: "/images/experience/codeshaper.svg",
    achievements: [
      "Developed several ThemeForest-approved dashboard templates with high sales.",
      "Mentored junior developers on best practices for React and TypeScript.",
      "Architected a scalable multi-tenant frontend framework.",
    ],
    techStack: ["React", "TypeScript", "Vite", "Pnpm", "Redux Toolkit"],
  },
  {
    company: "Spellon",
    role: "Junior Frontend Web Developer",
    duration: "2022 - 2023",
    description:
      "Focused on building responsive HTML templates and WordPress interface customization. Early transition from Bootstrap to modern utility-first CSS.",
    logo: "/images/experience/spellon.svg",
    achievements: [
      "Converted 20+ legacy Bootstrap designs into clean SCSS-based templates.",
      "Improved mobile responsiveness scores across all client projects.",
      "Built custom WordPress gallery and slider plugins.",
    ],
    techStack: ["JavaScript", "SCSS", "Bootstrap", "WordPress", "PHP"],
  },
];
