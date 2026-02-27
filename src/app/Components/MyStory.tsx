"use client";
import { smoothScrollTo } from "@/lib/smoothScrollTo";
import { useRef } from "react";



function MyStory() {
  const storyRef = useRef<HTMLDivElement>(null);

  const scrollToStory = () => {
    if (!storyRef.current) return;
    const targetY =
      storyRef.current.getBoundingClientRect().top + window.scrollY - 32; 
    smoothScrollTo(targetY, 1200); 
  };

  return (
    <div className="px-6">
      <p className="text-5xl leading-[68px]">
        {
          "Over the years, I’ve broken things, fixed them, solved problems, shipped products, and moved the needle. I’ve led teams, improved systems, and turned complex ideas into clean, scalable interfaces.  I’m a Senior Frontend Developer. This site is my place to humble-brag about the products I’ve built and the challenges I’ve conquered."
        }
      </p>
      <button
        onClick={scrollToStory}
        className="text-default-200 hover:text-default-100 border-default-200 hover:border-primary mt-20 inline-block cursor-pointer border-x-0 border-t-0 border-b-3 bg-transparent text-2xl font-medium transition-all duration-300 ease-in-out"
      >
        This is my Story
      </button>
      <div className="h-[200px]"></div>
      <h4 className="text-2xl leading-[68px] uppercase">Highlights</h4>
      <div ref={storyRef}></div>
    </div>
  );
}

export default MyStory;
