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
      "Fennec – Modern event management platform for nightlife and live events. Built multi-role dashboards, inventory management, social features, and AI tools using Next.js and TypeScript, improving event operations and enabling real-time updates. Delivered a seamless experience for organizers and attendees.",
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
