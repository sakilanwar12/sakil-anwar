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
    name: "Contact",
    path: "contact",
  },
];
function Navbar() {
  const scrollToTarget = useTargetScroll();
  const [activeMenu, setActiveMenu] = useState<string | null>("hero");

  return (
    <nav>
      <ul className="flex gap-2.5 md:gap-5">
        {menus.map((menu) => {
          return (
            <li
              key={menu.name}
              className={cn(
                "text-xs md:text-sm uppercase text-default-400 hover:text-primary transition-all duration-300 cursor-pointer select-none",
                {
                  "text-primary": activeMenu === menu.path,
                }
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
