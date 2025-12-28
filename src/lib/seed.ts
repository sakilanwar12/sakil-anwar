import { getDatabase } from "./mongodb";
import { COLLECTIONS } from "./db-service";

/**
 * Seed script to populate initial data in MongoDB
 * Run this once to set up your portfolio with sample data
 */
export async function seedDatabase() {
  try {
    const db = await getDatabase();

    // Seed Home Section
    const homeCollection = db.collection(COLLECTIONS.HOME);
    const homeExists = await homeCollection.findOne({});

    if (!homeExists) {
      await homeCollection.insertOne({
        hero: {
          title: "Hi, I'm Your Name",
          subtitle: "Full Stack Developer",
          description:
            "I build amazing web applications with modern technologies.",
          ctaText: "View My Work",
          ctaLink: "#projects",
        },
        about: {
          title: "About Me",
          description:
            "I'm a passionate developer with expertise in web technologies...",
          highlights: [
            "5+ years of experience",
            "Full-stack development",
            "Modern frameworks",
          ],
        },
        updatedAt: new Date(),
      });
      console.log("✅ Home section seeded");
    }

    // Seed Skills
    const skillsCollection = db.collection(COLLECTIONS.SKILLS);
    const skillsCount = await skillsCollection.countDocuments();

    if (skillsCount === 0) {
      await skillsCollection.insertMany([
        {
          name: "React",
          category: "Frontend",
          level: 90,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Next.js",
          category: "Frontend",
          level: 85,
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TypeScript",
          category: "Frontend",
          level: 88,
          order: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Node.js",
          category: "Backend",
          level: 85,
          order: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MongoDB",
          category: "Backend",
          level: 80,
          order: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Git",
          category: "Tools",
          level: 90,
          order: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      console.log("✅ Skills seeded");
    }

    // Seed Projects
    const projectsCollection = db.collection(COLLECTIONS.PROJECTS);
    const projectsCount = await projectsCollection.countDocuments();

    if (projectsCount === 0) {
      await projectsCollection.insertMany([
        {
          title: "E-Commerce Platform",
          description: "A full-featured online shopping platform",
          thumbnail: "/projects/ecommerce.jpg",
          technologies: ["Next.js", "MongoDB", "Stripe"],
          featured: true,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Task Management App",
          description: "Collaborative task management tool",
          thumbnail: "/projects/tasks.jpg",
          technologies: ["React", "Node.js", "PostgreSQL"],
          featured: true,
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      console.log("✅ Projects seeded");
    }

    // Seed Blog Posts
    const blogCollection = db.collection(COLLECTIONS.BLOG);
    const blogCount = await blogCollection.countDocuments();

    if (blogCount === 0) {
      await blogCollection.insertMany([
        {
          title: "Getting Started with Next.js",
          slug: "getting-started-nextjs",
          excerpt: "Learn the basics of Next.js and build your first app",
          content:
            "# Getting Started with Next.js\n\nNext.js is an amazing framework...",
          author: "Your Name",
          tags: ["Next.js", "React", "Tutorial"],
          published: true,
          publishedAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
      console.log("✅ Blog posts seeded");
    }

    console.log("🎉 Database seeding completed!");
    return { success: true, message: "Database seeded successfully" };
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

// Uncomment to run directly with: node --loader ts-node/esm src/lib/seed.ts
// seedDatabase().then(() => process.exit(0)).catch(() => process.exit(1));
