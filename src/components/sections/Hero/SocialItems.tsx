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
      className="text-[#555588] transition-all duration-300 hover:text-[#00d4ff] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]"
    >
      {icon}
    </Link>
  );
}

function SocialItems() {
  return (
    <div className="glass-strong fixed top-1/2 right-5 z-50 hidden -translate-y-1/2 flex-col items-center gap-3.5 rounded-full px-2.5 py-3.5 lg:flex">
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
