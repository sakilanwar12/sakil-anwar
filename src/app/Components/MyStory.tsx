"use client";
import { smoothScrollTo } from "@/lib/smoothScrollTo";
import Link from "next/link";
import { useRef } from "react";

const roles = [
  {
    title: "BSc (Hons) in Chemistry",
    description:
      "I completed my graduation in Chemistry from Government Tolaram College, Narayanganj. However, I have a deep interest in programming. Alongside my academic studies, I pursued learning programming and web development.",
  },
  {
    title: "Freelance Web Developer (Since 2022)",
    description:
      "Providing web design and development services since 2022 — specializing in Bootstrap-based websites, custom HTML templates, WordPress theme customization, plugin setup, and complete WordPress solutions.",
  },
  {
    title: "Junior Frontend Web Developer — Spellon (2022–2023)",
    description:
      "Joined Spellon as a Junior Frontend Web Developer, where I built Bootstrap-based HTML templates, developed SCSS templates, designed front-end interfaces for WordPress themes, and customized WordPress templates.",
  },
  {
    title: "Senior Frontend Web Developer — Codeshaper (2023–Present)",
    description:
      "Started as a Junior Developer and advanced to Senior Frontend Developer. Built admin dashboards, reusable UI systems, and ThemeForest-approved templates, and contributed to modern web applications like Fennec AI and Toinpark.",
    link: { label: "Codeshaper", href: "https://codeshaper.net/" },
  },
  {
    title: "Senior Frontend Web Developer — Fennec AI (2024–Present)",
    description:
      "Fennec (Global Event Management Platform) – Collaborated with the Fennec team to translate business requirements into MVP solutions, developing multi-role dashboards, inventory management, social features, and AI tools using Next.js and TypeScript.",
    link: { label: "Fennec AI", href: "https://app.fennecapp.com/" },
  },
  {
    title: "Product & Dashboard Specialist",
    description:
      "Specialized in building scalable admin dashboards and reusable UI systems. Developed multi-role SaaS interfaces and modular frontend architectures using Next.js, Vue.js, and TypeScript, with a strong focus on performance, maintainability, and clean code practices.",
  },
];

function RoleCard({ title, description, link }: (typeof roles)[number]) {
  return (
    <div className="rounded-2xl transition-colors duration-300">
      <h3 className="text-default-100 mb-4 text-xl font-bold">{title}</h3>
      <p className="text-default-200 text-lg leading-relaxed font-normal">
        {description}{" "}
        {link && (
          <Link
            href={link.href}
            target="_blank"
            className="text-blue-400 transition-colors duration-200 hover:text-blue-300"
          >
            {link.label}
          </Link>
        )}
      </p>
    </div>
  );
}

function RoleGrid() {
  return (
    <div className="grid grid-cols-3 gap-10">
      {roles.map((role) => (
        <RoleCard key={role.title} {...role} />
      ))}
    </div>
  );
}

function MyStory() {
  const storyRef = useRef<HTMLDivElement>(null);

  const scrollToStory = () => {
    if (!storyRef.current) return;
    const targetY =
      storyRef.current.getBoundingClientRect().top + window.scrollY - 32;
    smoothScrollTo(targetY, 1000);
  };

  return (
    <div>
      <p className="text-5xl leading-[68px]">
        {
          "Over the years, I’ve broken things, fixed them, solved problems, shipped products, and moved the needle. I’ve led teams, improved systems, and turned complex ideas into clean, scalable interfaces.  I’m a Senior Frontend Developer. This site is my place to humble-brag about the products I’ve built and the challenges I’ve conquered."
        }
      </p>
      <button
        onClick={scrollToStory}
        className="text-default-200 hover:text-default-100 border-default-200 hover:border-primary mt-20 inline-block cursor-pointer border-x-0 border-t-0 border-b-3 bg-transparent text-2xl font-medium transition-all duration-300 ease-in-out"
      >
        This is my Story
      </button>
      <div className="h-[100px]"></div>
      <div ref={storyRef}>
        <div className="h-[70px]"></div>
        <h4 className="text-default-100 mb-10 text-3xl font-bold">
          My Professional Journey
        </h4>

        <div>
          <RoleGrid />
        </div>
      </div>
    </div>
  );
}

export default MyStory;
