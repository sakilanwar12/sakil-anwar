import Navbar from "./Nav";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
function Header() {
  return (
    <header className="frosted-glass fixed top-0 left-0 z-50 w-full px-10 py-4 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Navbar />
        <div className="flex items-center gap-8">
          <Button
            asChild
            className="glow-button bg-primary hover:bg-primary/90 group overflow-hidden rounded-full px-8 text-xl font-medium text-white"
            size="lg"
          >
            <Link
              href="https://cal.com/sakil-anwar-f6czuo/15min"
              target="_blank"
            >
              <CalendarDays className="mr-2 size-5" />
              Book a Call
              <ChevronRight className="ml-1 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Link
            href={`/contact`}
            className="text-default-400 hover:text-primary text-xl font-medium transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
