import type { Metadata } from "next"
import { Crown, Zap, Heart, Mountain, Flame, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollReveal from "../components/scroll-reveal"

export const metadata: Metadata = {
  title: "Philosophy - The Eternal Method of Indian Fitness",
  description:
    "Discover the philosophical foundations of Indian fitness traditions. Learn about the sacred integration of body, mind, and spirit through ancient practices like Dand, Baithak, and Surya Namaskar.",
  keywords: [
    "Indian philosophy",
    "ancient fitness philosophy",
    "Akhara tradition",
    "spiritual fitness",
    "Indian workout philosophy",
    "sacred movement",
    "dharma and fitness",
    "Hanuman strength",
    "Shiva dance",
  ],
  openGraph: {
    title: "Philosophy - The Eternal Method of Indian Fitness",
    description:
      "Explore the sacred foundations of Indian fitness traditions and their integration of physical and spiritual development.",
    images: ["/philosophy-og-image.jpg"],
  },
}

export default function PhilosophyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Eternal Method: Indian Fitness Philosophy",
    description: "Understanding the philosophical roots that make Indian fitness practices uniquely transformative",
    author: {
      "@type": "Person",
      name: "Arjun Krishnamurthy",
    },
    publisher: {
      "@type": "Organization",
      name: "CONSCIOUS KILO",
    },
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-0 bg-templeDeepNavy">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-templeDeepNavy">
          <div className="absolute inset-0"></div>
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
            <ScrollReveal>
              <h1 className="font-aviano-copper text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-sacredBellGold break-words px-2">
                Philosophy
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl md:text-3xl mb-4 sm:mb-8 text-scrollIvory max-w-4xl mx-auto leading-relaxed px-2">
                The Eternal Method
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8 text-scrollIvory max-w-4xl mx-auto leading-relaxed px-2">
                A time-tested framework passed down through generations, uniting mind and body in a continuous cycle of learning and growth. This method has bridged centuries, adapting to changing societies while preserving its core principles of conscious movement. By synchronising breath with deliberate action, practitioners access a deeper state of concentration that transcends mere physical exercise.
              </p>
            </ScrollReveal>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* Our Foundation */}
        <section className="py-20 bg-sacredSoftNavy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">
                  Our Foundation
                </h2>
                <p className="text-xl text-scrollIvory max-w-4xl mx-auto leading-relaxed">
                  Our foundation draws from ancient Indian philosophies that view the body and movement as deeply interconnected. Rather than chasing fitness trends, this system promotes rhythm, respect, and awareness—anchoring you in timeless practices. It fosters a sense of personal alignment where each action serves both functional and mindful purposes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* The Three Pillars */}
        <section className="py-20 bg-templeDeepNavy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">
                  The Three Pillars
                </h2>
                <p className="text-xl text-scrollIvory max-w-3xl mx-auto">
                  The fundamental principles that guide our practice
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <Card className="bg-white/90 backdrop-blur-sm border-divineRoyalGold/20 hover:bg-white transition-all duration-300 group min-h-[340px]">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-templeDeepNavy text-2xl">⚖️</span>
                    </div>
                    <h3 className="font-bold text-templeDeepNavy mb-4">Samatā — Balance</h3>
                    <p className="text-templeDeepNavy leading-relaxed">
                      Equilibrium in posture, breath, and life's extremes, fostering resilience in every situation.
                  </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="bg-white/90 backdrop-blur-sm border-divineRoyalGold/20 hover:bg-white transition-all duration-300 group min-h-[340px]">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-templeDeepNavy text-2xl">🔗</span>
                    </div>
                    <h3 className="font-bold text-templeDeepNavy mb-4">Anuśāsana — Discipline</h3>
                    <p className="text-templeDeepNavy leading-relaxed">
                      Steadfast commitment to regular practice, refining technique and character with each repetition.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="bg-white/90 backdrop-blur-sm border-divineRoyalGold/20 hover:bg-white transition-all duration-300 group min-h-[340px]">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-templeDeepNavy text-2xl">🧠</span>
                    </div>
                    <h3 className="font-bold text-templeDeepNavy mb-4">Jñāna — Awareness</h3>
                    <p className="text-templeDeepNavy leading-relaxed">
                      Not just knowledge, but embodied understanding—the clarity that comes from listening to your body, observing your breath, and responding with wisdom cultivated through practice.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* The Akhara Tradition */}
        <section className="py-20 bg-sacredSoftNavy relative overflow-hidden">
          <img src="/akhara.webp" alt="Akhara" className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none" style={{zIndex:0}} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">
                  The Akhara Tradition
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-sacredSoftNavy/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-divineRoyalGold/20">
                  <div className="space-y-6 text-scrollIvory leading-relaxed">
                    <p>
                      The Akhara—literally meaning "place of practice"—represents one of humanity's oldest and most sophisticated training systems. These gymnasiums were not just places to build muscle, but centres where warriors forged character through dedication and discipline.
                    </p>
                    
                    <p>
                      Training was rigorous, rooted in repetition, bodyweight mastery, and community spirit. Mentorship was central, with each student guided by experienced practitioners in a lineage of shared knowledge.
                    </p>
                    
                    <p>
                      The practices you'll find in the Talim Deck—Dand, Baithak, Sapate—were refined in these spaces over centuries. Each movement carries the wisdom of countless masters who understood that true strength begins with inner awareness.
                    </p>
                          </div>
                      </div>
                </ScrollReveal>
            </div>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* The Daily Rhythm */}
        <section className="py-20 bg-templeDeepNavy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">
                  The Daily Rhythm
                </h2>
                <p className="text-xl text-scrollIvory max-w-3xl mx-auto">
                  The traditional daily practices that structure a life of conscious movement
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal delay={100}>
                <Card className="bg-white/90 backdrop-blur-sm border-divineRoyalGold/20 hover:bg-white transition-all duration-300 min-h-[320px] group hover:scale-105 hover:shadow-2xl hover:shadow-divineRoyalGold/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-templeDeepNavy text-xl">⏳</span>
                    </div>
                    <h3 className="font-bold text-templeDeepNavy mb-3">Brahma Muhurta</h3>
                    <p className="text-templeDeepNavy text-sm leading-relaxed">
                      The period roughly 90 minutes before sunrise, considered ideal for learning, meditation, and reflection due to its stillness and clarity.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="bg-white/90 backdrop-blur-sm border-divineRoyalGold/20 hover:bg-white transition-all duration-300 min-h-[320px] group hover:scale-105 hover:shadow-2xl hover:shadow-divineRoyalGold/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-templeDeepNavy text-xl">☀️</span>
                          </div>
                    <h3 className="font-bold text-templeDeepNavy mb-3">Surya Namaskar</h3>
                    <p className="text-templeDeepNavy text-sm leading-relaxed">
                      A flowing sequence of poses traditionally practised at sunrise to energise the body and greet the day.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="bg-white/90 backdrop-blur-sm border-divineRoyalGold/20 hover:bg-white transition-all duration-300 min-h-[320px] group hover:scale-105 hover:shadow-2xl hover:shadow-divineRoyalGold/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-templeDeepNavy text-xl">🤼</span>
                          </div>
                    <h3 className="font-bold text-templeDeepNavy mb-3">Vyayam</h3>
                    <p className="text-templeDeepNavy text-sm leading-relaxed">
                      Physical training encompassing traditional bodyweight movements aimed at enhancing strength, endurance, and agility.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="bg-white/90 backdrop-blur-sm border-divineRoyalGold/20 hover:bg-white transition-all duration-300 min-h-[320px] group hover:scale-105 hover:shadow-2xl hover:shadow-divineRoyalGold/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-templeDeepNavy text-xl">🧘‍♂️</span>
                    </div>
                    <h3 className="font-bold text-templeDeepNavy mb-3">Dhyāna</h3>
                    <p className="text-templeDeepNavy text-sm leading-relaxed">
                      A disciplined practice of focused awareness and mental stillness, used to centre the mind and cultivate insight.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* Modern Application */}
        <section className="py-20 bg-sacredSoftNavy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16 animate-fade-in-up">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">
                  Ancient Wisdom, Modern Life
                </h2>
                <p className="text-scrollIvory text-lg leading-relaxed mb-6">
                  Ancient systems of movement, breath, and discipline were designed not just to build the body but to guide a life of clarity, focus, and resilience. In today's world, these time-honoured practices offer more relevance than ever before.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={100}>
                <Card className="bg-white/90 backdrop-blur-sm border-divineRoyalGold/20 transform hover:scale-105 transition-all duration-500 animate-slide-in-left hover:shadow-2xl hover:shadow-divineRoyalGold/20 group min-h-[340px]">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-divineRoyalGold transition-colors duration-300">The Challenge</h3>
                    <p className="text-templeDeepNavy leading-relaxed mb-4 group-hover:text-divineRoyalGold transition-colors duration-300">
                      In a world flooded with conveniences, we've grown increasingly disconnected from our bodies. Long hours at desks, constant screen exposure, and hyper-efficiency have created a lifestyle that undermines movement and mental clarity.
                    </p>
                    <p className="text-templeDeepNavy leading-relaxed group-hover:text-divineRoyalGold transition-colors duration-300">
                      This disconnection has ripple effects—weakened posture, chronic stress, and a growing sense of physical and emotional fatigue. Despite gyms and apps, many struggle to find sustainable, meaningful fitness that speaks to their deeper needs.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="bg-white/90 backdrop-blur-sm border-divineRoyalGold/20 transform hover:scale-105 transition-all duration-500 animate-slide-in-right hover:shadow-2xl hover:shadow-divineRoyalGold/20 group min-h-[340px]">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-divineRoyalGold transition-colors duration-300">The Solution</h3>
                    <p className="text-templeDeepNavy leading-relaxed mb-4 group-hover:text-divineRoyalGold transition-colors duration-300">
                      Ancient methods remind us that movement can be intentional, invigorating, and deeply restorative. When stripped to its essence, fitness becomes less about aesthetics and more about awareness, control, and connection.
                    </p>
                    <p className="text-templeDeepNavy leading-relaxed group-hover:text-divineRoyalGold transition-colors duration-300">
                      Incorporating just a few minutes of purposeful movement into your day can restore this balance. These timeless principles don't require fancy gear or perfect conditions—just the willingness to move, breathe, and reconnect with what has always been within you.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* Call to Action */}
        <section className="py-20 bg-templeDeepNavy">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="animate-fade-in-up">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">
                  Start Your Journey
                </h2>
                <p className="text-scrollIvory text-lg leading-relaxed mb-8">
                  Embrace this philosophy in action—shuffle, draw, and move with intention. Your path to lifetime strength and awareness begins with the very first card.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/product">
                    <Button
                      size="lg"
                      className="bg-sacredBellGold text-templeDeepNavy font-bold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300 text-xl px-12 py-6 rounded-2xl font-semibold shadow-lg"
                    >
                      Begin Your Practice
                    </Button>
                  </Link>
                  <Link href="/experience">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-2 border-divineRoyalGold text-divineRoyalGold hover:bg-divineRoyalGold hover:text-templeDeepNavy transition-all duration-300 text-xl px-12 py-6 rounded-2xl transform hover:scale-105"
                    >
                      Try Free Sample
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  )
}
