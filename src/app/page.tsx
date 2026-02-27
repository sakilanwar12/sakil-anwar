import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Header from "@/components/Header";
import MyStory from "./Components/MyStory";

function WebDeveloperPortfolio() {
  return (
    <div>
      <Header />
      <Hero />
      <MyStory/>
      <Skills />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
}

export default WebDeveloperPortfolio;
