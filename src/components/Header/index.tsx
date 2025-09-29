import AppLogo from "../AppLogo";
import Navbar from "./Nav";
import BookACall from "./BookACall";

function Header() {
  return (
    <header className="bg-default border-border fixed top-6 left-1/2 z-[9999] container w-full -translate-x-1/2 rounded-xl border-2 px-4 py-3 backdrop-blur-2xl">
      <div className="flex items-center">
        <div className="flex-none">
          <AppLogo />
        </div>
        <div className="flex flex-1 justify-center">
          <Navbar />
        </div>

        <BookACall />
      </div>
    </header>
  );
}

export default Header;
