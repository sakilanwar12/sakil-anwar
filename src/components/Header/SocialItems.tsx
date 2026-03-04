import {
  FacebookIcon,
  Github,
  GithubIcon,
  Linkedin,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface ISocialLink {
  socialLink: string;
  icon: React.ReactNode;
}

function SocialLink({ socialLink, icon }: ISocialLink) {
  return (
    <Link
      href={socialLink}
      target="_blank"
      className="text-muted-foreground cursor-pointer transition-colors hover:text-[#3b82f6]"
    >
      {icon}
    </Link>
  );
}

function SocialItems({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <SocialLink
        icon={<Linkedin className="size-6" />}
        socialLink="https://www.linkedin.com/in/md-sakil-anwar-4b6941241/"
      />
      <SocialLink
        icon={<FacebookIcon className="size-6" />}
        socialLink="https://www.facebook.com/shakilahmed.omi.5"
      />
      <SocialLink
        icon={<Github className="size-6" />}
        socialLink="https://github.com/sakilanwar12"
      />
    </div>
  );
}

export default SocialItems;
