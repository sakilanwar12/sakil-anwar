import BlogSection from "@/components/sections/Blog";
import Header from "@/components/Header";
import { getSeoMeta } from "@/lib/get-seo-meta";

export const metadata = getSeoMeta({
  title: "Blog - Sakil Anwar",
  description:
    "Insights, tutorials, and thoughts on web development, career growth, and the latest technologies",
});

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32">
        <BlogSection />
      </div>
    </div>
  );
}
