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
    image: "/images/projects/fennec-project.png",
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
    title: "ToiCoin - Crypto Exchange Platform",
    description:'ToiCoin – Crypto Exchange Platform is a modern cryptocurrency trading platform designed to enable users to securely buy, sell, and manage digital assets. The platform features a responsive dashboard, real-time market data, secure authentication, and an intuitive user interface, providing a seamless and efficient trading experience for crypto users.',
    image: "/images/projects/toi-coin.png",
    link: "#",
    category: "ToiCoin - Crypto Exchange Platform",
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
    title: "DashCode - React, Vuejs, NextJs, Laravel, HTML,Tailwind Dashboard Template",
    description:
      "Dashcode – A highly customizable admin dashboard template with multi-theme support, built using React, Next.js, Laravel, and Tailwind CSS. Includes a wide range of pre-built components and layouts, enabling developers to quickly create unique and professional interfaces across different tech stacks.",
    image: "/images/projects/dashcode-ui.png", 
    link: "#",
    category: "DashCode - React, Vuejs, NextJs, Laravel, HTML,Tailwind Dashboard Template",
    technologies: ["React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    title: "DashTail - Tailwind, React Next Admin Dashboard Template with shadcn-ui",
    description:
      "DashTail is a modern and responsive admin dashboard template built using React, Next.js, and Tailwind CSS. It provides a seamless experience for users to manage their transportation and logistics operations. The template is built using React, Next.js, and Tailwind CSS, and includes a wide range of pre-built components and layouts, enabling developers to quickly create unique and professional interfaces across different tech stacks.",
    image: "/images/projects/dashtail-project.png",
    link: "#",
    category: "DashTail - Tailwind, React Next Admin Dashboard Template with shadcn-ui",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "ShadCN UI"],
  },
   {
    title: "Transco - Transport and Logistic React Template",
    description:
      "Transco is a modern and responsive transport and logistics React template that provides a seamless experience for users to manage their transportation and logistics operations. The template is built using React, Next.js, and Tailwind CSS, and includes a wide range of pre-built components and layouts, enabling developers to quickly create unique and professional interfaces across different tech stacks.",
    image: "/images/projects/transco-template.png",
    link: "#",
    category: "Transco - Transport and Logistic React Template",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  }
];
