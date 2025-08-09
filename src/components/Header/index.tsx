import AppLogo from "../AppLogo";
import Navbar from "./Nav";

const Header = () => {
  return (
    <header className="border-b border-border">
      <div className="container py-6">
        <div className="flex">
          <div className="flex-none">
            <AppLogo />
          </div>
          <div className="flex-1">
            <Navbar/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
