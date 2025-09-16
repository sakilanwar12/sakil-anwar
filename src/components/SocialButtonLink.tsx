import { cn } from "@/lib/utils";
import Link from "next/link";

interface ISocialButtonLink {
  className?: string;
  href: string;
  icon: React.ReactNode;
}
function SocialButtonLink({ className, href, icon }: ISocialButtonLink) {
  return (
    <Link
      href={href}
      className={cn(
        "text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg",
        className
      )}
    >
      {icon}
    </Link>
  );
}

export default SocialButtonLink;
