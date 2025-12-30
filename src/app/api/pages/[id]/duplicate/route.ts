import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Page from "@/models/Page";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await dbConnect();
    const { id } = await params;

    // Find original page
    const originalPage = await Page.findById(id);
    if (!originalPage) {
      return NextResponse.json(
        { success: false, error: "Page not found" },
        { status: 404 },
      );
    }

    // Create copy with modified properties
    const newPage = await Page.create({
      title: `${originalPage.title} (Copy)`,
      slug: `${originalPage.slug}-copy-${Date.now()}`,
      content: originalPage.content,
      status: "draft",
    });

    return NextResponse.json({ success: true, data: newPage }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to duplicate page" },
      { status: 500 },
    );
  }
}
