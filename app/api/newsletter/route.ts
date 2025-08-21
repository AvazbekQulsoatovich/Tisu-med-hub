import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const subscriptionData = {
      email: body.email,
      status: "active",
      subscribed_at: new Date().toISOString(),
    }

    // TODO: Send to Laravel API endpoint
    // const response = await fetch(`${process.env.LARAVEL_API_URL}/api/newsletter/subscribe`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.LARAVEL_API_TOKEN}`,
    //   },
    //   body: JSON.stringify(subscriptionData),
    // })

    console.log("[v0] Newsletter subscription:", subscriptionData)

    return NextResponse.json(
      {
        message: "Successfully subscribed to newsletter",
        subscription_id: Math.random().toString(36).substr(2, 9),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}
