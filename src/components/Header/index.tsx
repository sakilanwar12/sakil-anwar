import { Sun } from "lucide-react";
import AppLogo from "../AppLogo";
import Navbar from "./Nav";

const Header = () => {
  return (
    <header className="py-2.5 fixed top-6 left-1/2 -translate-x-1/2 container px-6 rounded-full w-full mx-auto z-[9999] bg-default border border-border backdrop-blur-2xl">
      <div className="flex items-center">
        <div className="flex-none">
          <AppLogo />
        </div>
        <div className="flex-1 flex justify-center">
          <Navbar />
        </div>
        <div className="flex-none cursor-pointer">
          <Sun className="size-6"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
