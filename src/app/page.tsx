import Hero from "@/components/sections/Hero";
import Header from "@/components/Header";
import MyStory from "./Components/MyStory";
import MyWork from "./Components/MyWork";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import ClosingQuote from "@/components/sections/ClosingQuote";

function WebDeveloperPortfolio() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <Hero />
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <MyStory />
        <Experience />
        <MyWork />
        <Gallery />
        <ClosingQuote />
      </div>
    </main>
  );
}

export default WebDeveloperPortfolio;
