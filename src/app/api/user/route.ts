import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import { createUserController } from "./user.controller";

export async function POST(req: Request) {
  await connectDB();
  return createUserController(req);
}
export async function GET() {
  await connectDB();
  console.log("Connected");
  return NextResponse.json({
    message: "Connected",
  });
}
