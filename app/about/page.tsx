"use client"

import { useState } from "react"
import { Heart, Mail, MapPin, Award, Users, Globe, Instagram, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ScrollReveal from "../components/scroll-reveal"
import Image from "next/image"

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-0 bg-templeDeepNavy">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/AboutUS.jpg"
            alt="About Us"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-left max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
          <ScrollReveal>
            <h1 className="font-aviano-copper text-4xl md:text-7xl font-bold mb-6 leading-tight text-sacredBellGold">
              About Us
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl mb-4 text-scrollIvory max-w-4xl leading-relaxed">
              Our Mission
            </p>
            <p className="text-lg md:text-xl mb-8 text-scrollIvory max-w-4xl leading-relaxed">
              To reconnect modern fitness enthusiasts with India's time-honored bodyweight traditions—crafting experiences that build real-world strength, sharpen the mind, and honor cultural heritage, all through a portable, playful deck of cards.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />

      {/* Founder's Story */}
      <section className="py-20 px-4 md:px-0 bg-sacredSoftNavy">
        <h2 className="font-aviano-copper text-3xl md:text-5xl font-bold text-center mb-10 text-sacredBellGold">A Note From Our Founder</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-[1000px] mx-auto border border-neutral-200 min-h-[520px]">
          {/* Card background and text colors preserved */}
          <img
            src="/founder.webp"
            alt="Aniruddha Joshi smiling in nature"
            className="w-[280px] md:w-[320px] lg:w-[360px] h-[320px] md:h-[340px] lg:h-[400px] aspect-[4/3] object-cover rounded-xl md:float-left block mx-auto md:mx-0 mr-0 md:mr-6 mb-6 md:mb-4 border border-neutral-200 shadow-md"
          />
          <div>
            <div className="text-xl font-semibold">Aniruddha Joshi</div>
            <div className="text-sm italic text-neutral-500 mb-4">Founder & Visionary</div>
            <div className="text-base leading-relaxed space-y-4 font-rajdhani-regular">
              <p className="border-l-4 border-orange-300 pl-4 italic text-[#444] text-[18px]">My name is Aniruddha Joshi, and my journey with Indian fitness traditions began not in a gym, but in my grandmother's courtyard in Pune.</p>
              <p>Every morning, I practised Surya Namaskar on my house's veranda, carrying that early love of exercise into every sport I tried, and those sunrise rituals planted the seeds of lifelong fitness in me.</p>
              <p>What lit the fire, though, were my grandfather's stories of Akhara-style workouts. He'd tell me of mornings spent with his buddies, pushing through a thousand Dand in a row for fun and camaraderie. Hearing how those sessions forged not just muscle, but character and lifelong bonds, I set out to learn every tradition he mentioned.</p>
              <p>Over time, I added formal training—becoming a certified nutritionist and blending in some gym routines and other sports. Yet it was the muscle memory from those early, endless rounds of Dand and Baithak that stuck with me, delivering real-world strength even after breaks in training. That enduring power inspired me to create Talim Deck: a deck of beautifully crafted cards that make India's potent body-weight methods instantly accessible, anywhere, to anyone.</p>
              <p>When you open the deck for the first time, I hope you feel that same spark of possibility I felt on my veranda. I dream that The Talim Deck reaches a broad community of enthusiasts, each discovering their reservoir of strength and the lasting benefits of these time-tested practices. Welcome to the journey—I can't wait to see where these cards take you.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />

      {/* Mission & Values */}
      <section className="py-20 bg-templeDeepNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">Our Core Values</h2>
              <p className="text-scrollIvory text-xl max-w-3xl mx-auto">
                Every decision we make is guided by these timeless principles that have shaped Indian culture for millennia
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
                              <Card className="bg-white/80 backdrop-blur-sm border-accent/20 hover:bg-white transition-all duration-300 group min-h-[320px] hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8 text-center flex flex-col justify-center h-full">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-black text-xl">🛡️</span>
                  </div>
                  <h3 className="font-bold text-black mb-4 text-xl">Samarpan (Dedication)</h3>
                  <p className="text-black leading-relaxed mb-2">
                    Total commitment to the path—showing up fully, consistently, and with heart. Whether in practice or purpose, we believe in giving our best, every time.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                              <Card className="bg-white/80 backdrop-blur-sm border-accent/20 hover:bg-white transition-all duration-300 group min-h-[320px] hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8 text-center flex flex-col justify-center h-full">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-black text-xl">⚖️</span>
                  </div>
                  <h3 className="font-bold text-black mb-4 text-xl">Satyanishtha (Integrity)</h3>
                  <p className="text-black leading-relaxed mb-2">
                    Staying true—to oneself, to tradition, and to the people we serve. Our work is grounded in honesty, transparency, and respect for the wisdom we carry forward.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={300}>
                              <Card className="bg-white/80 backdrop-blur-sm border-accent/20 hover:bg-white transition-all duration-300 group min-h-[320px] hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8 text-center flex flex-col justify-center h-full">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-black text-xl">🌊</span>
                  </div>
                  <h3 className="font-bold text-black mb-4 text-xl">Anukūlaśīlatā (Adaptability)</h3>
                  <p className="text-black leading-relaxed mb-2">
                    Honoring the old, flowing with the new. We embrace change with grace, shaping our practice to meet each moment without losing our roots.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />

      {/* Contact Form */}
      <section className="py-20 bg-sacredSoftNavy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">Connect With Us</h2>
              <p className="text-scrollIvory text-xl max-w-3xl mx-auto">
                Have questions about the practices? Want to share your transformation story? We'd love to hear from you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal delay={100}>
              <Card className="bg-white/90 border-divineRoyalGold/20 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-bold text-templeDeepNavy mb-6">Get in Touch</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-templeDeepNavy font-semibold mb-2">Name</label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white border-divineRoyalGold/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-divineRoyalGold"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-templeDeepNavy font-semibold mb-2">Email</label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white border-divineRoyalGold/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-divineRoyalGold"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-templeDeepNavy font-semibold mb-2">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="bg-white border-divineRoyalGold/20 text-templeDeepNavy placeholder-templeDeepNavy/50 focus:border-divineRoyalGold"
                        required
                      />
                    </div>

                    {submitStatus.type && (
                      <div className={`p-4 rounded-lg ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-50 border border-green-200 text-green-800' 
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}>
                        {submitStatus.message}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-sacredBellGold text-templeDeepNavy font-bold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300 text-lg py-4 rounded-2xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Mail className="mr-2 text-divineRoyalGold" size={20} />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-2 h-full flex flex-col justify-between">
                <Card className="bg-white/90 border-divineRoyalGold/20 shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-divineRoyalGold rounded-full flex items-center justify-center mr-4">
                        <Mail className="text-templeDeepNavy" size={18} />
                      </div>
                      <div>
                        <h4 className="text-templeDeepNavy font-semibold">Email Us</h4>
                        <p className="text-divineRoyalGold">shop@consciouskilo.com</p>
                      </div>
                    </div>
                    <p className="text-templeDeepNavy text-sm">
                      We respond to all emails within 24 hours. For urgent matters, please mark as high priority.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 border-divineRoyalGold/20 shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-divineRoyalGold rounded-full flex items-center justify-center mr-4">
                        <Instagram className="text-templeDeepNavy" size={18} />
                      </div>
                      <div>
                        <h4 className="text-templeDeepNavy font-semibold">Follow Us</h4>
                        <a 
                          href="https://www.instagram.com/theconsciouskilo?igsh=MTNqNDgwMHpvN2puMQ%3D%3D&utm_source=qr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-divineRoyalGold hover:text-templeDeepNavy transition-colors"
                        >
                          @theconsciouskilo
                        </a>
                      </div>
                    </div>
                    <p className="text-templeDeepNavy text-sm">
                      Connect with us on Instagram for daily inspiration, workout tips, and community updates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 border-divineRoyalGold/20 shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-divineRoyalGold rounded-full flex items-center justify-center mr-4">
                        <Facebook className="text-templeDeepNavy" size={18} />
                      </div>
                      <div>
                        <h4 className="text-templeDeepNavy font-semibold">Join Our Community</h4>
                        <a 
                          href="https://www.facebook.com/share/16nXSUeLcY/?mibextid=wwXIfr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-divineRoyalGold hover:text-templeDeepNavy transition-colors"
                        >
                          The Conscious Kilo
                        </a>
                      </div>
                    </div>
                    <p className="text-templeDeepNavy text-sm">
                      Join our Facebook community for discussions, workout challenges, and cultural insights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />

      {/* Final Message */}
      <section className="py-20 bg-templeDeepNavy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">
              Thank You for Being Part of Our Journey
            </h2>
            <p className="text-scrollIvory text-xl mb-8 leading-relaxed">
              Every practitioner who embraces these ancient methods helps preserve them for future generations.
              Together, we're not just building stronger bodies—we're building a stronger, more connected world.
            </p>
            <p className="font-aviano-copper text-2xl text-sacredBellGold italic">
              "In serving others, we find our own strength. In honoring tradition, we create the future."
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
