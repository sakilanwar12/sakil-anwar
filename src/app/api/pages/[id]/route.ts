import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Page from "@/models/Page";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await dbConnect();
    const { id } = await params;

    // Check if looking up by slug or ID
    // Simple check: if it looks like an ObjectId, try generic findById, else findOne by slug
    // But usually IDs are passed here. Let's assume ID for builder routes.

    const page = await Page.findById(id);

    if (!page) {
      return NextResponse.json(
        { success: false, error: "Page not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: page });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch page" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await request.json();

    // If status is being set to published and it wasn't before (or just always set it on publish), set publishedAt
    if (body.status === "published") {
      body.publishedAt = new Date();
    }

    const page = await Page.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!page) {
      return NextResponse.json(
        { success: false, error: "Page not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: page });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update page" },
      { status: 400 },
    );
  }
}
