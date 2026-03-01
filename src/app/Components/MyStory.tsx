"use client";
import { smoothScrollTo } from "@/lib/smoothScrollTo";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="hover-lift group relative overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-10 transition-all"
    >
      {/* Background Glow on Hover */}
      <div className="from-primary/5 absolute -inset-1 bg-radial via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <h3 className="text-default-100 relative mb-6 text-3xl leading-tight font-bold">
        {title}
      </h3>
      <p className="text-default-200 relative text-xl leading-relaxed font-normal">
        {description}{" "}
        {link && (
          <Link
            href={link.href}
            target="_blank"
            className="text-primary transition-all hover:underline"
          >
            {link.label}
          </Link>
        )}
      </p>
    </motion.div>
  );
}

function RoleGrid() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {roles.map((role) => (
        <RoleCard key={role.title} {...role} />
      ))}
    </div>
  );
}

function MyStory() {
  const storyRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(storyRef, { once: true, margin: "-200px" });

  return (
    <section className="py-44">
      <div className="max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-default-100 font-serif text-5xl leading-[1.4] md:text-7xl md:leading-[1.3]"
        >
          Over the years, I’ve broken things, fixed them, solved problems,
          shipped products, and moved the needle. I’ve led teams, improved
          systems, and turned complex ideas into clean, scalable interfaces.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="text-default-400 mt-12 max-w-3xl text-3xl"
        >
          This site is my place to humble-brag about the products I’ve built and
          the challenges I’ve conquered.
        </motion.p>

        <div className="mt-44" ref={storyRef}>
          <motion.h2
            className={cn(
              "mb-24 font-serif text-6xl font-bold transition-all duration-1000 md:text-9xl",
              isInView
                ? "blur-0 translate-y-0 opacity-100"
                : "translate-y-10 opacity-0 blur-xl",
            )}
          >
            My Professional <br /> Journey
          </motion.h2>

          <RoleGrid />
        </div>
      </div>
    </section>
  );
}

export default MyStory;
