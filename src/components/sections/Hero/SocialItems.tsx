import { FacebookIcon, GithubIcon, Linkedin, TwitterIcon } from "lucide-react";
import Link from "next/link";

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

function SocialItems() {
  return (
    <div className="fixed top-1/2 right-6 z-50 hidden -translate-y-1/2 flex-col items-center gap-6 rounded-full border border-white/5 bg-[#080808]/80 px-3 py-6 shadow-2xl backdrop-blur-xl lg:flex">
      <SocialLink
        icon={<GithubIcon className="size-4" />}
        socialLink="https://github.com/sakilanwar12"
      />
      <SocialLink
        icon={<Linkedin className="size-4" />}
        socialLink="https://www.linkedin.com/in/md-sakil-anwar-4b6941241/"
      />
      <SocialLink
        icon={<FacebookIcon className="size-4" />}
        socialLink="https://www.facebook.com/shakilahmed.omi.5"
      />
      <SocialLink icon={<TwitterIcon className="size-4" />} socialLink="#" />
    </div>
  );
}

export default SocialItems;
