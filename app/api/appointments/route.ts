import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "phone", "email"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // In a real implementation, this would send to Laravel backend
    // For now, we'll simulate the API call
    const appointmentData = {
      first_name: body.firstName,
      last_name: body.lastName,
      phone: body.phone,
      email: body.email,
      service: body.service || null,
      doctor: body.doctor || null,
      preferred_date: body.date || null,
      preferred_time: body.time || null,
      message: body.message || null,
      status: "pending",
      created_at: new Date().toISOString(),
    }

    // TODO: Send to Laravel API endpoint
    // const response = await fetch(`${process.env.LARAVEL_API_URL}/api/appointments`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.LARAVEL_API_TOKEN}`,
    //   },
    //   body: JSON.stringify(appointmentData),
    // })

    console.log("[v0] Appointment booking request:", appointmentData)

    return NextResponse.json(
      {
        message: "Appointment request submitted successfully",
        appointment_id: Math.random().toString(36).substr(2, 9),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Appointment booking error:", error)
    return NextResponse.json({ error: "Failed to submit appointment request" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // This would fetch appointments from Laravel backend
    // Only accessible by admin users

    const { searchParams } = new URL(request.url)
    const page = searchParams.get("page") || "1"
    const status = searchParams.get("status") || "all"

    // TODO: Fetch from Laravel API
    // const response = await fetch(`${process.env.LARAVEL_API_URL}/api/admin/appointments?page=${page}&status=${status}`, {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.LARAVEL_API_TOKEN}`,
    //   },
    // })

    // Mock data for demonstration
    const mockAppointments = {
      data: [
        {
          id: 1,
          first_name: "John",
          last_name: "Doe",
          phone: "+998901234567",
          email: "john.doe@example.com",
          service: "Cardiology Consultation",
          doctor: "Dr. Aliyeva Munira",
          preferred_date: "2024-01-20",
          preferred_time: "10:00",
          status: "pending",
          created_at: "2024-01-15T10:00:00Z",
        },
      ],
      meta: {
        current_page: 1,
        total: 1,
        per_page: 10,
      },
    }

    return NextResponse.json(mockAppointments)
  } catch (error) {
    console.error("[v0] Fetch appointments error:", error)
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 })
  }
}
