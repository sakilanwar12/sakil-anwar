import { NextResponse } from "next/server";

import { createUser } from "./user.service";
import { apiResponse } from "@/lib/api-utils";
import { IUser } from "./user.interface";

export async function createUserController(req: Request) {
  try {
    const body: IUser = await req.json();
    const newUser = await createUser(body);

    return NextResponse.json(
      apiResponse({
        success: true,
        data: newUser,
        message: "User created successfully",
        statusCode: 201,
      })
    );
  } catch (error: unknown) {
    let message = "Failed to create user";
    if (error instanceof Error) message = error.message;

    return NextResponse.json(
      apiResponse({
        success: false,
        data: null,
        message,
        statusCode: 500,
        errors: [{ field: "server", message }],
      })
    );
  }
}
