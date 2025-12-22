"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import Navigation from "@/components/navigation"
import MarketHero from "@/components/market/market-hero"
import ProductsList from "@/components/market/products-list"
import MarketCTA from "@/components/market/market-cta"

export default function MarketPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  // Show loading screen
  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </main>
    )
  }

  // If not authenticated, don't render content (redirect will happen)
  if (!user) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">Redirection...</p>
        </div>
      </main>
    )
  }

  // User is authenticated, show content
  return (
    <main>
      <Navigation />
      <MarketHero />
      <ProductsList />
      <MarketCTA />
    </main>
  )
}
