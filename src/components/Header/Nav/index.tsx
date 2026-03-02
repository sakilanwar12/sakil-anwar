"use client";

import Link from "next/link";
import { menus } from "./menus";
import AppLogo from "@/components/AppLogo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface INavItem {
  name: string;
  path: string;
  activePath: string;
}
function NavItem({ name, path, activePath }: INavItem) {
  return (
    <li>
      <Link
        href={path}
        className={cn(
          "text-default-200 hover:text-default-100 text-2xl font-normal transition-colors",
          path === activePath && "text-default-100",
        )}
      >
        {name}
      </Link>
    </li>
  );
}

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-1 items-center gap-7">
      <AppLogo />
      <nav>
        <ul className="flex gap-7">
          {menus.map((menu) => {
            return (
              <NavItem
                key={menu.name}
                name={menu.name}
                path={menu.path}
                activePath={pathname}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
