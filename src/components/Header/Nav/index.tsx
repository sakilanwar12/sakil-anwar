"use client";

import Link from "next/link";
import { menus } from "./menus";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { X } from "lucide-react";

function NavItem({ name, path }: { name: string; path: string }) {
  return (
    <li>
      <Link
        href={`/${path}`}
        className="text-default-400 hover:text-default-100 text-xl font-normal"
      >
        {name}
      </Link>
    </li>
  );
}
function SidebarMenu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <div className="group flex cursor-pointer flex-col gap-1">
          <span className="bg-default-400 group-hover:bg-default-100 h-0.5 w-4 transition-all duration-300"></span>
          <span className="bg-default-400 group-hover:bg-default-100 h-0.5 w-3 transition-all duration-300"></span>
          <span className="bg-default-400 group-hover:bg-default-100 h-0.5 w-4 transition-all duration-300"></span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="flex h-full w-full flex-col justify-center p-8">
        <DrawerClose>
          <div className="absolute top-6 left-6 z-9999">
            <X className="text-default-400 hover:text-default-100 size-6 cursor-pointer" />
          </div>
        </DrawerClose>
        <nav>
          <ul className="flex flex-col gap-10">
            {menus.map((menu) => (
              <li key={menu.name} className="group">
                <Link
                  href={`/${menu.path}`}
                  className="text-default-400 hover:text-default-200 inline-flex text-7xl font-bold transition-colors duration-300"
                >
                  {menu.name}
                  <span className="bg-default-400 group-hover:bg-default-200 mb-3 hidden size-2 self-end rounded-full transition-all duration-300 group-hover:block"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
function Navbar() {
  return (
    <div className="flex flex-1 items-center gap-7">
      <SidebarMenu />
      <nav>
        <ul className="flex gap-7">
          {menus.map((menu) => {
            return (
              <NavItem key={menu.name} name={menu.name} path={menu.path} />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
