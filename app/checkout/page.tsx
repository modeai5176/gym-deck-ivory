"use client"

import { useState, useEffect } from "react"
import { Shield, Truck, CreditCard, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Image from "next/image"
import PaymentNotification from "../components/payment-notification"

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    phone: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false)
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'warning'
    message: string
    isVisible: boolean
  }>({
    type: 'success',
    message: '',
    isVisible: false
  })

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => setIsRazorpayLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Create order on server
      const orderResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 1, // Testing with 1 rupee
          currency: 'INR',
          receipt: `talim_deck_test_${Date.now()}`,
        }),
      })

      if (!orderResponse.ok) {
        throw new Error('Failed to create order')
      }

      const orderData = await orderResponse.json()

      // Initialize Razorpay payment
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Conscious Kilo',
        description: 'Talim Deck - Premium Edition',
        order_id: orderData.orderId,
        handler: async function (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) {
          try {
            // Verify payment on server
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            })

            if (verifyResponse.ok) {
              setNotification({
                type: 'success',
                message: 'Payment successful! You will receive a confirmation email shortly.',
                isVisible: true
              })
              // Here you can redirect to success page or clear form
            } else {
              setNotification({
                type: 'error',
                message: 'Payment verification failed. Please contact support.',
                isVisible: true
              })
            }
          } catch (error) {
            if (process.env.NODE_ENV === 'development') {
              console.error('Payment verification error:', error)
            }
            setNotification({
              type: 'error',
              message: 'Payment verification failed. Please contact support.',
              isVisible: true
            })
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pin}`,
        },
        theme: {
          color: '#0B1F3F',
        },
      }

      const razorpay = new (window as { Razorpay: new (options: any) => any }).Razorpay(options)
      razorpay.open()
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Payment error:', error)
      }
      setNotification({
        type: 'error',
        message: 'Failed to initiate payment. Please try again.',
        isVisible: true
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const isFormComplete = Object.values({
    email: formData.email,
    firstName: formData.firstName,
    lastName: formData.lastName,
    address: formData.address,
    city: formData.city,
    state: formData.state,
    pin: formData.pin,
    phone: formData.phone,
  }).every((val) => val.trim() !== "")

  const canProceed = isFormComplete && isRazorpayLoaded && !isProcessing

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-templeDeepNavy">
      <PaymentNotification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
      />
      <div className="max-w-6xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
        <div className="flex flex-col items-center">
          <Card className="rounded-2xl shadow-xl bg-white/90 border-templeDeepNavy/20 p-0">
            <CardHeader className="pb-2">
              <CardTitle className="font-rajdhani-bold text-2xl text-templeDeepNavy">Order Summary</CardTitle>
              </CardHeader>
            <CardContent className="space-y-4 pt-0 pb-2">
                {/* Product */}
                <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center">
                    <Image
                    src="/placeholder.svg"
                    alt="Talim Deck"
                    width={64}
                    height={64}
                      className="rounded"
                    />
                  </div>
                  <div className="flex-1">
                  <h3 className="text-templeDeepNavy font-semibold">Talim Deck</h3>
                  <p className="text-templeDeepNavy/70 text-sm">80 Traditional Bodyweight Exercise Cards</p>
                  <span className="inline-block text-xs text-templeDeepNavy/80 rounded px-2 py-1 mt-1">Premium Edition</span>
                  </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-templeDeepNavy">₹1</p>
                </div>
              </div>
                {/* Pricing Breakdown */}
              <div className="space-y-1 border-t border-templeDeepNavy/20 pt-3">
                <div className="flex justify-between text-templeDeepNavy/80">
                    <span>Subtotal</span>
                  <span>₹1</span>
                  </div>
                <div className="flex justify-between text-templeDeepNavy/80">
                    <span>Shipping</span>
                  <span className="text-templeDeepNavy">Free</span>
                  </div>
                <div className="flex justify-between text-templeDeepNavy/80">
                  <span>Tax</span>
                  <span>₹0</span>
                  </div>
                <div className="flex justify-between text-templeDeepNavy font-bold border-t border-templeDeepNavy/20 pt-2">
                    <span>Total</span>
                  <span>₹1</span>
                </div>
                  </div>
              {/* Features */}
              <div className="space-y-1 border-t border-templeDeepNavy/20 pt-3 text-templeDeepNavy text-sm">
                <div className="flex items-center">
                  <Truck className="mr-2 text-templeDeepNavy" size={16} />
                  Free shipping across India
                </div>
                <div className="flex items-center">
                  <Shield className="mr-2 text-templeDeepNavy" size={16} />
                    30-day money-back guarantee
                  </div>
                <div className="flex items-center">
                  <CreditCard className="mr-2 text-templeDeepNavy" size={16} />
                  Waterproof premium cards
                  </div>
                </div>
              </CardContent>
            </Card>
          <div className="flex justify-center w-full mt-6">
            <Button
              type="submit"
              size="lg"
              className={`font-bold px-16 py-6 rounded-2xl shadow-md transition-all duration-300 text-2xl w-full max-w-xs ${canProceed ? 'bg-templeDeepNavy text-white hover:bg-templeDeepNavy/90 hover:text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              style={{ minWidth: 220 }}
              disabled={!canProceed}
              onClick={handleSubmit}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : !isRazorpayLoaded ? (
                "Loading Payment..."
              ) : (
                "Order Deck"
              )}
            </Button>
          </div>
          </div>

          {/* Checkout Form */}
        <form className="space-y-8">
              {/* Contact Information */}
          <Card className="rounded-2xl shadow-xl bg-white/90 border-templeDeepNavy/20">
                <CardHeader>
              <CardTitle className="font-rajdhani-bold text-xl text-templeDeepNavy">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                <Label htmlFor="email" className="text-templeDeepNavy">
                  Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="bg-white border-templeDeepNavy/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-templeDeepNavy"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Information */}
          <Card className="rounded-2xl shadow-xl bg-white/90 border-templeDeepNavy/20">
                <CardHeader>
              <CardTitle className="font-rajdhani-bold text-xl text-templeDeepNavy">Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                  <Label htmlFor="firstName" className="text-templeDeepNavy">
                    First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    className="bg-white border-templeDeepNavy/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-templeDeepNavy"
                        required
                      />
                    </div>
                    <div>
                  <Label htmlFor="lastName" className="text-templeDeepNavy">
                    Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    className="bg-white border-templeDeepNavy/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-templeDeepNavy"
                        required
                      />
                    </div>
                  </div>
                  <div>
                <Label htmlFor="address" className="text-templeDeepNavy">
                  Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                  className="bg-white border-templeDeepNavy/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-templeDeepNavy"
                      required
                    />
                  </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                  <Label htmlFor="city" className="text-templeDeepNavy">
                    City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    className="bg-white border-templeDeepNavy/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-templeDeepNavy"
                        required
                      />
                    </div>
                    <div>
                  <Label htmlFor="state" className="text-templeDeepNavy">
                    State <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                        onChange={handleInputChange}
                    className="bg-white border-templeDeepNavy/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-templeDeepNavy"
                        required
                      />
                    </div>
                  </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                  <Label htmlFor="pin" className="text-templeDeepNavy">
                    PIN Code <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="text"
                    id="pin"
                    name="pin"
                    value={formData.pin}
                          onChange={handleInputChange}
                    className="bg-white border-templeDeepNavy/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-templeDeepNavy"
                          required
                        />
                      </div>
                      <div>
                  <Label htmlFor="phone" className="text-templeDeepNavy">
                    Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                          onChange={handleInputChange}
                    className="bg-white border-templeDeepNavy/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-templeDeepNavy"
                            required
                          />
                        </div>
                      </div>
                </CardContent>
              </Card>
            </form>
      </div>
    </div>
  )
}
