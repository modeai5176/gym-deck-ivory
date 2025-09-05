import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create transporter with Office365 SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source = 'workout_popup' } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Generate discount code
    const discountCode = 'TALIM10'
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 30) // 30 days from now


    // Send notification email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🎉 New Email Subscription - ${email}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0B1F3F 0%, #13294B 100%); padding: 40px 30px; text-align: center; border-radius: 15px 15px 0 0;">
            <div style="background-color: #D4AF37; width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 24px;">📧</span>
            </div>
            <h1 style="color: black; margin: 0; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              New Email Subscription
            </h1>
            <p style="color: #D4AF37; margin: 10px 0 0 0; font-size: 16px; font-weight: 500;">
              Someone just joined the Conscious Kilo family!
            </p>
          </div>
          
          <!-- Main Content -->
          <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 15px 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <!-- Subscription Details Card -->
            <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; border-left: 5px solid #D4AF37;">
              <h2 style="color: #0B1F3F; margin: 0 0 25px 0; font-size: 22px; font-weight: bold; display: flex; align-items: center;">
                <span style="background-color: #D4AF37; color: #0B1F3F; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">👤</span>
                Subscription Details
              </h2>
              
              <div style="background-color: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="margin-bottom: 20px;">
                  <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Email Address</label>
                  <p style="color: #0B1F3F; margin: 0; font-size: 18px; font-weight: 600; word-break: break-all;">${email}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Discount Code</label>
                  <div style="background: linear-gradient(135deg, #D4AF37 0%, #FFCC00 100%); color: #0B1F3F; padding: 12px 20px; border-radius: 8px; font-size: 20px; font-weight: bold; letter-spacing: 2px; text-align: center; display: inline-block;">
                    ${discountCode}
                  </div>
                </div>
                
                <div style="margin-bottom: 0;">
                  <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Subscription Date</label>
                  <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 500;">${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
            
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; padding: 30px; color: #6c757d; font-size: 12px;">
            <p style="margin: 0 0 10px 0;">
              <strong style="color: #0B1F3F;">Conscious Kilo</strong> - Where Culture Meets Strength
            </p>
            <p style="margin: 0; font-size: 11px;">
              This notification was sent automatically from your website's email capture system.
            </p>
          </div>
        </div>
      `,
    }

    // Send notification email to admin only
    await transporter.sendMail(adminMailOptions)

    return NextResponse.json({ 
      success: true, 
      message: 'Email subscription successful!',
      discountCode: discountCode
    })

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
} 