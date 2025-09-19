import { Phone, Sun } from "lucide-react";
import AppLogo from "../AppLogo";
import Navbar from "./Nav";
import CopyButton from "../CopyButton";

function Header() {
  return (
    <header className="py-2.5 fixed top-6 left-1/2 -translate-x-1/2 max-w-2xl mx-auto px-3 rounded-full w-full  z-[9999] bg-default border border-border backdrop-blur-2xl">
      <div className="flex items-center">
        <div className="flex-none">
          <AppLogo />
        </div>
        <div className="flex-1 flex justify-center">
          <Navbar />
        </div>

        <CopyButton
          text="01823231725"
          copySuccessMessage="Copied phone number to clipboard"
          className="flex-none grid place-content-center hover:border-primary cursor-pointer text-default-500 hover:text-primary size-7 rounded-full bg-card border border-border"
        >
          <Phone className="size-4" />
        </CopyButton>
      </div>
    </header>
  );
}

export default Header;
