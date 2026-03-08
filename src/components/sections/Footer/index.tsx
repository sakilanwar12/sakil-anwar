"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#050505] px-6 pt-24 pb-12">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-1 w-1/2 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.05),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Sakil{" "}
                <span className="text-default-400 font-medium">Anwar</span>
              </span>
              <p className="text-default-50 mt-2 font-mono text-[10px] tracking-[0.3em] uppercase">
                Senior Frontend Engineer
              </p>
            </div>
            <p className="text-default-100 max-w-[200px] font-serif text-xs leading-relaxed italic">
              Building digital experiences with precision, intention, and a
              focus on performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-white uppercase">
              Navigation
            </span>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Work", href: "/work" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-default-200 font-mono text-[11px] tracking-widest uppercase transition-colors hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col space-y-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-white uppercase">
              Connect
            </span>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Github, href: "https://github.com/sakilanwar12" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/md-sakil-anwar/",
                },
                { icon: Mail, href: "mailto:sakilanwar627@gmail.com" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="text-default-400 flex size-10 items-center justify-center rounded-xl border border-white/5 bg-white/2 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-400"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>

          {/* Status & CTA */}
          <div className="flex flex-col space-y-6 lg:items-end">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest text-emerald-500 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Open for collaboration
            </div>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white/5 px-6 py-3 font-mono text-[10px] tracking-widest text-white uppercase transition-all hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Start a Project
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
          <div className="text-default-100 text-center font-mono text-[9px] tracking-[0.2em] uppercase md:text-left">
            Designed & Built by <span className="text-white">Sakil Anwar</span>{" "}
            • © 2026
          </div>

          <div className="text-default-600 hidden font-serif text-[11px] italic md:block">
            Refining the web, one pixel at a time.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/2 transition-all hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <ArrowUp
              size={16}
              className="text-default-400 transition-transform group-hover:-translate-y-1 group-hover:text-cyan-400"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
