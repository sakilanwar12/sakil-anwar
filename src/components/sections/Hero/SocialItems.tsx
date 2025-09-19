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
      className="hover:text-primary cursor-pointer"
    >
      {icon}
    </Link>
  );
}
function SocialItems() {
  return (
    <div className="hidden lg:flex flex-col items-center gap-3.5 fixed top-1/2 -translate-y-1/2 right-5 bg-background border border-border  px-2.5 py-3.5 rounded-full">
      <SocialLink
        icon={<GithubIcon className="size-4" />}
        socialLink="https://github.com/sakilanwar12"
      />
      <SocialLink
        icon={<Linkedin className="size-4" />}
        socialLink="https://www.linkedin.com/in/md-sakil-anwar-4b6941241/"
      />
      <SocialLink icon={<FacebookIcon className="size-4" />} socialLink="https://www.facebook.com/shakilahmed.omi.5" />
      <SocialLink icon={<TwitterIcon className="size-4" />} socialLink="#" />
    </div>
  );
}

export default SocialItems;
