import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'shop@consciouskilo.com',
    pass: process.env.EMAIL_PASS || 'wida nojs kwpb esyi', // App password
  },
  tls: {
    rejectUnauthorized: false
  }
})

export async function POST(request: NextRequest) {
  try {
    // Verify transporter connection first
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'shop@consciouskilo.com',
      to: process.env.EMAIL_USER || 'shop@consciouskilo.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1F3F; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B1F3F; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #D4AF37;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="background-color: #e8f4fd; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #0B1F3F;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This message was sent from the Conscious Kilo contact form.
          </p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER || 'shop@consciouskilo.com',
      to: email,
      subject: 'Thank you for contacting Conscious Kilo',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1F3F; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting Conscious Kilo. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B1F3F; margin-top: 0;">Your Message:</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #D4AF37;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p>In the meantime, feel free to explore our website and learn more about our Indian bodyweight exercise traditions.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://consciouskilo.com" style="background-color: #D4AF37; color: #0B1F3F; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Visit Our Website
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Conscious Kilo - Where Culture Meets Strength
          </p>
        </div>
      `,
    }

    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! You will receive a confirmation email shortly.',
    })
  } catch (error) {
    console.error('Email sending error:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send message. Please try again later.'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact support.'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Email service connection failed. Please try again later.'
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
} 