import { NextRequest, NextResponse } from "next/server";
import { blogService } from "@/lib/db-service";

export async function GET() {
  try {
    const posts = await blogService.findAll({}, { sort: { createdAt: -1 } });
    return NextResponse.json({ success: true, data: posts });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog posts" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const post = await blogService.create({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create blog post" },
      { status: 500 },
    );
  }
}
