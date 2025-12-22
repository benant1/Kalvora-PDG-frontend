"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Lock, AlertCircle, Loader, CheckCircle2, RefreshCw } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SetPinPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const isReset = searchParams.get("reset") === "true"
  
  const [pin, setPin] = useState("")
  const [confirmPin, setConfirmPin] = useState("")
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

        if (!data.vendorApplication?.activationCodeVerified) {
          router.push("/market/publication-space/verify-code")
          return
        }

        // Si reset=true, on permet de redéfinir même si un PIN existe déjà
        if (data.vendorApplication?.pinSetAt && !isReset) {
          router.push("/market/publication-space/access")
        }
      } catch (error) {
        console.error("Erreur:", error)
      } finally {
        setUserLoading(false)
      }
    }

    checkStatus()
  }, [router, isReset])

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

      if (pin !== confirmPin) {
        setError("Les PINs ne correspondent pas")
        return
      }

      const response = await fetch("http://localhost:4000/api/v1/vendor/set-pin", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ pin })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Erreur lors de la définition du PIN")
        return
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/market/publication-space/access")
      }, 1500)
    } catch (err: any) {
      setError(err.message || "Erreur lors de la définition du PIN")
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
            <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
              {isReset ? <RefreshCw className="w-10 h-10 text-purple-500" /> : <Lock className="w-10 h-10 text-purple-500" />}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {isReset ? "Redéfinir votre PIN" : "Définissez votre PIN d'Accès"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isReset 
                ? "Entrez un nouveau code à 4 chiffres pour remplacer l'ancien"
                : "Créez un code personnel à 4 chiffres pour accéder à votre espace"
              }
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-xl">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  PIN Défini avec Succès!
                </h2>
                <p className="text-muted-foreground">
                  Redirection vers votre espace d'accès...
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
                      error && !confirmPin ? 'border-red-500' : 'border-border'
                    } text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                    autoFocus
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    4 chiffres de votre choix
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Confirmez votre PIN <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="••••"
                    value={confirmPin}
                    onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    className={`w-full px-4 py-3 text-center text-2xl tracking-widest rounded-lg bg-background border ${
                      error && pin === confirmPin ? 'border-red-500' : 'border-border'
                    } text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Répétez votre PIN
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

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground mb-1">Conseils de sécurité</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs">
                        <li>Utilisez un code que vous mémoriserez facilement</li>
                        <li>Ne partagez pas votre PIN avec quiconque</li>
                        <li>Vous pouvez le changer plus tard dans vos paramètres</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || pin.length !== 4 || confirmPin.length !== 4}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Définition en cours...
                    </>
                  ) : (
                    <>
                      <Lock size={20} />
                      Définir mon PIN
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
