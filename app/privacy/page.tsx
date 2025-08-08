import { Metadata } from "next"
import { Shield, Lock, Eye, Database, Users, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Conscious Kilo collects, uses, and protects your personal information and cookie usage.",
}

export default function PrivacyPage() {
  return (
    <div className="pt-0 bg-templeDeepNavy">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-templeDeepNavy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Shield className="w-16 h-16 text-sacredBellGold mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-scrollIvory mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-scrollIvory/80">
              Your privacy is sacred to us. Learn how we protect and handle your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-scrollIvory">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            
            {/* Introduction */}
            <Card className="bg-white/90 border-templeDeepNavy/20">
              <CardHeader>
                <CardTitle className="text-templeDeepNavy flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-templeDeepNavy">
                <p>
                  At Conscious Kilo, we respect your privacy and are committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website or make a purchase.
                </p>
                <p>
                  <strong>Last updated:</strong> December 2024
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="bg-white/90 border-templeDeepNavy/20">
              <CardHeader>
                <CardTitle className="text-templeDeepNavy flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-templeDeepNavy">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Shipping and billing addresses</li>
                    <li>Payment information (processed securely through Razorpay)</li>
                    <li>Order history and preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, interactions)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="bg-white/90 border-templeDeepNavy/20">
              <CardHeader>
                <CardTitle className="text-templeDeepNavy flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-templeDeepNavy">
                <ul className="list-disc list-inside space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and account</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Provide customer support</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies Policy */}
            <Card className="bg-white/90 border-templeDeepNavy/20">
              <CardHeader>
                <CardTitle className="text-templeDeepNavy flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Cookies Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-templeDeepNavy">
                <p>
                  We use cookies and similar technologies to enhance your browsing experience and analyze website usage.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Types of Cookies We Use</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Managing Cookies</h3>
                  <p className="text-sm">
                    You can control cookies through your browser settings. However, disabling certain cookies may 
                    affect website functionality.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="bg-white/90 border-templeDeepNavy/20">
              <CardHeader>
                <CardTitle className="text-templeDeepNavy flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-templeDeepNavy">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your 
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>With payment processors (Razorpay) to complete transactions</li>
                  <li>With shipping partners to deliver your orders</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-white/90 border-templeDeepNavy/20">
              <CardHeader>
                <CardTitle className="text-templeDeepNavy flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-templeDeepNavy">
                <p>
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing through Razorpay</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                  <li>Secure data storage practices</li>
                </ul>
              </CardContent>
            </Card>



            {/* Contact Information */}
            <Card className="bg-white/90 border-templeDeepNavy/20">
              <CardHeader>
                <CardTitle className="text-templeDeepNavy flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-templeDeepNavy">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong>{" "}
                    <a href="mailto:shop@consciouskilo.com" className="text-sacredBellGold hover:text-divineRoyalGold underline">
                      shop@consciouskilo.com
                    </a>
                  </p>
                  <p><strong>Website:</strong>{" "}
                    <a href="https://consciouskilo.com" className="text-sacredBellGold hover:text-divineRoyalGold underline">
                      consciouskilo.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Back to Home */}
            <div className="text-center pt-8">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-sacredBellGold text-templeDeepNavy px-6 py-3 rounded-lg font-semibold hover:bg-divineRoyalGold hover:text-scrollIvory transition-all duration-300"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 