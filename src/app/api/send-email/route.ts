import { type NextRequest, NextResponse } from "next/server"
import * as brevo from "@getbrevo/brevo"

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, workType, message, contractorEmail } = await request.json()

    // Validate required fields
    if (!name || !phone || !email || !workType || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate API key
    if (!process.env.BREVO_API_KEY) {
      console.error("BREVO_API_KEY is not set")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
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

    // Initialize Brevo API client
    const apiInstance = new brevo.TransactionalEmailsApi()
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY)

    // Prepare email
    const sendSmtpEmail = new brevo.SendSmtpEmail()
    sendSmtpEmail.subject = `New Contact Request: ${ workType }`
    sendSmtpEmail.htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${ name }</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${ email }">${ email }</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${ phone }</p>
              <p style="margin: 10px 0;"><strong>Work Type:</strong> ${ workType }</p>
            </div>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
              <p style="white-space: pre-wrap;">${ message }</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #6b7280;">
              <p>This email was sent from your construction site landing page contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `
    sendSmtpEmail.sender = { name: "Construction Site Contact", email: process.env.BREVO_SENDER_EMAIL || "noreply@yourdomain.com" }
    sendSmtpEmail.to = [{ email: contractorEmail, name: "Contractor" }]
    sendSmtpEmail.replyTo = { email: email, name: name }

    // Send email via Brevo
    await apiInstance.sendTransacEmail(sendSmtpEmail)

    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email API error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
