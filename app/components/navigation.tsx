"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-black bg-[#f6f8fc] py-2`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Company Logo - Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/LOGO.png"
                alt="Your Brand Logo"
                height={53}
                width={0}
                className="h-[53px] w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="backdrop-blur-md border border-gray-200 rounded-xl px-4 py-2 flex space-x-4">
              {[
                { href: "/", label: "Home" },
                { href: "/philosophy", label: "Philosophy" },
                { href: "/product", label: "Talim Deck" },
                { href: "/experience", label: "Experience" },
                { href: "/about", label: "About Us" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium py-1 px-2 rounded text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons - Right */}
          <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
            <Link href="/checkout">
              <Button className="bg-sacredBellGold text-templeDeepNavy font-bold px-4 py-2 rounded-lg transition-all duration-300 text-sm hover:bg-divineRoyalGold hover:text-scrollIvory">
                <ShoppingBag className="mr-1" size={14} />
                Get Deck
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="backdrop-blur-md border border-gray-200 text-gray-800 p-2 rounded-lg transition-all duration-300"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 mx-4">
          <div className="bg-[#f6f8fc]/95 backdrop-blur-md border border-gray-200 rounded-xl p-4 space-y-3">
            {[
              { href: "/", label: "Home" },
              { href: "/philosophy", label: "Philosophy" },
              { href: "/product", label: "Talim Deck" },
              { href: "/experience", label: "Experience" },
              { href: "/about", label: "About Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-800 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-200">
              <Link href="/checkout" className="block">
                <Button className="w-full bg-sacredBellGold text-templeDeepNavy font-bold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300">
                  <ShoppingBag className="mr-2" size={16} />
                  Get Deck
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
