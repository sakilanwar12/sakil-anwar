"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";
import ScrollDown from "@/components/ScrollDown";

function HoverProfileImage() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [cardY, setCardY] = useState(0);
  const [skew, setSkew] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imageRef.current;
    if (!el) return;

    // Track relative to the IMAGE element specifically, not the whole wrapper
    const rect = el.getBoundingClientRect();

    // Only update if mouse is actually over the image bounds
    const isOverImage =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!isOverImage) return;

    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setCardY(relY * rect.height);
    setSkew({ x: relX * 6, y: relY * -4 });
  };

  return (
    // Outer wrapper covers both card + image so moving onto card doesn't fire mouseleave
    <div
      className="relative me-20 w-fit flex-none cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setHovered(false);
        setCardY(0);
        setSkew({ x: 0, y: 0 });
      }}
    >
      {/* Info Card */}
      <div
        className="pointer-events-none absolute right-[calc(100%+16px)] z-10 w-72"
        style={{
          top: "50%",
          transform: `translateY(calc(-50% + ${cardY}px)) translateX(${hovered ? "0px" : "16px"})`,
          opacity: hovered ? 1 : 0,
          transition: hovered
            ? "transform 0.12s ease-out, opacity 0.25s ease"
            : "transform 0.4s ease, opacity 0.25s ease",
          pointerEvents: hovered ? "auto" : "none",
        }}
      >
        <Card className="border-border/60 bg-background/95 border shadow-xl backdrop-blur-sm">
          <CardContent className="space-y-3">
            <div>
              <h3 className="text-default-100 mb-1 text-lg leading-tight font-bold">
                Md. Sakil Anwar
              </h3>
              <p className="text-default-300 text-sm">Software Developer</p>
            </div>

            <div className="bg-border h-px" />

            <div className="flex gap-4">
              {[
                { num: "3+", label: "Years" },
                { num: "40+", label: "Projects" },
                { num: "20+", label: "Clients" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-default-100 text-base font-bold">
                    {s.num}
                  </span>
                  <span className="text-default-200 text-xs">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1">
              {["React", "Next.js", "Vue.js", "Express.js", "TypeScript"].map(
                (skill) => (
                  <Badge key={skill} variant="outline" className="px-3 text-xs">
                    {skill}
                  </Badge>
                ),
              )}
            </div>

            <Button className="bg-primary w-full cursor-pointer">
              Let's work togather →
            </Button>
          </CardContent>
        </Card>

        {/* Arrow pointing toward the image */}
        <div
          className="absolute top-1/2 right-[-8px] -translate-y-1/2"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease 0.1s",
          }}
        >
          <div className="border-l-background h-0 w-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent" />
        </div>
      </div>

      {/* Image — triggers hovered state, ref for bounds tracking */}
      <div
        ref={imageRef}
        className="overflow-hidden rounded-2xl"
        onMouseEnter={() => setHovered(true)}
        style={{
          transform: hovered
            ? `skewY(${skew.y}deg) skewX(${skew.x}deg) scale(1.04)`
            : "skewY(0deg) skewX(0deg) scale(1)",
          transition: hovered
            ? "transform 0.1s ease-out, box-shadow 0.3s ease"
            : "transform 0.5s ease, box-shadow 0.3s ease",
          boxShadow: hovered ? "0 20px 60px rgba(124, 106, 255, 0.25)" : "none",
        }}
      >
        <Image
          src="/images/user.jpg"
          alt="Hero"
          width={450}
          height={450}
          className="rounded-2xl object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
}
function Hero() {
  return (
    <section className="mesh-gradient animate-mesh relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-24">
        {/* Text Content */}
        <div className="z-10 flex-1 text-center lg:text-left">
          <h2 className="text-default-100 mb-4 text-2xl font-medium tracking-widest uppercase">
            Senior Frontend Developer
          </h2>
          <h1 className="font-serif text-7xl leading-tight font-bold md:text-8xl lg:text-9xl">
            Slaying <br />
            <span className="text-primary italic">Dragons</span> with <br />
            Clean Code.
          </h1>
          <p className="text-default-200 mt-8 max-w-xl text-xl leading-relaxed md:text-2xl">
            I'm <span className="text-primary font-bold">Sakil Anwar</span>,
            building modern, editorial, and premium web experiences for
            high-impact brands and agencies.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6 lg:justify-start">
            <Button
              className="glow-button bg-primary hover:bg-primary/90 rounded-full px-10 py-6 text-xl font-bold text-white transition-all hover:scale-105"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              color="outline"
              className="rounded-full border-white/10 px-10 py-6 text-xl font-bold transition-all hover:scale-105 hover:bg-white/5"
              size="lg"
            >
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Profile Presentation */}
        <div className="relative flex-none">
          <div className="relative h-[400px] w-[300px] md:h-[600px] md:w-[450px]">
            {/* Soft Vignette/Blend Background */}
            <div className="bg-primary/20 absolute inset-0 -bottom-10 rounded-full blur-3xl" />

            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/user.jpg"
                alt="Sakil Anwar"
                fill
                className="object-cover grayscale transition-all duration-700 hover:scale-110 hover:grayscale-0"
                priority
              />
              {/* Overlay for soft blending */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            {/* Accent Element */}
            <div className="border-primary/50 animate-spin-slow absolute -right-6 -bottom-6 h-32 w-32 rounded-full border-2 border-dashed" />
          </div>
        </div>
      </div>

      <ScrollDown />
    </section>
  );
}

export default Hero;
