
import Navbar from "./Nav";
import BookACall from "./BookACall";

function Header() {
  return (
    <header className="fixed top-4 left-1/2 z-9999  w-full -translate-x-1/2  px-10 py-3 ">
      <div className="flex items-center">
        <Navbar />
        <BookACall />
      </div>
    </header>
  );
}

export default Header;
