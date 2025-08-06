// Security configuration and utilities

export const securityConfig = {
  // Rate limiting configuration
  rateLimit: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: {
      orderCreation: 10,
      paymentVerification: 5,
      general: 100
    }
  },
  
  // Input validation rules
  validation: {
    maxStringLength: 200,
    maxAmount: 100000, // ₹1,00,000
    allowedCurrencies: ['INR'],
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneRegex: /^[0-9]{10}$/,
    pinCodeRegex: /^[0-9]{6}$/
  },
  
  // Security headers
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  }
}

// Input sanitization function
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, securityConfig.validation.maxStringLength)
}

// Email validation
export function validateEmail(email: string): boolean {
  return securityConfig.validation.emailRegex.test(email)
}

// Phone validation
export function validatePhone(phone: string): boolean {
  return securityConfig.validation.phoneRegex.test(phone)
}

// PIN code validation
export function validatePinCode(pinCode: string): boolean {
  return securityConfig.validation.pinCodeRegex.test(pinCode)
}

// Amount validation
export function validateAmount(amount: number): boolean {
  return amount > 0 && amount <= securityConfig.validation.maxAmount
}

// Currency validation
export function validateCurrency(currency: string): boolean {
  return securityConfig.validation.allowedCurrencies.includes(currency)
}

// Generate secure random string
export function generateSecureId(): string {
  return crypto.randomUUID()
}

// Hash sensitive data (for logging)
export function hashSensitiveData(data: string): string {
  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data)
  return crypto.subtle.digest('SHA-256', dataBuffer).then(hash => {
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
      .substring(0, 16)
  })
} 