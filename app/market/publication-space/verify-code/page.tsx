"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CheckCircle2, AlertCircle, Loader } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function VerifyCodePage() {
  const router = useRouter()
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userLoading, setUserLoading] = useState(true)
  const [vendorStatus, setVendorStatus] = useState<string | null>(null)

  useEffect(() => {
    const fetchVendorStatus = async () => {
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
        
        if (data.vendorApplication?.status === "approved") {
          if (data.vendorApplication?.pinSetAt) {
            // L'utilisateur a déjà défini son PIN
            router.push("/market/publication-space/access")
          }
          setVendorStatus("approved")
        } else if (data.vendorApplication?.status === "pending") {
          router.push("/market/publication-space/pending")
        } else {
          router.push("/")
        }
      } catch (error) {
        console.error("Erreur:", error)
      } finally {
        setUserLoading(false)
      }
    }

    fetchVendorStatus()
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

      if (code.length !== 4 || !/^\d+$/.test(code)) {
        setError("Veuillez entrer un code à 4 chiffres")
        return
      }

      const response = await fetch("http://localhost:4000/api/v1/vendor/verify-activation-code", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ activationCode: code })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Erreur lors de la vérification du code")
        return
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/market/publication-space/set-pin")
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
            <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vérifiez votre Code
            </h1>
            <p className="text-lg text-muted-foreground">
              Un code d'activation à 4 chiffres a été envoyé à votre email
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-xl">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Code Vérifié!
                </h2>
                <p className="text-muted-foreground">
                  Redirection vers la définition de votre PIN...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Code d'Activation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="0000"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    className={`w-full px-4 py-3 text-center text-2xl tracking-widest rounded-lg bg-background border ${
                      error ? 'border-red-500' : 'border-border'
                    } text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                    autoFocus
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Entrez les 4 chiffres reçus par email
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
                  disabled={isLoading || code.length !== 4}
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
                      Vérifier le Code
                    </>
                  )}
                </button>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-sm text-muted-foreground">
                    Vous n'avez pas reçu le code?{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      Contactez-nous
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
