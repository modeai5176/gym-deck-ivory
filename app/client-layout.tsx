"use client"

import type React from "react"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import CookieConsent from "./components/cookie-consent"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
    </>
  )
}
