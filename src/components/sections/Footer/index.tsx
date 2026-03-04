"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#000000] px-6 pt-32 pb-12">
      {/* Top Border with Glow */}
      <div className="via-default-500/20 absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-md" />

      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-24 grid grid-cols-1 items-start gap-12 md:grid-cols-3">
          {/* Left Column: Brandt & Role */}
          <div className="flex flex-col space-y-4">
            <div>
              <span className="font-serif text-4xl font-bold tracking-tight text-white">
                Sakil{" "}
                <span className="text-default-200 font-medium">Anwar</span>
              </span>
              <p className="text-default-200 mt-2 font-mono text-xs tracking-[0.3em] uppercase">
                Senior Frontend Developer
              </p>
            </div>
            <p className="text-default-300 font-serif text-sm italic">
              Crafting interfaces that feel alive.
            </p>
          </div>

          {/* Center Column: Social Find Me */}
          <div className="flex flex-col items-center space-y-6">
            <span className="text-default-200 font-mono text-[10px] tracking-[0.4em] uppercase">
              Find me at
            </span>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/sakilanwar12" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/md-sakil-anwar/",
                },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:sakilanwar627@gmail.com" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="text-default-200 flex size-12 items-center justify-center rounded-full border border-white/5 bg-white/2 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-400"
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Navigation & Status */}
          <div className="flex flex-col items-end space-y-8">
            <div className="flex items-center gap-8">
              <Link
                href="#about"
                className="text-default-200 font-mono text-xs tracking-widest uppercase transition-colors hover:text-white"
              >
                About
              </Link>
              <Link
                href="#work"
                className="text-default-200 font-mono text-xs tracking-widest uppercase transition-colors hover:text-white"
              >
                My Works
              </Link>
              <Link
                href="#contact"
                className="border-default-500/30 text-default-200 rounded-lg border px-6 py-2.5 font-mono text-xs tracking-widest uppercase transition-all hover:border-cyan-500/50 hover:text-cyan-400"
              >
                Contact Me
              </Link>
            </div>
            <div className="text-default-200 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 md:flex-row">
          <div className="text-default-200 font-mono text-[10px] tracking-[0.2em] uppercase">
            Designed & Built by{" "}
            <span className="text-default-300">Sakil Anwar</span> - © 2026
          </div>

          <div className="text-default-200/60 font-serif text-sm italic">
            Made with{" "}
            <span className="text-default-300/60 not-italic">precision</span> &
            intention
          </div>

          <button
            onClick={scrollToTop}
            className="group hover:border-default-400/30 flex size-12 cursor-pointer items-center justify-center rounded-full border border-default-100/20 bg-white/2 transition-all"
          >
            <ArrowUp
              size={18}
              className="text-default-100/60 transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
