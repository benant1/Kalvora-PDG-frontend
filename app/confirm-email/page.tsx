"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, AlertCircle, Mail, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"

export default function ConfirmEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)

  useEffect(() => {
    const emailFromParams = searchParams.get("email")
    if (emailFromParams) {
      setEmail(emailFromParams)
    }
  }, [searchParams])

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/confirm-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to confirm email")
      }

      // Store token
      if (data.token) {
        localStorage.setItem("authToken", data.token)
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/")
      }, 2000)
    } catch (err: any) {
      setError(err.message || "Error confirming email")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Mail className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Vérifier votre Email</h1>
            <p className="text-foreground/70">Nous avons envoyé un code à votre adresse email</p>
          </div>

          {success ? (
            <div className="bg-card p-8 rounded-lg border border-border text-center">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Email confirmé !</h2>
              <p className="text-foreground/70 mb-4">Vous allez être redirigé vers la page d'accueil...</p>
              <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-pulse" style={{ width: "100%" }} />
              </div>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-4 bg-card p-8 rounded-lg border border-border">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-500 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Votre email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Code de vérification</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="000000"
                  required
                  maxLength={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary text-center text-2xl tracking-widest font-mono"
                />
                <p className="text-xs text-foreground/50 mt-2">
                  Entrez le code à 6 chiffres reçu par email
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || !email || !code}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {loading ? "Vérification..." : "Confirmer mon email"}
              </button>

              <p className="text-center text-sm text-foreground/70">
                Vous n'avez pas reçu le code ?{" "}
                <button
                  type="button"
                  disabled={resendLoading}
                  onClick={() => {
                    setResendLoading(true)
                    setTimeout(() => setResendLoading(false), 2000)
                  }}
                  className="text-primary hover:underline disabled:opacity-50"
                >
                  Renvoyer le code
                </button>
              </p>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link href="/login" className="flex items-center justify-center gap-2 text-primary hover:underline">
              <ArrowLeft size={16} />
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
