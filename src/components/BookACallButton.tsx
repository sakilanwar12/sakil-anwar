import Link from "next/link";
import { Button } from "./ui/button";
import { CalendarDays, ChevronRight } from "lucide-react";

function BookACallButton() {
  return (
    <Button
      asChild
      className="glow-button pulse-blue bg-primary hover:bg-primary/90 group overflow-hidden rounded-full px-8 text-xl font-medium text-white"
      size="lg"
    >
      <Link href="https://cal.com/sakil-anwar-f6czuo/15min" target="_blank">
        <CalendarDays className="mr-2 size-5" />
        Book a Call
        <ChevronRight className="ml-1 size-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}

export default BookACallButton;
