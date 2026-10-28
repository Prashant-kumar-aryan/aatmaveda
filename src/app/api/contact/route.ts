import { NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL =
  process.env.BREVO_SENDER_EMAIL || "hello@aatmaveda.com";
const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || process.env.BREVO_SENDER_EMAIL || "hello@aatmaveda.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = {
      name: String(body?.name ?? "").trim(),
      email: String(body?.email ?? "").trim(),
      phone: String(body?.phone ?? "").trim(),
      service: String(body?.service ?? "").trim(),
      message: String(body?.message ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.service) {
      return NextResponse.json(
        { error: "Please complete all required contact details." },
        { status: 400 },
      );
    }

    if (!BREVO_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Brevo is not configured yet. Add BREVO_API_KEY and BREVO_SENDER_EMAIL to your environment variables.",
        },
        { status: 500 },
      );
    }

    const htmlContent = `
      <h2>New consultation request</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Service:</strong> ${payload.service}</p>
      <p><strong>Message:</strong> ${payload.message || "No additional message provided."}</p>
    `;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Aatmaveda",
          email: BREVO_SENDER_EMAIL,
        },
        to: [{ email: CONTACT_EMAIL, name: "Aatmaveda Team" }],
        replyTo: {
          email: payload.email,
          name: payload.name,
        },
        subject: `New consultation enquiry: ${payload.service}`,
        htmlContent,
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      throw new Error(
        responseText || "Brevo rejected the request. Please check your integration settings.",
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Your consultation request has been sent successfully.",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong while sending the email.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
