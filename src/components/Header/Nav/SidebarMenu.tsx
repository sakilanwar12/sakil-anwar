
import Link from "next/link";
import { menus } from "./menus";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";

function SidebarMenu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <div className="group flex cursor-pointer flex-col gap-1.5">
          <span className="bg-default-400 group-hover:bg-default-100 h-1 w-5 transition-all duration-300"></span>
          <span className="bg-default-400 group-hover:bg-default-100 h-1 w-4 transition-all duration-300"></span>
          <span className="bg-default-400 group-hover:bg-default-100 h-1 w-5 transition-all duration-300"></span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="flex h-full w-full flex-col justify-center p-8">
        <DrawerClose>
          <div className="absolute top-6 left-6 z-9999">
            <X className="text-default-400 hover:text-default-100 size-10 cursor-pointer" />
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
export default SidebarMenu;