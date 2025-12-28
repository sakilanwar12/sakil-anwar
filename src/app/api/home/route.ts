import { NextRequest, NextResponse } from "next/server";
import { portfolioDb } from "@/lib/db-service";

export async function GET() {
  try {
    const homeSection = await portfolioDb.getHomeSection();
    return NextResponse.json({ success: true, data: homeSection });
  } catch (error) {
    console.error("Error fetching home section:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch home section" },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    await portfolioDb.updateHomeSection(body);
    return NextResponse.json({
      success: true,
      message: "Home section updated successfully",
    });
  } catch (error) {
    console.error("Error updating home section:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update home section" },
      { status: 500 },
    );
  }
}
