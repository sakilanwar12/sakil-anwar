export type TBlogCategory = "all" | "web-dev" | "tutorial" | "career" | "tools";

export type TBlogPost = {
  id: string | number;
  title: string;
  slug: string;
  category: TBlogCategory;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  tags: string[];
};
