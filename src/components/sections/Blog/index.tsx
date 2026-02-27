"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "./BlogCard";
import { blogPosts } from "./constant";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Blog() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-heading",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        ".blog-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-grid",
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-4 py-32" id="blog">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/3 bottom-1/3 h-[400px] w-[500px] rounded-full bg-[rgba(123,47,247,0.03)] blur-[150px]" />
      </div>

      <div className="relative z-10 container">
        <div className="blog-heading">
          <SectionHeader
            title="Blog"
            description="Thoughts and tutorials on web development"
          />
        </div>

        <div className="blog-grid mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 6).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
