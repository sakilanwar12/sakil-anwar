import AppLogo from "../AppLogo";
import Navbar from "./Nav";

const Header = () => {
  return (
    <header className="py-4 fixed top-0 left-0 w-full z-[9999]">
      <div className="container">
        <div className="flex items-center">
          <div className="flex-none">
            <AppLogo />
          </div>
          <div className="flex-1">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
