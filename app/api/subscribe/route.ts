import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'shop@consciouskilo.com',
    pass: process.env.EMAIL_PASS || 'wida nojs kwpb esyi',
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

    // Generate unique discount code
    const discountCode = 'ANCIENT15'
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 30) // 30 days from now

    // Send discount code email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || 'shop@consciouskilo.com',
      to: email,
      subject: '🎉 Your Exclusive 15% OFF Code - Conscious Kilo',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
          <div style="background: linear-gradient(135deg, #D4AF37 0%, #FFCC00 100%); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0B1F3F; margin: 0; font-size: 28px; font-weight: bold;">
              🎉 Exclusive 15% OFF Your Talim Deck!
            </h1>
            <p style="color: #0B1F3F; margin: 10px 0 0 0; font-size: 16px;">
              Unlock Ancient Indian Fitness Wisdom
            </p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 15px; margin-bottom: 20px;">
            <h2 style="color: #0B1F3F; margin-top: 0; font-size: 24px;">
              Your Discount Code
            </h2>
            
            <div style="background: linear-gradient(135deg, #D4AF37 0%, #FFCC00 100%); padding: 20px; border-radius: 10px; text-align: center; margin: 20px 0;">
              <div style="font-size: 32px; font-weight: bold; color: #0B1F3F; letter-spacing: 3px;">
                ${discountCode}
              </div>
              <p style="color: #0B1F3F; margin: 10px 0 0 0; font-size: 14px;">
                Valid until ${expiryDate.toLocaleDateString()}
              </p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #0B1F3F; margin-top: 0; font-size: 18px;">
                How to Use Your Code:
              </h3>
              <ol style="color: #0B1F3F; line-height: 1.6;">
                <li>Visit <a href="https://consciouskilo.com/checkout" style="color: #D4AF37; text-decoration: none; font-weight: bold;">consciouskilo.com/checkout</a></li>
                <li>Add the Talim Deck to your cart</li>
                <li>Enter code <strong>${discountCode}</strong> at checkout</li>
                <li>Enjoy your 15% discount!</li>
              </ol>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://consciouskilo.com/checkout" style="background: linear-gradient(135deg, #0B1F3F 0%, #13294B 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                🛒 Shop Now & Save 15%
              </a>
            </div>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
            <h3 style="color: #0B1F3F; margin-top: 0; font-size: 18px;">
              What's Included in Your Talim Deck:
            </h3>
            <ul style="color: #0B1F3F; line-height: 1.6;">
              <li>🎯 80 beautifully crafted exercise cards</li>
              <li>🏋️ Traditional Dand, Baithak, and Sapate movements</li>
              <li>📚 Ancient Indian fitness wisdom</li>
              <li>💪 Progressive difficulty levels</li>
              <li>🎨 Stunning cultural artwork</li>
              <li>📱 Digital companion guide</li>
            </ul>
          </div>
          
          <div style="background-color: #e8f4fd; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
            <h3 style="color: #0B1F3F; margin-top: 0; font-size: 18px;">
              Why Choose Conscious Kilo?
            </h3>
            <p style="color: #0B1F3F; line-height: 1.6;">
              Our Talim Deck isn't just exercise cards—it's a journey into India's rich physical culture. 
              Each movement is carefully designed to build strength, flexibility, and mindfulness, 
              connecting you to centuries of wisdom.
            </p>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 12px; margin-top: 30px;">
            <p>Conscious Kilo - Where Culture Meets Strength</p>
            <p>Questions? Contact us at <a href="mailto:shop@consciouskilo.com" style="color: #D4AF37;">shop@consciouskilo.com</a></p>
          </div>
        </div>
      `,
    }

    // Send notification email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'shop@consciouskilo.com',
      to: process.env.EMAIL_USER || 'shop@consciouskilo.com',
      subject: `🎉 New Email Subscription - ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1F3F; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            New Email Subscription
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B1F3F; margin-top: 0;">Subscription Details:</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Discount Code Sent:</strong> ${discountCode}</p>
          </div>
          
          <div style="background-color: #e8f4fd; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #0B1F3F;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This notification was sent from the Conscious Kilo email capture popup.
          </p>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(userMailOptions)
    await transporter.sendMail(adminMailOptions)

    return NextResponse.json({ 
      success: true, 
      message: 'Discount code sent successfully!',
      discountCode: discountCode
    })

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to send discount code. Please try again.' },
      { status: 500 }
    )
  }
} 