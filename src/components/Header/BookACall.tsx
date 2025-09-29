import { CalendarDays, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

function BookACall() {
  return (
    <Button
      asChild
      className="bg-border hover:bg-primary group w-[120px] overflow-hidden rounded-lg"
      size="lg"
    >
      <Link href="https://cal.com/sakil-anwar-f6czuo/15min" target="_blank">
        <CalendarDays className="ml-6 transition-all duration-300 group-hover:-ml-8" />
        Book a Call
        <ChevronRight className="size-4" />
      </Link>
    </Button>
  );
}

export default BookACall;
