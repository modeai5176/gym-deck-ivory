import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
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

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute
  const maxRequests = 5 // 5 verification requests per minute

  const record = rateLimitMap.get(ip)
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

interface PaymentRequest {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
  customerData?: {
    email: string
    firstName: string
    lastName: string
    address: string
    city: string
    state: string
    pin: string
    phone: string
  }
}

function validatePaymentRequest(body: PaymentRequest): { valid: boolean; error?: string } {
  if (!body.razorpay_order_id || typeof body.razorpay_order_id !== 'string') {
    return { valid: false, error: 'Invalid order ID' }
  }
  
  if (!body.razorpay_payment_id || typeof body.razorpay_payment_id !== 'string') {
    return { valid: false, error: 'Invalid payment ID' }
  }
  
  if (!body.razorpay_signature || typeof body.razorpay_signature !== 'string') {
    return { valid: false, error: 'Invalid signature' }
  }
  
  // Validate string lengths to prevent potential attacks
  if (body.razorpay_order_id.length > 100 || body.razorpay_payment_id.length > 100 || body.razorpay_signature.length > 200) {
    return { valid: false, error: 'Invalid parameter length' }
  }
  
  return { valid: true }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many verification requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Input validation
    const validation = validatePaymentRequest(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, customerData } = body

    // Verify the payment signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`
    const signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest('hex')

    if (signature !== razorpay_signature) {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      )
    }

    // Payment is verified successfully - send order confirmation email
    if (customerData) {
      try {
        const orderMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `🎉 New Order Received - ${customerData.firstName} ${customerData.lastName}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; background-color: #f8f9fa;">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #0B1F3F 0%, #13294B 100%); padding: 40px 30px; text-align: center; border-radius: 15px 15px 0 0;">
                <div style="background-color: #D4AF37; width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                  <span style="font-size: 24px;">🛒</span>
                </div>
                <h1 style="color: black; margin: 0; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                  New Order Received
                </h1>
                <p style="color: #D4AF37; margin: 10px 0 0 0; font-size: 16px; font-weight: 500;">
                  Talim Deck - Premium Edition
                </p>
              </div>
              
              <!-- Main Content -->
              <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 15px 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                
                <!-- Order Details -->
                <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; border-left: 5px solid #D4AF37;">
                  <h2 style="color: #0B1F3F; margin: 0 0 25px 0; font-size: 22px; font-weight: bold; display: flex; align-items: center;">
                    <span style="background-color: #D4AF37; color: #0B1F3F; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">📋</span>
                    Order Information
                  </h2>
                  
                  <div style="background-color: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                      <div>
                        <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Order ID</label>
                        <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 600; word-break: break-all;">${razorpay_order_id}</p>
                      </div>
                      <div>
                        <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Payment ID</label>
                        <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 600; word-break: break-all;">${razorpay_payment_id}</p>
                      </div>
                    </div>
                    
                    <div style="margin-bottom: 0;">
                      <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Order Date</label>
                      <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 500;">${new Date().toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <!-- Contact Information -->
                <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; border-left: 5px solid #D4AF37;">
                  <h2 style="color: #0B1F3F; margin: 0 0 25px 0; font-size: 22px; font-weight: bold; display: flex; align-items: center;">
                    <span style="background-color: #D4AF37; color: #0B1F3F; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">👤</span>
                    Contact Information
                  </h2>
                  
                  <div style="background-color: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <div style="margin-bottom: 20px;">
                      <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Email Address *</label>
                      <p style="color: #0B1F3F; margin: 0; font-size: 18px; font-weight: 600; word-break: break-all;">${customerData.email}</p>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                      <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Phone Number *</label>
                      <p style="color: #0B1F3F; margin: 0; font-size: 18px; font-weight: 600;">${customerData.phone}</p>
                    </div>
                  </div>
                </div>

                <!-- Shipping Information -->
                <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 30px; border-radius: 15px; margin-bottom: 30px; border-left: 5px solid #D4AF37;">
                  <h2 style="color: #0B1F3F; margin: 0 0 25px 0; font-size: 22px; font-weight: bold; display: flex; align-items: center;">
                    <span style="background-color: #D4AF37; color: #0B1F3F; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 14px;">🚚</span>
                    Shipping Information
                  </h2>
                  
                  <div style="background-color: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                      <div>
                        <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">First Name *</label>
                        <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 600;">${customerData.firstName}</p>
                      </div>
                      <div>
                        <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Last Name *</label>
                        <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 600;">${customerData.lastName}</p>
                      </div>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                      <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Address *</label>
                      <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 600; line-height: 1.5;">${customerData.address}</p>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 0;">
                      <div>
                        <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">City *</label>
                        <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 600;">${customerData.city}</p>
                      </div>
                      <div>
                        <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">State *</label>
                        <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 600;">${customerData.state}</p>
                      </div>
                      <div>
                        <label style="color: #6c757d; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">PIN Code *</label>
                        <p style="color: #0B1F3F; margin: 0; font-size: 16px; font-weight: 600;">${customerData.pin}</p>
                      </div>
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
                  This order notification was sent automatically from your website's payment system.
                </p>
              </div>
            </div>
          `,
        }

        await transporter.sendMail(orderMailOptions)
        console.log('Order confirmation email sent successfully')
      } catch (emailError) {
        console.error('Failed to send order confirmation email:', emailError)
        // Don't fail the payment verification if email fails
      }
    }

    // Payment is verified successfully
    return NextResponse.json({
      success: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      message: 'Payment verified successfully',
    })
  } catch (error) {
    // Log error for monitoring but don't expose details
    if (process.env.NODE_ENV === 'development') {
      console.error('Payment verification error:', error)
    }
    
    return NextResponse.json(
      { error: 'Payment verification failed. Please try again.' },
      { status: 500 }
    )
  }
} 