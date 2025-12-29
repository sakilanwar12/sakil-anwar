import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/auth";

export async function POST() {
  await deleteSession();

  const response = NextResponse.json({ success: true, message: "Logged out" });

  // Also explicitly expire the cookie on the response object for safety
  response.cookies.set("admin-session", "", {
    maxAge: 0,
    path: "/",
  });

  return response;
}
