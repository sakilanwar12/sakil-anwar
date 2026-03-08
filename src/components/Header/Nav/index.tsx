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
          "text-default-200 hover:text-default-100 text-lg font-normal transition-colors",
          path === activePath && "text-default-100",
        )}
      >
        {name}
      </Link>
    </li>
  );
}

import SidebarMenu from "./SidebarMenu";

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-1 items-center justify-between gap-7">
      <div className="flex items-center gap-7">
        <AppLogo />
        <nav className="max-[991px]:hidden">
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

      <div className="min-[992px]:hidden">
        <SidebarMenu />
      </div>
    </div>
  );
}

export default Navbar;
