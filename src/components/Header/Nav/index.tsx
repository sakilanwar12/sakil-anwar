"use client";

import Link from "next/link";
import { menus } from "./menus";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-xl font-normal text-default-400 hover:text-default-100">
      {children}
    </Link>
  );
}
function NavItem({ name, path }: { name: string; path: string }) {
  return (
    <li>
      <NavLink href={`/${path}`}>{name}</NavLink>
    </li>
  );
}
function Navbar() {
  return (
    <div className="flex-1">
      <nav>
        <ul className="flex gap-7">
          {menus.map((menu) => {
            return <NavItem key={menu.name} name={menu.name} path={menu.path} />;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
