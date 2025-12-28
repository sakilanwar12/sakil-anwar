import { NextRequest, NextResponse } from "next/server";
import { skillsService } from "@/lib/db-service";

export async function GET() {
  try {
    const skills = await skillsService.findAll(
      {},
      { sort: { category: 1, order: 1 } },
    );
    return NextResponse.json({ success: true, data: skills });
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch skills" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const skill = await skillsService.create({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json({ success: true, data: skill }, { status: 201 });
  } catch (error) {
    console.error("Error creating skill:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create skill" },
      { status: 500 },
    );
  }
}
