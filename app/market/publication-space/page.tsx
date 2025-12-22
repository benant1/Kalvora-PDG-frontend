"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Store, Loader } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function PublicationSpacePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const checkVendorStatus = async () => {
      try {
        const token = localStorage.getItem("token")
        
        if (!token) {
          // Utilisateur non connecté - rediriger vers login
          router.push("/login?redirect=/market/publication-space")
          return
        }

        const response = await fetch("http://localhost:4000/api/v1/vendor/status", {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (!response.ok) {
          // Pas de demande vendeur - rediriger vers l'inscription vendeur
          router.push("/market/publication-space/register")
          return
        }

        const data = await response.json()

        if (!data.vendorApplication) {
          // Pas de demande vendeur - rediriger vers l'inscription vendeur
          router.push("/market/publication-space/register")
          return
        }

        const status = data.vendorApplication.status

        if (status === "pending") {
          // Demande en attente - rediriger vers page d'attente
          router.push("/market/publication-space/pending")
        } else if (status === "rejected") {
          // Demande rejetée - rediriger vers page d'info avec message
          router.push("/market/publication-space/info?status=rejected")
        } else if (status === "approved") {
          // Demande approuvée
          if (data.vendorApplication.pinSetAt) {
            // PIN déjà défini - rediriger vers page d'accès (saisie PIN)
            router.push("/market/publication-space/access")
          } else {
            // PIN pas encore défini - rediriger vers vérification du code d'activation
            router.push("/market/publication-space/verify-code")
          }
        } else {
          // Statut inconnu - rediriger vers inscription
          router.push("/market/publication-space/register")
        }
      } catch (err) {
        console.error("Erreur lors de la vérification du statut:", err)
        setError("Une erreur est survenue. Veuillez réessayer.")
        setIsLoading(false)
      }
    }

    checkVendorStatus()
  }, [router])

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <Navigation />
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <Store className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Erreur</h2>
            <p className="text-muted-foreground">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <Loader className="w-8 h-8 text-primary animate-spin" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">
            Vérification de votre statut vendeur...
          </h2>
          <p className="text-muted-foreground">
            Vous allez être redirigé automatiquement
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
