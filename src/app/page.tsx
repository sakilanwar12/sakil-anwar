import Header from "@/components/Header";
import AboutMe from "@/components/sections/about-me";
import BannerSection from "@/components/sections/banner";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/tools/Tools";

export default function Home() {
  return (
    <div>
      <Header />
      <BannerSection />
      <Projects />
      {/* <AboutMe />
      <Tools />
      <Experience /> */}
      <Footer />
    </div>
  );
}
