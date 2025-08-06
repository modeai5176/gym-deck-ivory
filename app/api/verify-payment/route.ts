import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

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

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body

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