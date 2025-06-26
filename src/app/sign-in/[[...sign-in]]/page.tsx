"use client"

import { SignIn, useUser, useClerk, SignedIn, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Sparkles, Zap, Brain, LogOut } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import SocialFloatingDock from "@/components/social-floating-dock"

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b border-neutral-200 px-4 py-4 bg-white shadow-sm">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img src="/logo.png" className="size-10 rounded-full" alt="Logo" />
        <h1 className="text-lg font-bold md:text-2xl text-black">ADHDapt</h1>
      </div>
      <div className="flex items-center gap-3">
        {[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Login", href: "/sign-in" },
          { label: "Contact", href: "/contact" },
        ].map((btn, i) => (
          <button
            key={i}
            onClick={() => router.push(btn.href)}
            className="w-24 md:w-32 transform rounded-lg bg-[#ffd12d] px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49411c] hover:text-white"
          >
            {btn.label}
          </button>
        ))}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default function LoginComponent() {
  const { isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    await signOut()
    setIsLoading(false)
  }

  // If user is already signed in, show welcome screen
  if (isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center text-white max-w-md mx-auto">
            <div className="mb-6">
              <Brain className="w-16 h-16 mx-auto mb-4 animate-pulse" />
              <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.firstName}!</h2>
              <p className="text-blue-100">You're successfully signed in to ADHDapt</p>
            </div>

            <Button
              onClick={handleSignOut}
              disabled={isLoading}
              className="w-full h-12 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              ) : (
                <LogOut className="w-5 h-5 mr-2" />
              )}
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[735px] w-full flex flex-col">
      {/* Add Navbar at the top */}
      {/* <Navbar /> */}

      {/* Main content wrapper - adjust to account for navbar */}
      <div className="flex-1 flex relative overflow-hidden">

        {/* Left Side - Enhanced Welcome Section */}
        <div className="flex-1 relative overflow-hidden text-white">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/smaller-login.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Animated Background Shapes */}
          {/* <div className="relative z-10 max-w-md">

            <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Welcome to your ADHD toolkit
            </h1>

            <p className="text-blue-100 mb-12 text-lg leading-relaxed opacity-90">
              Transform your daily challenges into superpowers with personalized strategies designed for the ADHD mind.
            </p>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <blockquote className="mb-4">
                <p className="text-lg leading-relaxed">
                  "ADHDapt didn't just change my productivity—it changed my life. Finally, tools that work with my
                  brain, not against it!"
                </p>
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">SJ</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-blue-200 text-sm flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    ADHD Success Coach
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex-1 p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Background SVG Pattern */}
          <img
            src="/topography.svg"
            alt="Background pattern"
            className="absolute inset-0 w-full h-full object-cover opacity-100 -z-10"
          />
          <div className="max-w-md mx-auto w-full">
            <div className="mb-2 text-center">
              <h2 className="text-2xl font-bold text-slate-900 bg-clip-text mb-0">
                Welcome back!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to unlock your potential?
              </p>
            </div>

            {/* Custom Styled Clerk SignIn Component */}
            <div className="clerk-signin-wrapper">
              <SignIn
                appearance={{
                  elements: {
                    rootBox: "mx-auto",
                    card: "bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-2xl shadow-purple-500/10 rounded-2xl",
                    headerTitle:
                      "text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                    headerSubtitle: "text-gray-600",
                    socialButtonsBlockButton:
                      "border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] rounded-xl h-12",
                    socialButtonsBlockButtonText: "font-medium",
                    dividerLine: "bg-gradient-to-r from-transparent via-gray-300 to-transparent",
                    dividerText: "text-gray-500 bg-white px-4",
                    formFieldLabel: "text-sm font-semibold text-gray-700 mb-2",
                    formFieldInput:
                      "h-12 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300",
                    formButtonPrimary:
                      "h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 active:scale-[0.98] font-semibold",
                    footerActionLink: "text-blue-600 hover:text-blue-700 font-medium transition-colors",
                    identityPreviewEditButton: "text-blue-600 hover:text-blue-700",
                    formResendCodeLink: "text-blue-600 hover:text-blue-700",
                    otpCodeFieldInput:
                      "border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
                    alternativeMethodsBlockButton:
                      "border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-300",
                  },
                  layout: {
                    socialButtonsPlacement: "top",
                    showOptionalFields: true,
                  },
                }}
                redirectUrl="/dashboard"
                signUpUrl="/sign-up"
              />
            </div>

            {/* Additional Custom Elements */}
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                By signing in, you agree to our{" "}
                <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
