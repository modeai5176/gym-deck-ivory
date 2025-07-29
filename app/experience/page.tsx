"use client"

import type React from "react"

import { useState } from "react"
import { Shuffle, Volume2, ArrowRight, Sparkles, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import ScrollReveal from "../components/scroll-reveal"
import { useIsMobile } from "@/hooks/use-mobile"

const sampleCards = [
  {
    id: 1,
    title: "Surya Namaskar",
    sanskrit: "सूर्य नमस्कार",
    mantra: "ॐ सूर्याय नमः",
    description:
      "Begin with palms together at heart center. Inhale, sweep arms overhead. Exhale, fold forward with devotion.",
    breathingCue: "Inhale for 4 counts, hold for 2, exhale for 6",
    spiritualMeaning: "Honoring the divine light within and without",
  },
  {
    id: 2,
    title: "Dand",
    sanskrit: "दण्ड",
    mantra: "ॐ हनुमते नमः",
    description: "Lower into push-up position. As you descend, imagine Hanuman's strength flowing through you.",
    breathingCue: "Inhale down for 3 counts, exhale up for 3 counts",
    spiritualMeaning: "Building strength through humble service",
  },
  {
    id: 3,
    title: "Baithak",
    sanskrit: "बैठक",
    mantra: "ॐ गणेशाय नमः",
    description: "Squat deeply, hands in prayer. Feel your connection to Mother Earth as Ganesha removes obstacles.",
    breathingCue: "Inhale down for 4 counts, pause, exhale up for 4 counts",
    spiritualMeaning: "Grounding power, removing obstacles from your path",
  },
  {
    id: 4,
    title: "Pranayama",
    sanskrit: "प्राणायाम",
    mantra: "ॐ प्राणाय नमः",
    description: "Sit tall, breathe deeply. Feel the life force (prana) flowing through every cell of your being.",
    breathingCue: "Inhale for 4, hold for 4, exhale for 8, pause for 2",
    spiritualMeaning: "Mastering the vital life force within",
  },
  {
    id: 5,
    title: "Dhyana Mudra",
    sanskrit: "ध्यान मुद्रा",
    mantra: "ॐ शिवाय नमः",
    description: "Hands in meditation mudra, spine erect. Find the stillness that exists within all movement.",
    breathingCue: "Natural breath, focus on the pause between breaths",
    spiritualMeaning: "Connecting with the cosmic consciousness of Shiva",
  },
  {
    id: 6,
    title: "Warrior Stance",
    sanskrit: "वीर आसन",
    mantra: "ॐ दुर्गायै नमः",
    description: "Stand strong like a divine warrior. Feel the power of Durga flowing through your stance.",
    breathingCue: "Deep, powerful breaths - inhale strength, exhale fear",
    spiritualMeaning: "Embodying divine courage and protection",
  },
  {
    id: 7,
    title: "Lotus Meditation",
    sanskrit: "पद्म ध्यान",
    mantra: "ॐ लक्ष्म्यै नमः",
    description:
      "Sit in lotus or comfortable position. Like a lotus rising from mud, find beauty in all circumstances.",
    breathingCue: "Gentle, flowing breath like water around a lotus",
    spiritualMeaning: "Rising above circumstances with grace and beauty",
  },
]

export default function ExperiencePage() {
  const [selectedCards, setSelectedCards] = useState<typeof sampleCards>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)

  const drawCards = () => {
    setIsDrawing(true)
    setTimeout(() => {
      const shuffled = [...sampleCards].sort(() => Math.random() - 0.5)
      setSelectedCards(shuffled.slice(0, 3))
      setCurrentCardIndex(0)
      setIsFlipped(false)
      setIsDrawing(false)
    }, 1000)
  }

  const nextCard = () => {
    if (currentCardIndex < selectedCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    }
  }

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setIsFlipped(false)
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const currentCard = selectedCards[currentCardIndex]
  const isMobile = useIsMobile();

  return (
    <div className="pt-0 bg-templeDeepNavy">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-templeDeepNavy">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h1 className="font-aviano-copper text-4xl md:text-7xl font-bold mb-6 leading-tight text-divineRoyalGold">
              Experience the Magic
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-3xl mb-8 text-scrollIvory max-w-4xl mx-auto leading-relaxed">
              Let your workout begin with the flip of a card—simple, tactile, and deeply rooted in legacy. This is more than training; it's a full-body exploration of strength, culture, and intention.
              </p>
            <p className="text-lg md:text-xl mb-8 text-scrollIvory max-w-4xl mx-auto leading-relaxed">
              This is just a glimpse of the 80 cards waiting in your complete Talim Deck.
              </p>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />

      {/* Card Draw Section */}
      {/* Section removed as per user request */}

      {/* Free Sampler Section */}
      {/* Section removed as per user request */}

      {/* Interactive Card Experience */}
      <section className="py-20 bg-sacredSoftNavy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">Curious to Know What Your Workout Looks Like Today?</h2>
              <p className="text-scrollIvory text-xl max-w-3xl mx-auto mb-8">
                Click the button below to randomly generate three cards from our sample collection. These picks offer just a glimpse into the full experience waiting inside the complete deck.
              </p>
            </div>
          </ScrollReveal>
          <div className="flex justify-center mb-8">
              <Button
                onClick={drawCards}
                disabled={isDrawing}
                size="lg"
                className="bg-sacredBellGold text-templeDeepNavy font-bold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300 text-xl px-12 py-6 rounded-2xl font-semibold shadow-lg disabled:opacity-50"
              >
                {isDrawing ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Drawing Cards...
                  </>
                ) : (
                  <>
                    <Shuffle className="mr-3" size={24} />
                    Draw Three Cards
                  </>
                )}
              </Button>
            </div>

          {selectedCards.length > 0 && (
            <ScrollReveal delay={200}>
              <div className="max-w-4xl mx-auto">
                {/* Card Navigation */}
                <div className="flex justify-center items-center mb-8 space-x-4">
                  <Button
                    onClick={prevCard}
                    disabled={currentCardIndex === 0}
                    variant="outline"
                    className="border-divineRoyalGold text-divineRoyalGold bg-white hover:bg-divineRoyalGold hover:text-templeDeepNavy disabled:opacity-50 disabled:bg-white disabled:text-divineRoyalGold"
                  >
                    Previous
                  </Button>
                  <div className="flex space-x-2">
                    {selectedCards.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentCardIndex ? "bg-divineRoyalGold" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    onClick={nextCard}
                    disabled={currentCardIndex === selectedCards.length - 1}
                    variant="outline"
                    className="border-divineRoyalGold text-divineRoyalGold bg-white hover:bg-divineRoyalGold hover:text-templeDeepNavy disabled:opacity-50 disabled:bg-white disabled:text-divineRoyalGold"
                  >
                    Next
                  </Button>
                </div>

                {/* Current Card Display */}
                {/* Card backgrounds and text colors preserved as originally designed */}
                <div className="relative h-96 perspective-1000 mb-8">
                  <div
                    className="card-flip w-full h-full relative cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                    onClick={isMobile ? () => setIsFlipped(!isFlipped) : undefined}
                    onMouseEnter={!isMobile ? () => setIsFlipped(true) : undefined}
                    onMouseLeave={!isMobile ? () => setIsFlipped(false) : undefined}
                  >
                    {/* Front of card */}
                    <Card
                      className="card-front bg-white/50 backdrop-blur-sm border-gray-300/30 h-full"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
                        <div className="text-6xl mb-6">✨</div>
                        <h3 className="font-bold text-black mb-4">{currentCard?.title}</h3>
                        <p className="text-2xl text-black font-medium mb-4">{currentCard?.sanskrit}</p>
                        <p className="text-black text-lg italic mb-6">{currentCard?.mantra}</p>
                        <p className="text-black text-sm">{isMobile ? 'Tap' : 'Hover'} to reveal the practice</p>
                      </CardContent>
                    </Card>

                    {/* Back of card */}
                    <Card
                      className="card-back bg-white/50 backdrop-blur-sm border-gray-300/30 text-black h-full"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <CardContent className="p-8 h-full flex flex-col justify-center">
                        <h3 className="font-bold text-black mb-4 text-center">{currentCard?.title}</h3>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-black mb-2">Practice:</h4>
                            <p className="text-black leading-relaxed">{currentCard?.description}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-black mb-2">Breathing:</h4>
                            <p className="text-black leading-relaxed">{currentCard?.breathingCue}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-black mb-2">Spiritual Meaning:</h4>
                            <p className="text-black leading-relaxed italic">{currentCard?.spiritualMeaning}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-scrollIvory text-lg mb-4">
                    Card {currentCardIndex + 1} of {selectedCards.length}
                  </p>
                  <p className="text-scrollIvory text-sm">{isMobile ? 'Tap' : 'Hover'} the card to flip between front and back</p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />

      {/* Email Capture */}
      <section className="py-20 bg-templeDeepNavy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">
                Want More Workout Cards?
              </h2>
              <p className="text-scrollIvory text-xl max-w-3xl mx-auto mb-8">
                Get a free 7-card digital sampler delivered to your inbox. Experience more of the ancient wisdom that
                awaits in the complete 80-card deck.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="bg-white/50 backdrop-blur-sm border-gray-300/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-scrollIvory font-semibold mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email for free sampler"
                        required
                        className="bg-white/50 border-gray-300/30 text-black placeholder-gray-500 focus:border-divineRoyalGold"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-sacredBellGold text-templeDeepNavy font-bold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300 text-lg py-4 rounded-2xl font-semibold shadow-lg"
                    >
                      <Sparkles className="mr-2" size={20} />
                      Get Free 7-Card Sampler
                    </Button>

                    <p className="text-scrollIvory text-sm text-center">
                      No spam, just workout wisdom. Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">✨</div>
                    <h3 className="font-bold text-divineRoyalGold mb-4">Thank You for Your Interest!</h3>
                    <p className="text-scrollIvory mb-6">
                      Your free 7-card sampler is on its way to your inbox. Check your email in the next few minutes.
                    </p>
                    <Link href="/checkout">
                      <Button
                        size="lg"
                        className="bg-sacredBellGold text-templeDeepNavy font-bold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg"
                      >
                        Get the Complete Deck
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Features of Full Deck */}
      {/* Section removed as per user request */}
    </div>
  )
}
