import { type NextRequest, NextResponse } from "next/server"
import axios from "axios"

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, workType, message, contractorEmail } = await request.json()

    // Validate required fields
    if (!name || !phone || !email || !workType || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // For demo purposes, log the data
    console.log("Contact form submission:", {
      name,
      phone,
      email,
      workType,
      message,
      contractorEmail,
    })

    // Integrate with EmailJS using axios
    const response = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: contractorEmail,
          from_name: name,
          from_email: email,
          phone,
          work_type: workType,
          message,
        },
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email API error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
