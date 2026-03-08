"use client";

import Link from "next/link";
import { menus } from "./menus";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X, Github, Linkedin, Twitter, Mail } from "lucide-react";

function SidebarMenu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <button className="group flex cursor-pointer flex-col gap-1.5 focus:outline-none">
          <span className="bg-default-200 h-0.5 w-6 transition-all duration-300 group-hover:bg-cyan-400"></span>
          <span className="bg-default-200 h-0.5 w-4 transition-all duration-300 group-hover:bg-cyan-400"></span>
          <span className="bg-default-200 h-0.5 w-6 transition-all duration-300 group-hover:bg-cyan-400"></span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="flex h-full w-[85%] max-w-sm flex-col border-r border-white/5 bg-[#080808] p-8">
        <DrawerTitle className="sr-only">Mobile Navigation Menu</DrawerTitle>
        <DrawerClose asChild>
          <button className="absolute top-8 right-8 z-9999 focus:outline-none">
            <X className="text-default-400 size-8 transition-colors hover:text-white" />
          </button>
        </DrawerClose>

        <div className="flex h-full flex-col justify-between pt-20">
          <nav>
            <ul className="flex flex-col gap-8">
              {menus.map((menu) => (
                <li key={menu.name} className="group">
                  <DrawerClose asChild>
                    <Link
                      href={menu.path}
                      className="text-default-200 inline-flex items-end gap-3 font-serif text-5xl font-bold transition-all hover:translate-x-2 hover:text-white"
                    >
                      {menu.name}
                      <span className="mb-2 size-2 rounded-full bg-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    </Link>
                  </DrawerClose>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-10">
            {/* Status Indicator */}
            <div className="text-default-400 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Available for collaboration
            </div>

            {/* Social Links */}
            <div className="flex gap-5">
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
                  className="text-default-400 flex size-10 items-center justify-center rounded-full border border-white/5 bg-white/5 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-400"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default SidebarMenu;
