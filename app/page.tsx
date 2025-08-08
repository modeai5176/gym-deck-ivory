"use client"

import Link from "next/link"
import { ArrowRight, Star, Users, Heart, Shield, Zap, Crown, Sparkles, Check, BookOpen, Dumbbell, Flower } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CardPreview from "./components/card-preview"
import TimelineSection from "./components/timeline-section"
import ScrollReveal from "./components/scroll-reveal"
import FancyVideoPlayer from "./components/fancy-video-player"
import { useState, useRef } from "react"
import type { UseEmblaCarouselType } from "embla-carousel-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import EmailCapturePopup from "./components/email-capture-popup"

export default function HomePage() {
  const [showAllBenefits, setShowAllBenefits] = useState(false)
  const [current, setCurrent] = useState(0)
  const emblaApi = useRef<UseEmblaCarouselType[1] | null>(null)

  return (
    <div className="pt-0 bg-templeDeepNavy">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-scrollIvory relative overflow-hidden mt-0 bg-templeDeepNavy">
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h1 className="font-aviano-copper text-5xl md:text-7xl font-bold mb-6 leading-tight text-sacredBellGold">
              Where Culture Meets Strength
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-3xl mb-4 text-scrollIvory">India's age-old customs and rituals have always intertwined discipline, community and physical prowess, where every movement is as much a cultural expression as it is a testament to inner power.</p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/experience">
                <Button
                  size="lg"
                  className="bg-sacredBellGold text-templeDeepNavy font-bold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300 text-lg px-8 py-4 rounded-2xl backdrop-blur-sm shadow-lg"
                >
                  Try Free Sample
                  <Sparkles className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />
      {/* Sacred by the Numbers */}
      <section className="py-20 bg-sacredSoftNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">India's Strength Lineage</h2>
              <p className="text-xl text-scrollIvory max-w-3xl mx-auto">
                Skill inclusive From village akharas to royal courts, these practices welcomed everyone—regardless of age, background or ability—to hone skill, grace and resilience together.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Years of Wisdom", desc: "Rooted in ancient Vedic texts and warrior traditions, the art of body-movement in India stretches back millennia, carrying forward lessons in balance, breath and mindful effort." },
              { number: "∞", label: "Infinite Growth", desc: "Just as the banyan's roots deepen over centuries, so too does your potential expand—each practice building seamlessly on the last, guiding lifelong progress." },
              { number: "3", label: "Core Movements", desc: "Dand, Baithak, and Sapate—the foundational movements that form the backbone of Indian physical culture." },
              { number: "1⚭1", label: "Guru–Shishya Legacy", desc: "This sacred one-to-one bond has passed down physical wisdom through touch, repetition, and trust—ensuring that knowledge is not just taught but transmitted across generations." },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center flex flex-col justify-center min-h-[200px]">
                  <div className={`font-bold text-scrollIvory mb-2 ${stat.number === "∞" ? "text-6xl md:text-7xl" : "text-4xl md:text-5xl"}`}>{stat.number}</div>
                  <div className="text-scrollIvory font-semibold mb-1">{stat.label}</div>
                  <div className="text-scrollIvory text-sm">{stat.desc}</div>
              </div>
            </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />
      {/* Indian Workout Demonstrations Section */}
      <section className="py-16 bg-templeDeepNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-4">Core Indian Workouts</h2>
            <p className="text-lg text-scrollIvory max-w-2xl mx-auto">Watch the foundational movements of Indian physical culture, performed by our expert. These timeless exercises build strength, mobility, and resilience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6 bg-white">
              <div className="w-full aspect-[5/9] mb-4">
                <FancyVideoPlayer src="/dand.mp4" title="Dand Exercise" poster="/dand.webp" />
              </div>
              <div className="font-bold text-divineRoyalGold mb-2 text-center">Dand</div>
              <div className="text-templeDeepNavy text-center text-sm">A flowing full-body movement from Indian traditions that builds strength, flexibility, and coordination for enhanced body awareness.</div>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6 bg-white">
              <div className="w-full aspect-[5/9] mb-4">
                <FancyVideoPlayer src="/baithak.mp4" title="Baithak Exercise" poster="/baithak.webp" />
              </div>
              <div className="font-bold text-divineRoyalGold mb-2 text-center">Baithak</div>
              <div className="text-templeDeepNavy text-center text-sm">A traditional standing-repetition exercise that develops endurance, balance, and mental focus for greater control and stability.</div>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center p-6 bg-white">
              <div className="w-full aspect-[5/9] rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                <FancyVideoPlayer src="/sapate.mp4" title="Sapate Exercise" poster="/sapate.webp" />
              </div>
              <div className="font-bold text-divineRoyalGold mb-2 text-center">Sapate</div>
              <div className="text-templeDeepNavy text-center text-sm">Quick, rhythmic footwork drills that improve speed, timing, and agility for smooth, responsive motion in dynamic situations.</div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />
      {/* Timeline Section */}
      <TimelineSection />
      <div className="border-t border-divineRoyalGold" />
      {/* The Science Behind the Sacred */}
      <section className="py-20 bg-sacredSoftNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">
                The Science Behind the Roots
              </h2>
              <p className="text-xl text-scrollIvory max-w-3xl mx-auto">
                Modern research validates what ancient practitioners knew: these methods transform both body and mind
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="bg-white/80 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sacredBellGold/20 group card-hover min-h-[420px]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 card-icon">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-sacredBellGold transition-colors duration-300">Neuroplasticity</h3>
                  <p className="text-templeDeepNavy leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Mindful movement rewires neural pathways over time, fostering greater coordination and refined motor skills. Regular, intentional practice creates lasting brain changes that enhance adaptability.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="bg-white/80 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sacredBellGold/20 group card-hover min-h-[420px]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 card-icon">
                    <span className="text-2xl">🫀</span>
                  </div>
                  <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-sacredBellGold transition-colors duration-300">Cardiovascular Health</h3>
                  <p className="text-templeDeepNavy leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Flowing sequences and dynamic holds stimulate heart-rate variability, strengthening your cardiovascular system. Improved circulation and oxygen delivery help reduce fatigue and support overall endurance during daily activities.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="bg-white/80 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sacredBellGold/20 group card-hover min-h-[420px]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 card-icon">
                    <span className="text-2xl">🤸</span>
                  </div>
                  <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-sacredBellGold transition-colors duration-300">Articular Mobility</h3>
                  <p className="text-templeDeepNavy leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Deep, controlled squats and presses nurture healthy joint range-of-motion across shoulders, hips, and spine. Consistent practice helps preserve cartilage health and reduces the risk of stiffness or injury as you age.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {showAllBenefits && <>
              <Card className="bg-white/80 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sacredBellGold/20 group card-hover min-h-[420px]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 card-icon">
                    <span className="text-2xl">👣</span>
                  </div>
                  <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-sacredBellGold transition-colors duration-300">Proprioception</h3>
                  <p className="text-templeDeepNavy leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Three-dimensional drills heighten body-awareness, teaching you to sense and adjust your position in space. Enhanced proprioceptive feedback leads to better balance, agility, and injury prevention in unpredictable environments.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sacredBellGold/20 group card-hover min-h-[420px]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 card-icon">
                    <span className="text-2xl">🏋️</span>
                  </div>
                  <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-sacredBellGold transition-colors duration-300">Muscle Endurance</h3>
                  <p className="text-templeDeepNavy leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Sustained isometric holds recruit slow-twitch muscle fibers, building fatigue-resistant strength. This endurance foundation translates directly into improved performance for real-world tasks and longer workouts.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sacredBellGold/20 group card-hover min-h-[420px]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 card-icon">
                    <span className="text-2xl">🦴</span>
                  </div>
                  <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-sacredBellGold transition-colors duration-300">Biomechanical Resilience</h3>
                  <p className="text-templeDeepNavy leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Natural movement patterns reinforce optimal skeletal alignment and joint loading. By training according to your body's design, you reduce chronic strain and cultivate sustainable movement habits.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sacredBellGold/20 group card-hover min-h-[420px]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 card-icon">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-sacredBellGold transition-colors duration-300">Motor Control Enhancement</h3>
                  <p className="text-templeDeepNavy leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Complex transitions fine-tune neuromuscular connections, improving the timing and smoothness of every action. Sharper motor control means more efficient movement, less wasted energy, and a lower injury risk.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sacredBellGold/20 group card-hover min-h-[420px]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 card-icon">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-sacredBellGold transition-colors duration-300">Functional Longevity</h3>
                  <p className="text-templeDeepNavy leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Integrated, full-body workouts cultivate enduring vitality, supporting strength and independence well into later life. By combining flexibility, balance, and strength, you build a foundation for lifelong mobility and health.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sacredBellGold/20 group card-hover min-h-[420px]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 card-icon">
                    <span className="text-2xl">🧘</span>
                  </div>
                  <h3 className="font-bold text-templeDeepNavy mb-4 group-hover:text-sacredBellGold transition-colors duration-300">Stress Resilience</h3>
                  <p className="text-templeDeepNavy leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Mindful movement and breathwork help regulate the stress response, promoting emotional balance and resilience in the face of daily challenges.
                  </p>
                </CardContent>
              </Card>
            </>}
          </div>
          <div className="flex justify-center mt-10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sacredBellGold to-divineRoyalGold text-templeDeepNavy hover:from-divineRoyalGold hover:to-sacredBellGold transition-all duration-300 text-lg px-8 py-4 rounded-2xl font-semibold shadow-md"
              onClick={() => setShowAllBenefits((prev) => !prev)}
            >
              {showAllBenefits ? "Hide All Benefits" : "Show All Benefits"}
            </Button>
          </div>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />
      {/* What's Inside the Deck */}
      {/* Removed the section with the heading 'What Is an Indian Workout?' and its associated content */}

      {/* Walk in the Footsteps of Legends */}
      <section className="py-20 bg-templeDeepNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">
                Walking in Legendary Footsteps
              </h2>
              <p className="text-xl text-scrollIvory max-w-3xl mx-auto">
                These practices shaped the greatest wrestlers and physical culture masters in history
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "The Great Gama",
                img: "/greatgama.webp",
                bio: "Born Ghulam Mohammed Baksh Butt in Jabbowal, Punjab (1878). Retired undefeated after a 50-year career, famously pinning Stanislaus Zbyszko in London (1910) after 2¾ hours of continuous holds to claim the World Heavyweight title.",
                quote: '"Dawn-to-dusk body-weight regimen of up to 5,000 baithaks and 3,000 dands"',
              },
              {
                name: "Dara Singh",
                img: "/dara.webp",
                bio: "From Dharmuchak village, Amritsar District, Punjab (born 1928). Defeated American legend Lou Thesz in Bombay (1968) to win the World Heavyweight Championship, maintaining an unbeaten streak across 500+ professional bouts.",
                quote: '"Pre-sunrise sessions of 1,000 baithaks and 2,000 dands"',
              },
              {
                name: "Udey Chand",
                img: "/udey_chand.webp",
                bio: "Raised in Jind, Haryana (born 1935). First Indian to medal at the World Wrestling Championships (bronze, Istanbul 1961) and nine-time consecutive national freestyle champion (1958–66).",
                quote: '"2,000–3,000 baithaks and dands each dawn"',
              },
            ].map((person, idx) => (
              <ScrollReveal key={person.name} delay={100 * idx}>
                <div className="group relative flex flex-col items-center justify-end h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white/90 border border-sacredBellGold/20">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="object-cover object-top w-full h-full"
                    />
                    {/* Vignette overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Name always visible */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                    <div className="backdrop-blur-md text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg border">
                      {person.name}
                    </div>
                  </div>
                  {/* Content pops up at bottom on hover */}
                  <div className="absolute left-0 w-full z-10 px-6 flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-300" style={{ bottom: '6rem' }}>
                    <div className="rounded-xl p-4 shadow-xl w-full text-center bg-white">
                      <p className="text-templeDeepNavy text-sm mb-2">{person.bio}</p>
                      <div className="text-templeDeepNavy text-xs italic">{person.quote}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />
      {/* Testimonials */}
      <section className="py-10 bg-templeDeepNavy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-divineRoyalGold mb-6">What Practitioners Say</h2>
            </div>
          </ScrollReveal>

          {/* Carousel with custom dots and arrows */}
          {(() => {
            const testimonials = [
              {
                text: '"As a physiotherapist, I value movement systems that build strength without compromising joint health. Indian workouts offer a rare combination—high intensity with low impact, making them incredibly sustainable."',
                icon: <Heart className="text-pink-600" size={18} />, bg: "bg-pink-100", name: "Dr. Neelam Verma", title: "Physiotherapist, Hyderabad"
              },
              {
                text: '"As a classical dancer, I rely on strength, balance, and fluidity. Indian workouts bring all three, rooted in tradition yet incredibly practical. They\'ve transformed how I prepare my body for performance."',
                icon: <Star className="text-yellow-500" size={18} />, bg: "bg-yellow-100", name: "Meenakshi Iyer", title: "Bharatanatyam Artist, Chennai"
              },
              {
                text: '"Traditional Indian movements have added a deeper layer to my yoga practice. The focus on breath, repetition, and control perfectly complements asana work—and enhances my teaching from the ground up."',
                icon: <Flower className="text-purple-600" size={18} />, bg: "bg-purple-100", name: "Priya Sharma", title: "Yoga Instructor, Mumbai"
              },
              {
                text: '"Indian physical training taps into something modern fitness often overlooks—discipline, flow, and inner focus. Integrating these methods has made my clients not just stronger, but more grounded and aware."',
                icon: <Dumbbell className="text-blue-600" size={18} />, bg: "bg-blue-100", name: "Raj Patel", title: "Fitness Coach, Delhi"
              }
            ];
            return (
              <div className="relative">
                <Carousel
                  setApi={api => {
                    emblaApi.current = api;
                    if (api) {
                      api.on("select", () => setCurrent(api.selectedScrollSnap()));
                    }
                  }}
                  opts={{ loop: true }}
                  className="relative"
                >
                  <CarouselContent>
                    {testimonials.map((t, i) => (
                      <CarouselItem key={i}>
                        <Card className="bg-white/90 backdrop-blur-sm border-sacredBellGold/20 hover:bg-white transition-all duration-300">
                          <CardContent className="p-8 flex flex-col h-full justify-start items-start">
                            <p className="text-left mb-2 italic">{t.text}</p>
                            <div className="flex items-center justify-start gap-2">
                              <div className={`w-7 h-7 ${t.bg} rounded-full flex items-center justify-center`}>{t.icon}</div>
                              <div>
                                <p className="font-semibold">{t.name}</p>
                                <p className="text-sm">{t.title}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Dots */}
                  <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        className={`w-3 h-3 rounded-full border border-gray-400 transition-all duration-200 ${current === i ? "bg-sacredBellGold/80 border-sacredBellGold/80" : "bg-gray-300/60"}`}
                        onClick={() => {
                          setCurrent(i);
                          emblaApi.current && emblaApi.current.scrollTo(i);
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </Carousel>
              </div>
            );
          })()}
        </div>
      </section>
      <div className="border-t border-divineRoyalGold" />
      {/* Final CTA Banner */}
      <section className="py-20 bg-templeDeepNavy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="italic text-divineRoyalGold">"कायः क्लेशसहिष्णुः सदा साधनाय योग्यता।"</p>
            <p className="text-scrollIvory mb-2">A body that endures hardship is always fit for higher pursuit.</p>
            <p className="text-wisdomSandGold mb-8">– Traditional Wisdom</p>
            <h2 className="font-aviano-copper text-4xl md:text-6xl font-bold text-divineRoyalGold mb-8">Explore the Deck</h2>
            <p className="text-scrollIvory mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to experience these traditions in action? Draw three cards now to reveal today's tailored workout—each card is a bridge between ancient wisdom and your fitness journey. Embrace the surprise, flow with the challenge, and step into a practice that's as dynamic as you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/product">
                <Button
                  size="lg"
                  className="bg-sacredBellGold text-templeDeepNavy font-bold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300 text-xl px-12 py-6 rounded-2xl font-semibold shadow-lg"
                >
                  Get Your Deck Now
                  <ArrowRight className="ml-2" size={24} />
                </Button>
              </Link>
              <Link href="/experience">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-divineRoyalGold text-divineRoyalGold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300 text-xl px-12 py-6 rounded-2xl"
                >
                  Try Free Sample
                  <Sparkles className="ml-2" size={24} />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Email Capture Popup */}
      <EmailCapturePopup />
    </div>
  )
}
