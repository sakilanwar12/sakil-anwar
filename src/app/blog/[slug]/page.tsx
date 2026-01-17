import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import BlogContent from "@/components/sections/Blog/BlogContent";
import BlogCard from "@/components/sections/Blog/BlogCard";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  blogPosts,
} from "@/components/sections/Blog/constant";
import { getSeoMeta } from "@/lib/get-seo-meta";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return getSeoMeta({
    title: `${post.title} - Sakil Anwar`,
    description: post.excerpt,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.category);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-32">
        <article className="container max-w-4xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="text-primary mb-8 inline-flex items-center gap-2 transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-semibold">Back to Blog</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="border-primary/50 bg-primary/10 text-primary rounded-full border px-4 py-2 text-sm font-semibold">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              <span className="from-primary bg-linear-to-r to-blue-600 bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>

            {/* Meta Info */}
            <div className="text-default-400 mb-6 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-default-300 text-xl">{post.excerpt}</p>
          </header>

          {/* Featured Image Placeholder */}
          <div className="border-border from-primary/20 mb-12 overflow-hidden rounded-2xl border-2 bg-linear-to-br to-blue-600/20">
            <div className="flex h-96 items-center justify-center">
              <div className="text-9xl opacity-20">📝</div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-12">
            <BlogContent content={post.content} />
          </div>

          {/* Tags */}
          <div className="border-border mb-12 border-y py-8">
            <div className="flex items-center gap-4">
              <Tag className="text-primary h-5 w-5" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-border bg-default text-default-300 hover:border-primary hover:text-primary rounded-lg border px-4 py-2 text-sm transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Author Info */}
          <div className="border-border bg-default mb-16 rounded-2xl border-2 p-8">
            <div className="flex items-center gap-4">
              <div className="from-primary flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br to-blue-600 text-2xl text-white">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-default-100 mb-1 text-xl font-bold">
                  {post.author.name}
                </h3>
                <p className="text-default-400">
                  Full-stack developer passionate about building modern web
                  applications
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold">
                Related{" "}
                <span className="from-primary bg-linear-to-r to-blue-600 bg-clip-text text-transparent">
                  Posts
                </span>
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
