"use client"

import { useState, useEffect, useRef } from 'react'
import { X, Mail, Gift, Sparkles, CheckCircle, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function EmailCapturePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [showDiscountCode, setShowDiscountCode] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [hasSeenDiscountCode, setHasSeenDiscountCode] = useState(false)
  const workoutsSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Check if user has already seen the popup and discount code
    const hasSeenPopup = localStorage.getItem('emailCaptureShown')
    const hasSeenCode = localStorage.getItem('hasSeenDiscountCode')
    
    if (hasSeenPopup) {
      setHasShown(true)
    }
    
    if (hasSeenCode) {
      setHasSeenDiscountCode(true)
    }

    const handleScroll = () => {
      if (hasShown || isVisible) return

      // Find the video section with "Core Indian Workouts" heading
      const headings = document.querySelectorAll('h2')
      let targetHeading = null
      
      for (const heading of headings) {
        if (heading.textContent?.includes('Core Indian Workouts')) {
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

    // Add function to window object so navigation can call it from any page
    const showEmailPopup = () => {
      console.log('showEmailPopup called!', { hasSeenCode, hasSeenDiscountCode })
      setIsVisible(true)
      // If user has seen discount code before, show it directly
      if (hasSeenCode) {
        setShowDiscountCode(true)
      }
    }
    
    // @ts-ignore
    window.showEmailPopup = showEmailPopup
    
    window.addEventListener('scroll', handleScroll)
    
    // Run once on mount in case user is already in the section
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      // @ts-ignore
      delete window.showEmailPopup
    }
  }, [hasShown, isVisible, hasSeenDiscountCode])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('TALIM10')
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setIsSubmitting(true)
    
    // Add 2 second delay before showing discount code
    setTimeout(() => {
      setShowDiscountCode(true)
      setHasSeenDiscountCode(true)
      localStorage.setItem('hasSeenDiscountCode', 'true')
    }, 2000)
    
    try {
      // Send email to your backend or email service
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'video_section_popup' }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        localStorage.setItem('emailCaptureShown', 'true')
        

      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      // Even if email fails, still show discount code and keep popup open
      setIsSubmitted(true)
      localStorage.setItem('emailCaptureShown', 'true')
      

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-templeDeepNavy p-3 md:p-6 text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-200 transition-colors p-2"
              >
                <X size={18} className="md:w-5 md:h-5" />
              </button>
              
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Gift className="text-white md:w-8 md:h-8" size={24} />
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Extra 10% OFF!
              </h3>
             
            </div>

          {/* Content */}
          <div className="p-3 md:p-5">
            {!showDiscountCode ? (
              <>
                <div className="text-center mb-4 md:mb-6">
                  <div className="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-3 flex-wrap">
                    <Sparkles className="text-sacredBellGold md:w-5 md:h-5" size={16} />
                    <span className="text-base md:text-lg font-semibold text-templeDeepNavy">
                      Unlock Your Exclusive Savings
                    </span>
                    <Sparkles className="text-sacredBellGold md:w-5 md:h-5" size={16} />
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed px-1 md:px-0">
                    Subscribe to Unlock Your exclusive code for the Talim Deck.
                    Get an extra 10% off the regular price.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                      <Mail className="text-sacredBellGold md:w-4 md:h-4" size={14} />
                      <label htmlFor="email" className="text-xs md:text-sm font-medium text-templeDeepNavy">
                        Email Address
                      </label>
                    </div>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="your@email.com"
                      className="border-templeDeepNavy/20 focus:border-sacredBellGold text-sm md:text-base py-2 md:py-3"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full bg-sacredBellGold text-templeDeepNavy hover:bg-divineRoyalGold hover:text-scrollIvory font-semibold py-2 md:py-3 text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-templeDeepNavy border-t-transparent rounded-full animate-spin mr-2" />
                        Unlocking Savings...
                      </>
                    ) : (
                      <>
                        <Gift className="mr-2" size={16} />
                        Unlock Savings
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-3 md:mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </>
            ) : (
              // Show discount code when revealed
                             <div className="text-center py-4">
                 <div className="w-16 h-16 bg-sacredBellGold/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                   <Gift className="text-sacredBellGold" size={32} />
                 </div>
                 <h4 className="text-xl font-semibold text-templeDeepNavy mb-3">
                   🎉 Savings Unlocked! 🎉
                 </h4>
                
                {/* Discount Code Display */}
                                 <div className="bg-gradient-to-r from-sacredBellGold/20 to-divineRoyalGold/20 rounded-lg p-6 border border-sacredBellGold/30 mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="text-3xl font-bold text-sacredBellGold tracking-wider">
                      TALIM10
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="p-2 rounded-full hover:bg-sacredBellGold/20 transition-colors duration-200"
                      title="Copy to clipboard"
                    >
                      {isCopied ? (
                        <Check className="text-green-600" size={20} />
                      ) : (
                        <Copy className="text-sacredBellGold" size={20} />
                      )}
                    </button>
                  </div>
                  <div className="text-sm text-templeDeepNavy/70 space-y-1">
                    <p>Price: <span className="font-bold text-templeDeepNavy">₹1666</span></p>
                    <p>Extra 10% OFF: <span className="font-bold text-green-600">-₹166</span></p>
                    <p className="font-bold text-sacredBellGold text-lg">Final Price: ₹1500</p>
                  </div>
                </div>
                
                 
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
} 