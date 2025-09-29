"use client";

import useTargetScroll from "@/hooks/useTargetScroll";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menus = [
  {
    name: "Home",
    path: "hero",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Shop",
    path: "shop",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
];
function Navbar() {
  const scrollToTarget = useTargetScroll();
  const [activeMenu, setActiveMenu] = useState<string | null>("hero");

  return (
    <nav>
      <ul className="flex gap-7">
        {menus.map((menu) => {
          return (
            <li
              key={menu.name}
              className={cn(
                "text-default-500 hover:text-primary cursor-pointer text-lg capitalize transition-all duration-300 select-none",
                {
                  "text-primary": activeMenu === menu.path,
                },
              )}
              onClick={() => {
                scrollToTarget(`#${menu.path}`);
                setActiveMenu(menu.path);
              }}
            >
              {menu.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
