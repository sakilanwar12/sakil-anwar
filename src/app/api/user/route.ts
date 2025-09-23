import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "./user.model";
import mongoose from "mongoose";

export async function GET() {
//   await mongoose.connect(
//     "mongodb+srv://sakilanwar12:SakilAnwar123@cluster0.zanieex.mongodb.net/sakil_anwar_portfolio?retryWrites=true&w=majority&appName=Cluster0"
//   );
await connectDB();
  console.log("Connected");
  // const users = await User.find();
  return NextResponse.json({
    message: "Connected",
  });
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const newUser = await User.create(body);
  return NextResponse.json(newUser, { status: 201 });
}
