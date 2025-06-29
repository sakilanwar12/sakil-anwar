"use client";
import AboutMe from "@/components/sections/about-me";
import BannerSection from "@/components/sections/banner";
import Tools from "@/components/sections/tools/Tools";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <AboutMe />
      <Tools />
    </div>
  );
}
