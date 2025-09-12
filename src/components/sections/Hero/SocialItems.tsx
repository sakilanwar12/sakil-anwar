import { FacebookIcon, GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";

function SocialItems() {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <Link
        href="#contact"
        className="size-9 rounded-full flex items-center justify-center bg-background hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
      >
        <Linkedin className="size-4" />
      </Link>
      <Link
        href="#contact"
        className="size-9 rounded-full flex items-center justify-center bg-background hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
      >
        <GithubIcon className="size-4" />
      </Link>
      <Link
        href="#contact"
        className="size-9 rounded-full flex items-center justify-center bg-background hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
      >
        <FacebookIcon className="size-4" />
      </Link>
    </div>
  );
}

export default SocialItems;
