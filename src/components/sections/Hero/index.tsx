"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function HoverProfileImage() {
  return (
    <div className="group relative me-20 w-fit flex-none cursor-pointer">
      <Card className="border-border/60 bg-background/95 pointer-events-none absolute top-1/2 right-[calc(100%+16px)] z-10 w-56 translate-x-4 -translate-y-1/2 border opacity-0 shadow-xl backdrop-blur-sm transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100">
        <CardContent className="space-y-4 p-5">
          <div>
            <Badge variant="secondary" className="mb-2 text-xs">
              Available for work
            </Badge>
            <h3 className="text-lg leading-tight font-bold">Sakil Anwar</h3>
            <p className="text-muted-foreground text-sm">Web Developer</p>
          </div>

          <div className="bg-border h-px" />

          <div className="flex gap-4">
            {[
              { num: "3+", label: "Years" },
              { num: "40+", label: "Projects" },
              { num: "20+", label: "Clients" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-base font-bold">{s.num}</span>
                <span className="text-muted-foreground text-xs">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["React", "Next.js", "TypeScript", "Tailwind"].map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          <Button size="sm" className="w-full text-xs">
            Hire Me →
          </Button>
        </CardContent>
      </Card>

      {/* Arrow pointing toward the image */}
      <div className="absolute top-1/2 right-[calc(100%+8px)] z-20 -translate-y-1/2 opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
        <div className="border-l-background h-0 w-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent" />
      </div>

      {/* Image with skew on hover — position never changes */}
      <div className="overflow-hidden rounded-2xl transition-all duration-500 ease-out group-hover:transform-[skewY(-2deg)_skewX(1deg)_scale(1.03)] group-hover:shadow-2xl group-hover:shadow-violet-500/20">
        <Image
          src="/images/user.jpg"
          alt="Hero"
          width={450}
          height={450}
          className="rounded-2xl object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-4">
      <div className="flex">
        <div className="text-default-400 flex-1">
          <h2 className="text-[240px] leading-[260px] font-bold">
            {"Hey, I'm"}
          </h2>
          <h3 className="text-[240px] leading-[240px] font-bold">
            Sakil Anwar
          </h3>
        </div>
        <div className="me-20 flex-none cursor-pointer">
          <HoverProfileImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;
