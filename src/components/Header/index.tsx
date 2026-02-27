"use client";

import AppLogo from "../AppLogo";
import Navbar from "./Nav";
import BookACall from "./BookACall";
import { useEffect, useRef, useState } from "react";

function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-6 left-1/2 z-[9999] container w-full -translate-x-1/2 rounded-2xl px-4 py-3 transition-all duration-500 ${
        scrolled
          ? "glass-strong border-[rgba(0,212,255,0.1)] shadow-[0_0_30px_rgba(0,212,255,0.05)]"
          : "glass border-transparent"
      }`}
    >
      <div className="flex items-center">
        <div className="flex-none">
          <AppLogo />
        </div>
        <div className="flex flex-1 justify-center">
          <Navbar />
        </div>
        <BookACall />
      </div>
    </header>
  );
}

export default Header;
