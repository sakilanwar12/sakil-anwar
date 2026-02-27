"use client";
import { smoothScrollTo } from "@/lib/smoothScrollTo";
import Link from "next/link";
import { useRef } from "react";

const roles = [
  {
    title: "Product Design Lead",
    description: "Driving innovation across Fintech at",
    link: { label: "Posh AI", href: "https://posh.ai" },
    highlight: true, // purple bg on first card
  },
  {
    title: "Builder & Game Creator",
    description: "Vibe coding and shipping games like",
    link: { label: "GRIDLOCK", href: "#" },
  },
  {
    title: "Founder & Consultant",
    description:
      "Helping clients to craft and launch ideas @ Edge Kase Design Co.",
  },
  {
    title: "Speaker",
    description: "Sharing perspective and real-world experience through",
    link: { label: "storytelling", href: "#" },
  },
  {
    title: "Community Builder",
    description: "Growing the design and tech community @",
    link: { label: "Austin Tech & UX", href: "#" },
  },
  {
    title: "Mentor & Event Host",
    description: "Guided Designers through events and mentorship @",
    link: { label: "ADPList", href: "https://adplist.org" },
  },
  {
    title: "Entrepreneur",
    description: "Creating pickleball gear and events @",
    link: { label: "Arvo", href: "#" },
  },
  {
    title: "Vacational Rental Owner",
    description: "Building and operating a successful STR in",
    link: { label: "Canyon Lake", href: "#" },
  },
  {
    title: "Podcast Host",
    description: "Conversations on design, career, and craft @",
    link: { label: "Drinking with Designers", href: "#" },
  },
];

function RoleCard({
  title,
  description,
  link,
  highlight,
}: (typeof roles)[number]) {
  return (
    <div
      className={`rounded-2xl border border-white/8 p-6 transition-colors duration-300 hover:border-white/20 ${
        highlight ? "bg-purple-950/60" : "bg-white/4"
      }`}
    >
      <h3 className="text-default-100 mb-2 text-xl font-bold">{title}</h3>
      <p className="text-default-300 text-sm leading-relaxed">
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
    <div className="grid grid-cols-3 gap-4">
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
    smoothScrollTo(targetY, 1200);
  };

  return (
    <div className="px-6">
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
      <div className="h-[200px]"></div>
      <div ref={storyRef}>
        <div className="h-[70px]"></div>
        <h4 className="mb-10 text-2xl leading-[68px] uppercase">Highlights</h4>
        <div>
          <RoleGrid />
        </div>
      </div>
    </div>
  );
}

export default MyStory;
