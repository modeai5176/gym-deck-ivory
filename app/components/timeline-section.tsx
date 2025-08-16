import { Scroll, Dumbbell, Sunrise } from "lucide-react"

export default function TimelineSection() {
  return (
    <section className="bg-sacredSoftNavy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-aviano-copper text-4xl md:text-5xl font-bold text-sacredBellGold mb-6">What Is an Indian Workout?</h2>
        <p className="text-xl text-scrollIvory max-w-3xl mx-auto">
            A journey through time, from ancient Vedic practices to modern strength training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
              <Scroll className="text-templeDeepNavy" size={32} />
            </div>
            <h3 className="font-bold text-scrollIvory mb-4">Vedas (3000 BCE)</h3>
            <p className="text-scrollIvory leading-relaxed">
              Early hymns and treatises celebrated physical culture not as merely exercise, but as devotion and preparation for life's challenges.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
              <Dumbbell className="text-templeDeepNavy" size={32} />
            </div>
            <h3 className="font-bold text-scrollIvory mb-4">Akhara Tradition</h3>
            <p className="text-scrollIvory leading-relaxed">
              Communal wrestling schools—akhara—refined a holistic regimen of strength, flexibility and ethical living, forging body and character in equal measure.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-divineRoyalGold rounded-full flex items-center justify-center mx-auto mb-6">
              <Sunrise className="text-templeDeepNavy" size={32} />
            </div>
            <h3 className="font-bold text-scrollIvory mb-4">Today's Practice</h3>
            <p className="text-scrollIvory leading-relaxed">
              Modern teachers adapt this lineage into dynamic, equipment-free flows, uniting ancient philosophy with today's science to suit every lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
