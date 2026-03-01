export interface ExperienceEntry {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
}

export const experiences: ExperienceEntry[] = [
  {
    company: "TechFlow Solutions",
    role: "Senior Frontend Developer",
    duration: "2022 - Present",
    description:
      "Leading the frontend architecture for high-scale SaaS products. Implementing design systems and optimizing performance using Next.js and Tailwind CSS.",
    logo: "/images/experience/techflow.svg",
  },
  {
    company: "Creative Pulse Agency",
    role: "Frontend Engineer",
    duration: "2020 - 2022",
    description:
      "Developed premium, editorial websites for luxury brands. Focused on fluid animations and responsive layouts using Framer Motion.",
    logo: "/images/experience/creative-pulse.svg",
  },
  {
    company: "Vantage Studios",
    role: "Web Developer",
    duration: "2018 - 2020",
    description:
      "Built interactive web applications and modular components. Collaborated with designers to deliver pixel-perfect user interfaces.",
    logo: "/images/experience/vantage.svg",
  },
];
