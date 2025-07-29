"use client"

import { Card, CardContent } from "@/components/ui/card"

interface CardPreviewProps {
  title: string
  subtitle: string
  mantra: string
  description: string
}

export default function CardPreview({ title, subtitle, mantra, description }: CardPreviewProps) {
  return (
    <div className="relative h-80 perspective-1000">
      <div className="card-flip w-full h-full relative cursor-pointer">
        {/* Front of card */}
        <Card className="card-front bg-orange-900/20 backdrop-blur-sm border-orange-300/30 h-full">
          <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
            <div className="text-4xl mb-4">✨</div>
                            <h3 className="font-playfair text-2xl font-bold text-black mb-2">{title}</h3>
                <p className="text-black font-medium">{subtitle}</p>
          </CardContent>
        </Card>

        {/* Back of card */}
                    <Card className="card-back bg-white/50 backdrop-blur-sm border-gray-300/30 text-black h-full">
          <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
                <p className="font-playfair text-xl mb-4 text-black">{mantra}</p>
                <p className="text-black leading-relaxed">{description}</p>
            <div className="mt-4 w-8 h-1 bg-orange-400 rounded"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
