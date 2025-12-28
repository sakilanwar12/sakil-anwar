import { NextResponse } from "next/server";
import { seedDatabase } from "@/lib/seed";

/**
 * API route to seed the database with initial data
 * Visit: http://localhost:3000/api/seed
 *
 * WARNING: Only use this in development!
 */
export async function GET() {
  // Only allow in development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { success: false, error: "Seeding is only allowed in development" },
      { status: 403 },
    );
  }

  try {
    const result = await seedDatabase();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to seed database" },
      { status: 500 },
    );
  }
}
