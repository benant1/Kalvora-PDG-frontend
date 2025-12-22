"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Lock, AlertCircle, Loader, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AccessPage() {
  const router = useRouter()
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userLoading, setUserLoading] = useState(true)

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
        
        if (data.vendorApplication?.status !== "approved") {
          router.push("/")
          return
        }

        if (!data.vendorApplication?.pinSetAt) {
          router.push("/market/publication-space/verify-code")
        }
      } catch (error) {
        console.error("Erreur:", error)
      } finally {
        setUserLoading(false)
      }
    }

    checkStatus()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const token = localStorage.getItem("token")
      if (!token) {
        setError("Vous devez être connecté")
        return
      }

      if (pin.length !== 4 || !/^\d+$/.test(pin)) {
        setError("Le PIN doit être 4 chiffres")
        return
      }

      const response = await fetch("http://localhost:4000/api/v1/vendor/verify-pin", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ pin })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "PIN incorrect")
        setPin("")
        return
      }

      setSuccess(true)
      // Rediriger vers l'espace vendeur après une courte pause
      setTimeout(() => {
        router.push("/market/publication-space/dashboard")
      }, 1500)
    } catch (err: any) {
      setError(err.message || "Erreur lors de la vérification")
    } finally {
      setIsLoading(false)
    }
  }

  if (userLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <Navigation />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Accès à votre Espace
            </h1>
            <p className="text-lg text-muted-foreground">
              Entrez votre PIN personnel pour accéder à votre espace de publication
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-xl">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Bienvenue!
                </h2>
                <p className="text-muted-foreground">
                  Accès accordé. Redirection vers votre tableau de bord...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Votre PIN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="••••"
                    value={pin}
                    onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    className={`w-full px-4 py-3 text-center text-2xl tracking-widest rounded-lg bg-background border ${
                      error ? 'border-red-500' : 'border-border'
                    } text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                    autoFocus
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Entrez les 4 chiffres de votre PIN
                  </p>
                </div>

                {error && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-500 text-sm">{error}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || pin.length !== 4}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Vérification...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={20} />
                      Accéder à mon Espace
                    </>
                  )}
                </button>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Vous avez oublié votre PIN?{" "}
                    <Link href="/market/publication-space/set-pin?reset=true" className="text-primary hover:underline font-medium">
                      Redéfinir mon PIN
                    </Link>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ou{" "}
                    <Link href="/contact" className="text-muted-foreground hover:text-primary hover:underline">
                      contactez le support
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
