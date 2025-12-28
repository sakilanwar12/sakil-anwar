import { NextRequest, NextResponse } from "next/server";
import { contactService } from "@/lib/db-service";

export async function GET() {
  try {
    const messages = await contactService.findAll(
      {},
      { sort: { createdAt: -1 } },
    );
    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch messages" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Save to MongoDB
    const contactMessage = await contactService.create({
      name,
      email,
      subject: subject || "",
      message,
      read: false,
      replied: false,
      createdAt: new Date(),
    });

    // Also send via Formspree if configured
    const formspreeEndpoint = process.env.FORMSPREE_SERVE_URL;
    if (formspreeEndpoint) {
      try {
        await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });
      } catch (error) {
        console.error("Formspree error:", error);
        // Continue even if Formspree fails since we saved to DB
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: contactMessage,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 },
    );
  }
}
