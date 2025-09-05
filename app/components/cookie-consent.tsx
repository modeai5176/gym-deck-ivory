"use client"

import { useState, useEffect } from 'react'
import { X, Cookie, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsAccepted(true)
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 z-40" onClick={handleClose} />
      
      {/* Cookie Consent Popup */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4 relative">
          {/* Close Button - Top Right */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pr-8">
            {/* Content */}
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-sacredBellGold rounded-full flex items-center justify-center">
                  <Cookie className="text-templeDeepNavy" size={24} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-templeDeepNavy mb-2">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This website uses cookies to improve functionality, analyze site usage, and provide personalized content. 
                  By continuing to use this site, you consent to our use of cookies. 
                  <a 
                    href="/privacy" 
                    className="text-sacredBellGold hover:text-divineRoyalGold underline ml-1"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 flex-shrink-0 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={handleReject}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Reject All
              </Button>
              
              <Button
                onClick={handleAccept}
                className="bg-sacredBellGold text-templeDeepNavy hover:bg-divineRoyalGold hover:text-scrollIvory"
              >
                <CheckCircle className="mr-2" size={16} />
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 