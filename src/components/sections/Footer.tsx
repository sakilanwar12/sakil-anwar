"use client";

import { useEffect, useRef } from "react";
import { FacebookIcon, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import PageIcon from "../svg/PageIcon";
import SocialButtonLink from "../SocialButtonLink";
import GithubIcon from "../svg/GithubIcon";
import LinkedinIcon from "../svg/LinkedinIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="relative px-4 py-32" id="contact">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[rgba(0,212,255,0.03)] blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 h-[300px] w-[400px] rounded-full bg-[rgba(123,47,247,0.03)] blur-[120px]" />
      </div>

      <div className="contact-content relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-2xl font-bold text-white sm:mb-6 sm:text-3xl">
          {"Let's Build Something Amazing"}
        </h2>

        <p className="mb-6 text-sm text-[#8888aa] sm:text-base">
          Looking for a developer who can create high-performance, interactive
          web experiences?
        </p>

        <div className="mb-8 flex items-center justify-center gap-1 text-[#555588]">
          <MapPin className="size-5" />
          <span>Dhaka, Bangladesh</span>
        </div>

        {/* Contact form */}
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <ContactForm />
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            href="#"
            className="glass inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:border-[rgba(0,212,255,0.2)] hover:shadow-[0_0_15px_rgba(0,212,255,0.1)]"
          >
            <PageIcon />
            View Resume
          </Link>
        </div>

        <div className="mt-7 flex justify-center gap-6">
          <SocialButtonLink
            href="https://github.com/sakilanwar12"
            icon={<GithubIcon />}
          />
          <SocialButtonLink
            href="https://www.linkedin.com/in/md-sakil-anwar-4b6941241/"
            icon={<LinkedinIcon />}
          />
          <SocialButtonLink
            href="https://www.facebook.com/shakilahmed.omi.5"
            icon={<FacebookIcon />}
          />
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[rgba(255,255,255,0.05)] pt-6">
          <p className="text-xs text-[#555588]">
            © {new Date().getFullYear()} Sakil Anwar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
