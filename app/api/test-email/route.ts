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

export async function GET() {
  try {
    console.log('Testing email configuration...')
    console.log('Email User:', process.env.EMAIL_USER)
    console.log('Email Pass:', process.env.EMAIL_PASS ? '***SET***' : '***NOT SET***')
    
    // Test connection
    await transporter.verify()
    console.log('✅ SMTP connection verified successfully')
    
    // Test sending a simple email
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
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
      error: error instanceof Error ? error.message : 'Unknown error',
      code: error && typeof error === 'object' && 'code' in error ? error.code : 'UNKNOWN',
      details: 'Check the server logs for more information'
    }, { status: 500 })
  }
} 