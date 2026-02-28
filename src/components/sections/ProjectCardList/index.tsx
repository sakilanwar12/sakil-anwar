import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Car } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Phone Mockup (default media preview) ───────────────────
function PhoneMockup({ className, children, style }) {
  return (
    <div
      style={style}
      className={cn(
        "relative bg-white rounded-[18px] border border-black/10",
        "shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex-shrink-0",
        className
      )}
    >
      {/* Notch pill */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-7 h-1 rounded-full bg-gray-200" />
      {/* Screen gradient */}
      <div className="w-full h-full bg-gradient-to-br from-[#f8f4ff] via-[#fff5f2] to-white flex flex-col items-center justify-center gap-2 p-3">
        {children}
      </div>
    </div>
  );
}

function DefaultPreview() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-5">
      {/* Phone 1 — Calendar */}
      <PhoneMockup
        className="w-[120px] h-[220px]"
        style={{ transform: "rotate(-6deg) translateX(10px) translateY(10px)", zIndex: 1 }}
      >
        <div className="text-center w-full">
          <p className="text-[7px] font-semibold text-gray-700 mb-2">My Progress</p>
          <div className="grid grid-cols-7 gap-[2px]">
            {days.map((d, i) => (
              <span key={i} className="text-[5px] text-gray-400 text-center">{d}</span>
            ))}
            {[...Array(7)].map((_, i) => (
              <span
                key={i}
                className={cn(
                  "text-[5px] rounded-[2px] py-[1px] text-center",
                  i === 2 || i === 4
                    ? "bg-[#FF6B35] text-white"
                    : "bg-gray-100 text-gray-500"
                )}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      </PhoneMockup>

      {/* Phone 2 — App screen */}
      <PhoneMockup
        className="w-[130px] h-[240px]"
        style={{ transform: "rotate(3deg) translateX(-5px)", zIndex: 2 }}
      >
        <span className="font-fraunces font-bold text-sm text-gray-900 tracking-tight">
          Cylinder
        </span>
        <p className="text-[8px] text-gray-500 text-center leading-snug font-dm">
          Welcome to better<br />digestive health
        </p>
        <div className="bg-[#FF6B35] text-white text-[7px] font-medium px-3.5 py-1.5 rounded-full mt-1 font-dm">
          Register now
        </div>
        <p className="text-[7px] text-gray-300 mt-1 font-dm">Already a member? Log in</p>
      </PhoneMockup>
    </div>
  );
}

// ─── ProjectCard Component ───────────────────────────────────
export function ProjectCard({
  index = "01",
  company = "Cylinder · prev Vivante Health",
  title = "Improving digestive health through",
  titleAccent = "comprehensive care.",
  description = "Rebuilt the design system to scale with a growing product and team. Shipped new and updated features across web and mobile while improving internal communication workflows. Led and mentored a four-person design team through delivery.",
  tags = ["Mobile App", "Web App", "UX/UI Design", "Mentorship", "Healthtech"],
  href = "#",
  preview, // Pass custom JSX here to replace the default phone mockup
}) {
  return (
    <Card>
      {/* ── Media Section ─────────────────────────────────── */}
      <div className="relative h-[300px] overflow-hidden">

        {/* Orange radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,#FF8C5A_0%,#FF6B35_40%,#E8420F_100%)]" />

        {/* Decorative blobs */}
        <div className="absolute top-[-10px] right-[30px] w-24 h-24 rounded-full bg-[#FFD166] opacity-60 blur-[20px] pointer-events-none" />
        <div className="absolute top-10 right-[-10px] w-20 h-20 rounded-full bg-[#EF476F] opacity-60 blur-[20px] pointer-events-none" />

        {/* Index label */}
        <span className="absolute top-4 left-5 z-10 font-fraunces italic text-[13px] text-white/60 tracking-widest select-none">
          {index}
        </span>

        {/* Arrow link */}
        <a
          href={href}
          className={cn(
            "absolute top-4 right-5 z-10",
            "w-8 h-8 rounded-full bg-white/15 backdrop-blur-md",
            "flex items-center justify-center",
            "transition-all duration-300",
            "group-hover:bg-white/30 group-hover:rotate-45"
          )}
          aria-label="View project"
        >
          <ArrowUpRight className="w-3.5 h-3.5 text-white" strokeWidth={2} />
        </a>

        {/* Media preview — swap with your own image/mockup via the `preview` prop */}
        {preview ?? <DefaultPreview />}

        {/* Bottom arc cutout that blends into the card body */}
        <div
          className="absolute bottom-[-2px] left-0 right-0 h-[60px] bg-[#141414] scale-x-[1.1] pointer-events-none"
          style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
        />
      </div>

      {/* ── Card Body ─────────────────────────────────────── */}
      <CardContent className="px-7 pt-6 pb-6">

        {/* Company label */}
        <p className="font-dm text-[11px] font-medium text-[#FF8C5A] uppercase tracking-[1.5px] mb-3">
          {company}
        </p>

        {/* Headline */}
        <h2 className="font-fraunces font-bold text-[22px] leading-[1.25] text-[#f0ede8] tracking-tight mb-3">
          {title}{" "}
          <em className="not-italic text-[#FF8C5A]">{titleAccent}</em>
        </h2>

        {/* Description */}
        <p className="font-dm text-[13.5px] leading-[1.7] text-[#888888] mb-5">
          {description}
        </p>

        <Separator className="bg-[#252525] mb-5" />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={cn(
                "font-dm text-[11px] font-medium text-[#aaaaaa]",
                "bg-[#1e1e1e] border-[#2e2e2e] rounded-full",
                "px-3 py-1 tracking-[0.2px] cursor-default",
                "transition-all duration-200",
                "hover:bg-[rgba(255,107,53,0.12)] hover:text-[#FF8C5A] hover:border-[rgba(255,107,53,0.3)]"
              )}
            >
              {tag}
            </Badge>
          ))}
        </div>

      </CardContent>
    </Card>
  );
}

function ProjectCardList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard />
        </div>
    );
}

export default ProjectCardList;