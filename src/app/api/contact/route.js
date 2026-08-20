import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    const body = await req.json();
    let { name, email, subject, message } = body || {};

    // Validate required fields
    if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Default optional subject
    if (!subject || !subject.trim()) {
      subject = "General Inquiry / Collaboration";
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Send direct email notification
    await sendEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to dispatch email. Please try again later." },
      { status: 500 }
    );
  }
}
