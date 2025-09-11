import AppLogo from "../AppLogo";
import Navbar from "./Nav";

const Header = () => {
  return (
    <header className="py-2.5 fixed top-6 left-1/2 -translate-x-1/2 max-w-2xl px-6 rounded-full w-full mx-auto z-[9999] bg-default">
      <div className="flex items-center">
        <div className="flex-none">
          <AppLogo />
        </div>
        <div className="flex-1">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
