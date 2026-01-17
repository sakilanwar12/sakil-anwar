"use client";

import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TBlogPost } from "./types";
import { motion } from "motion/react";

interface BlogCardProps {
  post: TBlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group border-border bg-default hover:border-primary hover:shadow-primary/20 relative overflow-hidden rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="from-primary/20 relative h-48 overflow-hidden bg-linear-to-br to-blue-600/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">📝</div>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="border-primary/50 bg-default/80 text-primary rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-default-100 group-hover:text-primary mb-3 text-xl font-bold transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-default-400 mb-4 line-clamp-3">{post.excerpt}</p>

          {/* Meta Info */}
          <div className="text-default-500 mb-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-default-900/50 text-default-300 rounded-md px-2 py-1 text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="text-primary flex items-center gap-2 transition-all group-hover:gap-3">
            <span className="font-semibold">Read More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default BlogCard;
