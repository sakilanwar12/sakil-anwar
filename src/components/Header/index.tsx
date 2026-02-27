import Navbar from "./Nav";
import BookACall from "./BookACall";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 pt-6 left-1/2 z-10 w-full bg-background -translate-x-1/2 px-10 py-3">
      <div className="flex items-center gap-4">
        <Navbar />
        <BookACall />
        <Link
          href={`/contact`}
          className="text-default-400 hover:text-default-100 text-xl font-normal ms-4"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
}

export default Header;
