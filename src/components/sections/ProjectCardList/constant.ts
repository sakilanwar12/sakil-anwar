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
    title: "Fennec Ai- Global Event Management Platform",
    description:
      "Fennec is an all in one Operating System that provides a marketplace of hyper-personalized AI / ML powered products and services helping nightlife businesses deliver an exceptional customer experience to improve customer retention, drive growth, streamline workflows and enhance operational efficiency. Turn data into decisions, and chaos into profits. Operating system the Nightlife Industry deserves!",
    image: "/images/projects/fennec-ai.png",
    link: "#",
    category: "Fennec Ai- Global Event Management Platform",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "RTK - Query",
      "ShadCN UI",
    ],
  },
  {
    title: "Build your own custom dashboard with Dashcode.",
    description:
      "Dashcode – A highly customizable admin dashboard template with multi-theme support, built using React, Next.js, Laravel, and Tailwind CSS. Includes a wide range of pre-built components and layouts, enabling developers to quickly create unique and professional interfaces across different tech stacks.",
    image: "/images/projects/dashcode-ui.png", 
    link: "#",
    category: "Dashcode — Admin Dashboard",
    technologies: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    title: "Streamline your workflow with our innovative tools.",
    description:
      "Our suite of productivity tools is designed to help individuals and teams work more efficiently. From task management to collaboration features, we provide everything you need to stay organized and achieve your goals.",
    image: "/images/projects/project-1.jpg",
    link: "#",
    category: "Productivity Suite — SaaS",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Experience the next generation of mobile apps.",
    description:
      "We specialize in building high-performance and cross-platform mobile applications using React Native. Our apps are known for their smooth performance, intuitive user interfaces, and seamless integration with various APIs.",
    image: "/images/projects/project-1.jpg", 
    link: "#",
    category: "Mobile App — iOS & Android",
    technologies: ["React Native", "Expo", "Firebase"],
  },
];
