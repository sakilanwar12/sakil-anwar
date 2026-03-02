"use client";

import Navbar from "./Nav";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SocialItems from "./SocialItems";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full py-5 transition-all duration-500",
        isScrolled ? "frosted-glass py-3" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex container items-center justify-between gap-6">
        <Navbar />
        <SocialItems />
      </div>
    </header>
  );
}

export default Header;
