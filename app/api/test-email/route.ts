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

export async function GET() {
  try {
    console.log('Testing email configuration...')
    console.log('Email User:', process.env.EMAIL_USER || 'shop@consciouskilo.com')
    console.log('Email Pass:', process.env.EMAIL_PASS ? '***SET***' : '***NOT SET***')
    
    // Test connection
    await transporter.verify()
    console.log('✅ SMTP connection verified successfully')
    
    // Test sending a simple email
    const testMailOptions = {
      from: process.env.EMAIL_USER || 'shop@consciouskilo.com',
      to: process.env.EMAIL_USER || 'shop@consciouskilo.com',
      subject: 'Test Email from Conscious Kilo',
      text: 'This is a test email to verify the email configuration is working properly.',
      html: '<h1>Test Email</h1><p>This is a test email to verify the email configuration is working properly.</p>'
    }
    
    await transporter.sendMail(testMailOptions)
    console.log('✅ Test email sent successfully')
    
    return NextResponse.json({
      success: true,
      message: 'Email configuration is working properly!'
    })
    
  } catch (error) {
    console.error('❌ Email test failed:', error)
    
    return NextResponse.json({
      success: false,
      error: error.message,
      code: error.code,
      details: 'Check the server logs for more information'
    }, { status: 500 })
  }
} 