import { getDatabase } from "./mongodb";
import {
  HomeSection,
  Skill,
  Project,
  BlogPost,
  ContactMessage,
  AdminUser,
} from "./types/portfolio";
import { ObjectId, Document } from "mongodb";

// Collection names
export const COLLECTIONS = {
  HOME: "home",
  SKILLS: "skills",
  PROJECTS: "projects",
  BLOG: "blog",
  CONTACT: "contact_messages",
  ADMIN: "admin_users",
} as const;

// Generic CRUD operations
export class DatabaseService<T extends Document> {
  constructor(private collectionName: string) {}

  async findAll(filter = {}, options = {}) {
    const db = await getDatabase();
    return db
      .collection<T>(this.collectionName)
      .find(filter, options)
      .toArray();
  }

  async findOne(filter: any) {
    const db = await getDatabase();
    return db.collection<T>(this.collectionName).findOne(filter);
  }

  async findById(id: string | ObjectId) {
    const db = await getDatabase();
    const objectId = typeof id === "string" ? new ObjectId(id) : id;
    return db
      .collection<T>(this.collectionName)
      .findOne({ _id: objectId } as any);
  }

  async create(data: Omit<T, "_id">) {
    const db = await getDatabase();
    const result = await db
      .collection<T>(this.collectionName)
      .insertOne(data as any);
    return { ...data, _id: result.insertedId } as unknown as T;
  }

  async update(id: string | ObjectId, data: Partial<T>) {
    const db = await getDatabase();
    const objectId = typeof id === "string" ? new ObjectId(id) : id;
    const result = await db
      .collection<T>(this.collectionName)
      .updateOne({ _id: objectId } as any, { $set: data });
    return result.modifiedCount > 0;
  }

  async delete(id: string | ObjectId) {
    const db = await getDatabase();
    const objectId = typeof id === "string" ? new ObjectId(id) : id;
    const result = await db
      .collection<T>(this.collectionName)
      .deleteOne({ _id: objectId } as any);
    return result.deletedCount > 0;
  }

  async count(filter = {}) {
    const db = await getDatabase();
    return db.collection<T>(this.collectionName).countDocuments(filter);
  }
}

// Service instances for each collection
export const homeService = new DatabaseService<HomeSection>(COLLECTIONS.HOME);
export const skillsService = new DatabaseService<Skill>(COLLECTIONS.SKILLS);
export const projectsService = new DatabaseService<Project>(
  COLLECTIONS.PROJECTS,
);
export const blogService = new DatabaseService<BlogPost>(COLLECTIONS.BLOG);
export const contactService = new DatabaseService<ContactMessage>(
  COLLECTIONS.CONTACT,
);
export const adminService = new DatabaseService<AdminUser>(COLLECTIONS.ADMIN);

// Specialized methods for specific collections
export const portfolioDb = {
  // Home Section - typically only one document
  async getHomeSection() {
    return homeService.findOne({});
  },

  async updateHomeSection(data: Partial<HomeSection>) {
    const existing = await this.getHomeSection();
    if (existing && existing._id) {
      const { _id, ...updateData } = data;
      return homeService.update(existing._id, {
        ...updateData,
        updatedAt: new Date(),
      });
    } else {
      return homeService.create({ ...data, updatedAt: new Date() } as any);
    }
  },

  // Skills
  async getSkillsByCategory() {
    const skills = await skillsService.findAll(
      {},
      { sort: { category: 1, order: 1 } },
    );
    const grouped: Record<string, Skill[]> = {};
    skills.forEach((skill) => {
      if (!grouped[skill.category]) {
        grouped[skill.category] = [];
      }
      grouped[skill.category].push(skill);
    });
    return grouped;
  },

  async getAllSkills() {
    return skillsService.findAll({}, { sort: { order: 1 } });
  },

  async upsertSkill(skill: Partial<Skill>) {
    if (skill._id) {
      const { _id, ...updateData } = skill;
      return skillsService.update(_id, {
        ...updateData,
        updatedAt: new Date(),
      });
    } else {
      return skillsService.create({
        ...skill,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as any);
    }
  },

  async deleteSkill(id: string) {
    return skillsService.delete(id);
  },

  // Projects
  async getFeaturedProjects() {
    return projectsService.findAll({ featured: true }, { sort: { order: 1 } });
  },

  async getPublishedProjects() {
    return projectsService.findAll({}, { sort: { createdAt: -1 } });
  },

  async saveProject(project: Partial<Project>) {
    if (project._id) {
      const { _id, ...updateData } = project;
      return projectsService.update(_id, {
        ...updateData,
        updatedAt: new Date(),
      });
    } else {
      return projectsService.create({
        ...project,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as any);
    }
  },

  async deleteProject(id: string) {
    return projectsService.delete(id);
  },

  // Blog
  async getPublishedPosts() {
    return blogService.findAll(
      { published: true },
      { sort: { publishedAt: -1 } },
    );
  },

  async getPostBySlug(slug: string) {
    return blogService.findOne({ slug });
  },

  // Contact
  async getUnreadMessages() {
    return contactService.findAll({ read: false }, { sort: { createdAt: -1 } });
  },

  async markMessageAsRead(id: string | ObjectId) {
    return contactService.update(id, { read: true });
  },

  // Admin
  async findAdminByEmail(email: string) {
    return adminService.findOne({ email });
  },
};
