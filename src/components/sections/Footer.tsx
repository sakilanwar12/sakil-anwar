import { MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import PageIcon from "../svg/PageIcon";
import SocialButtonLink from "../SocialButtonLink";
import GithubIcon from "../svg/GithubIcon";
import LinkedinIcon from "../svg/LinkedinIcon";
import TwitterIcon from "../svg/TwitterIcon";

function Footer() {
  return (
    <footer className="py-20 px-4 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-default-1000">
          Let's Build Something Amazing
        </h2>

        <p className="text-sm sm:text-base text-default-400 mb-6">
          Looking for a developer who can create high-performance, interactive
          web experiences?
        </p>

        <div className="flex items-center justify-center gap-1 text-default-400 mb-8">
          <MapPin className="size-5" />
          <span>Dhaka, Bangladesh</span>
        </div>
        <ContactForm />
        <div className="flex justify-center mt-7">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#21262D] border border-default-800  rounded-lg font-medium hover:bg-default-900 transition-colors"
          >
            <PageIcon />
            View Resume
          </Link>
        </div>
        <div className="flex justify-center gap-6 mt-7">
          <SocialButtonLink href="" icon={<GithubIcon/>}/>
          <SocialButtonLink href="" icon={<LinkedinIcon/>}/>
          <SocialButtonLink href="" icon={<TwitterIcon/>}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
