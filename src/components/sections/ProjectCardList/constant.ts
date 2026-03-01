export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Helping developers build production-ready projects, faster.",
    description:
      "I led the development of Dashtail, an admin dashboard template reviewed and approved by ThemeForest. Designed with developers in mind, it provides a clean, scalable foundation that eliminates repetitive setup — so teams can focus on what matters most: building their product. From architecture decisions to component design, I owned the project end-to-end to deliver a solution trusted by the developer community.",
    image: "/images/projects/project-1.jpg",
    link: "#",
    category: "Dashtail — ThemeForest",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "ShadCN UI",
    ],
  },
  {
    title: "Build your own custom dashboard with Dashcode.",
    description:
      "Dashcode is a highly customizable admin dashboard template built with React and Tailwind CSS. It features a wide range of pre-built components and layouts, making it easy for developers to create unique and professional interfaces for their applications.",
    image: "/images/projects/project-1.jpg", // Using same image as placeholder
    link: "#",
    category: "Dashcode — Admin Dashboard",
    technologies: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    title: "Streamline your workflow with our innovative tools.",
    description:
      "Our suite of productivity tools is designed to help individuals and teams work more efficiently. From task management to collaboration features, we provide everything you need to stay organized and achieve your goals.",
    image: "/images/projects/project-1.jpg", // Using same image as placeholder
    link: "#",
    category: "Productivity Suite — SaaS",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Experience the next generation of mobile apps.",
    description:
      "We specialize in building high-performance and cross-platform mobile applications using React Native. Our apps are known for their smooth performance, intuitive user interfaces, and seamless integration with various APIs.",
    image: "/images/projects/project-1.jpg", // Using same image as placeholder
    link: "#",
    category: "Mobile App — iOS & Android",
    technologies: ["React Native", "Expo", "Firebase"],
  },
];
