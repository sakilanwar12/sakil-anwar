"use client";

import useTargetScroll from "@/hooks/useTargetScroll";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

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
    name: "Resume",
    path: "resume",
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
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

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
                  "text-primary":
                    activeMenu === menu.path ||
                    (menu.path === "resume" && pathname === "/resume") ||
                    (menu.path === "blog" && pathname.startsWith("/blog")),
                },
              )}
              onClick={() => {
                if (menu.path === "blog" || menu.path === "resume") {
                  if (activeMenu === menu.path && !isHomePage) {
                    // already on the page
                  } else {
                    router.push(`/${menu.path}`);
                  }
                } else {
                  if (!isHomePage) {
                    router.push(`/#${menu.path}`);
                  } else {
                    scrollToTarget(`#${menu.path}`);
                    setActiveMenu(menu.path);
                  }
                }
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
