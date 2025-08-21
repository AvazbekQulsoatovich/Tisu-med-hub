import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "phone", "email", "message"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    const contactData = {
      first_name: body.firstName,
      last_name: body.lastName,
      phone: body.phone,
      email: body.email,
      subject: body.subject || "General Inquiry",
      location: body.location || null,
      message: body.message,
      status: "new",
      created_at: new Date().toISOString(),
    }

    // TODO: Send to Laravel API endpoint
    // const response = await fetch(`${process.env.LARAVEL_API_URL}/api/contact`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.LARAVEL_API_TOKEN}`,
    //   },
    //   body: JSON.stringify(contactData),
    // })

    console.log("[v0] Contact form submission:", contactData)

    return NextResponse.json(
      {
        message: "Message sent successfully. We will get back to you within 24 hours.",
        contact_id: Math.random().toString(36).substr(2, 9),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
