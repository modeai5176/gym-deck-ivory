import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute
  const maxRequests = 10 // 10 requests per minute

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

function validateOrderRequest(body: any): { valid: boolean; error?: string } {
  if (!body.amount || typeof body.amount !== 'number') {
    return { valid: false, error: 'Invalid amount' }
  }
  
  if (body.amount <= 0 || body.amount > 100000) { // Max ₹1,00,000
    return { valid: false, error: 'Amount out of valid range' }
  }
  
  if (!body.currency || body.currency !== 'INR') {
    return { valid: false, error: 'Only INR currency supported' }
  }
  
  if (!body.receipt || typeof body.receipt !== 'string') {
    return { valid: false, error: 'Invalid receipt ID' }
  }
  
  return { valid: true }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Input validation
    const validation = validateOrderRequest(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const { amount, currency = 'INR', receipt } = body

    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency,
      receipt,
      notes: {
        source: 'Talim Deck Purchase',
        ip: ip,
      },
    }

    const order = await razorpay.orders.create(options)

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error) {
    // Log error for monitoring but don't expose details
    if (process.env.NODE_ENV === 'development') {
      console.error('Order creation error:', error)
    }
    
    return NextResponse.json(
      { error: 'Failed to create order. Please try again.' },
      { status: 500 }
    )
  }
} 