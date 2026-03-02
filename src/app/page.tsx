import Header from "@/components/Header";
import MyWork from "./Components/MyWork";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import ClosingQuote from "./Components/ClosingQuote";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "./Components/Hero";

function WebDeveloperPortfolio() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <Hero />
      <MyWork />
      <Experience />
      <TechStack />
      <Skills />
      <ClosingQuote />
      <Contact />
      <Footer />
    </main>
  );
}

export default WebDeveloperPortfolio;
