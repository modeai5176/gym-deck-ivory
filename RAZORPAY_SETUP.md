# Razorpay Integration Setup

This guide explains how to set up Razorpay payment gateway integration for the Talim Deck checkout.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id_here
```

## Getting Razorpay Credentials

1. Sign up for a Razorpay account at https://razorpay.com
2. Go to Settings > API Keys in your Razorpay Dashboard
3. Generate a new API key pair
4. Copy the Key ID and Key Secret to your `.env.local` file

## Features Implemented

### 1. Order Creation API (`/api/create-order`)
- Creates Razorpay orders on the server
- Handles amount conversion (INR to paise)
- Generates unique receipt IDs
- Includes order metadata

### 2. Payment Verification API (`/api/verify-payment`)
- Verifies payment signatures for security
- Prevents payment tampering
- Returns payment confirmation

### 3. Frontend Integration
- Loads Razorpay checkout script dynamically
- Pre-fills customer information
- Handles payment success/failure
- Shows loading states and error messages

## Payment Flow

1. **User fills checkout form** with shipping details
2. **Order creation** - Server creates Razorpay order
3. **Payment initiation** - Razorpay checkout modal opens
4. **Payment processing** - User completes payment
5. **Payment verification** - Server verifies payment signature
6. **Success confirmation** - User receives confirmation

## Security Features

- ✅ Server-side order creation
- ✅ Payment signature verification
- ✅ Environment variable protection
- ✅ Error handling and logging
- ✅ TypeScript type safety

## Testing

For testing, use Razorpay's test mode:
- Test cards: https://razorpay.com/docs/payments/payment-gateway/test-mode/
- Test UPI: `success@razorpay`
- Test wallets: Use any test mobile number

## Production Deployment

1. Switch to Razorpay live mode
2. Update environment variables with live credentials
3. Ensure HTTPS is enabled
4. Test payment flow thoroughly
5. Monitor payment logs and webhooks

## File Structure

```
app/
├── api/
│   ├── create-order/route.ts      # Creates Razorpay orders
│   └── verify-payment/route.ts    # Verifies payment signatures
├── checkout/page.tsx              # Checkout page with Razorpay integration
└── types/
    └── razorpay.d.ts              # TypeScript declarations
```

## Dependencies

- `razorpay`: Official Razorpay Node.js SDK
- `crypto`: Node.js crypto module for signature verification
- `next`: Next.js framework for API routes

## Support

For issues with Razorpay integration:
1. Check Razorpay documentation: https://razorpay.com/docs/
2. Verify environment variables are set correctly
3. Check browser console for JavaScript errors
4. Review server logs for API errors 