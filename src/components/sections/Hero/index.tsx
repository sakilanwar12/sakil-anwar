"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState } from "react";

// function HoverProfileImage() {
//   const imageRef = useRef<HTMLDivElement>(null);
//   const [hovered, setHovered] = useState(false);
//   const [cardY, setCardY] = useState(0);
//   const [skew, setSkew] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const el = imageRef.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const relX = (e.clientX - rect.left) / rect.width - 0.5;
//     const relY = (e.clientY - rect.top) / rect.height - 0.5;
//     setCardY(relY * rect.height);
//     setSkew({ x: relX * 6, y: relY * -4 });
//   };

//   return (
//     <div
//       ref={imageRef}
//       className="relative me-20 w-fit flex-none cursor-pointer"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => {
//         setHovered(false);
//         setCardY(0);
//         setSkew({ x: 0, y: 0 });
//       }}
//     >
//       <div
//         className="pointer-events-none absolute right-[calc(100%+16px)] z-10 w-72"
//         style={{
//           top: "50%",
//           transform: `translateY(calc(-50% + ${cardY}px)) translateX(${hovered ? "0px" : "16px"})`,
//           opacity: hovered ? 1 : 0,
//           transition: hovered
//             ? "transform 0.12s ease-out, opacity 0.25s ease"
//             : "transform 0.4s ease, opacity 0.25s ease",
//           pointerEvents: hovered ? "auto" : "none",
//         }}
//       >
//         <Card className="border-border/60 bg-background/95 border shadow-xl backdrop-blur-sm">
//           <CardContent className="space-y-3">
//             <div>
//               <h3 className="text-lg leading-tight font-bold text-default-100 mb-1">Md. Sakil Anwar</h3>
//               <p className="text-default-300 text-sm">Software Developer</p>
//             </div>

//             <div className="bg-border h-px" />

//             <div className="flex gap-4">
//               {[
//                 { num: "3+", label: "Years" },
//                 { num: "40+", label: "Projects" },
//                 { num: "20+", label: "Clients" },
//               ].map((s) => (
//                 <div key={s.label} className="flex flex-col">
//                   <span className="text-base font-bold text-default-100">{s.num}</span>
//                   <span className="text-default-200 text-xs">{s.label}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-1">
//               {["React", "Next.js", "Vue.js", "Express.js", "TypeScript"].map((skill) => (
//                 <Badge key={skill} variant="outline" className="text-xs px-3">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>

//             <Button size="sm" className="w-full text-xs">
//               Hire Me →
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Arrow pointing toward the image */}
//         <div
//           className="absolute right-[-8px] top-1/2 -translate-y-1/2"
//           style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease 0.1s" }}
//         >
//           <div className="border-l-background h-0 w-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent" />
//         </div>
//       </div>

//       {/* Image with dynamic mouse-driven skew */}
//       <div
//         className="overflow-hidden rounded-2xl"
//         style={{
//           transform: hovered
//             ? `skewY(${skew.y}deg) skewX(${skew.x}deg) scale(1.04)`
//             : "skewY(0deg) skewX(0deg) scale(1)",
//           transition: hovered
//             ? "transform 0.1s ease-out, box-shadow 0.3s ease"
//             : "transform 0.5s ease, box-shadow 0.3s ease",
//           boxShadow: hovered ? "0 20px 60px rgba(124, 106, 255, 0.25)" : "none",
//         }}
//       >
//         <Image
//           src="/images/user.jpg"
//           alt="Hero"
//           width={450}
//           height={450}
//           className="rounded-2xl object-cover"
//           draggable={false}
//         />
//       </div>
//     </div>
//   );
// }

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

            <Button className="w-full cursor-pointer  bg-primary">
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
