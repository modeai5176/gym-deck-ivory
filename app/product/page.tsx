import type { Metadata } from "next"
import { Check, Shield, Star, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "../components/scroll-reveal"
import FlipCard from "@/components/ui/flip-card"

export const metadata: Metadata = {
  title: "Talim Deck - 80 Indian Bodyweight Workout Cards",
  description:
    "Premium 80-card deck featuring authentic Indian bodyweight traditions. Includes Dand, Baithak, and Sapate exercises with progress trackers and customizable templates.",
  keywords: [
    "Indian workout deck",
    "bodyweight training cards",
    "Dand Baithak cards",
    "traditional Indian fitness",
    "Akhara training",
    "conscious movement deck",
    "premium workout cards",
    "Indian physical culture",
  ],
  openGraph: {
    title: "Talim Deck - 80 Indian Bodyweight Workout Cards",
    description:
      "Premium deck with authentic Indian bodyweight traditions and movements. Transform your fitness journey with ancient wisdom.",
    images: ["/product-og-image.jpg"],
  },
}

export default function ProductPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Talim Deck - Indian Bodyweight Workout Cards",
    description: "80 beautifully crafted cards blending ancient Indian bodyweight traditions with modern training principles",
    brand: {
      "@type": "Brand",
      name: "CONSCIOUS KILO",
    },
    offers: {
      "@type": "Offer",
      price: "97.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "CONSCIOUS KILO",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "247",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-16 bg-templeDeepNavy">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-templeDeepNavy">
          <div className="absolute inset-0"></div>
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
            <ScrollReveal>
              <h1 className="font-aviano-copper text-5xl md:text-8xl font-bold mb-6 leading-tight text-divineRoyalGold">
                TALIM DECK
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-3xl mb-8 text-white max-w-4xl mx-auto leading-relaxed">
                Meet your all-in-one Indian bodyweight workout companion—80 beautifully designed cards that bring centuries-old strength traditions straight into your hands.
              </p>
              <p className="text-lg md:text-xl mb-8 text-white max-w-4xl mx-auto leading-relaxed">
                Compact and waterproof, this deck is built to travel with you from the living room to the park, ensuring you can train anywhere, anytime.
              </p>
            </ScrollReveal>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* What's Inside */}
        <section className="py-20 bg-sacredSoftNavy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">
                  What's inside your Deck
                </h2>
                <p className="text-xl text-scrollIvory max-w-3xl mx-auto">
                  A colour-coded collection of 68 powerful, muscle-building exercises blending traditional and modern variations
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal delay={100}>
                <FlipCard
                  className="w-full max-w-[250px] h-[300px] mx-auto mb-14"
                  front={
                    <Card className="bg-white/90 backdrop-blur-sm border-primary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-black text-xl">🤸‍♂️</span>
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-2xl mb-2">34 Dand</h3>
                        <p className="text-black text-sm md:text-base">For upper body strength</p>
                      </CardContent>
                    </Card>
                  }
                  back={
                    <Card className="bg-white/90 backdrop-blur-sm border-primary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <h3 className="font-bold text-black mb-2">34 Dand</h3>
                        <p className="text-black text-sm">The Dand is a dynamic, flowing movement practiced in Indian wrestling traditions. It enhances strength, flexibility, and breath-body coordination through rhythmic motion.</p>
                      </CardContent>
                    </Card>
                  }
                />
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <FlipCard
                  className="w-full max-w-[250px] h-[300px] mx-auto mb-14"
                  front={
                    <Card className="bg-white/90 backdrop-blur-sm border-accent/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-black text-xl">🧍‍♂️</span>
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-2xl mb-2">25 Baithak</h3>
                        <p className="text-black text-sm md:text-base">For lower body power</p>
                      </CardContent>
                    </Card>
                  }
                  back={
                    <Card className="bg-white/90 backdrop-blur-sm border-accent/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <h3 className="font-bold text-black mb-2">25 Baithak</h3>
                        <p className="text-black text-sm">Baithak is a foundational squat practiced with breath and focus in traditional Akharas. It builds endurance, balance, and mental discipline through controlled repetition.</p>
                      </CardContent>
                    </Card>
                  }
                />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <FlipCard
                  className="w-full max-w-[250px] h-[300px] mx-auto mb-14"
                  front={
                    <Card className="bg-white/90 backdrop-blur-sm border-tertiary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-black text-xl">🔋</span>
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-2xl mb-2">9 Sapate</h3>
                        <p className="text-black text-sm md:text-base">For full-body conditioning</p>
                      </CardContent>
                    </Card>
                  }
                  back={
                    <Card className="bg-white/90 backdrop-blur-sm border-tertiary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <h3 className="font-bold text-black mb-2">9 Sapate</h3>
                        <p className="text-black text-sm">Sapate consists of agile footwork drills combining speed, rhythm, and coordination. Originating in martial training, they sharpen reflexes and develop fluid movement.</p>
                      </CardContent>
                    </Card>
                  }
                />
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <FlipCard
                  className="w-full max-w-[250px] h-[300px] mx-auto mb-14"
                  front={
                    <Card className="bg-white/90 backdrop-blur-sm border-secondary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-black text-xl">📋</span>
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-2xl mb-2">12 Pre-Designed Routines</h3>
                      </CardContent>
                    </Card>
                  }
                  back={
                    <Card className="bg-white/90 backdrop-blur-sm border-secondary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <h3 className="font-bold text-black mb-2">12 Pre-Designed Routines</h3>
                        <p className="text-black text-sm">Sequences inspired by classical Akhara training to guide consistent practice. Each routine balances effort, rest, and traditional flow.</p>
                      </CardContent>
                    </Card>
                  }
                />
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <FlipCard
                  className="w-full max-w-[250px] h-[300px] mx-auto mb-14"
                  front={
                    <Card className="bg-white/90 backdrop-blur-sm border-primary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-black text-xl">📈</span>
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-2xl mb-2">4 Progress Trackers</h3>
                      </CardContent>
                    </Card>
                  }
                  back={
                    <Card className="bg-white/90 backdrop-blur-sm border-primary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <h3 className="font-bold text-black mb-2">4 Progress Trackers</h3>
                        <p className="text-black text-sm">Tools to record your consistency and growth over time. Designed to encourage mindful tracking of effort and improvement.</p>
                      </CardContent>
                    </Card>
                  }
                />
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <FlipCard
                  className="w-full max-w-[250px] h-[300px] mx-auto mb-14"
                  front={
                    <Card className="bg-white/90 backdrop-blur-sm border-accent/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-black text-xl">🧩</span>
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-2xl mb-2">4 Customizable Templates</h3>
                      </CardContent>
                    </Card>
                  }
                  back={
                    <Card className="bg-white/90 backdrop-blur-sm border-accent/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <h3 className="font-bold text-black mb-2">4 Customizable Templates</h3>
                        <p className="text-black text-sm">Templates that let you customize your own workout sequence. Designed to support a wide range of training needs and preferences.</p>
                      </CardContent>
                    </Card>
                  }
                />
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <FlipCard
                  className="w-full max-w-[250px] h-[300px] mx-auto mb-14"
                  front={
                    <Card className="bg-white/90 backdrop-blur-sm border-tertiary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-black text-xl">🧬</span>
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-2xl mb-2">1 Muscle Anatomy Card</h3>
                      </CardContent>
                    </Card>
                  }
                  back={
                    <Card className="bg-white/90 backdrop-blur-sm border-tertiary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <h3 className="font-bold text-black mb-2">1 Muscle Anatomy Card</h3>
                        <p className="text-black text-sm">A detailed anatomy reference card mapping out the major muscle groups, helping you understand how each exercise benefits your body.</p>
                      </CardContent>
                    </Card>
                  }
                />
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <FlipCard
                  className="w-full max-w-[250px] h-[300px] mx-auto mb-14"
                  front={
                    <Card className="bg-white/90 backdrop-blur-sm border-secondary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                          <span className="text-black text-xl">🌬️</span>
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-2xl mb-2">1 Breathing Techniques Card</h3>
                      </CardContent>
                    </Card>
                  }
                  back={
                    <Card className="bg-white/90 backdrop-blur-sm border-secondary/20 w-full max-w-[250px] h-[300px] mx-auto">
                      <CardContent className="w-full h-full p-6 text-center flex flex-col items-center justify-center">
                        <h3 className="font-bold text-black mb-2">1 Breathing Techniques Card</h3>
                        <p className="text-black text-sm">A clear guide to essential breathing methods that optimize oxygen intake, enhance exercise performance, and support improved focus, vitality, and recovery.</p>
                      </CardContent>
                    </Card>
                  }
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* How to Use */}
        <section className="py-20 bg-templeDeepNavy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">
                  How to Use your Deck
                </h2>
            </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Revert cards to original background and text colors */}
              <ScrollReveal delay={100}>
                <Card className="bg-white/90 backdrop-blur-sm border-primary/20 hover:bg-white transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-black text-2xl">👤</span>
                    </div>
                    <h3 className="font-bold text-black mb-4">Solo Workouts</h3>
                    <p className="text-black leading-relaxed">
                      Pick any card on your own or select a pre-designed program, each comprising 11 exercises tailored to build strength and skill.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="bg-white/90 backdrop-blur-sm border-accent/20 hover:bg-white transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-black text-2xl">🔀</span>
                    </div>
                    <h3 className="font-bold text-black mb-4">Daily Card Draw</h3>
                    <p className="text-black leading-relaxed">
                      Shuffle and draw three cards each morning to challenge yourself with a new combination, keeping your practice fresh and surprising.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="bg-white/90 backdrop-blur-sm border-tertiary/20 hover:bg-white transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-tertiary/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-black text-2xl">👥</span>
                    </div>
                    <h3 className="font-bold text-black mb-4">Partner & Group Workouts</h3>
                    <p className="text-black leading-relaxed">
                      Turn the draw into a friendly challenge—compete or collaborate on sequences, share trackers, and celebrate each other's progress.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* Begin Your Journey */}
        <section className="py-20 bg-sacredSoftNavy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">
                  Begin your journey
                </h2>
                <p className="text-xl text-scrollIvory max-w-3xl mx-auto">
                  Ready to experience these traditions in action? Let the cards guide your practice and inspire new challenges. Each step moves you closer to strength, balance, and lasting growth.
              </p>
            </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-sacredSoftNavy/80 backdrop-blur-sm rounded-3xl p-8 border border-divineRoyalGold/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="text-scrollIvory text-lg font-semibold space-y-2 pl-0">
                      <li className="flex items-center"><span className="text-divineRoyalGold mr-2">✓</span>34 Dand</li>
                      <li className="flex items-center"><span className="text-divineRoyalGold mr-2">✓</span>25 Baithak</li>
                      <li className="flex items-center"><span className="text-divineRoyalGold mr-2">✓</span>9 Sapate</li>
                      <li className="flex items-center"><span className="text-divineRoyalGold mr-2">✓</span>12 Pre-Designed Routines</li>
                    </ul>
                    <ul className="text-scrollIvory text-lg font-semibold space-y-2 pl-0">
                      <li className="flex items-center"><span className="text-divineRoyalGold mr-2">✓</span>4 Progress Trackers</li>
                      <li className="flex items-center"><span className="text-divineRoyalGold mr-2">✓</span>4 Customizable Templates</li>
                      <li className="flex items-center"><span className="text-divineRoyalGold mr-2">✓</span>1 Muscle Anatomy Card</li>
                      <li className="flex items-center"><span className="text-divineRoyalGold mr-2">✓</span>1 Breathing Techniques Card</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="text-center mt-12">
                <Link href="/checkout">
                  <Button size="lg" className="bg-sacredBellGold text-templeDeepNavy font-bold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300 text-xl px-12 py-6 rounded-2xl font-semibold shadow-lg">
                    Buy Now
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                </div>
            </ScrollReveal>
          </div>
        </section>
        <div className="border-t border-divineRoyalGold" />
        {/* FAQs */}
        <section className="py-20 bg-templeDeepNavy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">
                  FAQs
                </h2>
                <p className="text-xl text-scrollIvory max-w-3xl mx-auto">
                  Common questions about Indian bodyweight workouts and The Deck
                </p>
            </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="bg-sacredSoftNavy/80 backdrop-blur-sm border-divineRoyalGold/20 rounded-lg mb-4">
                  <AccordionTrigger className="text-divineRoyalGold font-semibold text-left px-6 py-4 hover:text-scrollIvory">
                    What makes Indian bodyweight workouts different?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-scrollIvory">
                    Unlike typical callisthenics, Indian bodyweight workouts blend rhythm, breath, and full-body movement into muscle-building flows. Rooted in wrestling and martial arts systems, they train real-world strength—without equipment—using Dand, Baithak, and Sapate that challenge balance, control, and endurance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-sacredSoftNavy/80 backdrop-blur-sm border-divineRoyalGold/20 rounded-lg mb-4">
                  <AccordionTrigger className="text-divineRoyalGold font-semibold text-left px-6 py-4 hover:text-scrollIvory">
                    What are some common mistakes, and how can I avoid them?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-scrollIvory">
                    People often rush progress, use incorrect form, or skip foundational movements. To avoid this, follow the exercise instructions carefully, use the progress trackers, and start with beginner-friendly routines before building intensity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-sacredSoftNavy/80 backdrop-blur-sm border-divineRoyalGold/20 rounded-lg mb-4">
                  <AccordionTrigger className="text-divineRoyalGold font-semibold text-left px-6 py-4 hover:text-scrollIvory">
                    How do these exercises build muscle compared to Western workouts?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-scrollIvory">
                    Indian bodyweight workouts use 3-dimensional compound movements involving rotation, flow, and full-body engagement. In contrast, many Western bodyweight workouts focus on 2-dimensional, linear patterns like push-ups or squats. This 3D style builds muscle while also improving coordination, joint mobility, and real-world strength.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-sacredSoftNavy/80 backdrop-blur-sm border-divineRoyalGold/20 rounded-lg mb-4">
                  <AccordionTrigger className="text-divineRoyalGold font-semibold text-left px-6 py-4 hover:text-scrollIvory">
                    How do these workouts enhance sports performance?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-scrollIvory">
                    They build joint stability, muscular endurance, and full-body awareness—traits that improve speed, balance, and injury resistance across sports. The emphasis on controlled bodyweight movement also boosts recovery and adaptability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-sacredSoftNavy/80 backdrop-blur-sm border-divineRoyalGold/20 rounded-lg mb-4">
                  <AccordionTrigger className="text-divineRoyalGold font-semibold text-left px-6 py-4 hover:text-scrollIvory">
                    How can I fit these workouts into a busy schedule?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-scrollIvory">
                    The deck includes ready-made routines, so you won't need to plan anything yourself. Choose a routine that matches your time and energy level, and train anywhere—no equipment or gym required.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-sacredSoftNavy/80 backdrop-blur-sm border-divineRoyalGold/20 rounded-lg mb-4">
                  <AccordionTrigger className="text-divineRoyalGold font-semibold text-left px-6 py-4 hover:text-scrollIvory">
                    Can I combine this with weight training, cardio, or sports?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-scrollIvory">
                    Yes. These workouts pair well with weight training, running, and any sport. They build foundational movement quality, improve flexibility, and increase muscular endurance—making them ideal as a primary method or as complementary training.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-sacredSoftNavy/80 backdrop-blur-sm border-divineRoyalGold/20 rounded-lg mb-4">
                  <AccordionTrigger className="text-divineRoyalGold font-semibold text-left px-6 py-4 hover:text-scrollIvory">
                    Is this deck suitable for all fitness levels?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-scrollIvory">
                    Yes. Each movement includes beginner-to-super advanced progressions. You can build gradually by following the colour-coded structure and using the routine guides provided in the deck.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-sacredSoftNavy/80 backdrop-blur-sm border-divineRoyalGold/20 rounded-lg mb-4">
                  <AccordionTrigger className="text-divineRoyalGold font-semibold text-left px-6 py-4 hover:text-scrollIvory">
                    Do I need any kind of equipment to use this deck?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-scrollIvory">
                    No equipment is needed. Every exercise is bodyweight-based and designed to be done in small spaces—at home, in a park, or while travelling.
                  </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
