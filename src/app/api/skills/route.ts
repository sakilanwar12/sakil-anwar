import { NextResponse } from "next/server";
import { portfolioDb } from "@/lib/db-service";

export async function GET() {
  try {
    const skills = await portfolioDb.getAllSkills();
    return NextResponse.json({ success: true, data: skills });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch skills" },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const result = await portfolioDb.upsertSkill(body);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update skill" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 },
      );
    }

    const result = await portfolioDb.deleteSkill(id);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete skill" },
      { status: 500 },
    );
  }
}
