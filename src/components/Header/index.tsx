import Navbar from "./Nav";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
function Header() {
  return (
    <header className="bg-background fixed top-0 left-1/2 z-10 w-full -translate-x-1/2 px-10 py-3 pt-6">
      <div className="flex items-center gap-4">
        <Navbar />
        <Button
          asChild
          className="bg-border hover:bg-primary group w-[172px] overflow-hidden rounded-lg text-2xl"
          size="xl"
        >
          <Link href="https://cal.com/sakil-anwar-f6czuo/15min" target="_blank">
            <CalendarDays className="ml-7 size-5 transition-all duration-300 group-hover:-ml-8" />
            Book a Call
            <ChevronRight className="size-6" />
          </Link>
        </Button>
        <Link
          href={`/contact`}
          className="text-default-400 hover:text-default-100 ms-4 text-3xl font-normal"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
}

export default Header;
