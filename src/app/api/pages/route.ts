import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Page from "@/models/Page";

export async function GET() {
  try {
    await dbConnect();
    const pages = await Page.find({}).sort({ updatedAt: -1 });
    return NextResponse.json({ success: true, data: pages });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch pages" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const page = await Page.create(body);
    return NextResponse.json({ success: true, data: page }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create page" },
      { status: 400 },
    );
  }
}
