import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/lib/models/contact.model";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    const body = await req.json();
    let { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Valid email is required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    if (process.env.MONGODB_URI) {
      await connectDB();
      await Contact.create({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      });
    }

    // Send email alert in background
    sendEmail({ name, email, subject, message }).catch((err) => {
      console.error("Email send failed:", err);
    });

    return NextResponse.json({
      success: true,
      message: "Message received successfully",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
