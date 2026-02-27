"use client";

import { TBlogPost } from "./types";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useTiltEffect } from "@/hooks/useTiltEffect";

function BlogCard({ post }: { post: TBlogPost }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useTiltEffect(5);

  return (
    <div className="blog-card">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card glass-card group relative overflow-hidden rounded-2xl transition-all duration-300 hover:border-[rgba(0,212,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent opacity-70" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="glass rounded-full px-3 py-1 text-xs font-medium text-[#00d4ff]">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Meta */}
          <div className="mb-3 flex items-center gap-4 text-xs text-[#555588]">
            <span className="flex items-center gap-1">
              <Calendar className="size-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" />
              {post.readTime}
            </span>
          </div>

          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-white transition-colors group-hover:text-[#00d4ff]">
            {post.title}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm text-[#8888aa]">
            {post.excerpt}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#00d4ff] transition-all hover:gap-2"
          >
            Read More
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
