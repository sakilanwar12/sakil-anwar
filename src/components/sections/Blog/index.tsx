"use client";

import BlogCard from "./BlogCard";
import SectionHeader from "@/components/SectionHeader";
import { blogPosts } from "./constant";
import usePagination from "@/hooks/usePagination";
import Pagination from "../Projects/Pagination";

const POSTS_PER_PAGE = 6;

function BlogSection() {
  const {
    currentPage,
    totalPages,
    paginatedData: paginatedPosts,
    goToPage,
  } = usePagination({
    data: blogPosts,
    itemsPerPage: POSTS_PER_PAGE,
    onPageChange: () => {
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  });

  const handlePageChange = (page: number) => {
    goToPage(page);
  };

  return (
    <div
      className="from-default-900 to-default-900 bg-linear-to-br via-black/60 py-32"
      id="blog"
    >
      <div className="container">
        <SectionHeader
          title="Blog"
          description="Insights, tutorials, and thoughts on web development, career growth, and the latest technologies"
        />

        {/* Blog Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default BlogSection;
