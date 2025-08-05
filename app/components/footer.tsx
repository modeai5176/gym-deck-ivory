import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ScrollReveal from "./scroll-reveal"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#f6f8fc] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/LOGO.png"
                alt="Conscious Kilo Logo"
                height={53}
                width={0}
                className="h-[53px] w-auto object-contain"
                priority
              />
            </div>
            <p className="text-black mb-4">
              Where ancient wisdom meets modern practice. Transform your body and spirit through sacred movement.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/theconsciouskilo?igsh=MTNqNDgwMHpvN2puMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link
                href="mailto:shop@consciouskilo.com"
                className="text-black hover:text-gray-700 transition-colors"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-black hover:text-gray-700 transition-colors">
                Home
              </Link>
              <Link href="/philosophy" className="block text-black hover:text-gray-700 transition-colors">
                Philosophy
              </Link>
              <Link href="/product" className="block text-black hover:text-gray-700 transition-colors">
                Talim Deck
              </Link>
              <Link href="/experience" className="block text-black hover:text-gray-700 transition-colors">
                Experience
              </Link>
              <Link href="/about" className="block text-black hover:text-gray-700 transition-colors">
                About Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-black">Ancient Wisdom</h4>
            <p className="italic font-rajdhani-medium text-lg text-black">"आरोग्यं मूलं उत्तमसुखस्य।"</p>
            <p className="text-black text-sm mt-2">Health is the foundation of true happiness.</p>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-black">
          <p>&copy; 2024 CONSCIOUS KILO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
