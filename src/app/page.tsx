"use client";
import FallingParticlesAnimation from "@/components/animations/falling-particles-animation";
import BannerSection from "@/components/sections/banner";

export default function Home() {
  return (
    <div className="relative">
      <FallingParticlesAnimation />
      <BannerSection />
    </div>
  );
}
