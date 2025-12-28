import { ObjectId } from "mongodb";

// Home Section
export interface HomeSection {
  _id?: ObjectId;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    ctaText?: string;
    ctaLink?: string;
  };
  about: {
    title: string;
    description: string;
    image?: string;
    highlights: string[];
  };
  updatedAt: Date;
}

// Skills
export interface Skill {
  _id?: ObjectId;
  name: string;
  category: string; // e.g., "Frontend", "Backend", "Tools"
  level: number; // 1-100
  icon?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

// Projects
export interface Project {
  _id?: ObjectId;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

// Blog Posts
export interface BlogPost {
  _id?: ObjectId;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  tags: string[];
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Contact Messages
export interface ContactMessage {
  _id?: ObjectId;
  name: string;
  email: string;
  subject?: string;
  message: string;
  read: boolean;
  replied: boolean;
  createdAt: Date;
}

// Admin User
export interface AdminUser {
  _id?: ObjectId;
  email: string;
  password: string; // hashed
  name: string;
  role: "admin" | "editor";
  createdAt: Date;
  lastLogin?: Date;
}
