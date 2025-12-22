"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import Navigation from "@/components/navigation"
import RequestsOverview from "@/components/requests/requests-overview"
import RequestsList from "@/components/requests/requests-list"

export default function RequestsPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

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

  if (!user) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600">Redirection...</p>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Navigation />
      <RequestsOverview />
      <RequestsList />
    </main>
  )
}
