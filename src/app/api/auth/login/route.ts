import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { adminService } from "@/lib/db-service";
import { createSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 },
      );
    }

    // Find admin by email
    const admin = await adminService.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 },
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 },
      );
    }

    // Update last login
    if (admin._id) {
      await adminService.update(admin._id, { lastLogin: new Date() });
    }

    // Create session
    await createSession({
      userId: admin._id!.toString(),
      email: admin.email,
      role: admin.role,
    });

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: "Login failed" },
      { status: 500 },
    );
  }
}
