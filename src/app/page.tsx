import Hero from "@/components/sections/Hero";
import Header from "@/components/Header";
import MyStory from "./Components/MyStory";
import MyWork from "./Components/MyWork";

function WebDeveloperPortfolio() {
  return (
    <div>
      <Header />
      <div className="px-24">
        <Hero />
        <MyStory />
        <MyWork />
      </div>
    </div>
  );
}

export default WebDeveloperPortfolio;
