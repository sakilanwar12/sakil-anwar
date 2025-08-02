import AboutMe from "@/components/sections/about-me";
import BannerSection from "@/components/sections/banner";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/tools/Tools";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <AboutMe />
      <Tools />
      <Experience />
      <Projects />
    </div>
  );
}
