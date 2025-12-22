"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"
import Navigation from "@/components/navigation"
import { useAuth } from "@/lib/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const { login, loading } = useAuth()
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    try {
      await login({ email, password })
      router.push("/")
    } catch (err: any) {
      console.error('Login failed:', err)
      const errorMessage = err?.message || err?.error || "Erreur lors de la connexion"
      
      // Redirect to email confirmation if email not verified
      if (errorMessage.toLowerCase().includes("email not verified") || errorMessage.toLowerCase().includes("not verified")) {
        router.push(`/confirm-email?email=${encodeURIComponent(email)}`)
        return
      }
      
      setError(errorMessage)
    }
  }

  return (
    <main>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Connexion</h1>
            <p className="text-foreground/70">Accédez à votre compte DevMarket</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-card p-8 rounded-lg border border-border">
            {error && <div className="p-3 bg-red-500/10 border border-red-500 rounded text-red-500 text-sm">{error}</div>}
            
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition"
                title={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold transition disabled:opacity-50"
            >
              {loading ? "En cours..." : "Se Connecter"}
            </button>
          </form>

          <p className="text-center text-foreground/70 mt-6">
            Pas encore de compte?{" "}
            <Link href="/signup" className="text-primary hover:underline font-semibold">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
