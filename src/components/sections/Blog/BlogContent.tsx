"use client";

interface BlogContentProps {
  content: string;
}

function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <div
        className="text-default-200 space-y-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default BlogContent;
