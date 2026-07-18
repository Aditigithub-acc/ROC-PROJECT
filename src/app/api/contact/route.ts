import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Basic email format check
const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { fullName, email, phone, country, message } = body;

        // --- Validation ---
        if (!fullName || !email || !message) {
            return NextResponse.json(
                { error: "Full name, email, and message are required." },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        // --- Configure transporter ---
        // Set these in your .env.local file (see setup notes below)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for others
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // --- Email content ---
        const mailOptions = {
            from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `New Contact Form Submission from ${fullName}`,
            text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone || "Not provided"}
Country: ${country || "Not provided"}

Message:
${message}
            `.trim(),
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                <p><strong>Country:</strong> ${country || "Not provided"}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
