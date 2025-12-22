"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, Lock, AlertCircle, LogIn } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function PublicationSpaceLoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [accountPending, setAccountPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    
    // Validation
    const newErrors: Record<string, string> = {}
    if (!formData.email.trim()) newErrors.email = "L'email est requis"
    if (!formData.password.trim()) newErrors.password = "Le mot de passe est requis"
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    try {
      // Simuler l'appel API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simuler différents scénarios
      // 1. Compte en attente de validation
      if (formData.email === "pending@test.com") {
        setAccountPending(true)
        setIsLoading(false)
        return
      }
      
      // 2. Connexion réussie - Redirection vers la page d'achat/accès
      router.push("/market/publication-space/purchase")
      
    } catch (error) {
      setErrors({ submit: "Email ou mot de passe incorrect" })
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-primary/20">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Connexion{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Éditeur
              </span>
            </h1>
            
            <p className="text-muted-foreground">
              Accédez à votre espace de publication
            </p>
          </div>

          {/* Account Pending Alert */}
          {accountPending && (
            <div className="mb-6 p-4 rounded-lg bg-orange-500/10 border border-orange-500/20 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-foreground font-medium mb-1">
                    Compte en attente de validation
                  </p>
                  <p className="text-muted-foreground">
                    Votre inscription est en cours de vérification. Vous recevrez un email 
                    dans les 24 heures maximum une fois votre compte validé.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <div className="p-8 rounded-2xl bg-card border border-border shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-background border ${
                      errors.email ? "border-red-500" : "border-border"
                    } text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                    placeholder="votre@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-background border ${
                      errors.password ? "border-red-500" : "border-border"
                    } text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.remember}
                    onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">Se souvenir de moi</span>
                </label>

                <Link
                  href="/market/publication-space/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              {errors.submit && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-red-500 text-sm">{errors.submit}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Connexion...
                  </>
                ) : (
                  <>
                    <LogIn size={20} />
                    Se connecter
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Pas encore de compte ?{" "}
                <Link
                  href="/market/publication-space/info"
                  className="text-primary hover:underline font-medium"
                >
                  Créer un espace de publication
                </Link>
              </p>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-foreground font-medium mb-1">
                  Première connexion ?
                </p>
                <p className="text-muted-foreground">
                  Utilisez les identifiants reçus par email après validation de votre inscription. 
                  Si vous n'avez pas reçu d'email, vérifiez vos spams ou contactez le support.
                </p>
              </div>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Demo :</strong> Utilisez "pending@test.com" pour voir le message d'attente
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
