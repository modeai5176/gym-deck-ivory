import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Inter } from "next/font/google"
import ClientLayout from "./client-layout"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "CONSCIOUS KILO - Indian Bodyweight Exercise Cards | Ancient Fitness Wisdom",
    template: "%s | CONSCIOUS KILO",
  },
  description:
    "Transform your fitness journey with 80 beautifully crafted cards blending ancient Indian bodyweight traditions with modern training. Discover Dand, Baithak, Sapate, and traditional movement practices.",
  keywords: [
    "Indian workout",
    "ancient fitness",
    "Dand Baithak",
    "bodyweight training",
    "traditional movement",
    "Akhara training",
    "mindful exercise",
    "Indian traditions",
    "traditional Indian fitness",
    "conscious movement",
  ],
  authors: [{ name: "Aniruddha Joshi", url: "https://consciouskilo.com" }],
  creator: "CONSCIOUS KILO",
  publisher: "CONSCIOUS KILO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://consciouskilo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://consciouskilo.com",
    siteName: "CONSCIOUS KILO",
    title: "CONSCIOUS KILO - Indian Bodyweight Exercise Cards",
    description:
      "Transform your fitness journey with 80 beautifully crafted cards blending ancient Indian bodyweight traditions with modern training.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CONSCIOUS KILO - Indian Bodyweight Exercise Cards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CONSCIOUS KILO - Indian Bodyweight Exercise Cards",
    description:
      "Transform your fitness journey with ancient Indian bodyweight traditions. 80 cards combining movement, breath, and conscious intention.",
    images: ["/twitter-image.jpg"],
    creator: "@consciouskilo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlef085e6a019b189a5",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="font-rajdhani-regular antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
