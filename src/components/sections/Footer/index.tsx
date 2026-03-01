"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#000000] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <span className="mb-2 font-serif text-3xl font-bold text-white">
              Sakil Anwar
            </span>
            <span className="text-default-500 font-mono text-xs tracking-widest uppercase">
              Senior Frontend Engineer
            </span>
          </div>

          <div className="flex gap-8">
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
                className="text-default-400 rounded-full border border-white/5 bg-white/5 p-4 transition-all hover:border-[#3b82f6]/30 hover:text-[#3b82f6]"
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="group text-default-500 flex flex-col items-center gap-3 transition-colors hover:text-white"
          >
            <div className="rounded-full border border-white/10 p-4 transition-all group-hover:border-cyan-500/50">
              <ArrowUp
                size={20}
                className="transition-transform group-hover:-translate-y-1"
              />
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase">
              Back to top
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 md:flex-row">
          <p className="text-default-500 font-mono text-xs tracking-widest uppercase">
            Designed & Built by Sakil Anwar | © 2024
          </p>
          <div className="flex gap-10">
            <Link
              href="#"
              className="text-default-500 font-mono text-xs uppercase transition-colors hover:text-[#3b82f6]"
            >
              Licensing
            </Link>
            <Link
              href="#"
              className="text-default-500 font-mono text-xs uppercase transition-colors hover:text-[#3b82f6]"
            >
              Changelog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
