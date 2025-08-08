"use client"

import { useState, useEffect, useRef } from 'react'
import { X, Mail, Gift, Sparkles, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function EmailCapturePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const workoutsSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('emailCaptureShown')
    if (hasSeenPopup) {
      setHasShown(true)
      return
    }

    const handleScroll = () => {
      if (hasShown || isVisible) return

      // Find the section with "What Is an Indian Workout?" heading
      const headings = document.querySelectorAll('h2')
      let targetHeading = null
      
      for (const heading of headings) {
        if (heading.textContent?.includes('What Is an Indian Workout?')) {
          targetHeading = heading
          break
        }
      }
      
      if (targetHeading) {
        const rect = targetHeading.getBoundingClientRect()
        const isInView = rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0
        
        if (isInView && !isVisible) {
          // Add a small delay for better UX
          setTimeout(() => {
            setIsVisible(true)
          }, 500)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasShown, isVisible])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setIsSubmitting(true)
    
    try {
      // Send email to your backend or email service
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'workout_popup' }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        localStorage.setItem('emailCaptureShown', 'true')
        
        // Hide popup after showing success message
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      // Still mark as shown to avoid repeated popups
      localStorage.setItem('emailCaptureShown', 'true')
      setIsVisible(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('emailCaptureShown', 'true')
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={handleClose} />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-templeDeepNavy p-6 text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Gift className="text-white" size={32} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Exclusive 15% OFF!
              </h3>
              <p className="text-white/90 text-sm">
                Unlock ancient Indian fitness wisdom
              </p>
            </div>

          {/* Content */}
          <div className="p-6">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Sparkles className="text-sacredBellGold" size={20} />
                    <span className="text-lg font-semibold text-templeDeepNavy">
                      Get Your Discount Code
                    </span>
                    <Sparkles className="text-sacredBellGold" size={20} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Subscribe to receive your exclusive 15% discount code for the Talim Deck. 
                    Plus, get early access to new exercises and ancient fitness wisdom.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="text-sacredBellGold" size={16} />
                      <label htmlFor="email" className="text-sm font-medium text-templeDeepNavy">
                        Email Address
                      </label>
                    </div>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="border-templeDeepNavy/20 focus:border-sacredBellGold"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full bg-sacredBellGold text-templeDeepNavy hover:bg-divineRoyalGold hover:text-scrollIvory font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-templeDeepNavy border-t-transparent rounded-full animate-spin mr-2" />
                        Unlocking Savings...
                      </>
                    ) : (
                      <>
                        <Gift className="mr-2" size={16} />
                        Get 15% OFF Code
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-templeDeepNavy mb-2">
                  Check Your Email!
                </h4>
                <p className="text-gray-600 text-sm">
                  Your exclusive 15% discount code has been sent to <strong>{email}</strong>
                </p>
                <div className="mt-4 p-3 bg-sacredBellGold/10 rounded-lg">
                  <p className="text-sm text-templeDeepNavy font-medium">
                    🎉 Use code: <span className="font-bold text-sacredBellGold">ANCIENT15</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
} 