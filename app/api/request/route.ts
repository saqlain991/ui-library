import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { name, email, component, description } = await req.json();

    if (!name || !email || !component || !description) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail email
        pass: process.env.GMAIL_PASS, // Your Gmail app password
      },
    });

    const recipients = [
      process.env.GMAIL_RECEIVER_1,
      process.env.GMAIL_RECEIVER_2,
    ]
      .filter(Boolean) // Remove undefined values
      .join(","); // Convert array to a comma-separated string

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: recipients, // Ensured to be a valid string
      subject: "New Component Request",
      text: `
        Name: ${name}
        Email: ${email}
        Component: ${component}
        Description: ${description}
      `,
      html: `
        <h2>New Component Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Component:</strong> ${component}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to submit request." },
      { status: 500 }
    );
  }
}
