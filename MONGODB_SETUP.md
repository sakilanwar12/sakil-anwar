# MongoDB Setup Guide

This project uses MongoDB as the database for the portfolio website. All portfolio sections (Home, Skills, Projects, Blog, Contact) are stored in MongoDB.

## Environment Variables

Add the following to your `.env.local` file:

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=your_database_name
```

### Getting MongoDB Connection String

1. **MongoDB Atlas (Free Cloud Option)**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free account and cluster
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

2. **Local MongoDB**:
   ```
   MONGODB_URI=mongodb://localhost:27017
   MONGODB_DB=portfolio
   ```

## Database Structure

### Collections

- **home** - Hero and About sections (single document)
- **skills** - List of skills with categories
- **projects** - Portfolio projects
- **blog** - Blog posts
- **contact_messages** - Contact form submissions
- **admin_users** - Admin authentication

### Data Models

See `src/lib/types/portfolio.ts` for complete TypeScript interfaces.

## API Routes

All API routes are located in `src/app/api/`:

### Home Section

- `GET /api/home` - Get home section data
- `PUT /api/home` - Update home section

### Skills

- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create new skill
- `GET /api/skills/[id]` - Get skill by ID
- `PUT /api/skills/[id]` - Update skill
- `DELETE /api/skills/[id]` - Delete skill

### Projects

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/[id]` - Get project by ID
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

### Blog

- `GET /api/blog` - Get all blog posts
- `POST /api/blog` - Create new blog post
- `GET /api/blog/[id]` - Get blog post by ID
- `PUT /api/blog/[id]` - Update blog post
- `DELETE /api/blog/[id]` - Delete blog post

### Contact

- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Submit contact form (saves to DB + sends via Formspree)

## Database Service

The `src/lib/db-service.ts` file provides:

1. **Generic CRUD operations** via `DatabaseService<T>` class
2. **Service instances** for each collection
3. **Specialized methods** in `portfolioDb` object

### Usage Example

```typescript
import { skillsService, portfolioDb } from "@/lib/db-service";

// Using service instance
const allSkills = await skillsService.findAll();

// Using specialized method
const skillsByCategory = await portfolioDb.getSkillsByCategory();
```

## Testing the Connection

Create a test API route to verify MongoDB connection:

```typescript
// src/app/api/test-db/route.ts
import { getDatabase } from "@/lib/db-service";

export async function GET() {
  try {
    const db = await getDatabase();
    await db.command({ ping: 1 });
    return Response.json({ success: true, message: "MongoDB connected!" });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
```

Then visit `http://localhost:3000/api/test-db`

## Next Steps

1. Set up your MongoDB database (Atlas or local)
2. Add connection string to `.env.local`
3. Create admin UI to manage content
4. Seed initial data if needed
