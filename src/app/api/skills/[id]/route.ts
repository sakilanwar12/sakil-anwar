import { NextRequest, NextResponse } from "next/server";
import { skillsService } from "@/lib/db-service";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const skill = await skillsService.findById(id);

    if (!skill) {
      return NextResponse.json(
        { success: false, error: "Skill not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: skill });
  } catch (error) {
    console.error("Error fetching skill:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch skill" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updated = await skillsService.update(id, {
      ...body,
      updatedAt: new Date(),
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Skill not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Skill updated successfully",
    });
  } catch (error) {
    console.error("Error updating skill:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update skill" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const deleted = await skillsService.delete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Skill not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting skill:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete skill" },
      { status: 500 },
    );
  }
}
