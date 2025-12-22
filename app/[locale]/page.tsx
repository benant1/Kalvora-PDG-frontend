'use client'

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedSections from "@/components/featured-sections"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import { useAuth } from "@/lib/auth-context"
import Link from "next/link"

export default function Home() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <Navigation />
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement...</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navigation />
      {user ? (
        <>
          <Hero />
          <FeaturedSections />
          <Testimonials />
          
          {/* Vendor Status Alert */}
          {user.vendorStatus === 'pending' && (
            <section className="py-12 px-4 bg-yellow-900/20 border-y border-yellow-500/30">
              <div className="max-w-4xl mx-auto">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 flex items-center gap-4">
                  <div className="text-4xl">⏳</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Demande d'Espace de Publication en Cours</h3>
                    <p className="text-foreground/70 mb-4">Votre demande a été reçue. Vous recevrez une réponse par email dans les 24 heures.</p>
                    <Link
                      href="/profile/vendor-status"
                      className="inline-block px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition font-medium"
                    >
                      Voir l'État de ma Demande
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {user.vendorStatus === 'approved' && (
            <section className="py-12 px-4 bg-green-900/20 border-y border-green-500/30">
              <div className="max-w-4xl mx-auto">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 flex items-center gap-4">
                  <div className="text-4xl">✓</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Votre Espace de Publication est Actif</h3>
                    <p className="text-foreground/70 mb-4">Bienvenue! Vous pouvez maintenant publier vos créations et accéder à votre espace de vente.</p>
                    <Link
                      href="/market/publication-space"
                      className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
                    >
                      Accéder à mon Espace
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Bienvenue sur <span className="text-primary">Kalvora</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                La plateforme tout-en-un pour les créateurs, designers et développeurs.
                Découvrez des templates premium, des designs UI/UX exceptionnels et publiez vos produits sur multiple plateformes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Designs Premium</h3>
                <p className="text-foreground/70">
                  Accédez à des designs UI/UX exceptionnels créés par les meilleurs designers.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Templates Tech</h3>
                <p className="text-foreground/70">
                  Templates web et mobile prêts à l'emploi pour démarrer vos projets rapidement.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Marketplace</h3>
                <p className="text-foreground/70">
                  Publiez vos créations et vendez-les sur plusieurs plateformes en même temps.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold transition text-center"
              >
                S'inscrire Gratuitement
              </Link>
              <Link
                href="/login"
                className="px-8 py-4 bg-muted text-foreground rounded-lg hover:bg-muted/80 font-semibold transition text-center border border-border"
              >
                Se Connecter
              </Link>
            </div>

            <p className="text-center text-foreground/50 text-sm mt-8">
              Rejoignez des milliers de créateurs et développeurs sur Kalvora
            </p>
          </div>
        </div>
      )}
      <Footer />
    </main>
  )
}
