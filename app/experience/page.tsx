"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Shuffle, Volume2, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import ScrollReveal from "../components/scroll-reveal"
import { useIsMobile } from "@/hooks/use-mobile"

const cardImages = [
  {
    id: 1,
    name: "Ekapada Baithak",
    front: "/CARDSBACKANDFRONT/EKAPADA_BAITHAK_FRONT.webp",
    back: "/CARDSBACKANDFRONT/EKAPADA_BAITHAK_BACK.webp"
  },
  {
    id: 2,
    name: "Hanuman Dand",
    front: "/CARDSBACKANDFRONT/HANUMANDANDFRONT.webp",
    back: "/CARDSBACKANDFRONT/HANUMANDANDBACK.webp"
  },
  {
    id: 3,
    name: "Rammurti Baithak",
    front: "/CARDSBACKANDFRONT/RAMMURTI BAITHAK FRONT.webp",
    back: "/CARDSBACKANDFRONT/RAMMURTI BAITHAK BACK.webp"
  },
  {
    id: 4,
    name: "Sampurna Baithak",
    front: "/CARDSBACKANDFRONT/SAMPURNABAITHAKFRONT.webp",
    back: "/CARDSBACKANDFRONT/SAMPURNABAITHAKBACK.webp"
  },
  {
    id: 5,
    name: "Sinha Dand",
    front: "/CARDSBACKANDFRONT/SINHADANDFRONT.webp",
    back: "/CARDSBACKANDFRONT/SINHA DAND BACK.webp"
  },
  {
    id: 6,
    name: "Vanar Sapate",
    front: "/CARDSBACKANDFRONT/VANARSAPATEFRONT.webp",
    back: "/CARDSBACKANDFRONT/VANARSAPATEBACK.webp"
  },
  {
    id: 7,
    name: "Vrschik Dand",
    front: "/CARDSBACKANDFRONT/VRSCHKDANDFRONT.webp",
    back: "/CARDSBACKANDFRONT/VRSCHKDANDBACK.webp"
  }
]

export default function ExperiencePage() {
  const [selectedCards, setSelectedCards] = useState<typeof cardImages>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false])
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasDrawnCards, setHasDrawnCards] = useState(false)
  const [cardLoadingStates, setCardLoadingStates] = useState<boolean[]>([])

  const drawCards = () => {
    setIsDrawing(true)
    
    setTimeout(() => {
      const shuffled = [...cardImages].sort(() => Math.random() - 0.5)
      const newSelectedCards = shuffled.slice(0, 3)
      setSelectedCards(newSelectedCards)
      setCurrentCardIndex(0)
      setFlippedCards([false, false, false])
      setCardLoadingStates([true, true, true]) // Initialize all cards as loading
      setIsDrawing(false)
      setHasDrawnCards(true)
      
      // Preload images for better performance
      newSelectedCards.forEach((card, index) => {
        const frontImg = new window.Image()
        const backImg = new window.Image()
        
        frontImg.onload = () => {
          backImg.onload = () => {
            setCardLoadingStates(prev => {
              const newStates = [...prev]
              newStates[index] = false
              return newStates
            })
          }
          backImg.src = card.back
        }
        frontImg.src = card.front
      })
    }, 1000)
  }

  const nextCard = () => {
    if (currentCardIndex < selectedCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    }
  }

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
    }
  }

  const handleCardHover = (index: number, isHovering: boolean) => {
    const newFlippedCards = [...flippedCards]
    newFlippedCards[index] = isHovering
    setFlippedCards(newFlippedCards)
  }

  const handleCardLeave = (index: number) => {
    // Immediate return to front without transition delay
    const newFlippedCards = [...flippedCards]
    newFlippedCards[index] = false
    setFlippedCards(newFlippedCards)
  }

  const isMobile = useIsMobile();

  // Ensure flippedCards state is properly initialized when cards are selected
  useEffect(() => {
    if (selectedCards.length > 0 && flippedCards.length !== selectedCards.length) {
      setFlippedCards(new Array(selectedCards.length).fill(false))
    }
  }, [selectedCards, flippedCards.length])

  return (
    <div className="pt-0 bg-templeDeepNavy">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/experiencehero.JPG"
            alt="Experience the Magic"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-left max-w-5xl px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
          <ScrollReveal>
            <h1 className="font-aviano-copper text-4xl md:text-7xl font-bold mb-6 leading-tight text-sacredBellGold">
              Experience the Magic
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl mb-8 text-scrollIvory max-w-4xl leading-relaxed">
              Let your workout begin with the flip of a card—simple, tactile, and deeply rooted in legacy. This is more than training; it's a full-body exploration of strength, culture, and intention.
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
              <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">Curious to Know What Your Workout Looks Like Today?</h2>
              <p className="text-scrollIvory text-xl max-w-3xl mx-auto mb-8">
                Click the button below to randomly generate three cards from our sample collection. These picks offer just a glimpse into the full experience waiting inside the complete deck.
              </p>
            </div>
          </ScrollReveal>
          <div className="flex justify-center mb-8">
              <Button
                onClick={drawCards}
                disabled={isDrawing || hasDrawnCards}
                size="lg"
                className={`font-bold transition-all duration-300 text-xl px-12 py-6 rounded-2xl font-semibold shadow-lg ${
                  hasDrawnCards 
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50' 
                    : 'bg-sacredBellGold text-templeDeepNavy hover:bg-divineRoyalGold hover:text-scrollIvory'
                }`}
              >
                {isDrawing ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Drawing Cards...
                  </>
                ) : hasDrawnCards ? (
                  <>
                    Cards Already Drawn
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
              <div className="max-w-6xl mx-auto">
                {/* Desktop: All Three Cards Display */}
                <div className="hidden md:block">
                  <div 
                    className="flex justify-center items-center gap-28 mb-8"
                    onMouseLeave={() => setFlippedCards([false, false, false])}
                  >
                    {selectedCards.map((card, index) => (
                      <div key={card.id} className="flex flex-col items-center">
                        <div className="relative w-[300px] h-[450px] perspective-1000">
                          <div
                            className={`w-full h-full relative cursor-pointer card-flip-container ${flippedCards[index] ? 'flipped' : ''}`}
                            style={{
                              transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                              transition: 'transform 0.4s ease-in-out'
                            }}
                            onMouseEnter={() => handleCardHover(index, true)}
                            onMouseLeave={() => handleCardLeave(index)}
                          >
                            {/* Front of card */}
                            <div className="absolute inset-0 w-full h-full rounded-lg shadow-lg overflow-hidden card-flip-front">
                              {!cardLoadingStates[index] ? (
                                <Image
                                  src={card.front}
                                  alt={`${card.name} - Front`}
                                  fill
                                  className="object-cover card-image"
                                  sizes="300px"
                                  priority
                                  quality={95}
                                />
                              ) : (
                                <div className="w-full h-full bg-white flex items-center justify-center">
                                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sacredBellGold"></div>
                                </div>
                              )}
                            </div>

                            {/* Back of card */}
                            <div className="absolute inset-0 w-full h-full rounded-lg shadow-lg overflow-hidden card-flip-back">
                              {!cardLoadingStates[index] ? (
                                <Image
                                  src={card.back}
                                  alt={`${card.name} - Back`}
                                  fill
                                  className="object-cover card-image"
                                  sizes="300px"
                                  priority
                                  quality={95}
                                />
                              ) : (
                                <div className="w-full h-full bg-white flex items-center justify-center">
                                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sacredBellGold"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-scrollIvory text-sm mt-3 text-center font-medium">
                          {card.name}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-scrollIvory text-sm">Hover any card to flip between front and back</p>
                  </div>
                </div>

                {/* Mobile: Single Card with Navigation */}
                <div className="md:hidden">
                  {/* Card Navigation */}
                  <div className="flex justify-center items-center mb-6 space-x-4">
                    <Button
                      onClick={prevCard}
                      disabled={currentCardIndex === 0}
                      variant="outline"
                      className="border-divineRoyalGold text-divineRoyalGold bg-white hover:bg-divineRoyalGold hover:text-templeDeepNavy disabled:opacity-50 disabled:bg-white disabled:text-divineRoyalGold px-4 py-2"
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
                      className="border-divineRoyalGold text-divineRoyalGold bg-white hover:bg-divineRoyalGold hover:text-templeDeepNavy disabled:opacity-50 disabled:bg-white disabled:text-divineRoyalGold px-4 py-2"
                    >
                      Next
                    </Button>
                  </div>

                  {/* Single Card Display */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-[300px] h-[450px] perspective-1000">
                      <div
                        className={`w-full h-full relative cursor-pointer card-flip-container ${flippedCards[currentCardIndex] ? 'flipped' : ''}`}
                        style={{
                          transform: flippedCards[currentCardIndex] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                          transition: 'transform 0.4s ease-in-out'
                        }}
                        onClick={() => {
                          const newFlippedCards = [...flippedCards]
                          newFlippedCards[currentCardIndex] = !newFlippedCards[currentCardIndex]
                          setFlippedCards(newFlippedCards)
                        }}
                      >
                        {/* Front of card */}
                        <div className="absolute inset-0 w-full h-full rounded-lg shadow-lg overflow-hidden card-flip-front">
                          {!cardLoadingStates[currentCardIndex] ? (
                            <Image
                              src={selectedCards[currentCardIndex]?.front || ''}
                              alt={`${selectedCards[currentCardIndex]?.name} - Front`}
                              fill
                              className="object-cover card-image"
                              sizes="300px"
                              priority
                              quality={95}
                            />
                          ) : (
                            <div className="w-full h-full bg-white flex items-center justify-center">
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sacredBellGold"></div>
                            </div>
                          )}
                        </div>

                        {/* Back of card */}
                        <div className="absolute inset-0 w-full h-full rounded-lg shadow-lg overflow-hidden card-flip-back">
                          {!cardLoadingStates[currentCardIndex] ? (
                            <Image
                              src={selectedCards[currentCardIndex]?.back || ''}
                              alt={`${selectedCards[currentCardIndex]?.name} - Back`}
                              fill
                              className="object-cover card-image"
                              sizes="300px"
                              priority
                              quality={95}
                            />
                          ) : (
                            <div className="w-full h-full bg-white flex items-center justify-center">
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sacredBellGold"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="text-center">
                    <p className="text-scrollIvory text-lg mb-2">
                      {selectedCards[currentCardIndex]?.name}
                    </p>
                    <p className="text-scrollIvory text-sm mb-4">
                      Card {currentCardIndex + 1} of {selectedCards.length}
                    </p>
                    <p className="text-scrollIvory text-sm">Tap the card to flip between front and back</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />



      {/* Features of Full Deck */}
      {/* Section removed as per user request */}
    </div>
  )
}
