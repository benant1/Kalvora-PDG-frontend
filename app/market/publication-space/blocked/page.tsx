"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ShieldX, Mail, Phone, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function BlockedPage() {
  const router = useRouter()
  const [storeName, setStoreName] = useState("")

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          router.push("/login")
          return
        }

        const response = await fetch("http://localhost:4000/api/v1/vendor/status", {
          headers: { Authorization: `Bearer ${token}` }
        })

        const data = await response.json()
        
        // Si pas bloqué, rediriger vers le dashboard
        if (!data.vendorApplication?.isBlocked) {
          router.push("/market/publication-space/dashboard")
          return
        }

        setStoreName(data.vendorApplication.storeName)
      } catch (error) {
        console.error("Erreur:", error)
      }
    }

    checkStatus()
  }, [router])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-8">
            <ShieldX className="w-12 h-12 text-red-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Espace Bloqué
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Votre espace de publication <span className="font-semibold text-foreground">"{storeName}"</span> a été temporairement suspendu.
          </p>

          <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div className="text-left">
                <h3 className="font-semibold text-foreground mb-2">Pourquoi mon compte est-il bloqué?</h3>
                <p className="text-sm text-muted-foreground">
                  Votre compte peut avoir été bloqué pour l'une des raisons suivantes:
                </p>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
                  <li>Non-respect des conditions d'utilisation</li>
                  <li>Activité suspecte détectée</li>
                  <li>Plaintes multiples de clients</li>
                  <li>Documents de vérification expirés</li>
                  <li>Demande de vérification supplémentaire</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border mb-8">
            <h3 className="font-semibold text-foreground mb-4">Que faire maintenant?</h3>
            <p className="text-muted-foreground mb-6">
              Contactez notre équipe support pour comprendre la raison du blocage et les étapes à suivre pour débloquer votre compte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-medium"
              >
                <Mail size={20} />
                Contacter le support
              </Link>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition font-medium"
              >
                <Phone size={20} />
                Appeler
              </a>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Vous pouvez toujours accéder à votre{" "}
            <Link href="/profile" className="text-primary hover:underline">
              profil utilisateur
            </Link>{" "}
            et naviguer sur la plateforme.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
