import { BookOpen, Code, Briefcase, Wrench, Globe } from "lucide-react";
import { TBlogPost, TBlogCategory } from "./types";

export const blogCategories = [
  { id: "all" as TBlogCategory, name: "All Posts", icon: Globe },
  { id: "web-dev" as TBlogCategory, name: "Web Development", icon: Code },
  { id: "tutorial" as TBlogCategory, name: "Tutorials", icon: BookOpen },
  { id: "career" as TBlogCategory, name: "Career", icon: Briefcase },
  { id: "tools" as TBlogCategory, name: "Tools & Tips", icon: Wrench },
];

export const blogPosts: TBlogPost[] = [
  {
    id: crypto.randomUUID(),
    title: "Building Modern Web Applications with Next.js 14",
    slug: "building-modern-web-apps-nextjs-14",
    category: "web-dev",
    excerpt:
      "Explore the latest features in Next.js 14 including Server Actions, improved performance, and the new App Router. Learn how to build production-ready applications.",
    content: `
# Building Modern Web Applications with Next.js 14

Next.js 14 has revolutionized the way we build web applications. In this comprehensive guide, we'll explore the key features and best practices.

## Server Actions

Server Actions allow you to write server-side code directly in your components without creating API routes. This simplifies data mutations and form handling significantly.

\`\`\`typescript
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title')
  // Database operation
  await db.post.create({ data: { title } })
}
\`\`\`

## App Router Benefits

The App Router provides:
- Improved performance with React Server Components
- Better code organization with layouts
- Built-in loading and error states
- Streaming and Suspense support

## Performance Optimizations

Next.js 14 includes automatic optimizations like:
- Image optimization with next/image
- Font optimization
- Script optimization
- Automatic code splitting

Start building with Next.js 14 today and experience the future of web development!
    `,
    image: "/images/blog/nextjs-14.jpg",
    author: {
      name: "Sakil Anwar",
      avatar: "/images/avatar.jpg",
    },
    date: "2026-01-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development", "JavaScript"],
  },
  {
    id: crypto.randomUUID(),
    title: "Mastering TypeScript: Advanced Types and Patterns",
    slug: "mastering-typescript-advanced-types",
    category: "tutorial",
    excerpt:
      "Deep dive into TypeScript's advanced type system. Learn about utility types, conditional types, mapped types, and how to leverage them in real-world applications.",
    content: `
# Mastering TypeScript: Advanced Types and Patterns

TypeScript's type system is incredibly powerful. Let's explore advanced patterns that will level up your TypeScript skills.

## Utility Types

TypeScript provides several utility types that transform existing types:

\`\`\`typescript
// Partial - makes all properties optional
type PartialUser = Partial<User>

// Pick - select specific properties
type UserPreview = Pick<User, 'name' | 'email'>

// Omit - exclude specific properties
type UserWithoutPassword = Omit<User, 'password'>
\`\`\`

## Conditional Types

Create types that depend on conditions:

\`\`\`typescript
type IsString<T> = T extends string ? true : false

type Result1 = IsString<'hello'> // true
type Result2 = IsString<42> // false
\`\`\`

## Mapped Types

Transform properties of existing types:

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

type ReadonlyUser = Readonly<User>
\`\`\`

These patterns will help you write more type-safe and maintainable code!
    `,
    image: "/images/blog/typescript.jpg",
    author: {
      name: "Sakil Anwar",
      avatar: "/images/avatar.jpg",
    },
    date: "2026-01-12",
    readTime: "10 min read",
    tags: ["TypeScript", "Programming", "Tutorial", "Types"],
  },
  {
    id: crypto.randomUUID(),
    title: "From Junior to Senior Developer: A Roadmap",
    slug: "junior-to-senior-developer-roadmap",
    category: "career",
    excerpt:
      "A comprehensive guide on transitioning from a junior to senior developer role. Learn the technical skills, soft skills, and mindset shifts required for career growth.",
    content: `
# From Junior to Senior Developer: A Roadmap

Making the leap from junior to senior developer requires more than just technical skills. Here's your roadmap to success.

## Technical Excellence

### Master Your Stack
- Deep understanding of your primary language
- Know the ecosystem and best practices
- Stay updated with latest features

### System Design
- Learn architectural patterns
- Understand scalability and performance
- Practice designing complex systems

### Code Quality
- Write clean, maintainable code
- Master testing strategies
- Conduct thorough code reviews

## Soft Skills Matter

### Communication
- Explain technical concepts clearly
- Write comprehensive documentation
- Present ideas effectively

### Leadership
- Mentor junior developers
- Lead technical discussions
- Make architectural decisions

### Problem Solving
- Break down complex problems
- Consider multiple solutions
- Think about long-term implications

## Continuous Learning

Stay curious and keep learning:
- Read technical books and blogs
- Contribute to open source
- Attend conferences and meetups
- Build side projects

The journey takes time, but with dedication and the right approach, you'll get there!
    `,
    image: "/images/blog/career-growth.jpg",
    author: {
      name: "Sakil Anwar",
      avatar: "/images/avatar.jpg",
    },
    date: "2026-01-10",
    readTime: "12 min read",
    tags: ["Career", "Development", "Growth", "Leadership"],
  },
  {
    id: crypto.randomUUID(),
    title: "Essential VS Code Extensions for Web Developers in 2026",
    slug: "essential-vscode-extensions-2026",
    category: "tools",
    excerpt:
      "Boost your productivity with these must-have VS Code extensions. From code formatting to debugging, discover tools that will transform your development workflow.",
    content: `
# Essential VS Code Extensions for Web Developers in 2026

VS Code is the most popular code editor, and these extensions will supercharge your workflow.

## Code Quality

### ESLint
Catch errors and enforce coding standards automatically.

### Prettier
Automatic code formatting that works with all major languages.

### Error Lens
Highlight errors inline for faster debugging.

## Productivity Boosters

### GitHub Copilot
AI-powered code completion that understands context.

### Auto Rename Tag
Automatically rename paired HTML/XML tags.

### Path Intellisense
Autocomplete filenames in your imports.

## Git Integration

### GitLens
Supercharge Git capabilities with blame annotations, history, and more.

### Git Graph
Visualize your repository's commit history.

## Theme & Appearance

### Material Icon Theme
Beautiful file icons for better visual organization.

### One Dark Pro
Popular dark theme with great syntax highlighting.

## Framework-Specific

### ES7+ React/Redux Snippets
Speed up React development with useful snippets.

### Tailwind CSS IntelliSense
Autocomplete and linting for Tailwind CSS.

Install these extensions and watch your productivity soar!
    `,
    image: "/images/blog/vscode-extensions.jpg",
    author: {
      name: "Sakil Anwar",
      avatar: "/images/avatar.jpg",
    },
    date: "2026-01-08",
    readTime: "6 min read",
    tags: ["VS Code", "Tools", "Productivity", "Extensions"],
  },
  {
    id: crypto.randomUUID(),
    title: "Building Responsive UIs with Tailwind CSS",
    slug: "building-responsive-uis-tailwind-css",
    category: "tutorial",
    excerpt:
      "Learn how to create beautiful, responsive user interfaces using Tailwind CSS. Master utility-first CSS and responsive design patterns.",
    content: `
# Building Responsive UIs with Tailwind CSS

Tailwind CSS makes building responsive interfaces a breeze. Let's explore best practices and patterns.

## Mobile-First Approach

Tailwind uses a mobile-first breakpoint system:

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on tablet, third on desktop -->
</div>
\`\`\`

## Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Responsive Patterns

### Grid Layouts
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsive grid -->
</div>
\`\`\`

### Flexbox
\`\`\`html
<div class="flex flex-col md:flex-row gap-4">
  <!-- Stack on mobile, row on desktop -->
</div>
\`\`\`

### Typography
\`\`\`html
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Responsive heading
</h1>
\`\`\`

## Custom Breakpoints

Extend Tailwind's config for custom breakpoints:

\`\`\`javascript
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
}
\`\`\`

## Best Practices

1. Start with mobile design
2. Use consistent spacing scale
3. Leverage Tailwind's design tokens
4. Extract components for reusability
5. Use @apply for complex patterns

Master these patterns and you'll build beautiful responsive UIs in no time!
    `,
    image: "/images/blog/tailwind-responsive.jpg",
    author: {
      name: "Sakil Anwar",
      avatar: "/images/avatar.jpg",
    },
    date: "2026-01-05",
    readTime: "7 min read",
    tags: ["Tailwind CSS", "CSS", "Responsive Design", "Tutorial"],
  },
  {
    id: crypto.randomUUID(),
    title: "React Server Components: The Future of React",
    slug: "react-server-components-future",
    category: "web-dev",
    excerpt:
      "Understand React Server Components and how they're changing the way we build React applications. Learn the benefits, use cases, and implementation strategies.",
    content: `
# React Server Components: The Future of React

React Server Components (RSC) represent a paradigm shift in how we build React applications. Let's explore this game-changing feature.

## What are Server Components?

Server Components are React components that run exclusively on the server. They:
- Don't ship JavaScript to the client
- Can directly access backend resources
- Improve performance and reduce bundle size

## Benefits

### Zero Bundle Size
Server Components don't add to your JavaScript bundle:

\`\`\`tsx
// This component and its dependencies don't go to the client
async function BlogPost({ id }) {
  const post = await db.post.findById(id)
  return <article>{post.content}</article>
}
\`\`\`

### Direct Backend Access
Access databases, file systems, and APIs directly:

\`\`\`tsx
async function UserProfile() {
  const user = await db.user.findCurrent()
  const posts = await db.posts.findByUser(user.id)
  
  return (
    <div>
      <h1>{user.name}</h1>
      <PostList posts={posts} />
    </div>
  )
}
\`\`\`

### Automatic Code Splitting
Each Server Component is automatically code-split.

## Client Components

Use 'use client' for interactive components:

\`\`\`tsx
'use client'

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
\`\`\`

## Best Practices

1. **Server Components by default** - Only use Client Components when needed
2. **Composition** - Pass Client Components as children to Server Components
3. **Data fetching** - Fetch data in Server Components close to where it's used
4. **Streaming** - Use Suspense for progressive rendering

## When to Use Each

**Server Components:**
- Data fetching
- Backend resource access
- Large dependencies
- SEO-critical content

**Client Components:**
- Interactivity (onClick, onChange)
- Browser APIs (localStorage, geolocation)
- State and effects
- Custom hooks

React Server Components are the future. Start using them today!
    `,
    image: "/images/blog/react-server-components.jpg",
    author: {
      name: "Sakil Anwar",
      avatar: "/images/avatar.jpg",
    },
    date: "2026-01-03",
    readTime: "9 min read",
    tags: ["React", "Server Components", "Next.js", "Performance"],
  },
];

export function getBlogPostBySlug(slug: string): TBlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  category: TBlogCategory,
  limit: number = 3,
): TBlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}
