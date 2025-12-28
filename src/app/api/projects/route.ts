import { NextRequest, NextResponse } from "next/server";
import { projectsService } from "@/lib/db-service";

export async function GET() {
  try {
    const projects = await projectsService.findAll(
      {},
      { sort: { order: 1, createdAt: -1 } },
    );
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const project = await projectsService.create({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create project" },
      { status: 500 },
    );
  }
}
