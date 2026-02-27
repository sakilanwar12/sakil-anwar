"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Separator } from "../../ui/separator";
import Link from "next/link";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

const technologies = ["React", "TypeScript", "Node.js", "Next.js", "Vue.js"];

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        nameRef.current,
        { y: 80, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2 },
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          badgesRef.current?.children
            ? Array.from(badgesRef.current.children)
            : [],
          { y: 20, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        )
        .fromTo(
          ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
      id="hero"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(123, 47, 247, 0.08) 0%, rgba(10, 10, 26, 1) 70%)",
      }}
    >
      {/* Three.js 3D Background */}
      <HeroScene />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(0,212,255,0.04)] blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[600px] rounded-full bg-[rgba(123,47,247,0.04)] blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-3 text-center md:px-0">
        <div className="relative inline-block px-4 sm:px-0">
          {/* Animated glow behind name */}
          <div className="animate-glow-pulse absolute -inset-4 rounded-3xl bg-gradient-to-r from-[rgba(0,212,255,0.15)] via-[rgba(123,47,247,0.15)] to-[rgba(255,45,124,0.15)] blur-2xl" />

          <h1
            ref={nameRef}
            className="relative bg-gradient-to-r from-white via-[#e0e0ff] to-[#b0b0ff] bg-clip-text pb-2 text-5xl font-bold tracking-tight text-transparent opacity-0 sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Sakil Anwar
          </h1>
        </div>

        <div
          ref={subtitleRef}
          className="mt-8 mb-6 flex items-center justify-center gap-3 opacity-0"
        >
          <Separator className="bg-[rgba(0,212,255,0.3)] data-[orientation=horizontal]:w-16" />
          <h2 className="text-2xl font-light whitespace-nowrap text-[#00d4ff] md:text-3xl">
            Frontend Developer
          </h2>
          <Separator className="bg-[rgba(0,212,255,0.3)] data-[orientation=horizontal]:w-16" />
        </div>

        <p
          ref={descRef}
          className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#8888aa] opacity-0 md:text-xl"
        >
          Crafting exceptional digital experiences with modern web technologies
        </p>

        <div
          ref={badgesRef}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              className="glass rounded-full border-[rgba(255,255,255,0.08)] px-4 py-2 text-sm text-[#c0c0dd] opacity-0 transition-all duration-300 hover:border-[rgba(0,212,255,0.3)] hover:text-[#00d4ff] hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div ref={ctaRef} className="flex items-center justify-center gap-4">
          <Link
            href="#work"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] opacity-75 blur transition group-hover:opacity-100" />
            <span className="relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f0f23] px-6 py-3 text-white opacity-0 sm:w-auto sm:px-8">
              Explore My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="#contact"
            className="glass rounded-full px-6 py-3 text-center opacity-0 transition-all duration-300 hover:border-[rgba(0,212,255,0.3)] hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] sm:px-8"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-[#555588] uppercase">
            Scroll
          </span>
          <div className="h-10 w-[1px] overflow-hidden bg-[rgba(255,255,255,0.1)]">
            <div className="animate-scroll h-full w-full bg-gradient-to-b from-[#00d4ff] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
