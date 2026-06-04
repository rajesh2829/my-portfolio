import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "srajeshs021@gmail.com";

    // ==========================================
    // OPTION 1: SMTP Nodemailer (Gmail / Custom SMTP)
    // ==========================================
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS, // Google App Password (not standard password)
        },
      });

      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        replyTo: email, // This makes reply action send to the visitor's email!
        subject: `New Message from Portfolio: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; max-width: 600px;">
            <h2 style="color: #4f46e5; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">Portfolio Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #4f46e5; font-style: italic; white-space: pre-wrap;">${message}</div>
            <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
            <p style="font-size: 11px; color: #888888; text-align: center; margin-bottom: 0;">Sent from Rajesh's Portfolio Website</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, method: "SMTP" });
    }

    // ==========================================
    // OPTION 2: Web3Forms (Fallback)
    // ==========================================
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY?.replace(/['"]/g, "").trim();
    if (web3formsAccessKey && web3formsAccessKey !== "your_web3forms_key_here") {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name,
          email,
          message,
          subject: `New Portfolio Message from ${name}`,
          from_name: "Portfolio Contact Form",
          replyto: email, // This enables replying directly to the sender!
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      let result;

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        return NextResponse.json(
          {
            error: `Web3Forms returned a non-JSON error. This usually means the API key is invalid or blocked. Please verify your WEB3FORMS_ACCESS_KEY in .env.local.`
          },
          { status: 400 }
        );
      }

      if (response.ok && result.success) {
        return NextResponse.json({ success: true, method: "Web3Forms" });
      } else {
        return NextResponse.json(
          { error: result.message || "Failed to submit message to Web3Forms." },
          { status: 500 }
        );
      }
    }

    // ==========================================
    // ERROR: No Environment Variables configured
    // ==========================================
    return NextResponse.json(
      {
        error: "Email configuration is missing or using placeholder values. Please check your .env.local file and set either SMTP credentials or a valid WEB3FORMS_ACCESS_KEY."
      },
      { status: 400 }
    );

  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
